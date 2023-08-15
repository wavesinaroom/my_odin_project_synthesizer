import {useEffect} from "react";

const Keyboard = () =>{
  
  function handleKeycode(e){
    console.log(e.key);
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
