import '@testing-library/jest-dom'
import {render, screen, fireEvent, cleanup} from '@testing-library/react'
import Default from './default.json'
import LFO from './lfo'

beforeEach(()=>{
  cleanup();
});

describe(`Rendering`,()=>{
  const profile = {info:Default};

  it(`renders the right amount of elements`,()=>{
    render(<LFO settings={profile}/>);

    expect(screen.getAllByRole(`radio`).length).toBe(8);
    expect(screen.getAllByRole(`slider`).length).toBe(1);
  });

  it(`renders the right input values`,()=>{
    render(<LFO settings={profile}/>);

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
  const profile = {info:Default};

  it(`changes type value in profile`,()=>{
    render(<LFO settings={profile}/>);
    const type = screen.getByRole(`radio`,{name:`square`});

    fireEvent.click(type);

    expect(profile.info.lfo.type).toBe(`square`);
  });

  it(`changes frequency value in profile`,()=>{
    render(<LFO settings={profile}/>);
    const frequency = screen.getByRole(`slider`,{name:`frequency`});

    fireEvent.change(frequency, {target:{value:10}});

    expect(profile.info.lfo.frequency).toBe(`10`);
  });
  it(`changes target value in profile`,()=>{
    render(<LFO settings={profile}/>);
    const envelope = screen.getByRole(`radio`,{name:`envelope`});

    fireEvent.click(envelope);

    expect(profile.info.lfo.target).toBe(`envelope`);
  });
});
