import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    login: ( state, { payload } ) => {
      state.status = 'authenticated';
      state.uid = payload.user.uid;
      state.email = payload.user.email;
      state.displayName = payload.user.displayName;
      state.photoURL = payload.user.photoURL;
      state.errorMessage = null;
    },

    checkingCredentials: ( state ) => {
      state.status = 'checking'
    },

    logout: ( state, { payload } ) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },

  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;