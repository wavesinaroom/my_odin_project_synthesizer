import {useContext} from "react";
import {Profile} from './profile';

const Envelope = () =>{
  const profile = useContext(Profile)
  function handleAttack(e){
    profile.settings.envelope.a = e.target.value;
  }
  function handleDecay(e){
    profile.settings.envelope.d = e.target.value;
  }
  function handleSustain(e){
    profile.settings.envelope.s = e.target.value;
  }
  function handleRelease(e){
    profile.settings.envelope.r = e.target.value;
  }

  return(
    <>
      <label>
        <input value={profile.settings.envelope.a} type='range' min='0' max='1' step='0.1' onChange={handleAttack}/>      
        attack
      </label>
      <label>
        <input value={profile.settings.envelope.d} type='range' min='0' max='1' step='0.1' onChange={handleDecay}/>      
        decay
      </label>
      <label>
        <input value={profile.settings.envelope.s} type='range' min='0' max='1' step='0.1' onChange={handleSustain}/>      
        sustain
      </label>
      <label>
        <input value={profile.settings.envelope.r} type='range' min='0' max='1' step='0.1' onChange={handleRelease}/>      
        release
      </label>
    </>
  );
}

export default Envelope;
