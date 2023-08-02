import supabase from '../config/supabaseClient'
import { useState } from 'react';
import {useEffect} from 'react';

const Login = () =>{
  const [user, setUser] = useState({email:'', password:''});

  function handleEmail(e){
    setUser({...user,email: e.target.value});
  }

  function handlePassword(e){
    setUser({...user,password: e.target.value});
  }

  async function handleSubmit(e){
    e.preventDefault();

    const {data, error} = await supabase.auth.signInWithPassword(
      {email:user.email,
      password:user.password}
    )

    if(error)
      alert(error)

    console.log(data);
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Please enter your e-mail and password</legend> 
          <label htmlFor='email'>E-mail:
            <input value={user.email}  name='email' type='email' onChange={handleEmail} autoFocus required/>
          </label>
          <label>Password:
            <input value={user.password} type='password' onChange={handlePassword} required/>
          </label>
          <input value='Login' type='submit' id='submit'/>
          <button>Signup</button>
        </fieldset>
      </form>
    </>
  )
}

export default Login;
