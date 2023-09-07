import { useContext, useEffect, useState} from "react"
import Audio from "./audio";
import { Profile } from "./profile";

const Filter = ()=>{
  const profile = useContext(Profile);
  const [filter, setFilter] = useState ({frequency: profile.settings.filter.frequency,
                                         detune: profile.settings.filter.detune,
                                         q: profile.settings.filter.q,
                                         gain: profile.settings.filter.gain,
                                         type: profile.settings.filter.type})
  
  function handleFrequency(e){
    const change = parseFloat(e.target.value);
    setFilter({...filter, frequency:change});
  }

  function handleDetune(e){
    const change = parseFloat(e.target.value);
    setFilter({...filter, detune: change});
  }

  function handleQ(e){
    const change = parseFloat(e.target.value);
    setFilter({...filter, q: change});
  } 

  function handleVolume(e){
    const change = parseFloat(e.target.value);
    setFilter({...filter, gain: change})
  }

  function handleType(e){
    setFilter({...filter, type: e.target.value});
  }

  useEffect(()=>{
    profile.settings.filter = filter;
    Audio.setFilter(profile.settings.filter);
  },[profile.settings, filter])
  
  return(
    <div style={styles}>
      <h3>Filter</h3>
        <details>
          <summary>What&apos;s this?</summary>
          <p>
            Filters remove ranges of sound frequency ranges. They work pretty similar to visual filter which let you see some colours in a picture.
          </p>
        </details> 
      <label>
        <input value={filter.frequency} name='frequency' type='range' min='20' max='20000' step='1' onChange={handleFrequency}/>
        frequency
      </label>
      <label>
        <input value={filter.detune} name='detune' type='range' min='0.0001' max='100' step='1' onChange={handleDetune}/>
        detune
      </label>
      <label>
        <input value={filter.q} name='q' type='range' min='0.0001' max='1' step='0.1' onChange={handleQ}/>
        q 
      </label>
      <label>
        <input value={filter.gain} name='volume' type='range' min='-40' max='40' step='1' onChange={handleVolume}/>
        gain
      </label>
      <fieldset>
        <legend>type</legend>
          <label>
            <input value='lowpass' name='filter' type='radio' onChange={handleType} checked={filter.type === 'lowpass'}/>
            lowpass
          </label>
          <label>
            <input value='highpass' name='filter' type='radio' onChange={handleType} checked={filter.type === 'highpass'}/>
            highpass
          </label>
          <label>
            <input value='bandpass' name='filter' type='radio' onChange={handleType} checked={filter.type === 'bandpass'}/>
            bandpass
          </label>
          <label>
            <input value='lowshelf' name='filter' type='radio' onChange={handleType} checked={filter.type === 'lowshelf'}/>
            lowshelf
          </label>
          <label>
            <input value='highshelf' name='filter' type='radio' onChange={handleType} checked={filter.type === 'highshelf'}/>
            highshelf
          </label>
          <label>
            <input value='peaking' name='filter' type='radio' onChange={handleType} checked={filter.type === 'peaking'}/>
            peaking
          </label>
          <label>
            <input value='notch' name='filter' type='radio' onChange={handleType} checked={filter.type === 'notch'}/>
            notch
          </label>
          <label>
            <input value='allpass' name='type' type='radio' onChange={handleType} checked={filter.type === 'allpass'}/>
            allpass
          </label>
      </fieldset>
    </div>
  );
}

export default Filter;

const styles = {
  gridArea: "filter"
}
