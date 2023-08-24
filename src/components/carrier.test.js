import '@testing-library/jest-dom';
import {cleanup,render,screen, fireEvent} from '@testing-library/react';
import Audio from './audio';
import Carrier from './carrier';
import Default from './default.json'
import { Profile } from './profile';

jest.mock('./audio',()=>{
  return {setCarrier:jest.fn()}
});

beforeEach(()=>{
  cleanup();
});

describe(`Rendering`, ()=>{
  const profile = {settings:Default};
  it(`renders waveform type radio buttons`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Carrier/>
      </Profile.Provider>
    )

    expect(screen.getAllByRole(`radio`).length).toBe(4);
  });

  it(`checks radio buttons label match waveform types`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Carrier/>
      </Profile.Provider>
    )

    expect(screen.getByRole(`radio`,{name:`sine`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`square`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`triangle`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`sawtooth`})).toBeInTheDocument(); 
  });
});

describe(`Interaction`,()=>{
  const profile = {settings:Default};
  it(`chooses a waveform and updates JSON file`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Carrier/>
      </Profile.Provider>
    )

    expect(profile.settings.carrier.type).toMatch(`sine`);  
    fireEvent.click(screen.getByRole(`radio`,{name:`square`}));
    expect(profile.settings.carrier.type).toMatch(`square`);
  });

  it(`changes detune value`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Carrier/>
      </Profile.Provider>
    )
    const volume = screen.getByRole(`slider`,{name:`volume`});

    expect(profile.settings.carrier.detune).toEqual(0.0001)
    fireEvent.change(volume, {target:{value:32}});
    expect(profile.settings.carrier.detune).toEqual(`32`)
    expect(Audio.setCarrier).toBeCalled();
  });
});
