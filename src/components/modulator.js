import { useContext, useEffect, useState} from "react";
import Audio from "./audio";
import {Profile} from './profile'


const Modulator = () =>{
  const profile = useContext(Profile);
  const [modulator, setModulator] = useState({type: profile.settings.modulator.type,
                                     ratio: profile.settings.modulator.ratio})

  function handleWaveformChoice(e){
    setModulator({...modulator, type: e.target.value});
  }

  function handleFrequencyRatio(e){
    setModulator({...modulator, ratio: e.target.value});
  }

  useEffect(()=>{
    profile.settings.modulator = modulator;
    Audio.setModulator(modulator);
  },[profile.settings, modulator])

  return(
    <>
      <h3>Modulator Oscillator</h3>
      <details>
        <summary>What&apos;s this?</summary>
        <p>
          Modulator Oscillators in FM synths don&apos;t actually generate sound but influence on different oscillators sound generation.<br/>
          In other words, a modulator oscillator can shape  
        </p>
      </details>
      <fieldset>
        <legend>Waveform</legend>
          <label>
           <input value='sine' name='modulator' type='radio' onChange={handleWaveformChoice} checked={modulator.type === 'sine'}/>
            sine
          </label>
          <label>
           <input value='square' name='modulator' type='radio' onChange={handleWaveformChoice} checked={modulator.type === 'square'}/>
            square
          </label>
          <label>
           <input value='triangle' name='modulator' type='radio' onChange={handleWaveformChoice} checked={ modulator.type === 'triangle' }/>
            triangle
          </label>
          <label>
           <input value='sawtooth' name='modulator' type='radio' onChange={handleWaveformChoice} checked={modulator.type === 'sawtooth'}/>
            sawtooth
          </label>
      </fieldset>
        <label>
          <input value={modulator.ratio} name='frequency' type='range' min='0' max='1' step='0.1' onChange={handleFrequencyRatio}/> 
            frequency ratio 
        </label>
    </>
  );
}

export default Modulator;
