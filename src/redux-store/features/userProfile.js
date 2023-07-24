import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
  error: null,
};

const authSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {

  },
});

// export const {  } = authSlice.actions;
export default authSlice.reducer;
