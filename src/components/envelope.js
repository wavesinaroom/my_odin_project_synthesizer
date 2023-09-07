import {useContext, useEffect, useState} from "react";
import { Profile } from "./profile";

const Envelope = () =>{
  const profile = useContext(Profile);
  const [envelope, setEnvelope] = useState({a: profile.settings.envelope.a,
                                           d: profile.settings.envelope.d,
                                           s: profile.settings.envelope.s,
                                           r: profile.settings.envelope.r,
                                           gain: profile.settings.envelope.gain})
  function handleAttack(e){
    const change = parseFloat(e.target.value);
    setEnvelope({...envelope, a:change});
  }

  function handleDecay(e){
    const change = parseFloat(e.target.value);
    setEnvelope({...envelope, d:change});
  }

  function handleSustain(e){
    const change = parseFloat(e.target.value);
    setEnvelope({...envelope, s:change});
  }

  function handleRelease(e){
    const change = parseFloat(e.target.value);
    setEnvelope({...envelope, r:change});
  }

  function handleGain(e){
    const change = parseFloat(e.target.value);
    setEnvelope({...envelope, gain:change});
  }

  useEffect(()=>{
    profile.settings.envelope = envelope;
  },[profile.settings, envelope])

  return(
    <div>
      <h3>Envelope</h3>
      <details>
        <summary>What&apos;s this?</summary> 
        <p>
          Envelopes shape oscillators volume through time to give expresion to oscillators output.
        </p>
      </details>
      <label>
        <input value={envelope.a} type='range' min='0.0001' max='1' step='0.1' onChange={handleAttack}/>      
        attack
      </label>
      <label>
        <input value={envelope.d} type='range' min='0.0001' max='1' step='0.1' onChange={handleDecay}/>      
        decay
      </label>
      <label>
        <input value={envelope.s} type='range' min='0.0001' max='1' step='0.1' onChange={handleSustain}/>      
        sustain
      </label>
      <label>
        <input value={envelope.r} type='range' min='0.0001' max='1' step='0.1' onChange={handleRelease}/>      
        release
      </label>
      <label>
        <input value={envelope.gain} type='range' min='0.0001' max='1' step='0.1' onChange={handleGain}/>      
        volume
      </label>
    </div>
  );
}

export default Envelope;
