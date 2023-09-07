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

const Body = () =>{
  const [toggle, setToggle] = useState(false);

  function handleToggle(){
    setToggle(!toggle);
  }
  
  useEffect(()=>{
    toggle?Audio.resumeAudioCtx():Audio.suspendAudioCtx();
  },[toggle])

  return(
    <div style={layout}>
      <button onClick={handleToggle}>{toggle?`On`:`Off`}</button>
      <Profile.Provider value={{settings:Default}}>
        <Logout/>
        <Carrier/>
        <Modulator/>
        <Envelope/>
        <Filter/>
        <Keyboard/>
      </Profile.Provider>
    </div>
  )
}

export default Body;

const layout =  {
  display: `grid`,
  grid: `repeat(4, 25%)/repeat(4,auto)`,
  gridTemplateAreas:'"off . . logout" "carrier modulator envelope filter" ". keyboard keyboard ."'
}  
