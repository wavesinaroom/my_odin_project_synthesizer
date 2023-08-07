import supabase from '../config/supabaseClient';
import { useState, useContext} from 'react';
import Default from './default.json';
import {profile} from './profile.js'

const Login = () =>{
  const [user, setUser] = useState({email:'', password:''});
  const [exception, setException] = useState('');
  const [signup, setSignup] = useState(false);
  const  userProfile = useContext(profile);

  function handleEmail(e){
    setUser({...user,email: e.target.value});
  }

  function handlePassword(e){
    setUser({...user,password: e.target.value});
  }

  function handleSignupToggle(){
    setSignup(!signup);
  }

  async function handleLogin(e){
    e.preventDefault();

    let userId;

    try{
      const {data, error} = await supabase.auth.signInWithPassword(
        {email:user.email,
        password:user.password}
      )
      if(error)
        throw error
      userId = data.user.id;
    }catch(error){
      setException(error.message);
    }

    try{
      const {data, error} = await supabase
        .from('profiles')
        .select('settings')
        .eq('id', userId)
      if(error)
        throw error;
      userProfile.info = data[0];
    }catch(error){
      setException(error.message);
    }  
  }

  async function handleSignup(e){
    e.preventDefault();

    try{
      const {data, error} = await supabase.auth.signUp(
        {email:user.email,
          password:user.password,
        }
      );
      createUser(data.user.id, setException)
      throw error;
    }catch(error){
      setException(error.message);
    }
  }

  return(
    <>
      {signup?
        <form name='signup' onSubmit={handleSignup}>
          <fieldset>
            <legend>Please enter e-mail and password to create an account</legend> 
            <label>E-mail:
              <input value={user.email}  name='email' type='email' onChange={handleEmail} autoFocus required/>
            </label>
            <label>Password:
              <input value={user.password} name='password' type='password' onChange={handlePassword} required/>
            </label>
            <p data-testid='exception'>{exception}</p>
            <button type='submit'>Sign up</button>
            <button onClick={handleSignupToggle}>Login</button>
          </fieldset>
        </form>
        :
        <form name='login' onSubmit={handleLogin}>
          <fieldset>
            <legend>Please enter your e-mail and password</legend> 
            <label>E-mail:
              <input value={user.email}  name='email' type='email' onChange={handleEmail} autoFocus required/>
            </label>
            <label>Password:
              <input value={user.password} name='password' type='password' onChange={handlePassword} required/>
            </label>
            <p data-testid='exception'>{exception}</p>
            <button type='submit'>Login</button>
            <p>Don&apos;t have an account?</p>
            <button onClick={handleSignupToggle}>Sign up</button>
          </fieldset>
        </form>
      }
    </>
  )
}
export default Login;

async function createUser(userId, promptException){
  try{
    const {error} = await supabase
      .from('profiles')
      .update({settings: Default})
      .eq('id',userId);
    throw error;
  }catch(error){
    promptException(error.message);
  }  
}
