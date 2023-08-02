import supabase from '../config/supabaseClient'
import { useState } from 'react';

const Login = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handlePassword(e){
    setPassword(e.target.value);
  }

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
          <button>Login</button>
          <button>Signup</button>
        </fieldset>
      </form>
    </>
  )
}

export default Login;
