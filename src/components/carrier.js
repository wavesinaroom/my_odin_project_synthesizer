import { useContext, useEffect} from "react";
import Audio from "./audio";
import {Profile} from './profile'

const Carrier = () =>{
  const profile = useContext(Profile);

  function handleWaveformChoice(e){
    profile.settings.carrier.type = e.target.value;
  }

  function handleDetune(e){
    profile.settings.carrier.detune = e.target.value;
  }

  useEffect(()=>{
    Audio.setCarrier(profile.settings.carrier);
  }, [profile.settings.carrier])

  return(
    <>
      <fieldset>
        <legend>Waveform</legend>
          <label>
           <input value='sine' name='sine' type='radio' onChange={handleWaveformChoice} checked={profile.settings.carrier.type === 'sine'}/>
            sine
          </label>
          <label>
           <input value='square' name='square' type='radio' onChange={handleWaveformChoice} checked={profile.settings.carrier.type === 'square'}/>
            square
          </label>
          <label>
           <input value='triangle' name='triangle' type='radio' onChange={handleWaveformChoice} checked={ profile.settings.carrier.type === 'triangle' }/>
            triangle
          </label>
          <label>
           <input value='sawtooth' name='sawtooth' type='radio' onChange={handleWaveformChoice} checked={profile.settings.carrier.type === 'sawtooth'}/>
            sawtooth
          </label>
      </fieldset>
      <label>
        <input value={profile.settings.carrier.detune} name='detune' type='range' min="0.0001" step="1" max="100" onChange={handleDetune}/>
        volume
      </label>
    </>
  );
}

export default Carrier;
