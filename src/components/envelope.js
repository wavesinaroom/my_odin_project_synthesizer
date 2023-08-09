import { useState } from "react";

const Envelope = ({settings})=>{
  const [attack, setAttack] = useState(0);
  const [decay, setDecay] = useState(0);
  const [sustain, setSustain] = useState(0);
  const [release, setRelease] = useState(0);

  return(
    <>
      <label>
        <input value={attack} type='range' min='0' max='1' step='0.1'/>
      </label>
      <label>
        <input value={decay} type='range' min='0' max='1' step='0.1'/>
      </label>
      <label>
        <input value={sustain} type='range' min='0' max='1' step='0.1'/>
      </label>
      <label>
        <input value={release} type='range' min='0' max='1' step='0.1'/>
      </label>
    </>
  )
}
