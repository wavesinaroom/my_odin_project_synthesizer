import '@testing-library/jest-dom';
import {cleanup,render,screen, fireEvent} from '@testing-library/react';
import Modulator from './modulator';
import Default from './default.json'

beforeEach(()=>{
  cleanup();
})

describe.only(`Rendering`, ()=>{
  const profile = {info: Default};
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
  const profile= {info:Default};

  it(`chooses a waveform and updates JSON file`,()=>{
    render(<Modulator settings={profile}/>);

    expect(profile.info.modulator.type).toMatch(`sine`);
    fireEvent.click(screen.getByRole(`radio`,{name:`triangle`}));
    expect(profile.info.modulator.type).toMatch(`triangle`);
  });

  it(`changes volume level`,()=>{
    render(<Modulator settings={profile}/>);
    const volume = screen.getByRole(`slider`,{name:`volume`});

    fireEvent.change(volume, {target:{value:0.32}});
    expect(profile.info.modulator.volume).toEqual(`-9.90`);
    expect(volume.value).toBe(`0.32`);
  });

  it(`sets ratio to modulate carrier`,()=>{
    render(<Modulator settings={profile}/>);
    const frequency = screen.getByRole(`slider`,{name:`frequency ratio`});
    expect(profile.info.modulator.ratio).toEqual(0);

    fireEvent.change(frequency, {target:{value:0.5}});
    expect(profile.info.modulator.ratio).toEqual(`0.5`);
    expect(frequency.value).toEqual(`0.5`);
  });
});
