import supabase from '../config/supabaseClient'
import { useState } from 'react';
import {useEffect} from 'react';

const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});


  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handlePassword(e){
    setPassword(e.target.value);
  }

  function handleLogin(){
    setUser({email:email, password:password});
  }

  useEffect(()=>{
    async function signInWithEmail(){
      const {data,error} = await supabase.auth.signInWithPassword(user);
    }

    signInWithEmail();

  },[user])

  return(
    <>
      <form>
        <fieldset>
          <legend>Please enter your e-mail and password</legend> 
          <label htmlFor='email'>E-mail:
            <input value={email}  name='email' type='email' onChange={handleEmail} autoFocus required/>
          </label>
          <label>Password:
            <input value={password} type='password' onChange={handlePassword} required/>
          </label>
          <button onClick={handleLogin}>Login</button>
          <button>Signup</button>
        </fieldset>
      </form>
    </>
  )
}

export default Login;
