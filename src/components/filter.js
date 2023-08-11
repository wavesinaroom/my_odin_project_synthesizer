import { useContext} from "react"
import {Profile} from './profile'

const Filter = ()=>{
  const profile = useContext(Profile);
  
  function handleFrequency(e){
    profile.settings.filter.frequency = e.target.value;
  }

  function handleDetune(e){
    profile.settings.filter.detune = e.target.value;
  }

  function handleQ(e){
    profile.settings.filter.q = e.target.value;
  } 

  function handleVolume(e){
    const gain = (Math.log10(e.target.value)*20).toFixed(2);
    profile.settings.filter.volume = gain;
  }

  function handleType(e){
    if(e.target.checked)
      profile.settings.filter.type = e.target.value;
  }
  
  return(
    <>
      <label>
        <input value={profile.settings.filter.frequency} name='frequency' type='range' min='20' max='20000' step='1' onChange={handleFrequency}/>
        frequency
      </label>
      <label>
        <input value={profile.settings.filter.detune} name='detune' type='range' min='0.0001' max='100' step='1' onChange={handleDetune}/>
        detune
      </label>
      <label>
        <input value={profile.settings.filter.q} name='q' type='range' min='0.0001' max='1000' step='1' onChange={handleQ}/>
        q 
      </label>
      <label>
        <input value={profile.settings.filter.volume} name='volume' type='range' min='0.0001' max='1' step='0.1' onChange={handleVolume}/>
        volume
      </label>
      <fieldset>
        <legend>Type</legend>
          <label>
            <input value='lowpass' name='type' type='radio' onChange={handleType}/>
            lowpass
          </label>
          <label>
            <input value='highpass' name='type' type='radio' onChange={handleType} checked={true}/>
            highpass
          </label>
          <label>
            <input value='bandpass' name='type' type='radio' onChange={handleType}/>
            bandpass
          </label>
          <label>
            <input value='lowshelf' name='type' type='radio' onChange={handleType}/>
            lowshelf
          </label>
          <label>
            <input value='highshelf' name='type' type='radio' onChange={handleType}/>
            highshelf
          </label>
          <label>
            <input value='peaking' name='type' type='radio' onChange={handleType}/>
            peaking
          </label>
          <label>
            <input value='notch' name='type' type='radio' onChange={handleType}/>
            notch
          </label>
          <label>
            <input value='allpass' name='type' type='radio' onChange={handleType}/>
            allpass
          </label>
      </fieldset>
    </>
  );
}

export default Filter;
