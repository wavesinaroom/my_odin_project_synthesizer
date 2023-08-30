import {useContext} from "react";
import Audio from './audio'
import {Profile }from './profile'

const Keyboard = () =>{
  const profile = useContext(Profile); 

  function handleMouseOver(e){
    Audio.carrier.frequency = parseFloat(e.target.id);
    Audio.carrier.start();
    Audio.envelopeOn(profile.settings);
  }

  function handleMouseLeave(){
    Audio.envelopeOff(profile.settings);  
    Audio.carrier.stop();
  }

  return(
    <>
      <svg>
        <circle id="261.63" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="277.10" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="293.66" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="311.13" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="329.63" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="349.32" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="369.99" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="392" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="415.3" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="440" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="466.16" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="493.88" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
        <circle id="522.6" cx="0" cy="0" r="100" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
      </svg>
    </>
  )
}
 export default Keyboard;
