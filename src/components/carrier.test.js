import '@testing-library/jest-dom';
import {cleanup,render,screen, fireEvent} from '@testing-library/react';
import Carrier from './carrier';
import Default from './default.json'

beforeEach(()=>{
  cleanup();
})

describe(`Rendering`, ()=>{
  const profile = {info:Default};

  it(`renders waveform type radio buttons`,()=>{
    render(<Carrier settings={profile}/>);

    expect(screen.getAllByRole(`radio`).length).toBe(4);
  });

  it(`checks radio buttons label match waveform types`,()=>{
    render(<Carrier settings={profile}/>);

    expect(screen.getByRole(`radio`,{name:`sine`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`square`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`triangle`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`sawtooth`})).toBeInTheDocument(); 
  });
});

describe(`Interaction`,()=>{
  const profile = {info:Default};
  it(`chooses a waveform and updates JSON file`,()=>{
    render(<Carrier settings={profile}/>);

    expect(profile.info.carrier.type).toMatch(`sine`);  
    fireEvent.click(screen.getByRole(`radio`,{name:`square`}));
    expect(profile.info.carrier.type).toMatch(`square`);
  });

  it(`changes volume level`,()=>{
    render(<Carrier settings={profile}/>);
    const volume = screen.getByRole(`slider`,{name:`volume`});
    expect(profile.info.carrier.volume).toEqual(1);

    fireEvent.change(volume, {target:{value:`0.32`}});
    expect(profile.info.carrier.volume).toEqual(-9.89700043360188);
    expect(volume.value).toBe(`0.32`);
  })
});
