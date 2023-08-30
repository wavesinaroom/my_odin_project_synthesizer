import '@testing-library/jest-dom'
import { screen, render, cleanup, fireEvent} from "@testing-library/react";
import Audio from '../audio';
import Envelope from "../envelope";
import { Profile } from '../profile';
import Default from '../default.json'

jest.mock('../audio',()=>{
  return{setEnvelope: jest.fn()}
});

beforeEach(()=>{
  cleanup();
});

describe(`Rendering`, ()=>{
  const profile = {settings:Default};

  it(`renders four sliders`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Envelope/>
      </Profile.Provider>
    )

    expect(screen.getByLabelText(`attack`)).toBeInTheDocument();
    expect(screen.getByLabelText(`decay`)).toBeInTheDocument();
    expect(screen.getByLabelText(`sustain`)).toBeInTheDocument();
    expect(screen.getByLabelText(`release`)).toBeInTheDocument();
  });

  it(`renders JSON profile values`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Envelope/>
      </Profile.Provider>
    )
    
    expect(screen.getByLabelText(`attack`).value).toBe(`${profile.settings.envelope.a}`);
    expect(screen.getByLabelText(`decay`).value).toBe(`${profile.settings.envelope.d}`);
    expect(screen.getByLabelText(`sustain`).value).toBe(`${profile.settings.envelope.s}`);
    expect(screen.getByLabelText(`release`).value).toBe(`${profile.settings.envelope.r}`);
  })
})

describe(`Interaction`,()=>{
  const profile = {settings:Default};

  it(`changes attack value in profile`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Envelope/>
      </Profile.Provider>
    )

    const slider = screen.getByRole(`slider`,{name:`attack`});
    
    expect(profile.settings.envelope.a).toBe(0);
    expect(slider.value).toBe(`0`);

    fireEvent.change(slider, {target:{value:0.5}});

    expect(profile.settings.envelope.a).toBe(`0.5`);
    expect(slider.value).toBe(`0.5`)
    expect(Audio.setEnvelope).toBeCalled();
  })

  it(`changes decay value in profile`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Envelope/>
      </Profile.Provider>
    )

    const slider = screen.getByRole(`slider`,{name:`decay`});
    
    expect(profile.settings.envelope.d).toBe(0);
    expect(slider.value).toBe(`0`);

    fireEvent.change(slider, {target:{value:0.5}});

    expect(profile.settings.envelope.d).toBe(`0.5`);
    expect(slider.value).toBe(`0.5`)
    expect(Audio.setEnvelope).toBeCalled();
  })

  it(`changes sustain value in profile`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Envelope/>
      </Profile.Provider>
    )

    const slider = screen.getByRole(`slider`,{name:`sustain`});

    expect(profile.settings.envelope.s).toBe(0);
    expect(slider.value).toBe(`0`);

    fireEvent.change(slider, {target:{value:0.5}});

    expect(profile.settings.envelope.s).toBe(`0.5`);
    expect(slider.value).toBe(`0.5`)
    expect(Audio.setEnvelope).toBeCalled();

  })

  it(`changes release value in profile`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Envelope/>
      </Profile.Provider>
    )

    const slider = screen.getByRole(`slider`,{name:`release`});

    expect(profile.settings.envelope.r).toBe(0);
    expect(slider.value).toBe(`0`);

    fireEvent.change(slider, {target:{value:0.5}});

    expect(profile.settings.envelope.r).toBe(`0.5`);
    expect(slider.value).toBe(`0.5`)
    expect(Audio.setEnvelope).toBeCalled();
  })
})
