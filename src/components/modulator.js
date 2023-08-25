import { useContext, useEffect} from "react";
import Audio from "./audio";
import {Profile} from './profile'


const Modulator = () =>{
  const profile = useContext(Profile);

  function handleWaveformChoice(e){
      profile.settings.modulator.type = e.target.value;
  }

  function handleFrequencyRatio(e){
    profile.settings.modulator.ratio = e.target.value;
  }

  useEffect(()=>{
    Audio.setModulator(profile.settings.modulator);
  },[profile.settings.modulator])

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
      <fieldset>
        <label>
          <input value={profile.settings.modulator.ratio} name='frequency' type='range' min='0' max='1' step='0.1' onChange={handleFrequencyRatio}/> 
            frequency ratio 
        </label>
      </fieldset>
    </>
  );
}

export default Modulator;
