const Carrier = ({settings}) =>{
  return(
    <>
      <fieldset>
        <legend>Waveform</legend>
        <label htmlFor='sine'>sine</label>
        <input name='sine' type='radio'/>
        <label htmlFor='triangle'>triangle</label>
        <input name='triangle' type='radio'/>
        <label htmlFor='square'>square</label>
        <input name='square' type='radio'/>
        <label htmlFor='sawtooth'>sawtooth</label>
        <input name='sawtooth' type='radio'/>
      </fieldset>
    </>
  );
}

export default Carrier;
