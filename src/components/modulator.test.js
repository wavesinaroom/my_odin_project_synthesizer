import '@testing-library/jest-dom';
import {cleanup,render,screen, fireEvent} from '@testing-library/react';
import Modulator from './modulator';
import Default from './default.json'
import { Profile } from './profile';

beforeEach(()=>{
  cleanup();
})

describe(`Rendering`, ()=>{
  const profile = {settings: Default};
  it(`renders waveform type radio buttons`,()=>{
    render(<Modulator settings={profile}/>);

    expect(screen.getAllByRole(`radio`).length).toBe(4);
    expect(screen.getAllByRole(`slider`).length).toBe(2);
  });

  it(`check input labels`,()=>{
    render(<Modulator settings={profile}/>);

    expect(screen.getByRole(`radio`,{name:`sine`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`square`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`triangle`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`sawtooth`})).toBeInTheDocument(); 
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
  });

  it(`changes volume level`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Modulator/>
      </Profile.Provider>
    )
    const volume = screen.getByRole(`slider`,{name:`volume`});

    fireEvent.change(volume, {target:{value:0.32}});
    expect(profile.settings.modulator.volume).toEqual(`-9.90`);
    expect(volume.value).toBe(`0.32`);
  });

  it(`sets ratio to modulate carrier`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Modulator/>
      </Profile.Provider>
    )
    const ratio = screen.getByRole(`slider`,{name:`frequency ratio`});

    fireEvent.change(ratio, {target:{value:0.5}});
    expect(profile.settings.modulator.ratio).toEqual(`0.5`);
    expect(ratio.value).toEqual(`0.5`);
  });
});
