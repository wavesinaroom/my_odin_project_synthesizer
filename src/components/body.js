import {useContext, useEffect} from 'react'
import {Profile} from './profile'
import Carrier from './carrier'
import Modulator from './modulator'
import Filter from './filter'
import LFO from './lfo'
import Envelope from './envelope'

const Body = ()=>{
  const profile = useContext(Profile)

  useEffect(()=>{
    const audioCtx = window.AudioContext;
    const carrier = audioCtx.createOscillator();
    const modulator = audioCtx.createOscillator();
    const lfo = audioCtx.createOscillator();
    const envelope = new GainNode(audioCtx);
    const filter = new BiquadFilterNode(audioCtx);
    
    setCarrier(profile.settings.carrier, carrier);
    setModulator(profile.settings.modulator, modulator);
    setLFO(profile.settings.lfo, lfo);
    setEnvelope(profile.settings.envelope, envelope);
    setFilter(profile.settings.filter, filter);

  },[profile])

  return(
    <>
      <Profile.Provider>
        <Carrier/>
        <Modulator/>
        <Filter/>
        <LFO/>
        <Envelope/>
      </Profile.Provider>
    </>
  )
}

export default Body;

function setCarrier(settings, node){
  node.type = settings.type;
  node.detune = settings.detune;
}

function setModulator(settings, node){
  node.type =  settings.type;
}

function setLFO(settings, node){
  node.type = settings.type;
  node.frequency = settings.frequency;
}

function setEnvelope(settings, node){
  node.gain = settings.volume;
}

function setFilter(settings, node){
  node.frequency = settings.frequency;
  node.detune = settings.detune;
  node.q = settings.q;
  node.volume = settings.volume;
  node.type = settings.type;
}

function envelopeOn(settings, node, context){
  let now = context.currentTime;

  node.cancelScheduledValues(0);
  node.setValueAtTime(0,now);
  node.linearRampToValueAtTime(1, now + settings.a);
  node.linearRampToValueAtTime(settings.s, now + settings.a + settings.d);
}

function envelopeOff(settings, node, context){
  let now = context.currentTime;

  node.cancelScheduledValues(0);
  node.setValueAtTime(node.value,now);
  node.linearRampToValueAtTime(0, now + settings.r);
}
