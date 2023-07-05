import {cleanup,screen} from "@testing-library/react";
import Carrier from "./carrier";
import Settings from 'settings.json'

beforeEach(()=>{
  cleanup();
})

describe("Rendering", ()=>{
  it("renders waveform type radio buttons",()=>{
    expect(screen.getAllByRole(`label`).length).toEqual(4);
    expect(screen.getByRole(`label`,{name:`sine`})).toBeInTheDocument();
    expect(screen.getByRole(`label`,{name:`triangle`})).toBeInTheDocument();
    expect(screen.getByRole(`label`,{name:`square`})).toBeInTheDocument();
    expect(screen.getByRole(`label`,{name:`sawtooth`})).toBeInTheDocument();
  })
});
