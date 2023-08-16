import {useEffect} from "react";
import Audio from './audio'

const Keyboard = () =>{
  let frequency; 
  function handlKeyCode(e){
    switch(e.key){
      case "s":
        frequency = 261.63;
        break;
      case "e":
        frequency = 277.18;
        break;
      case "d":
        frequency = 293.66;
        break;
      case "r":
        frequency = 311.13;
        break;
      case "f":
        frequency = 329.63;
        break;
      case "j":
        frequency = 349.32;
        break;
      case "u":
        frequency = 369.99;
        break;
      case "k":
        frequency = 392;
        break;
      case "i":
        frequency = 415.3;
        break;
      case "l":
        frequency = 440;
        break;
      case "o":
        frequency = 466.16;
        break;
      case "ñ":
        frequency = 493.88;
        break;
      default:
        break;
    }

    Audio.carrier.frequency = frequency;
    Audio.carrier.start();
    Audio.envelopeOn();
    
  }

  useEffect(()=>{
    window.addEventListener('keydown', handlKeyCode)
    return(()=>{
      window.removeEventListener('keydown', handlKeyCode)
    })
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
