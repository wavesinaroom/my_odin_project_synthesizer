import '@testing-library/jest-dom';
import {cleanup,render,screen, fireEvent} from '@testing-library/react';
import Carrier from './carrier';
import Default from './default.json'
import { Profile } from './profile';

beforeEach(()=>{
  cleanup();
});

describe(`Rendering`, ()=>{
  const profile = {info:Default};
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

  it(`changes volume level`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Carrier/>
      </Profile.Provider>
    )
    const volume = screen.getByRole(`slider`,{name:`volume`});
    expect(profile.settings.carrier.volume).toEqual(1);

    fireEvent.change(volume, {target:{value:`0.32`}});
    expect(profile.settings.carrier.volume).toEqual(`-9.90`);
  });
});
