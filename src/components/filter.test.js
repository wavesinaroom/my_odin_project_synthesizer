import '@testing-library/jest-dom' 
import {cleanup,fireEvent,render,screen, waitFor} from "@testing-library/react";
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

it(`changes frequency slider value`, async()=>{
  render(<Filter settings={Settings}/>);
  const frequency = screen.getByRole(`slider`, {name:`frequency`});

  expect(Settings.filter.frequency).toBe(1000);
  expect(frequency.value).toMatch(`1000`);

  fireEvent.change(frequency, {target:{value:200}});

  expect(frequency.value).toMatch(`200`);
  expect(Settings.filter.frequency).toMatch(`200`);
});
