import {
  signInWithGoogle,
  registerUserWithEmailPassword,
  loginWithEmailAndPassword,
  logoutFirebase,
} from "../../../src/firebase/providers";

import {
  checkingCredentials,
  login,
  logout
} from "../../../src/store/auth/authSlice";

import { clearNotesLogout } from "../../../src/store/journal";

import {
  checkingAuthentication,
  startGoogleSignIn,
  startCreatingUserWithEmailAndPassword,
  startLoginWithEmailAndPassword,
  startLogout,
} from "../../../src/store/auth/thunks";

import { demoUser } from '../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers');

describe('Tests on Auth Thunks', () => {

  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Should invoke checking credentials', async () => {
    await checkingAuthentication()( dispatch );
    expect( dispatch ).toHaveBeenLastCalledWith({
      type: 'auth/checkingCredentials',
      payload: undefined
    });
  });

  test('Should call checkingGoogleSignIn with checkingCredentials and login', async () => {
    const loginData = {
      ok: true,
      ...demoUser
    };

    // Firebase
    await signInWithGoogle.mockResolvedValue( loginData );

    // Thunk
    await startGoogleSignIn()( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

  });

  test('Should call checkingGoogleSignIn with checkingCredentials and login - Error', async () => {

    const errorMessage = 'There were Google SignIn Errors';
    const loginData = { ok: false, errorMessage };

    // Firebase
    await signInWithGoogle.mockResolvedValue( loginData );

    // Thunk
    await startGoogleSignIn()( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( logout({ errorMessage }) );

  });

  test('Should start creating user with email and password', async () => {
    const { uid, displayName, email, password, photoURL } = demoUser;

    const loginData = { ok: true, user: { ...demoUser } };

    // Firebase
    await registerUserWithEmailPassword.mockResolvedValue( loginData );

    // Thunk
    await startCreatingUserWithEmailAndPassword({ displayName, email, password })( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( login({ user: { ...demoUser }}) );
  });

  test('Should start creating user with email and password - Error', async () => {
    const { displayName, email, password } = demoUser;

    const errorMessage = 'There were register Errors';
    const loginData = { ok: false, errorMessage };

    // Firebase
    await registerUserWithEmailPassword.mockResolvedValue( loginData );

    // Thunk
    await startCreatingUserWithEmailAndPassword({ displayName, email, password })( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( logout({ errorMessage }) );
  });

  test('Should start login with email and password', async () => {
    const { email, password } = demoUser;

    const loginData = { ok: true, user: { ...demoUser } };

    // Firebase
    await loginWithEmailAndPassword.mockResolvedValue( loginData );

    // Thunk
    await startLoginWithEmailAndPassword(email, password)( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( login(loginData) );
  });

  test('Should start login with email and password - Error', async () => {
    const { email, password } = demoUser;

    const errorMessage = 'There were register Errors';
    const loginData = { ok: false, errorMessage };

    // Firebase
    await loginWithEmailAndPassword.mockResolvedValue( loginData );

    // Thunk
    await startLoginWithEmailAndPassword(email, password)( dispatch );

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( logout({ errorMessage }) );
  });

  test('startLogout should call clearNotesLogout and logout', async () => {

    // Thunk
    await startLogout()( dispatch );

    expect( logoutFirebase ).toHaveBeenCalled();
    expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
    expect( dispatch ).toHaveBeenCalledWith( logout() );
  });

});
