import { signInWithGoogle } from "../../firebase/providers";
import { login, logout, checkingCredentials } from "./";

/**
 * Launch Checking Credential Redux Action.
 * @param {string} email User Email
 * @param {string} password User Password
 * @returns {Promise<void>} Dispatch Checking Credentials Action.
 */
export const checkingAuthentication = ( email, password ) => {
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

    console.log( result );

    // dispatch( login() );
  }
};
