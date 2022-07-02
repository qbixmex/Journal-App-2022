import { configureStore } from "@reduxjs/toolkit";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { authSlice } from "../../../src/store/auth/authSlice";
import { notAuthenticatedState } from "../../store/fixtures/authFixtures";
import { RegisterPage } from "../../../src/auth/pages/RegisterPage";

mockStartCreatingUserWithEmailAndPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
  ...jest.requireActual('../../../src/store/auth/thunks'),
  startCreatingUserWithEmailAndPassword: ({ displayName, email, password }) => {
    return () => mockStartCreatingUserWithEmailAndPassword({ displayName, email, password })
  }
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (dispatch) => dispatch(),
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
});

describe('Tests on <Register />', () => {

  beforeEach( () => jest.clearAllMocks() );

  test('Should show successfully', () => {
    const { container } = render(
      <Provider store={ store }>
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );

    const h1 = container.querySelector('h1');
    const registerBtn = container.querySelector('#register-button');

    expect( h1.innerHTML ).toBe('Register');
    expect( registerBtn.innerHTML ).toContain('Register');
    expect( registerBtn.disabled ).toBe(false);

  });

  test('Should dispatch startCreatingUserWithEmailAndPassword after form is submitted', () => {

    const displayName = 'Peter Parker';
    const email = 'spiderman@marvel.com';
    const password = 'amazingspiderman';

    const { container } = render(
      <Provider store={ store }>
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );
    
    const displayNameField = container.querySelector('#display-name');
    const emailField = container.querySelector('#email');
    const passwordField = container.querySelector('#password');
    const registerBtn = container.querySelector('#register-button');

    fireEvent.change(displayNameField, { target: { name: 'displayName', value: displayName } });
    fireEvent.change(emailField, { target: { name: 'email', value: email } });
    fireEvent.change(passwordField, { target: { name: 'password', value: password } });

    fireEvent.click(registerBtn);

    expect( mockStartCreatingUserWithEmailAndPassword ).toHaveBeenCalledWith({ displayName, email, password });

  });

  test('Should dispatch startCreatingUserWithEmailAndPassword after form is submitted - Error', () => {

    const { container } = render(
      <Provider store={ store }>
        <MemoryRouter>
          <RegisterPage />
        </MemoryRouter>
      </Provider>
    );
    
    const registerForm = container.querySelector('#register-form');

    fireEvent.submit(registerForm);

    expect( mockStartCreatingUserWithEmailAndPassword ).not.toHaveBeenCalled();

  });
});
