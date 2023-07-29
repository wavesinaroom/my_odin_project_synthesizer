const Filter = ({settings}) =>{
  function handleWaveformChoice(e){
    if(e.target.checked)
      settings.carrier.type = e.target.value;
  }
  return(
    <>
      <label>
        <input name='frequency' type='range' min={20} max={20000} step={1}/> 
        frequency
      </label>
      <label>
        <input name='detune' type='range' min={0} max={1000} step={1}/>
        detune
      </label>
      <label>
        <input name='q' type='range' min={0} max={1000} step={1}/>
        detune
      </label>
      <label>
        <input name='gain' type='range' min={0} max={1000} step={1}/>
        detune
      </label>
      <fieldset>
        <legend>type</legend>
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
    </>
  );
}

export default Filter;
