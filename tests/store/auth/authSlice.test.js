import { authSlice, login, logout, checkingCredentials } from "../../../src/store/auth/authSlice";
import { initialState, authenticatedState, notAuthenticatedState, demoUser } from "../fixtures/authFixtures";

describe('Tests on authSlice', () => {
  test('Should back to initial state and named "auth"', () => {
    const state = authSlice.reducer( initialState, {} );
    expect(authSlice.name).toBe('auth');
    expect( state ).toEqual( initialState );
  });

  test('Should call login action with credentials', () => {
    const state = authSlice.reducer( notAuthenticatedState, login({ user: demoUser }) );
    expect( state ).toEqual({
      status: 'authenticated',
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null
    });
  });

  test('Should call logout action without credentials', () => {
    const state = authSlice.reducer( authenticatedState, logout() );
    expect( state ).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined
    });
  });

  test('Should call logout action with credentials', () => {
    const errorMessageTest = 'Invalid credentials';
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage: errorMessageTest })
    );
    expect( state ).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessageTest
    });
  });

  test('Should change state to "checking"', () => {
    const state = authSlice.reducer( notAuthenticatedState, checkingCredentials() );
    expect( state.status ).toBe('checking');
  });
});
