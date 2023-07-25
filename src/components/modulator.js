import {useState} from "react";

const Modulator = ({settings}) =>{
  const [volume, setVolume] = useState(0.75);
  const {frequency, setFrequency} = useState(0);

  function handleWaveformChoice(e){
    if(e.target.checked)
      settings.modulator.type = e.target.value;
  }

  function handleVolumeChange(e){
    settings.modulator.volume = Math.log10(e.target.value)*20;
    setVolume(e.target.value);
  }

  function handleFrequencyRatio(e){
    setFrequency(e.target.value);
    const modulation = settings.modulator.frequency * e.target.value;
    if(modulation>20000)
      settings.modulator.frequency = 20000;
    else if(modulation<20)
      settings.modulator.frequency = 20;
    else
      settings.modulator.frequency = modulation;
  }
  return(
    <>
      <fieldset>
        <legend>Waveform</legend>
          <label>
           <input value='sine' name='sine' type='radio' onClick={handleWaveformChoice}/>
            sine
          </label>
          <label>
           <input value='square' name='square' type='radio' onClick={handleWaveformChoice}/>
            square
          </label>
          <label>
           <input value='triangle' name='triangle' type='radio' onClick={handleWaveformChoice}/>
            triangle
          </label>
          <label>
           <input value='sawtooth' name='sawtooth' type='radio' onClick={handleWaveformChoice}/>
            sawtooth
          </label>
      </fieldset>
      <fieldset>
        <label>
          <input value={frequency} name='frequency' type='range' min='0' max='1' step='0.1' onChange={handleFrequencyRatio}/> 
            frequency 
        </label>
        <label>
          <input value={volume} name='volume' type='range' min="0.0001" step="0.001" max="1" onChange={handleVolumeChange}/>
          volume
        </label>
      </fieldset>
    </>
  );
}

export default Modulator;
