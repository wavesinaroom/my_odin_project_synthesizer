import {useState} from "react";

const Envelope = ({settings}) =>{
  const [attack,setAttack] = useState(settings.info.envelope.a);
  const [decay, setDecay] = useState(settings.info.envelope.d);
  const [sustain, setSustain] = useState(settings.info.envelope.s); 
  const [release, setRelease] = useState(settings.info.envelope.r);

  function handleAttack(e){
    setAttack(e.target.value);
    settings.info.envelope.a = e.target.value;
  }
  function handleDecay(e){
    setDecay(e.target.value);
    settings.info.envelope.d = e.target.value;
  }
  function handleSustain(e){
    setSustain(e.target.value);
    settings.info.envelope.s = e.target.value;
  }
  function handleRelease(e){
    setRelease(e.target.value);
    settings.info.envelope.r = e.target.value;
  }

  return(
    <>
      <label>
        <input value={attack} type='range' min='0' max='1' step='0.1' onChange={handleAttack}/>      
        attack
      </label>
      <label>
        <input value={decay} type='range' min='0' max='1' step='0.1' onChange={handleDecay}/>      
        decay
      </label>
      <label>
        <input value={sustain} type='range' min='0' max='1' step='0.1' onChange={handleSustain}/>      
        sustain
      </label>
      <label>
        <input value={release} type='range' min='0' max='1' step='0.1' onChange={handleRelease}/>      
        release
      </label>
    </>
  );
}

export default Envelope;
