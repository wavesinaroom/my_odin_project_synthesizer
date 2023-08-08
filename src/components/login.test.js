import '@testing-library/jest-dom'
import { cleanup, render, screen, fireEvent, waitFor} from "@testing-library/react"; 
import supabase from '../config/supabaseClient';
import Login from "./login";

beforeEach(()=>{
  cleanup();
});

it(`renders login form contents`,()=>{
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

it(`logs in existing user`,()=>{
  render(<Login/>);

  expect(screen.getByTestId(`exception`).textContent).toMatch(``);

  fireEvent.change(screen.getByRole(`textbox`,{target:{value:`jaureguij@javeriana.edu.co`}}));
  fireEvent.change(screen.getByLabelText(`Password:`, {target:{value:`Op2n1beethoven`}}));
  fireEvent.click(screen.getByRole(`button`,{name:`Login`}));

  expect(screen.getByTestId(`exception`).textContent).toMatch(``);
});

it(`fails user log in due to wrong password`,async()=>{
  jest
    .spyOn(supabase.auth, 'signInWithPassword')

  render(<Login/>);
  const exception = screen.getByTestId(`exception`);
  
  expect(exception.textContent).toMatch(``);

  fireEvent.change(screen.getByRole(`textbox`,{target:{value:`jaureguij@javeriana.edu.co`}}));
  fireEvent.change(screen.getByLabelText(`Password:`, {target:{value:`NotAPassword`}}));
  fireEvent.click(screen.getByRole(`button`,{name:`Login`}));
  expect(supabase.auth.signInWithPassword).toBeCalled();

  await waitFor(()=>{
    expect(exception.textContent).toMatch(`Invalid login credentials`); 
  });
});
