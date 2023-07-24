// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  // userLocal: [],
  isLoading: false,
  error: null,
};

const signInSlice = createSlice({
  name: 'SignIn',
  initialState,
  reducers: {
    loginStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = signInSlice.actions;
export default signInSlice.reducer;
