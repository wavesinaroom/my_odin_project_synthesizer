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
  })
})
