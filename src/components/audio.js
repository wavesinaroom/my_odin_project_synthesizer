const Audio = (()=>{
  const audioCtx = new AudioContext();
  const carrier = new OscillatorNode(audioCtx);

  const modulator = new OscillatorNode(audioCtx);
  const modulatorGain = new GainNode(audioCtx);

  const lfo = new OscillatorNode(audioCtx);

  const envelope = new GainNode(audioCtx);

  const filter = new BiquadFilterNode(audioCtx);

  modulator.connect(modulatorGain);
  modulatorGain.gain.setValueAtTime(100, audioCtx.currentTime)
  modulatorGain.connect(carrier.frequency);


  carrier.connect(filter).connect(envelope).connect(audioCtx.destination);
  carrier.start();
  modulator.start();

  function envelopeOn(settings){
    envelope.gain.cancelScheduledValues(0);
    envelope.gain.setTargetAtTime(settings.gain, audioCtx.currentTime, settings.a);
    envelope.gain.setTargetAtTime(settings.gain-settings.d, audioCtx.currentTime, (settings.a+settings.d));
  }

  function envelopeOff(settings){
    envelope.gain.cancelScheduledValues(0);
    envelope.gain.setTargetAtTime(0, audioCtx.currentTime, settings.r);
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


  function setCarrier(settings){
    carrier.type = settings.type;
    carrier.detune.setValueAtTime(settings.detune, audioCtx.currentTime);
  }

  function setCarrierFrequency(frequency){
    carrier.frequency.setValueAtTime(frequency, audioCtx.currentTime);
  }

  function setModulator(settings){
    modulator.type =  settings.type;
  }

  function setModulatorFrequency(settings, frequency){
    modulator.frequency.setValueAtTime((settings.ratio * frequency), audioCtx.currentTime);
  }

  function setLFO(settings){
    lfo.type = settings.type;
    lfo.frequency.setValueAtTime(settings.frequency, audioCtx.currentTime);
  }

  function setFilter(settings){
    filter.frequency.setValueAtTime(settings.frequency, audioCtx.currentTime); 
    filter.detune.setValueAtTime(settings.detune, audioCtx.currentTime);
    filter.Q.setValueAtTime(settings.q, audioCtx.currentTime);
    filter.gain.setValueAtTime(settings.gain, audioCtx.currentTime);
    filter.type = settings.type;
  }

  function resumeAudioCtx(){
    audioCtx.resume();
  }

  function suspendAudioCtx(){
    audioCtx.suspend();
    envelope.gain.setValueAtTime(0, audioCtx.currentTime);
  }

  return {
    envelopeOn,
    envelopeOff,
    plugLFO,
    setCarrier,
    setCarrierFrequency,
    setModulator,
    setModulatorFrequency,
    setFilter,
    setLFO,
    resumeAudioCtx,
    suspendAudioCtx
   }
 })();

export default Audio;
