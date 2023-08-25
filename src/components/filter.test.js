import '@testing-library/jest-dom' 
import {cleanup,fireEvent,render,screen} from "@testing-library/react";
import Audio from './audio';
import Filter from "./filter";
import Default from "./default.json"
import { Profile } from './profile';

jest.mock('./audio',()=>{
  return {setFilter: jest.fn()}
})
beforeEach(()=>{
  cleanup();
});

describe(`Rendering`,()=>{

  const profile = {settings:Default};

  it(`renders all input elements`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Filter/>
      </Profile.Provider>
    )

    expect(screen.getAllByRole(`slider`).length).toBe(4);
    expect(screen.getAllByRole(`radio`).length).toBe(8);

    expect(screen.getByRole(`slider`,{name:`frequency`})).toBeInTheDocument();
    expect(screen.getByRole(`slider`,{name:`detune`})).toBeInTheDocument();
    expect(screen.getByRole(`slider`,{name:`q`})).toBeInTheDocument();
    expect(screen.getByRole(`slider`,{name:`gain`})).toBeInTheDocument();

    expect(screen.getByLabelText(`lowpass`)).toBeInTheDocument();
    expect(screen.getByLabelText(`highpass`)).toBeInTheDocument();
    expect(screen.getByLabelText(`bandpass`)).toBeInTheDocument();
    expect(screen.getByLabelText(`lowshelf`)).toBeInTheDocument();
    expect(screen.getByLabelText(`lowpass`)).toBeInTheDocument();
    expect(screen.getByLabelText(`lowpass`)).toBeInTheDocument();
    expect(screen.getByLabelText(`lowpass`)).toBeInTheDocument();
  });
  
  it(`renders values from default.json file`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Filter/>
      </Profile.Provider>
    )


    expect(screen.getByRole(`slider`,{name:`frequency`}).value).toBe(`${profile.settings.filter.frequency}`);
    expect(screen.getByRole(`slider`,{name:`detune`}).value).toBe(`${profile.settings.filter.detune}`);
    expect(screen.getByRole(`slider`,{name:`q`}).value).toBe(`${profile.settings.filter.q}`);
    expect(screen.getByRole(`slider`,{name:`gain`}).value).toBe(`${profile.settings.filter.gain}`);
    expect(`${profile.settings.filter.type}`).toBe(`highpass`);
  });
});

describe(`Interaction`,()=>{

  const profile = {settings:Default};

  it(`sets frequency slider to a specific value`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Filter/>
      </Profile.Provider>
    )
    const slider = screen.getByRole(`slider`,{name:`frequency`});

    expect(profile.settings.filter.frequency).toBe(1000)
    expect(slider.value).toBe(`1000`)

    fireEvent.change(slider, {target:{value: 3000}});

    expect(profile.settings.filter.frequency).toBe(`3000`);
    expect(slider.value).toBe(`3000`)

    expect(Audio.setFilter).toBeCalledWith(profile.settings.filter);
    
  });

  it(`sets detune slider to a specific value`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Filter/>
      </Profile.Provider>
    )
    const slider = screen.getByRole(`slider`,{name:`detune`});

    expect(profile.settings.filter.detune).toBe(1)
    expect(slider.value).toBe(`1`);

    fireEvent.change(slider, {target:{value:50}});

    expect(profile.settings.filter.detune).toBe(`50`);
    expect(slider.value).toBe(`50`);

    expect(Audio.setFilter).toBeCalledWith(profile.settings.filter);
  });


  it(`sets q slider to a specific value`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Filter/>
      </Profile.Provider>
    )
    const slider = screen.getByRole(`slider`,{name:`q`});

    expect(profile.settings.filter.q).toBe(1)
    expect(slider.value).toBe(`1`);

    fireEvent.change(slider, {target:{value:500}});

    expect(profile.settings.filter.q).toBe(`500`);
    expect(slider.value).toBe(`500`);

    expect(Audio.setFilter).toBeCalledWith(profile.settings.filter);
  });

  it(`sets gain slider to a specific value`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Filter/>
      </Profile.Provider>
    )
    const slider = screen.getByRole(`slider`,{name:`gain`});

    expect(profile.settings.filter.gain).toBe(1)
    expect(slider.value).toBe(`1`);

    fireEvent.change(slider, {target:{value:0.5}});

    expect(profile.settings.filter.gain).toBe(`0.5`);
    expect(slider.value).toBe(`0.5`);

    expect(Audio.setFilter).toBeCalledWith(profile.settings.filter);
  });

  it(`set filter type`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Filter/>
      </Profile.Provider>
    )
    const radio = screen.getByRole(`radio`,{name:`lowpass`});

    expect(profile.settings.filter.type).toBe(`highpass`);
    expect(screen.getByRole(`radio`, {name:`${profile.settings.filter.type}`})).toBeChecked();

    fireEvent.click(radio);

    expect(profile.settings.filter.type).toBe(`lowpass`);
    expect(screen.getByRole(`radio`, {name:`lowpass`})).toBeChecked();

    expect(Audio.setFilter).toBeCalledWith(profile.settings.filter);
  });
});
