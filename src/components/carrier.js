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
    <>
      <fieldset>
        <legend>Waveform</legend>
          <label>
           <input value='sine' name='sine' type='radio' onChange={handleWaveformChoice} checked={carrier.type === 'sine'}/>
            sine
          </label>
          <label>
           <input value='square' name='square' type='radio' onChange={handleWaveformChoice} checked={carrier.type === 'square'}/>
            square
          </label>
          <label>
           <input value='triangle' name='triangle' type='radio' onChange={handleWaveformChoice} checked={ carrier.type === 'triangle' }/>
            triangle
          </label>
          <label>
           <input value='sawtooth' name='sawtooth' type='radio' onChange={handleWaveformChoice} checked={carrier.type === 'sawtooth'}/>
            sawtooth
          </label>
      </fieldset>
      <label>
        <input value={carrier.detune} name='detune' type='range' min="0.0001" step="1" max="100" onChange={handleDetune}/>
        detune
      </label>
    </>
  );
}

export default Carrier;
