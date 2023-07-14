const Carrier = ({settings}) =>{

  return(
    <>
      <fieldset>
        <legend>Waveform</legend>
          <label>
           <input name='sine' type='radio'/>
            sine
          </label>
          <label>
           <input name='square' type='radio'/>
            square
          </label>
          <label>
           <input name='triangle' type='radio'/>
            triangle
          </label>
          <label>
           <input name='sawtooth' type='radio'/>
            sawtooth
          </label>
      </fieldset>
    </>
  );
}

export default Carrier;
