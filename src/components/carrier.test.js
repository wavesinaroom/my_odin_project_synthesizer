import '@testing-library/jest-dom';
import {cleanup,getByTestId,render,screen, waitFor} from '@testing-library/react';
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
    expect(screen.getByRole(`radio`,{name:`sine`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`square`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`triangle`})).toBeInTheDocument(); 
    expect(screen.getByRole(`radio`,{name:`sawtooth`})).toBeInTheDocument(); 
  });
});
