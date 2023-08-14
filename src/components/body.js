import Carrier from './carrier'
import Modulator from './modulator'
import Filter from './filter'
import LFO from './lfo'
import Envelope from './envelope'

const Body = ()=>{

  return(
    <>
      <Carrier/>
      <Modulator/>
      <Filter/>
      <LFO/>
      <Envelope/>
    </>
  )
}

export default Body;
