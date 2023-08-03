import supabase from '../config/supabaseClient';
import { useState} from 'react';
import Default from './default.json';
import Settings from './settings.json';


const Login = () =>{
  const [user, setUser] = useState({email:'', password:''});
  const [exception, setException] = useState('');
  const [signup, setSignup] = useState(false);

  function handleEmail(e){
    setUser({...user,email: e.target.value});
  }

  function handlePassword(e){
    setUser({...user,password: e.target.value});
  }

  function handleAccountExists(){
    setSignup(!signup);
  }

  function handleNoAccount(){
    setSignup(!signup);
  }

  async function handleLogin(e){
    e.preventDefault();

    const {login, error} = await supabase.auth.signInWithPassword(
      {email:user.email,
      password:user.password}
    )
    if(login){
      const [data, error] = await supabase.auth.getSession();
      if(data)
        Settings = JSON.stringify(JSON.parse(data.session));
      else if(error)
        setException(error.message);
    }
    else if(error)
      setException(error.message);
  }

  async function handleSignup(e){
    e.preventDefault();

    const [data, error] = await supabase.auth.signUp(
      {email:user.email,
        password:user.password}
    );
    if(data)
      Settings = JSON.stringify(JSON.parse(Default));
    else if(error)
      setException(error.message)
  }

  return(
    <>
      {signup?
        <form onSubmit={handleSignup}>
          <fieldset>
            <legend>Please enter your e-mail and password to create your account</legend> 
            <label>E-mail:
              <input value={user.email}  name='email' type='email' onChange={handleEmail} autoFocus required/>
            </label>
            <label>Password:
              <input value={user.password} name='password' type='password' onChange={handlePassword} required/>
            </label>
            <p>{exception}</p>
            <input value='Sign up' type='submit' id='submit'/>
            <button onClick={handleAccountExists}>Login</button>
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
            <p>{exception}</p>
            <input value='Login' type='submit' id='submit'/>
            <p>Don&apos;t have an account?</p>
            <button onClick={handleNoAccount}>Signup</button>
          </fieldset>
        </form>
      }
    </>
  )
}

export default Login;
