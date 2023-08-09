import { useState} from "react"

const Filter = ({settings})=>{
  const [frequency, setFrequency] = useState(settings.info.filter.frequency);
  const [detune, setDetune] = useState(settings.info.filter.detune);
  const [q, setQ] = useState(settings.info.filter.q);
  const [volume, setVolume] = useState(settings.info.filter.volume);
  const [type, setType] = useState(settings.info.filter.type);
  
  function  handleEvent(e){
    switch(e.target.name){
      case 'frequency':
        setFrequency(e.target.value);
        settings.info.filter.frequency = frequency;
        break;
      case 'detune':
        setDetune(e.target.value);
        settings.info.filter.detune = detune;
        break;
      case 'q':
        setQ(e.target.value);
        settings.info.filter.q = q;
        break;
      case 'volume':
        setVolume(e.target.value);
        settings.info.filter.volume = volume;
        break;
      case 'type':
        setType(e.target.value);
        settings.info.filter.type = type;
        break;
      default:
        throw new Error(`Invalid name`);
    }
  }
  return(
    <>
      <label>
        <input value={frequency} name='frequency' type='range' min='20' max='20000' step='1' onChange={handleEvent}/>
        frequency
      </label>
      <label>
        <input value={detune} name='detune' type='range' min='0.0001' max='100' step='1' onChange={handleEvent}/>
        detune
      </label>
      <label>
        <input value={q} name='q' type='range' min='0.0001' max='1000' step='1' onChange={handleEvent}/>
        q 
      </label>
      <label>
        <input value={volume} name='volume' type='range' min='0.0001' max='1' step='0.1' onChange={handleEvent}/>
        volume
      </label>
      <fieldset>
        <legend>Type</legend>
          <label>
            <input value='lowpass' name='type' type='radio' onChange={handleEvent}/>
            lowpass
          </label>
          <label>
            <input value='highpass' name='type' type='radio' onChange={handleEvent} checked={true}/>
            highpass
          </label>
          <label>
            <input value='bandpass' name='type' type='radio' onChange={handleEvent}/>
            bandpass
          </label>
          <label>
            <input value='lowshelf' name='type' type='radio' onChange={handleEvent}/>
            lowshelf
          </label>
          <label>
            <input value='highshelf' name='type' type='radio' onChange={handleEvent}/>
            highshelf
          </label>
          <label>
            <input value='peaking' name='type' type='radio' onChange={handleEvent}/>
            peaking
          </label>
          <label>
            <input value='notch' name='type' type='radio' onChange={handleEvent}/>
            notch
          </label>
          <label>
            <input value='allpass' name='type' type='radio' onChange={handleEvent}/>
            allpass
          </label>
      </fieldset>
    </>
  );
}

export default Filter;
