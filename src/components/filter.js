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
    profile.settings.filter.volume = (Math.log10(e.target.value)*20).toFixed(2);
  }

  function handleType(e){
    profile.settings.filter.type = e.target.value;
  }
  
  return(
    <>
      <label>
        <input name='frequency' type='range' min='20' max='20000' step='1' onChange={handleFrequency}/>
        frequency
      </label>
      <label>
        <input name='detune' type='range' min='0.0001' max='100' step='1' onChange={handleDetune}/>
        detune
      </label>
      <label>
        <input name='q' type='range' min='0.0001' max='1000' step='1' onChange={handleQ}/>
        q 
      </label>
      <label>
        <input name='volume' type='range' min='0.0001' max='1' step='0.1' onChange={handleVolume}/>
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
