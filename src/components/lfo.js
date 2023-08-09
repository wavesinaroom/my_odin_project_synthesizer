
import {useState} from "react";

const LFO = ({settings}) =>{
  const [frequency, setFrequency] = useState(0.75);
  const [detune, setDetune] = useState(1);
  const [type, setType] = useState('');
  const [target, setTarget] = useState('');

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
      <fieldset>
        <legend>type</legend>
          <label>
           <input value='sine' name='sine' type='radio'/>
            sine
          </label>
          <label>
           <input value='square' name='square' type='radio'/>
            square
          </label>
          <label>
           <input value='triangle' name='triangle' type='radio'/>
            triangle
          </label>
          <label>
           <input value='sawtooth' name='sawtooth' type='radio'/>
            sawtooth
          </label>
      </fieldset>
      <fieldset>
        <legend>target</legend>
          <label>
            <input value='carrier' name='carrier' type='radio'/>
            <input value='modulator' name='modulator' type='radio'/>
          </label>
      </fieldset>
    </>
  );
}

export default LFO;

