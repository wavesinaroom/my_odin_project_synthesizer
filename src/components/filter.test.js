import '@testing-library/jest-dom' 
import {cleanup,fireEvent,render,screen} from "@testing-library/react";
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
  })
})


