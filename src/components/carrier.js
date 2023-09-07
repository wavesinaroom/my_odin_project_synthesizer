import { useContext, useEffect, useState} from "react";
import Audio from "./audio";
import {Profile} from './profile'

const Carrier = () =>{
  const profile = useContext(Profile);
  const [carrier, setCarrier] = useState({type: profile.settings.carrier.type,
                                          detune: profile.settings.carrier.detune})

  function handleWaveformChoice(e){
    setCarrier({...carrier, type: e.target.value});
  }

  function handleDetune(e){
    setCarrier({...carrier, detune: e.target.value});
  }

  useEffect(()=>{
    profile.settings.carrier = carrier;
    Audio.setCarrier(carrier);
  }, [profile.settings, carrier])

  return(
    <div style={styles}> 
      <h3>Carrier Oscillator</h3>
      <details>
        <summary>What&apos;s this?</summary> 
        <p>
          Oscillators generally work as sound sources in a synthesizer. They generate sound from four basic waveforms: sine, square, triangle and sawtooth.<br/>
          Use the detune slide to change the oscillator pitch slightly.
        </p>
      </details>
      <fieldset>
        <legend>Waveform</legend>
          <label>
           <input value='sine' name='carrier' type='radio' onChange={handleWaveformChoice} checked={carrier.type === 'sine'}/>
            sine
          </label>
          <label>
           <input value='square' name='carrier' type='radio' onChange={handleWaveformChoice} checked={carrier.type === 'square'}/>
            square
          </label>
          <label>
           <input value='triangle' name='carrier' type='radio' onChange={handleWaveformChoice} checked={ carrier.type === 'triangle' }/>
            triangle
          </label>
          <label>
           <input value='sawtooth' name='carrier' type='radio' onChange={handleWaveformChoice} checked={carrier.type === 'sawtooth'}/>
            sawtooth
          </label>
      </fieldset>
      <label>
        <input value={carrier.detune} name='detune' type='range' min="0.0001" step="1" max="100" onChange={handleDetune}/>
        detune
      </label>
    </div>
  );
}

export default Carrier;

const styles = {
  gridArea: "carrier"
}
