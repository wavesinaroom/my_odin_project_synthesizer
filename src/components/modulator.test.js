import '@testing-library/jest-dom';
import {cleanup,render,screen, fireEvent} from '@testing-library/react';
import Audio from './audio';
import Modulator from './modulator';
import Default from './default.json'
import { Profile } from './profile';

jest.mock('./audio',()=>{
  return {setModulator: jest.fn()}
})

beforeEach(()=>{
  cleanup();
})

describe(`Rendering`, ()=>{
  const profile = {settings: Default};
  it(`renders all elements`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Modulator/>
      </Profile.Provider>
    )

    expect(screen.getAllByRole(`radio`).length).toBe(4);
    expect(screen.getAllByRole(`slider`).length).toBe(1);
    expect(screen.getByRole(`radio`,{name:`sine`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`square`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`triangle`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`sawtooth`})).toBeInTheDocument(); 
  });

  it.only(`renders values from profile JSON file`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Modulator/>
      </Profile.Provider>
    )
    
    expect(screen.getByRole(`radio`,{name:`${profile.settings.modulator.type}`})).toBeChecked();
    expect(screen.getByRole(`slider`,{name:`frequency ratio`}).value).toBe(`${profile.settings.modulator.ratio}`);

  });
});

describe(`Interaction`,()=>{
  const profile= {settings:Default};

  it(`chooses a waveform and updates JSON file`,()=>{

    render(
      <Profile.Provider value={profile}>
        <Modulator/>
      </Profile.Provider>
    )

    expect(profile.settings.modulator.type).toMatch(`sine`);
    fireEvent.click(screen.getByRole(`radio`,{name:`triangle`}));
    expect(profile.settings.modulator.type).toMatch(`triangle`);
    expect(Audio.setModulator).toBeCalled();
  });

  it(`sets ratio to modulate carrier`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Modulator/>
      </Profile.Provider>
    )
    const ratio = screen.getByRole(`slider`,{name:`frequency ratio`});

    expect(profile.settings.modulator.ratio).toEqual(0);
    fireEvent.change(ratio, {target:{value:0.5}});
    expect(profile.settings.modulator.ratio).toEqual(`0.5`);
    expect(Audio.setModulator).toBeCalled();
  });
});
