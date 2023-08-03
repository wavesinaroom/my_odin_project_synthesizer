import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen } from "@testing-library/react"; 
import Login from "./login";

beforeEach(()=>{
  cleanup();
});

it(`renders login form contents`,async()=>{
  render(<Login/>);

  expect(screen.getByRole(`group`, {name:`Please enter your e-mail and password`})).toBeInTheDocument();
  expect(screen.getByLabelText(`E-mail:`)).toBeInTheDocument();
  expect(screen.getByRole(`textbox`,{name:`E-mail:`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Signup`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Login`})).toBeInTheDocument();
});

it(`renders signup form contents on button click`, ()=>{
  render(<Login/>);

  fireEvent.click(screen.getByRole(`button`, {name:`Signup`}));

  expect(screen.getByRole(`group`, {name:`Please enter e-mail and password to create an account`})).toBeInTheDocument();
  expect(screen.getByLabelText(`E-mail:`)).toBeInTheDocument();
  expect(screen.getByRole(`textbox`,{name:`E-mail:`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Sign up`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Login`})).toBeInTheDocument();

})
