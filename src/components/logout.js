import supabase from '../config/supabaseClient'
import { useContext } from 'react';
import { Profile } from './profile';

const Logout = ({setLogged}) =>{
  const profile = useContext(Profile);
  let userId;
  async function handleLogout(){
    try{
      const {data,error} = await supabase.auth.getUser();
      if(error)
        throw error;
      userId = data.user.id;
    }catch(error){
      alert(error.message);
    }

    try{
      const {data,error} = await supabase
        .from('profiles')
        .update('settings')
        .eq('id', userId)
        .match(profile);
      if(error)
        throw error
    }catch(error){
      alert(error.message)
    }

    setLogged(false);
  }
  return(
    <div style={styles} className="logout">
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Logout;

const styles = {
  gridArea:"logout"
} 
