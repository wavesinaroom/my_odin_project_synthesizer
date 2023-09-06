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
    Audio.plugLFO(lfo);
  },[profile.settings, lfo])

  return(
    <>
      <h3>Low Frequency Oscillator (LFO)</h3>
        <details>
          <summary>What&apos;s this?</summary>
          <p>
            Low frequency oscillators aren&apos;t different to other oscillators. However, they are used to modulate a parameter of a synth instead of generating sound by themselves <br/>
            For instance, you can connect the LFO to the frequency another oscillator to create a sound vibration effect called vibrato or you can even connect it to an envelope to generate a quick succession of notes or tremolo
          </p>
        </details>
      <fieldset>
        <legend>Type</legend>
          <label>
            <input value='sine' name="lfo-f" type='radio' onChange={handleType} checked={lfo.type === 'sine'}/> 
            sine
          </label>
          <label>
            <input value='square' name="lfo-f" type='radio' onChange={handleType} checked={lfo.type === 'square'}/> 
            square
          </label>
          <label>
            <input value='sawtooth' name="lfo-f" type='radio' onChange={handleType} checked={lfo.type === 'sawtooth'}/> 
            sawtooth
          </label>
          <label>
            <input value='triangle' name="lfo-f" type='radio' onChange={handleType} checked={lfo.type === 'triangle'}/> 
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
            <input value='carrier' name="lfo-target" type='radio' onChange={handleTarget} checked={lfo.target === 'carier'}/>
            carrier
          </label>
          <label>
            <input value='modulator' name="lfo-target" type='radio' onChange={handleTarget} checked={lfo.target === 'modulator'}/>
            modulator
          </label>
          <label>
            <input value='envelope' name="lfo-target" type='radio' onChange={handleTarget} checked={lfo.target === 'envelope'}/>
            envelope
          </label>
          <label>
            <input value='none' name="lfo-target" type='radio' onChange={handleTarget} checked={lfo.target === 'none'}/>
            none
          </label>
      </fieldset>
    </>
  )
}
export default LFO;
