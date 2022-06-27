import { configureStore } from '@reduxjs/toolkit';
// import { nameSlice } from './slices/name';

export const store = configureStore({
  reducer: {
    // name: nameSlice.reducer
  }
});