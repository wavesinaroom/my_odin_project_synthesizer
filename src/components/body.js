import Audio from "./audio"
import { useEffect, useState } from "react"
import Carrier from "./carrier"
import Modulator from "./modulator"
import Envelope from "./envelope"
import Filter from "./filter"
import Keyboard from "./keyboard"
import Logout from "./logout"
import { Profile } from "./profile"
import Default from "./default.json"

const Body = ({setLogged}) =>{
  const [toggle, setToggle] = useState(false);

  function handleToggle(){
    setToggle(!toggle);
  }
  
  useEffect(()=>{
    toggle?Audio.resumeAudioCtx():Audio.suspendAudioCtx();
  },[toggle])

  return(
    <main className="body">
      <button onClick={handleToggle}>{toggle?`On`:`Off`}</button>
      <Profile.Provider value={{settings:Default}}>
        <Logout setLogged={setLogged}/>
        <Carrier/>
        <Modulator/>
        <Envelope/>
        <Filter/>
        <Keyboard/>
      </Profile.Provider>
    </main>
  )
}

export default Body;
