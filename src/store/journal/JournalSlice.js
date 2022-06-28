import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: true,
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
    addNewEmptyNote: ( state, action ) => {},
    setActiveNote: ( state, action ) => {},
    setNotes: ( state, action ) => {},
    setSaving: ( state ) => {},
    updateNote: ( state, action ) => {},
    deleteNoteById: ( state, action ) => {},
  },
});

export const {
  addNewEmptyNote, setActiveNote, setNotes, setSaving,
  updateNote, deleteNoteById,
} = journalSlice.actions;
