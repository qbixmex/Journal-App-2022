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
export const startGoogleSignIn = ( email, password ) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() );
  }
};
