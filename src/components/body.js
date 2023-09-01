import Audio from "./audio"
import { useState } from "react"
import Carrier from "./carrier"
import Modulator from "./modulator"
import Envelope from "./envelope"
import LFO from "./lfo"
import Filter from "./filter"
import Keyboard from "./keyboard"
import { Profile } from "./profile"
import Default from "./default.json"

const Body = () =>{
  const [textToggle, setTextToogle] = useState(false);

  function handleTextToggle(){
    setTextToogle(!textToggle);
  }
  
  return(
    <>
      <button onClick={handleTextToggle}>{textToggle?`On`:`Off`}</button>
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
