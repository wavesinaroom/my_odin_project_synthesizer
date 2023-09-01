const Audio = (()=>{
  const audioCtx = new AudioContext();
  const carrier = new OscillatorNode(audioCtx);
  const modulator = new OscillatorNode(audioCtx);
  const lfo = new OscillatorNode(audioCtx);
  const envelope = new GainNode(audioCtx);
  const filter = new BiquadFilterNode(audioCtx);

  carrier.connect(envelope).connect(audioCtx.destination);
  carrier.start();

  function setCarrier(settings){
    carrier.type = settings.type;
    carrier.detune.setValueAtTime(settings.detune, 0);
  }

  function setCarrierFrequency(frequency){
    carrier.frequency.setValueAtTime(frequency, audioCtx.currentTime);
  }

  function setModulator(settings){
    modulator.type =  settings.type;
  }

  function setLFO(settings){
    lfo.type = settings.type;
    lfo.frequency = settings.frequency;
  }

  function setEnvelope(settings){
    envelope.gain = settings.volume;
  }

  function setFilter(settings){
    filter.frequency = settings.frequency;
    filter.detune = settings.detune;
    filter.q = settings.q;
    filter.volume = settings.volume;
    filter.type = settings.type;
  }

  function envelopeOn(settings){
    envelope.gain.cancelScheduledValues(0);
    envelope.gain.setValueAtTime(0,audioCtx.currentTime);
    envelope.gain.linearRampToValueAtTime(3, audioCtx.currentTime + settings.a);
    envelope.gain.linearRampToValueAtTime(settings.s, audioCtx.currentTime + settings.a + settings.d);
  }

  function envelopeOff(settings){
    envelope.gain.cancelScheduledValues(0);
    envelope.gain.setValueAtTime(envelope.gain.value,audioCtx.currentTime);
    envelope.gain.linearRampToValueAtTime(0, audioCtx.currentTime + settings.r);
  }

  function plugLFO(settings){
    lfo.disconnect();

    switch(settings.lfo.target){
      case "carrier":
        lfo.connect(carrier);
        break;
      case "modulator":
        lfo.connect(modulator)
        break;
      case "envelope":
        lfo.connect(envelope);
        break;
      default:
        break;
     }
   }

   return {
     setCarrier,
     setCarrierFrequency,
     setModulator,
     setFilter,
     setEnvelope,
     setLFO,
     envelopeOn,
     envelopeOff,
     plugLFO
   }
 })();

export default Audio;
