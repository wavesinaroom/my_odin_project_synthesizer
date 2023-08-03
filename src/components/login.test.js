import '@testing-library/jest-dom'
import { cleanup, render, screen, fireEvent} from "@testing-library/react"; 
import Login from "./login";
import Settings from './settings.json';
import Default from './default.json';

beforeEach(()=>{
  cleanup();
});

it(`renders login form contents`,async()=>{
  render(<Login/>);

  expect(screen.getByRole(`group`, {name:`Please enter your e-mail and password`})).toBeInTheDocument();
  expect(screen.getByLabelText(`E-mail:`)).toBeInTheDocument();
  expect(screen.getByRole(`textbox`,{name:`E-mail:`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Sign up`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Login`})).toBeInTheDocument();
});

it(`renders signup form contents on button click`, ()=>{
  render(<Login/>);

  fireEvent.click(screen.getByRole(`button`, {name:`Sign up`}));

  expect(screen.getByRole(`group`, {name:`Please enter e-mail and password to create an account`})).toBeInTheDocument();
  expect(screen.getByLabelText(`E-mail:`)).toBeInTheDocument();
  expect(screen.getByRole(`textbox`,{name:`E-mail:`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Sign up`})).toBeInTheDocument();
  expect(screen.getByRole(`button`, {name:`Login`})).toBeInTheDocument();
});

it(`comes back to login from sign up form`,()=>{
  render(<Login/>);

  expect(screen.getByRole(`group`, {name:`Please enter your e-mail and password`})).toBeInTheDocument();

    fireEvent.click(screen.getByRole(`button`, {name:`Sign up`}));
    expect(screen.getByRole(`group`, {name:`Please enter e-mail and password to create an account`})).toBeInTheDocument();

  fireEvent.click(screen.getByRole(`button`, {name:`Login`}));
  
    expect(screen.getByRole(`group`, {name:`Please enter your e-mail and password`})).toBeInTheDocument();
});

it(`creates a new session for a new user`,()=>{
  render(<Login/>);

  fireEvent.click(screen.getByRole(`button`, {name:`Sign up`}));
  fireEvent.change(screen.getByRole(`textbox`, {name:`E-mail:`}), {target:{value:`jaureguij@javeriana.edu.co`}});
  fireEvent.change(screen.getByLabelText(`Password:`), {target:{value:`Op2n1beethoven`}});
  fireEvent.click(screen.getByRole(`button`,{name:`Sign up`}));

})
