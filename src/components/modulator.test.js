import '@testing-library/jest-dom';
import {cleanup,render,screen, fireEvent} from '@testing-library/react';
import Modulator from './modulator';
import Settings from './settings.json'

beforeEach(()=>{
  cleanup();
})

describe(`Rendering`, ()=>{

  it(`renders waveform type radio buttons`,()=>{
    render(<Modulator settings={Settings}/>);

    expect(screen.getAllByRole(`radio`).length).toBe(4);
  });

  it(`checks radio buttons label match waveform types`,()=>{
    render(<Modulator settings={Settings}/>);

    expect(screen.getByRole(`radio`,{name:`sine`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`square`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`triangle`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`sawtooth`})).toBeInTheDocument(); 
  });

  it(`chooses a waveform and updates JSON file`,()=>{
    render(<Modulator settings={Settings}/>);

    fireEvent.click(screen.getByRole(`radio`,{name:`sine`}));
    expect(Settings.modulator.type).toMatch(`sine`);
  });

  it(`chooses one waveform only`,()=>{
    render(<Modulator settings={Settings}/>);

    fireEvent.click(screen.getByRole(`radio`,{name:`sine`}));
    expect(Settings.modulator.type).toMatch(`sine`);

    fireEvent.click(screen.getByRole(`radio`,{name:`square`}));
    expect(Settings.modulator.type).toMatch(`square`);
    expect(Settings.modulator.type).not.toMatch(`sine`);
  });

  it(`changes volume level`,()=>{
    render(<Modulator settings={Settings}/>);
    const volume = screen.getByRole(`slider`,{name:`volume`});
    expect(Settings.modulator.volume).toEqual(1);

    fireEvent.change(volume, {target:{value:`0.32`}});
    expect(Settings.modulator.volume).toEqual(-9.89700043360188);
    expect(volume.value).toBe(`0.32`);
  });
});
