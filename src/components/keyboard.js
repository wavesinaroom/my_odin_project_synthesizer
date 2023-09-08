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
    <div style={styles} className="keyboard">
      <details>
        <summary>How do I play sound?</summary>
        <p>Hover over the circles to play some sound</p>
      </details>
      <svg width="730" height="437.5">
          <circle id="261.63" cx="100" cy="220" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="277.10" cx="200" cy="157.5" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="293.66" cx="300" cy="95" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="311.13" cx="400" cy="30" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="329.63" cx="500" cy="95" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="349.32" cx="600" cy="157.5" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="369.99" cx="700" cy="220" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="392" cx="600" cy="282.5" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="415.3" cx="500" cy="345" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="440" cx="400" cy="407.5" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="466.16" cx="200" cy="282.5" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="493.88" cx="300" cy="345" r="30" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
          <circle id="522.6" cx="100" cy="282.5" r="20" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}/>
      </svg>
    </div>
  )
}
 export default Keyboard;

const styles = {
  gridArea: "keyboard"
}
