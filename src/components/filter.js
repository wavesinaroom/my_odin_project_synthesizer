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
    setFilter({...filter, frequency:e.target.value});
  }

  function handleDetune(e){
    setFilter({...filter, detune: e.target.value});
  }

  function handleQ(e){
    setFilter({...filter, q: e.target.value});
  } 

  function handleVolume(e){
    setFilter({...filter, gain: e.target.value})
  }

  function handleType(e){
    setFilter({...filter, type: e.target.value});
  }

  useEffect(()=>{
    profile.settings.filter = filter;
    Audio.setFilter(profile.settings.filter);
  },[profile.settings, filter])
  
  return(
    <>
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
        <input value={filter.q} name='q' type='range' min='0.0001' max='1000' step='1' onChange={handleQ}/>
        q 
      </label>
      <label>
        <input value={filter.gain} name='volume' type='range' min='0.0001' max='1' step='0.1' onChange={handleVolume}/>
        gain
      </label>
      <fieldset>
        <legend>type</legend>
          <label>
            <input value='lowpass' name='type' type='radio' onChange={handleType} checked={filter.type === 'lowpass'}/>
            lowpass
          </label>
          <label>
            <input value='highpass' name='type' type='radio' onChange={handleType} checked={filter.type === 'highpass'}/>
            highpass
          </label>
          <label>
            <input value='bandpass' name='type' type='radio' onChange={handleType} checked={filter.type === 'bandpass'}/>
            bandpass
          </label>
          <label>
            <input value='lowshelf' name='type' type='radio' onChange={handleType} checked={filter.type === 'lowshelf'}/>
            lowshelf
          </label>
          <label>
            <input value='highshelf' name='type' type='radio' onChange={handleType} checked={filter.type === 'highshelf'}/>
            highshelf
          </label>
          <label>
            <input value='peaking' name='type' type='radio' onChange={handleType} checked={filter.type === 'peaking'}/>
            peaking
          </label>
          <label>
            <input value='notch' name='type' type='radio' onChange={handleType} checked={filter.type === 'notch'}/>
            notch
          </label>
          <label>
            <input value='allpass' name='type' type='radio' onChange={handleType} checked={filter.type === 'allpass'}/>
            allpass
          </label>
      </fieldset>
      <details>
        <summary>What&apos;s this?</summary>
        <p>Filters let you remove a range of frequencies like colours from a picture</p>
      </details>
    </>
  );
}

export default Filter;
