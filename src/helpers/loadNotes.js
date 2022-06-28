import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

/**
 * Retrive notes from Firebase -> Firestore.
 * @param {string} uid Firebase UserId
 * @returns {Promise<{
 *   id: string;
 *   body: string;
 *   date: date;
 *   title: string;
 * }[]>} Notes List
 */
export const loadNotes = async ( uid ) => {

  if ( !uid ) throw new Error('User UID not sended as argument !');

  const collectionReference = collection( FirebaseDB, `${uid}/journal/notes` );

  const docs = await getDocs( collectionReference );

  const notes = [];

  docs.forEach(doc => {
    notes.push({ id: doc.id, ...doc.data() })
  });

  return notes;
};
