import {useEffect} from "react";

const Keyboard = ({setFrequency}) =>{
  
  function handleKeycode(e){
    switch(e.key){
      case "s":
        setFrequency(261.63);
        break;
      case "e":
        setFrequency(277.18);
        break;
      case "d":
        setFrequency(293.66);
        break;
      case "r":
        setFrequency(311.13);
        break;
      case "f":
        setFrequency(329.63);
        break;
      case "j":
        setFrequency(349.32);
        break;
      case "u":
        setFrequency(369.99);
        break;
      case "k":
        setFrequency(392);
        break;
      case "i":
        setFrequency(415.3);
        break;
      case "l":
        setFrequency(440);
        break;
      case "o":
        setFrequency(466.16);
        break;
      case "ñ":
        setFrequency(493.88);
        break;
      default:
        break;
    }
  }

  useEffect(()=>{
    window.addEventListener('keydown', handleKeycode)
  });
  return(
    <>
      <svg>
        <circle id="c" cx="0" cy="0" r="100"/>
        <circle id="cs" cx="0" cy="0" r="100"/>
        <circle id="d" cx="0" cy="0" r="100"/>
        <circle id="ds" cx="0" cy="0" r="100"/>
        <circle id="e" cx="0" cy="0" r="100"/>
        <circle id="f" cx="0" cy="0" r="100"/>
        <circle id="fs" cx="0" cy="0" r="100"/>
        <circle id="g" cx="0" cy="0" r="100"/>
        <circle id="gs" cx="0" cy="0" r="100"/>
        <circle id="a" cx="0" cy="0" r="100"/>
        <circle id="as" cx="0" cy="0" r="100"/>
        <circle id="b" cx="0" cy="0" r="100"/>
        <circle id="c" cx="0" cy="0" r="100"/>
      </svg>
    </>
  )
}
 export default Keyboard;
