import { render, screen, fireEvent } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../store/fixtures/authFixtures";

// VERY IMPORTANT to name it with prefix mock
const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailAndPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
  ...jest.requireActual('../../../src/store/auth/thunks'),
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailAndPassword: ( email, password ) => {
    return () => mockStartLoginWithEmailAndPassword( email, password );
  }
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => ( dispatch ) => dispatch()
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
});

describe('Test on <LoginPage />', () => {

  beforeEach(() => jest.clearAllMocks() );

  test('Should show successfully', () => {
    render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });

  test('Should dispatch startGoogleSignIn action when SignIn with Google Button', () => {

    const { container } = render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = container.querySelector('#google-button');

    fireEvent.click( googleBtn );

    expect( mockStartGoogleSignIn ).toHaveBeenCalled();

  });

  test('Should dispatch startLoginWithEmailAndPassword when form is submitted', () => {

    const email = 'johndoe@domain.com';
    const password = '0123456789';

    const { container } = render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const loginForm = container.querySelector('#submit-form');
    const emailField = container.querySelector('#email');
    const passwordField = container.querySelector('#password');

    fireEvent.change( emailField, { target: { name: 'email', value: email }});
    fireEvent.change( passwordField, { target: { name: 'password', value: password }});
    fireEvent.submit( loginForm );

    expect( mockStartLoginWithEmailAndPassword ).toHaveBeenCalledWith( email, password );

  });

  test('Should not call startLoginWithEmailAndPassword if form inputs are empty', () => {

    const { container } = render(
      <Provider store={ store }>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const loginForm = container.querySelector('#submit-form');
    fireEvent.submit(loginForm);

    expect(mockStartLoginWithEmailAndPassword).not.toHaveBeenCalled();

  });
});
