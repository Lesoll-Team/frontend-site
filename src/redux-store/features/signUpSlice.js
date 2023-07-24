// store/SignUpSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistering: false,
  registrationError: null,
  user: null,

};

const SignUpSlice = createSlice({
  name: 'SignUp',
  initialState,
  reducers: {
    registerStart: (state) => {
      state.isRegistering = true;
      state.registrationError = null;
    },
    registerSuccess: (state,action) => {
      state.isRegistering = false;
      state.user = action.payload;

    },
    registerFailure: (state, action) => {
      state.isRegistering = false;
      state.registrationError = action.payload;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } = SignUpSlice.actions;

export default SignUpSlice.reducer;

