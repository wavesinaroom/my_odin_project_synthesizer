import '@testing-library/jest-dom';
import {cleanup,render,screen, waitFor} from '@testing-library/react';
import Carrier from './carrier';
import Settings from './settings.json'

beforeEach(()=>{
  cleanup();
})

describe(`Rendering`, ()=>{

  it(`renders waveform type radio buttons`,()=>{
    render(<Carrier settings={Settings}/>);
    expect(screen.getAllByRole(`radio`).length).toBe(4);
  });

  it(`checks radio buttons label match waveform types`,()=>{
    render(<Carrier settings={Settings}/>);

    waitFor(async()=>{
    await (screen.getByRole(`radio`,{name:`sine`})).toBeInTheDocument();
    });
  });
});
