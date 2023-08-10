import {useState} from "react";

const LFO = ({settings}) =>{
  const [frequency, setFrequency] = useState(settings.info.lfo.frequency);

  function handleType(e){
    settings.info.lfo.type = e.target.value;
  }

  function handleFrequency(e){
    setFrequency(e.target.value);
    settings.info.lfo.frequency = e.target.value;
  }

  function handleTarget(e){
    settings.info.lfo.target = e.target.value;
  }

  return(
    <>
      <fieldset>
        <legend>Type</legend>
          <input value='sine' type='radio' onChange={handleType} checked='true'/> 
          <input value='square' type='radio' onChange={handleType}/> 
          <input value='sawtooth' type='radio' onChange={handleType}/> 
          <input value='triangle' type='radio' onChange={handleType}/> 
      </fieldset>
      <label>
        <input value={frequency} type='range' onChange={handleFrequency} min='0.0001' max='20' step='1'/>
      </label>
      <fieldset>
        <legend>Target</legend>
          <input value='carrier' type='radio' onChange={handleTarget}/>
          <input value='modulator' type='radio' onChange={handleTarget}/>
          <input value='envelope' type='radio' onChange={handleTarget}/>
          <input value='none' type='radio' onChange={handleTarget}/>
      </fieldset>
    </>
  )
}
export default LFO;
