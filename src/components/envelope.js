import {useContext, useEffect, useState} from "react";
import Audio from './audio'
import { Profile } from "./profile";

const Envelope = () =>{
  const profile = useContext(Profile);
  const [envelope, setEnvelope] = useState({a: profile.settings.envelope.a,
                                           d: profile.settings.envelope.d,
                                           s: profile.settings.envelope.s,
                                           r: profile.settings.envelope.r,
                                           gain: profile.settings.envelope.gain})
  function handleAttack(e){
    setEnvelope({...envelope, a:e.target.value});
  }

  function handleDecay(e){
    setEnvelope({...envelope, d:e.target.value});
  }

  function handleSustain(e){
    setEnvelope({...envelope, s:e.target.value});
  }

  function handleRelease(e){
    setEnvelope({...envelope, r:e.target.value});
  }

  function handleGain(e){
    setEnvelope({...envelope, gain:e.target.value});
  }

  useEffect(()=>{
    profile.settings.envelope = envelope;
    Audio.setEnvelope(envelope);
  },[profile.settings, envelope])

  return(
    <>
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
    </>
  );
}

export default Envelope;
