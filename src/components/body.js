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

}

function setModulator(settings, node){

}

function setLFO(settings, node){

}

function setEnvelope(settings, node){

}

function setFilter(settings, node){

}
