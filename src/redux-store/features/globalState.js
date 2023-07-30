import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  languageIs: false, //(false = ENG) ?& (true= ARB)
  isAuth: false,
  isVerification: false,
};

export const globalState = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {
    handleLanguage: (state) => {
      state.languageIs = !state.languageIs;
    },
    handleAuth: (state, actoin) => {
      state.isAuth = actoin.payload;
    },
    handleVerification: (state, actoin) => {
      state.isVerification = actoin.payload;
    },
  },
});
export const { handleLanguage } = globalState.actions;
export default globalState.reducer;
