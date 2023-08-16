 const Audio = (()=>{
  const audioCtx = window.AudioContext;
  const carrier = audioCtx.createOscillator();
  const modulator = audioCtx.createOscillator();
  const lfo = audioCtx.createOscillator();
  const envelope = new GainNode(audioCtx);
  const filter = new BiquadFilterNode(audioCtx);

  modulator.connect(carrier).connect(envelope).filter.connect(audioCtx.destination);

  function setCarrier(settings){
    carrier.type = settings.type;
    carrier.detune = settings.detune;
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
    envelope.cancelScheduledValues(0);
    envelope.setValueAtTime(0,audioCtx.currentTime);
    envelope.linearRampToValueAtTime(1, audioCtx.currentTime + settings.a);
    envelope.linearRampToValueAtTime(settings.s, audioCtx.currentTime + settings.a + settings.d);
  }

  function envelopeOff(settings){
    envelope.cancelScheduledValues(0);
    envelope.setValueAtTime(envelope.value,audioCtx.currentTime);
    envelope.linearRampToValueAtTime(0, audioCtx.currentTime + settings.r);
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
