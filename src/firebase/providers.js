import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
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
      errorMessage: error.message
    };

  }
}

export const registerUserWithEmailPassword = async ({ displayName, email, password }) => {

  try {

    const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

    await updateProfile( FirebaseAuth.currentUser, { displayName });

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
      errorMessage: error.message
    };

  }

};

export const loginWithEmailAndPassword = async ( email, password ) => {
  try {
    const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password );

    return {
      ok: true,
      user: {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
      }
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
