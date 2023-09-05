import {useContext} from "react";
import Audio from './audio'
import {Profile }from './profile'

const Keyboard = () =>{
  const profile = useContext(Profile); 

  function handleMouseEnter(e){
    Audio.setCarrierFrequency(parseFloat(e.target.id));
    Audio.envelopeOn(profile.settings.envelope);
  }

  function handleMouseOut(){
    Audio.envelopeOff(profile.settings.envelope);  
  }

  return(
    <>
      <details>
        <summary>Instructions</summary>
        <p>Hover over the circles to play some sound</p>
      </details>
      <svg viewBox="0 0 1500 1500">
        <circle id="261.63" cx="100" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="277.10" cx="200" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="293.66" cx="300" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="311.13" cx="400" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="329.63" cx="500" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="349.32" cx="600" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="369.99" cx="700" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="392" cx="800" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="415.3" cx="900" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="440" cx="1000" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="466.16" cx="1100" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="493.88" cx="1200" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="522.6" cx="1300" cy="750" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
      </svg>
    </>
  )
}
 export default Keyboard;
