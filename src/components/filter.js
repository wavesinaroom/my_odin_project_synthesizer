
import {useState} from "react";

const Filter = ({settings}) =>{
  const [frequency, setFrequency] = useState(settings.filter.frequency);
  const [detune, setDetune] = useState(settings.filter.detune);
  const [q, setQ] = useState(settings.filter.q);
  const [gain, setGain] = useState(settings.filter.gain);
  const [type, setType] = useState(settings.filter.type); 

  function handleFrequencyChange(e){
    setFrequency(e.target.value);
    settings.filter.frequency = frequency;
  }

  function handleDetuneChange(e){
    setDetune(e.target.value);
    settings.filter.detune = detune;
  }

  function handleQChange(e){
    setQ(e.target.value);
    settings.filter.q = q;
  }

  function handleGainChange(e){
    setGain(e.target.value);
    settings.filter.gain = gain;
  }

  function handleTypeChange(e){
    if(e.target.checked){
      setType(e.target.value);
      settings.carrier.type = e.target.value;
    }
  }

  return(
    <>
      <label>
        <input value={frequency} name='frequency' type='range' min={20} max={20000} step={1} onChange={handleFrequencyChange}/> 
        frequency
      </label>
      <label>
        <input value={detune} name='detune' type='range' min={0} max={100} step={1} onChange={handleDetuneChange}/>
        detune
      </label>
      <label>
        <input value={q} name='q' type='range' min={0} max={100} step={1} onChange={handleQChange}/>
        q
      </label>
      <label>
        <input value={gain} name='gain' type='range' min={-40} max={40} step={1} onChange={handleGainChange}/>
        gain
      </label>
      <fieldset>
        <legend>type</legend>
          <label>
           <input value='sine' name='sine' type='radio' onClick={handleTypeChange}/>
            sine
          </label>
          <label>
           <input value='square' name='square' type='radio' onClick={handleTypeChange}/>
            square
          </label>
          <label>
           <input value='triangle' name='triangle' type='radio' onClick={handleTypeChange}/>
            triangle
          </label>
          <label>
           <input value='sawtooth' name='sawtooth' type='radio' onClick={handleTypeChange}/>
            sawtooth
          </label>
      </fieldset>
    </>
  );
}

export default Filter;
