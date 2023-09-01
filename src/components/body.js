import Audio from "./audio"
import { useEffect, useState } from "react"
import Carrier from "./carrier"
import Modulator from "./modulator"
import Envelope from "./envelope"
import LFO from "./lfo"
import Filter from "./filter"
import Keyboard from "./keyboard"
import { Profile } from "./profile"
import Default from "./default.json"

const Body = () =>{
  const [toggle, setToggle] = useState(false);

  let Audio = null;

  function handleToggle(){
    setToggle(!toggle);
  }
  
  useEffect(()=>{
    if(toogle)
      audio = Audio;

    audio = null
  },[toggle])
  return(
    <>
      <button onClick={handleToggle}>{toggle?`On`:`Off`}</button>
      <Profile.Provider value={{settings:Default}}>
        <Carrier/>
        <Modulator/>
        <Envelope/>
        <LFO/>
        <Filter/>
        <Keyboard/>
      </Profile.Provider>
    </>
  )
}

export default Body;
