import '@testing-library/jest-dom'
import { screen, render, cleanup, fireEvent} from "@testing-library/react";
import Envelope from "./envelope";
import Default from './default.json'
import { Profile } from './profile';

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
    expect(screen.getAllByRole(`slider`).length).toBe(4);
  });

  it(`renders the right labels`,()=>{
    render(
      <Profile.Provider value={profile}>
        <Envelope/>
      </Profile.Provider>
    )

    expect(screen.getByLabelText(`attack`)).toBeInTheDocument();
    expect(screen.getByLabelText(`decay`)).toBeInTheDocument();
    expect(screen.getByLabelText(`sustain`)).toBeInTheDocument();
    expect(screen.getByLabelText(`release`)).toBeInTheDocument();
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
    const attack = screen.getByRole(`slider`,{name:`attack`});
    
    fireEvent.change(attack, {target:{value:0.5}});
    expect(profile.settings.envelope.a).toBe(`0.5`);
  })
  it(`changes decay value in profile`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Envelope/>
      </Profile.Provider>
    )
    const decay = screen.getByRole(`slider`,{name:`decay`});
    
    fireEvent.change(decay, {target:{value:0.5}});
    expect(profile.settings.envelope.d).toBe(`0.5`);
  })
  it(`changes sustain value in profile`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Envelope/>
      </Profile.Provider>
    )
    const sustain = screen.getByRole(`slider`,{name:`sustain`});
    
    fireEvent.change(sustain, {target:{value:0.5}});
    expect(profile.settings.envelope.s).toBe(`0.5`);
  })
  it(`changes release value in profile`, ()=>{
    render(
      <Profile.Provider value={profile}>
        <Envelope/>
      </Profile.Provider>
    )
    const release = screen.getByRole(`slider`,{name:`release`});
    
    fireEvent.change(release, {target:{value:0.5}});
    expect(profile.settings.envelope.r).toBe(`0.5`);
  })
})
