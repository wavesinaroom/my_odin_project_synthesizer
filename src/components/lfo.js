import {useContext, useState, useEffect} from "react";
import Audio from "./audio";
import {Profile} from "./profile"

const LFO = () =>{
  const profile = useContext(Profile);
  const [lfo, setLfo] = useState({type: profile.settings.lfo.type,
                                  frequency: profile.settings.lfo.frequency,
                                  target: profile.settings.lfo.target})

  function handleType(e){
    setLfo({...lfo, type:e.target.value});
  }

  function handleFrequency(e){
    setLfo({...lfo, frequency:e.target.value});
  }

  function handleTarget(e){
    setLfo({...lfo, target:e.target.value});
  }

  useEffect(()=>{
    profile.settings.lfo = lfo;
    Audio.setLFO(lfo);
  },[profile.settings, lfo])

  return(
    <>
      <fieldset>
        <legend>Type</legend>
          <label>
            <input value='sine' type='radio' onChange={handleType} checked={lfo.type === 'sine'}/> 
            sine
          </label>
          <label>
            <input value='square' type='radio' onChange={handleType} checked={lfo.type === 'square'}/> 
            square
          </label>
          <label>
            <input value='sawtooth' type='radio' onChange={handleType} checked={lfo.type === 'sine'}/> 
            sawtooth
          </label>
          <label>
            <input value='triangle' type='radio' onChange={handleType} checked={lfo.type === 'sine'}/> 
            triangle
          </label>
      </fieldset>
      <label>
        <input value={lfo.frequency} type='range' onChange={handleFrequency} min='0.0001' max='20' step='1'/>
        frequency
      </label>
      <fieldset>
        <legend>Target</legend>
          <label>
            <input value='carrier' type='radio' onChange={handleTarget} checked={lfo.target === 'carier'}/>
            carrier
          </label>
          <label>
            <input value='modulator' type='radio' onChange={handleTarget} checked={lfo.target === 'modulator'}/>
            modulator
          </label>
          <label>
            <input value='envelope' type='radio' onChange={handleTarget} checked={lfo.target === 'envelope'}/>
            envelope
          </label>
          <label>
            <input value='none' type='radio' onChange={handleTarget} checked={lfo.target === 'none'}/>
            none
          </label>
      </fieldset>
    </>
  )
}
export default LFO;
