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
