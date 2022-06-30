import {
  journalSlice,
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  deleteNoteById,
  clearNotesLogout,
} from "../../../src/store/journal";

import { initialState, editingState, note1, note2, note3, imageUrls } from "../fixtures/journalFixtures";

describe('Tests on journalSlice', () => {
  test('Should initialize with initial state named "jornal"', () => {
    const state = journalSlice.reducer( initialState, {} );
    expect( journalSlice.name ).toBe('journal');
    expect( state ).toEqual(initialState);
  });

  test('Should call savingNewNote action and change state.status to true', () => {
    const state = journalSlice.reducer( initialState, savingNewNote() );
    expect( state.isSaving ).toBe( true );
  });

  test('Should call savingNewNote action', () => {
    const state = journalSlice.reducer( initialState, addNewEmptyNote(note1) );
    expect( state.isSaving ).toBe( false );
    expect( state.notes.length ).toBe( 1 );
    expect( state.notes[0] ).toEqual( note1 );
  });

  test('Should call setActiveNote action', () => {
    const state = journalSlice.reducer( initialState, setActiveNote(note1) );
    expect( state.active ).toEqual( note1 );
    expect( state.messageSaved ).toBe('');
  });

  test('Should call setNotes action', () => {
    const state = journalSlice.reducer( initialState, setNotes([note1, note2]));
    expect( state.notes.length ).toBe( 2 );
    expect( state.notes ).toEqual([note1, note2]);
  });

  test('Should call setSaving action', () => {
    const state = journalSlice.reducer( initialState, setSaving());
    expect( state.isSaving ).toBe(true);
    expect( state.messageSaved ).toBe('');
  });

  test('Should call updateNote action', () => {
    const state = journalSlice.reducer( editingState, updateNote(note1));
    expect( state.isSaving ).toBe(false);
    expect( state.messageSaved ).toBe(`${note1.title} updated successfully`);
    expect( state.notes.length ).toBe(1);
  });

  test('Should call setPhotosToActiveNote action', () => {
    const state = journalSlice.reducer( editingState, setPhotosToActiveNote(imageUrls));
    expect( state.active.imageUrls.length ).toBe(6)
    expect( state.isSaving ).toBe(false);
  });

  test('Should call clearNotesLogout action', () => {
    const state = journalSlice.reducer( editingState, clearNotesLogout());
    expect( state ).toEqual({
      isSaving: false,
      messageSaved: '',
      notes: [],
      active: null
    });
  });

  test('Should call deleteNoteById action', () => {
    const state = journalSlice.reducer( editingState, deleteNoteById('abc123'));
    expect( state.active ).toBe( null );
    expect( state.notes.length ).toBe( 0 );
  });

});
