import supabase from '../config/supabaseClient';
import { useState, useContext} from 'react';
import Default from './default.json';
import {Profile} from './profile.js'

const Login = () =>{
  const [user, setUser] = useState({email:'', password:''});
  const [exception, setException] = useState('');
  const [signup, setSignup] = useState(false);
  const  userProfile = useContext(Profile);

  let userId;

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
      return;
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
      return;
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
      if(error)
        throw error;
      userId = data.user.id;
    }catch(error){
      setException(error.message);
      return;
    }

    try{
      const {error} = await supabase
        .from('profiles')
        .update({settings:Default})
        .eq('id',userId);
      if(error)
        throw error
    }catch(error){
      setException(error.message);
      return;
    }
  }

  return(
    <>
      {signup?
        <form name='signup' onSubmit={handleSignup}>
            <h3>Please enter e-mail and password to create an account</h3> 
            <label>E-mail:
              <input value={user.email}  name='email' type='email' onChange={handleEmail} autoFocus required/>
            </label>
            <label>Password:
              <input value={user.password} name='password' type='password' onChange={handlePassword} required/>
            </label>
            {exception!==''&&<p data-testid='exception'>{exception}</p>}
            <div className='signup-buttons'>
              <button type='submit'>Sign up</button>
              <button onClick={handleSignupToggle}>Login</button>
            </div>
        </form>
        :
        <form name='login' onSubmit={handleLogin}>
            <h3>Please enter your e-mail and password</h3> 
            <label>E-mail:
              <input value={user.email}  name='email' type='email' onChange={handleEmail} autoFocus required/>
            </label>
            <label>Password:
              <input value={user.password} name='password' type='password' onChange={handlePassword} required/>
            </label>
            {exception!==''&&<p data-testid='exception'>{exception}</p>}
            <div className='login-buttons'>
              <p style={{gridArea:"message"}}>Don&apos;t have an account?</p>
              <button style={{gridArea:"login"}}type='submit'>Login</button>
              <button style={{gridArea:"signup"}}onClick={handleSignupToggle}>Sign up</button>
            </div>
        </form>
      }
    </>
  )
}
export default Login;

