import {useState} from "react"

const Filter = ({settings})=>{
  const [frequency, setFrequency] = useState(1000);
  const [detune, setDetune] = useState(1);
  const [q, setQ] = useState(1);
  const [volume, setVolume] = useState(0.75);
  const [type, setType] = useState('');
  

  return(
    <>
      <label>
        <input value={frequency} name='frequency' type='range' min='20' max='20000' step='1'/>
        frequency
      </label>
      <label>
        <input value={detune} name='detune' type='range' min='0.0001' max='100' step='1'/>
        detune
      </label>
      <label>
        <input value={q} name='q' type='range' min='0.0001' max='1000' step='1'/>
        q 
      </label>
      <label>
        <input value={volume} name='volume' type='range' min='0.0001' max='1' step='0.1'/>
        volume
      </label>
      <fieldset>
        <legend>Type</legend>
          <label>
            <input value='lowpass' name='lowpass' type='radio'/>
            lowpass
          </label>
          <label>
            <input value='highpass' name='highpass' type='radio'/>
            highpass
          </label>
          <label>
            <input value='bandpass' name='bandpass' type='radio'/>
            bandpass
          </label>
          <label>
            <input value='bandpass' name='bandpass' type='radio'/>
            bandpass
          </label>
          <label>
            <input value='lowshelf' name='lowshelf' type='radio'/>
            lowshelf
          </label>
          <label>
            <input value='peaking' name='peaking' type='radio'/>
            peaking
          </label>
          <label>
            <input value='notch' name='notch' type='radio'/>
            notch
          </label>
          <label>
            <input value='allpass' name='allpass' type='radio'/>
            allpass
          </label>
      </fieldset>
    </>
  );
}
