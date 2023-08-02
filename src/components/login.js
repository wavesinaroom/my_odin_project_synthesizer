import supabase from '../config/supabaseClient'
import { useState } from 'react';

const Login = () =>{
  const [user, setUser] = useState(null);
  return(
    <>
      <form>
        <fieldset>
          <legend>Please enter your e-mail and password</legend> 
          <label htmlFor='email'>E-mail:
            <input name='email' type='email' autoFocus required/>
          </label>
          <label>Password:
            <input type='password' required/>
          </label>
          <button>Login</button>
          <button>Signup</button>
        </fieldset>
      </form>
    </>
  )
}

export default Login;
