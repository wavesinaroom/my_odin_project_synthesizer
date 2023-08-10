import '@testing-library/jest-dom'
import { screen, render, cleanup} from "@testing-library/react";
import Envelope from "./envelope";
import Default from './default.json'

beforeEach(()=>{
  cleanup();
});

describe(`Rendering`, ()=>{
  const profile = {info:Default};

  it(`renders four sliders`,()=>{
    render(<Envelope settings={profile}/>);

    expect(screen.getAllByRole(`slider`).length).toBe(4);
  });

  it(`renders the right labels`,()=>{
    render(<Envelope settings={profile}/>);

    expect(screen.getByLabelText(`attack`)).toBeInTheDocument();
    expect(screen.getByLabelText(`decay`)).toBeInTheDocument();
    expect(screen.getByLabelText(`sustain`)).toBeInTheDocument();
    expect(screen.getByLabelText(`release`)).toBeInTheDocument();
  })
})

