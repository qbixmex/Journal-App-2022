import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import {
  addNewEmptyNote, setActiveNote, savingNewNote, setNotes
} from "./";

export const startNewNote = () => {
  return async ( dispatch, getState ) => {

    dispatch( savingNewNote() );

    // UID User
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    // Create a new firestore document
    const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );

    // Save firestore document
    const setDocResponse = await setDoc( newDoc, newNote );

    // Set Id property to newNote object
    newNote.id = newDoc.id;

    dispatch( addNewEmptyNote( newNote ) );
    dispatch( setActiveNote( newNote ) );

  };
};

export const startLoadingNotes = () => {
  return async ( dispatch, getState ) => {
    const { uid } = getState().auth;

    if ( !uid ) throw new Error('User UID does not exist !');

    const notes = await loadNotes( uid );

    dispatch( setNotes( notes ) );
  };
};
