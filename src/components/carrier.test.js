import '@testing-library/jest-dom';
import {cleanup,render,screen, fireEvent} from '@testing-library/react';
import Carrier from './carrier';
import Settings from './settings.json'

beforeEach(()=>{
  cleanup();
})

describe(`Rendering`, ()=>{

  it(`renders waveform type radio buttons`,()=>{
    render(<Carrier settings={Settings}/>);

    expect(screen.getAllByRole(`radio`).length).toBe(4);
  });

  it(`checks radio buttons label match waveform types`,()=>{
    render(<Carrier settings={Settings}/>);

    expect(screen.getByRole(`radio`,{name:`sine`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`square`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`triangle`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`sawtooth`})).toBeInTheDocument(); 
  });

  it(`chooses a waveform and updates JSON file`,()=>{
    render(<Carrier settings={Settings}/>);

    fireEvent.click(screen.getByRole(`radio`,{name:`sine`}));
    expect(Settings.carrier.type).toMatch(`sine`);
  });

  it(`chooses one waveform only`,()=>{
    render(<Carrier settings={Settings}/>);

    fireEvent.click(screen.getByRole(`radio`,{name:`sine`}));
    expect(Settings.carrier.type).toMatch(`sine`);

    fireEvent.click(screen.getByRole(`radio`,{name:`square`}));
    expect(Settings.carrier.type).toMatch(`square`);
    expect(Settings.carrier.type).not.toMatch(`sine`);
  })

  it(`changes volume level`,()=>{
    render(<Carrier settings={Settings}/>);
    const volume = screen.getByRole(`slider`,{name:`volume`});
    expect(Settings.carrier.volume).toEqual(1);

    fireEvent.change(volume, {target:{value:`0.32`}});
    expect(Settings.carrier.volume).toEqual(-9.89700043360188);
    expect(volume.value).toBe(`0.32`);
  })
});
