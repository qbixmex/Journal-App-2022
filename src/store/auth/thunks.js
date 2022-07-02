import {
  registerUserWithEmailPassword,
  loginWithEmailAndPassword,
  signInWithGoogle,
  logoutFirebase,
} from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { login, logout, checkingCredentials } from "./";

export const checkingAuthentication = () => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
  }
};

/**
 * Launch Checking Credential Redux Action.
 * @param {string} email User Email
 * @param {string} password User Password
 * @returns {Promise<void>} Dispatch Checking Credentials Action.
 */
export const startGoogleSignIn = () => {
  return async ( dispatch ) => {

    // Checking Google Credentials
    dispatch( checkingCredentials() );

    // Result from Google
    const result = await signInWithGoogle();

    if (!result.ok) {
      return dispatch( logout({ errorMessage: result.errorMessage }) );
    }

    delete result.ok;

    dispatch( login( result ) );

  }
};

export const startCreatingUserWithEmailAndPassword = ({ displayName, email, password }) => {
  return async ( dispatch ) => {

    dispatch( checkingCredentials() );

    const result = await registerUserWithEmailPassword({ displayName, email, password });

    if ( !result.ok ) {
      return dispatch( logout({ errorMessage: result.errorMessage }) );
    }

    delete result.ok;

    dispatch( login( result ) );

  };
};

export const startLoginWithEmailAndPassword = ( email, password ) => {
  return async ( dispatch ) => {

    dispatch( checkingCredentials() );

    const result = await loginWithEmailAndPassword( email, password );

    if ( !result.ok ) {
      return dispatch( logout({ errorMessage: result.errorMessage }) );
    }

    delete result.ok;

    dispatch( login( result ) );
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch( clearNotesLogout() );
    dispatch( logout() );
  };
};
