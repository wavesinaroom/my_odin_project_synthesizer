import '@testing-library/jest-dom' 
import {cleanup,render,screen} from "@testing-library/react";
import Filter from "./filter";
import Settings from "./settings.json"

beforeEach(()=>{
  cleanup();
});

it(`renders all input elements`,()=>{
  render(<Filter settings={Settings}/>);

  expect(screen.getAllByRole(`slider`).length).toBe(4);
  expect(screen.getAllByRole(`radio`).length).toBe(4);
});
