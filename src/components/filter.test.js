import '@testing-library/jest-dom' 
import {cleanup,fireEvent,render,screen, waitFor} from "@testing-library/react";
import Filter from "./filter";
import Default from "./default.json"

beforeEach(()=>{
  cleanup();
});

describe(`Rendering`,()=>{

  const profile = {info:Default};

  it(`renders all input elements`,()=>{
    render(<Filter settings={profile}/>);

    expect(screen.getAllByRole(`slider`).length).toBe(4);
    expect(screen.getAllByRole(`radio`).length).toBe(8);

    expect(screen.getByRole(`slider`,{name:`frequency`})).toBeInTheDocument();
    expect(screen.getByRole(`slider`,{name:`detune`})).toBeInTheDocument();
    expect(screen.getByRole(`slider`,{name:`q`})).toBeInTheDocument();
    expect(screen.getByRole(`slider`,{name:`volume`})).toBeInTheDocument();

    expect(screen.getByLabelText(`lowpass`)).toBeInTheDocument();
    expect(screen.getByLabelText(`highpass`)).toBeInTheDocument();
    expect(screen.getByLabelText(`bandpass`)).toBeInTheDocument();
    expect(screen.getByLabelText(`lowshelf`)).toBeInTheDocument();
    expect(screen.getByLabelText(`lowpass`)).toBeInTheDocument();
    expect(screen.getByLabelText(`lowpass`)).toBeInTheDocument();
    expect(screen.getByLabelText(`lowpass`)).toBeInTheDocument();
  });
  
  it(`renders values from default.json file`,()=>{
    render(<Filter settings={profile}/>);


    expect(screen.getByRole(`slider`,{name:`frequency`}).value).toBe(`${profile.info.filter.frequency}`);
    expect(screen.getByRole(`slider`,{name:`detune`}).value).toBe(`${profile.info.filter.detune}`);
    expect(screen.getByRole(`slider`,{name:`q`}).value).toBe(`${profile.info.filter.q}`);
    expect(screen.getByRole(`slider`,{name:`volume`}).value).toBe(`${profile.info.filter.volume}`);

    expect(screen.getByLabelText(`highpass`)).toBeChecked();

    expect(`${profile.info.filter.type}`).toBe(`highpass`);
  });
});


