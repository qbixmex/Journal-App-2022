import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

/**
 * Sign In with Google Account Credentials.
 * @returns {Promise<{
 *   ok: boolean;
 *   user: {
 *     uid: string;
 *     displayName: string;
 *     photoURL: string;
 *     email: string;
 *   } | {
 *     ok: string;
 *     errorCode: string;
 *     errorMessage: string;
 *   }
 * }>}
 */
export const signInWithGoogle = async () => {
  try {

    const { user } = await signInWithPopup( FirebaseAuth, googleProvider );

    // Get Credentials
    // const credentials = GoogleAuthProvider.credentialFromResult( result );

    return {
      ok: true,
      user: {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      },
    };

  } catch (error) {

    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message
    };

  }
}

export const registerUserWithEmailPassword = async ({ displayName, email, password }) => {

  try {

    const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

    // TODO: Update displayName in Firebase

    return {
      ok: true,
      user: {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      }
    };

  } catch (error) {

    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message
    };

  }

};
