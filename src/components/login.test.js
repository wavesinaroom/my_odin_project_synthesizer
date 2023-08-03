import '@testing-library/jest-dom'
import { cleanup, render, screen } from "@testing-library/react"; 
import Login from "./login";

beforeEach(()=>{
  cleanup();
});

it(`renders login form contents`,async()=>{
  render(<Login/>);

  expect(screen.getByRole(`form`, {name:``})).toBeInTheDocument();
  expect(screen.getByLabelText(`E-mail:`)).toBeInTheDocument();
  expect(screen.getByRole(`textbox`,{name:`E-mail:`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Signup`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Login`})).toBeInTheDocument();
})
