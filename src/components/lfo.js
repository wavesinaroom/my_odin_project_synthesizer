import {useState} from "react";

const LFO = ({settings}) =>{
  const [type, setType] = useState(settings.info.lfo.type);
  const [frequency, setFrequency] = useState(settings.info.lfo.frequency);
  const [target, setTarget] = useState(settings.info.lfo.target);

  function handleType(e){
    setType(e.target.value);
    settings.info.lfo.type = e.target.value;
  }

  function handleFrequency(e){
    setFrequency(e.target.value);
    settings.info.lfo.frequency = e.target.value;
  }

  function handleFrequency(e){
    setFrequency(e.target.value);
    settings.info.lfo.target = e.target.value;
  }

  return(
    <>
    </>
  )
}
export default LFO;
