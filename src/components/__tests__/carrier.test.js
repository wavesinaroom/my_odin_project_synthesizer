import '@testing-library/jest-dom';
import {cleanup,render,screen, fireEvent} from '@testing-library/react';
import Audio from '../audio';
import Carrier from '../carrier';
import Default from '../default.json'
import { Profile } from '../profile';

jest.mock('../audio',()=>{
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
    expect(screen.getByRole(`radio`,{name:`sine`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`square`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`triangle`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`sawtooth`})).toBeInTheDocument(); 
  });

  it(`renders values from profile`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Carrier/>
      </Profile.Provider>
    )
    expect(screen.getByRole(`radio`,{name:`${profile.settings.carrier.type}`})).toBeChecked(); 
    expect(screen.getByRole(`slider`,{name:`detune`}).value).toBe(`${profile.settings.carrier.detune}`)

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

    expect(screen.getByRole(`radio`, {name:`${profile.settings.carrier.type}`})).toBeChecked();
    expect(profile.settings.carrier.type).toMatch(`sine`);  

    fireEvent.click(screen.getByRole(`radio`,{name:`square`}));

    expect(screen.getByRole(`radio`, {name:`${profile.settings.carrier.type}`})).toBeChecked();
    expect(profile.settings.carrier.type).toMatch(`square`);

    expect(Audio.setCarrier).toBeCalled();
  });

  it(`changes detune value`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Carrier/>
      </Profile.Provider>
    )
    const slider = screen.getByRole(`slider`,{name:`detune`});

    expect(profile.settings.carrier.detune).toEqual(0.0001);
    expect(slider.value).toEqual(`0.0001`);

    fireEvent.change(slider, {target:{value:32}});

    expect(profile.settings.carrier.detune).toEqual(`32`);
    expect(slider.value).toEqual(`32`);

    expect(Audio.setCarrier).toBeCalled();
  });
});
