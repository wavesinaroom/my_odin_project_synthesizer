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
  })
})

