import '@testing-library/jest-dom'
import {render, screen, fireEvent, cleanup} from '@testing-library/react'
import Audio from '../audio'
import Default from '../default.json'
import LFO from '../lfo'
import { Profile } from '../profile';

jest.mock('../audio',()=>{
  return{setLFO: jest.fn(),
         plugLFO: jest.fn()}
})

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

  it(`renders values from JSON profile`,()=>{
    render(
      <Profile.Provider value={profile}>
        <LFO/>
      </Profile.Provider>
    )
    expect(screen.getByRole(`radio`,{name:`${profile.settings.lfo.type}`})).toBeChecked();
    expect(screen.getByRole(`slider`,{name:`frequency`}).value).toBe(`${profile.settings.lfo.frequency}`);
    expect(screen.getByRole(`radio`,{name:`${profile.settings.lfo.target}`})).toBeChecked();
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
    expect(screen.getByRole(`radio`,{name:`square`})).toBeChecked();
    expect(Audio.setLFO).toBeCalledWith(profile.settings.lfo);
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
    expect(frequency.value).toBe(`10`);
    expect(Audio.setLFO).toBeCalledWith(profile.settings.lfo);
  });
  it(`changes target value in profile`,()=>{
    render(
      <Profile.Provider value={profile}>
        <LFO/>
      </Profile.Provider>
    )
    const modulator = screen.getByRole(`radio`,{name:`modulator`});

    fireEvent.click(modulator);

    expect(profile.settings.lfo.target).toBe(`modulator`);
    expect(Audio.setLFO).toBeCalledWith(profile.settings.lfo);
  });
});
