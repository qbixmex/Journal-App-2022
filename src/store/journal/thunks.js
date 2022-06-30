import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import {
  addNewEmptyNote, savingNewNote, setActiveNote, setNotes,
  setSaving, updateNote, setPhotosToActiveNote, deleteNoteById
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
    await setDoc( newDoc, newNote );

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

export const startSaveNote = () => {
  return async ( dispatch, getState ) => {

    dispatch( setSaving() );

    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    // Create a new note object
    const noteToFireStore = { ...note };

    // Delete id from note object to save to firestore
    delete noteToFireStore.id;

    // Create Firebase Document
    const documentReference = doc( FirebaseDB, `${uid}/journal/notes/${ note.id }` );

    // Save to Firebase
    await setDoc( documentReference, noteToFireStore, { merge: true } );

    dispatch(updateNote( note ));

  };
};

export const startUploadingFiles = ( files = [] ) => {
  return async ( dispatch ) => {
    dispatch( setSaving() );

    const fileUploadPromises = [];

    for ( const file of files ) {
      fileUploadPromises.push( fileUpload( file ) );
    }

    const photosUrls = await Promise.all( fileUploadPromises );

    dispatch( setPhotosToActiveNote( photosUrls ) );

  };
};

export const startDeletingNote = () => {
  return async ( dispatch, getState ) => {

    const uid = getState().auth.uid;
    const noteId = getState().journal.active.id;

    // Create Firebase Document
    const documentReference = doc( FirebaseDB, `${uid}/journal/notes/${ noteId }` );

    // Delete from Firebase
    await deleteDoc( documentReference );

    dispatch( deleteNoteById( noteId ) );
  };
};
