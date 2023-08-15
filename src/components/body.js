import {useContext, useEffect} from 'react'
import {Profile} from './profile'
import Carrier from './carrier'
import Modulator from './modulator'
import Filter from './filter'
import LFO from './lfo'
import Envelope from './envelope'
import Audio from './audio'

const Body = ()=>{
  const profile = useContext(Profile)

  useEffect(()=>{
    
    Audio.setCarrier(profile.settings.carrier);
    Audio.setModulator(profile.settings.modulator);
    Audio.setLFO(profile.settings.lfo);
    Audio.setEnvelope(profile.settings.envelope);
    Audio.setFilter(profile.settings.filter);

  },[profile])

  useEffect(()=>{

    Audio.plugLFO(profile.settings.lfo.target);

  },[profile.settings.lfo.target])

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

