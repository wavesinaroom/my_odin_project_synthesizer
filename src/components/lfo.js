import {useContext} from "react";
import {Profile} from "./profile"

const LFO = () =>{
  const profile = useContext(Profile);

  function handleType(e){
    profile.settings.lfo.type = e.target.value;
  }

  function handleFrequency(e){
    profile.settings.lfo.frequency = e.target.value;
  }

  function handleTarget(e){
    profile.settings.lfo.target = e.target.value;
  }

  return(
    <>
      <fieldset>
        <legend>Type</legend>
          <label>
            <input value='sine' type='radio' onChange={handleType} checked={true}/> 
            sine
          </label>
          <label>
            <input value='square' type='radio' onChange={handleType}/> 
            square
          </label>
          <label>
            <input value='sawtooth' type='radio' onChange={handleType}/> 
            sawtooth
          </label>
          <label>
            <input value='triangle' type='radio' onChange={handleType}/> 
            triangle
          </label>
      </fieldset>
      <label>
        <input value={profile.settings.frequency} type='range' onChange={handleFrequency} min='0.0001' max='20' step='1'/>
        frequency
      </label>
      <fieldset>
        <legend>Target</legend>
          <label>
            <input value='carrier' type='radio' onChange={handleTarget}/>
            carrier
          </label>
          <label>
            <input value='modulator' type='radio' onChange={handleTarget}/>
            modulator
          </label>
          <label>
            <input value='envelope' type='radio' onChange={handleTarget}/>
            envelope
          </label>
          <label>
            <input value='none' type='radio' onChange={handleTarget}/>
            none
          </label>
      </fieldset>
    </>
  )
}
export default LFO;
