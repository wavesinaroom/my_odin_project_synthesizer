import { useContext, useEffect} from "react";
import Audio from "./audio";
import {Profile} from './profile'

const Carrier = () =>{
  const profile = useContext(Profile);

  function handleWaveformChoice(e){
    profile.settings.carrier.type = e.target.value;
  }

  useEffect(()=>{
    Audio.setCarrier(profile.settings.carrier);
  }, [profile.settings.carrier])

  return(
    <>
      <fieldset>
        <legend>Waveform</legend>
          <label>
           <input value='sine' name='sine' type='radio' onChange={handleWaveformChoice} checked={true}/>
            sine
          </label>
          <label>
           <input value='square' name='square' type='radio' onChange={handleWaveformChoice}/>
            square
          </label>
          <label>
           <input value='triangle' name='triangle' type='radio' onChange={handleWaveformChoice}/>
            triangle
          </label>
          <label>
           <input value='sawtooth' name='sawtooth' type='radio' onChange={handleWaveformChoice}/>
            sawtooth
          </label>
      </fieldset>
      <label>
        <input value={profile.settings.carrier.volume} name='volume' type='range' min="0.0001" step="1" max="1" onChange={handleVolumeChange}/>
        volume
      </label>
    </>
  );
}

export default Carrier;
