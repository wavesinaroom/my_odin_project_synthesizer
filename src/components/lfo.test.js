import '@testing-library/jest-dom'
import {render, screen, fireEvent, cleanup} from '@testing-library/react'
import Default from './default.json'
import LFO from './lfo'
import { Profile } from './profile';

beforeEach(()=>{
  cleanup();
});

describe(`Rendering`,()=>{
  const profile = {settings:Default};

  it(`renders the right amount of elements`,()=>{
    render(
      <Profile.Provider value={profile}>
        <LFO/>
      </Profile.Provider>
    )

    expect(screen.getAllByRole(`radio`).length).toBe(8);
    expect(screen.getAllByRole(`slider`).length).toBe(1);
  });

  it(`renders the right input values`,()=>{
    render(
      <Profile.Provider value={profile}>
        <LFO/>
      </Profile.Provider>
    )

    expect(screen.getByRole(`radio`,{name:`sine`})).toBeInTheDocument();
    expect(screen.getByRole(`radio`,{name:`square`})).toBeInTheDocument();
    expect(screen.getByRole(`radio`,{name:`sawtooth`})).toBeInTheDocument();
    expect(screen.getByRole(`radio`,{name:`triangle`})).toBeInTheDocument();

    expect(screen.getByRole(`slider`,{name:`frequency`})).toBeInTheDocument();

    expect(screen.getByRole(`radio`,{name:`carrier`})).toBeInTheDocument();
    expect(screen.getByRole(`radio`,{name:`modulator`})).toBeInTheDocument();
    expect(screen.getByRole(`radio`,{name:`envelope`})).toBeInTheDocument();
    expect(screen.getByRole(`radio`,{name:`none`})).toBeInTheDocument();
  });
});

describe(`Interaction`,()=>{
  const profile = {settings:Default};

  it(`changes type value in profile`,()=>{
    render(
      <Profile.Provider value={profile}>
        <LFO/>
      </Profile.Provider>
    )
    const type = screen.getByRole(`radio`,{name:`square`});

    fireEvent.click(type);

    expect(profile.settings.lfo.type).toBe(`square`);
  });

  it(`changes frequency value in profile`,()=>{
    render(
      <Profile.Provider value={profile}>
        <LFO/>
      </Profile.Provider>
    )
    const frequency = screen.getByRole(`slider`,{name:`frequency`});

    fireEvent.change(frequency, {target:{value:10}});

    expect(profile.settings.lfo.frequency).toBe(`10`);
  });
  it(`changes target value in profile`,()=>{
    render(
      <Profile.Provider value={profile}>
        <LFO/>
      </Profile.Provider>
    )
    const envelope = screen.getByRole(`radio`,{name:`envelope`});
    const modulator = screen.getByRole(`radio`,{name:`modulator`});

    fireEvent.click(envelope);

    expect(profile.settings.lfo.target).toBe(`envelope`);

    fireEvent.click(modulator);

    expect(profile.settings.lfo.target).toBe(`modulator`);
  });
});
