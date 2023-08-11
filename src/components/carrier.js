import {useState, useContext} from "react";
import {Profile} from './profile'

const Carrier = () =>{
  const profile = useContext(Profile);
  const [volume, setVolume] = useState(1);

  function handleWaveformChoice(e){
      profile.settings.carrier.type = e.target.value;
  }

  function handleVolumeChange(e){
    profile.settings.carrier.volume = (Math.log10(e.target.value)*20).toFixed(2);
    setVolume(e.target.value);
  }
  return(
    <>
      <fieldset>
        <legend>Waveform</legend>
          <label>
           <input value='sine' name='sine' type='radio' onChange={handleWaveformChoice} checked={true}/>
            sine
          </label>
          <label>
           <input value='square' name='square' type='radio' onChange={handleWaveformChoice}/>
            square
          </label>
          <label>
           <input value='triangle' name='triangle' type='radio' onChange={handleWaveformChoice}/>
            triangle
          </label>
          <label>
           <input value='sawtooth' name='sawtooth' type='radio' onChange={handleWaveformChoice}/>
            sawtooth
          </label>
      </fieldset>
      <label>
        <input value={volume} name='volume' type='range' min="0.0001" step="1" max="1" onChange={handleVolumeChange}/>
        volume
      </label>
    </>
  );
}

export default Carrier;
