import {Profile} from './profile'
import Carrier from './carrier'
import Modulator from './modulator'
import Filter from './filter'
import LFO from './lfo'
import Envelope from './envelope'

const Body = ({settings})=>{

  return(
    <>
      <Profile.Provider value={settings}>
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
