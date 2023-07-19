// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistering: false,
  registrationError: null,
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isRegistering = true;
      state.registrationError = null;
    },
    registerSuccess: (state) => {
      state.isRegistering = false;
    },
    registerFailure: (state, action) => {
      state.isRegistering = false;
      state.registrationError = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } = userSlice.actions;

export default userSlice.reducer;

