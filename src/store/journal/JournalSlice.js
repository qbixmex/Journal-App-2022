import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
  // active: {
  //   id: 'abc123',
  //   title: '',
  //   body: '',
  //   date: 12345678,
  //   imageUrls: [] // ['https://image1.jpg', 'https://image2.jpg'],
  // }
};

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote: ( state ) => {
      state.isSaving = true;
    },
    addNewEmptyNote: ( state, action ) => {
      state.notes.push( action.payload );
      state.isSaving = false;
    },
    setActiveNote: ( state, action ) => {
      state.active = action.payload;
    },
    setNotes: ( state, action ) => {
      state.notes = action.payload;
    },
    setSaving: ( state ) => {},
    updateNote: ( state, action ) => {},
    deleteNoteById: ( state, action ) => {},
  },
});

export const {
  savingNewNote, addNewEmptyNote, setActiveNote, setNotes,
  setSaving, updateNote, deleteNoteById,
} = journalSlice.actions;
