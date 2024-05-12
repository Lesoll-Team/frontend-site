import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; //createAsyncThunk
import { updateUserDataInfo } from "../../utils/userAPI";

const initialState = {
  userData: null,
  userLod: false,
  userErr: null,
  languageIs: true, // getLanguageFromLocalStorage() (false = ENG) ?& (true= ARB)
  isUpdated: false,
  updateError: null,
};

export const updateUserData = createAsyncThunk(
  "GlobalState/updateUserData",
  async (data) => {
    try {
      const response = await updateUserDataInfo(
        data.userID,
        // data.userToken,
        data.userUpdate,
      );
      return response;
    } catch (error) {
      console.log("error:>>>>", error.message);
    }
  },
);
export const globalState = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {
    setLang: (state, action) => {
      localStorage.setItem("language", action.payload);
      state.languageIs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(updateUserData.pending, (state) => {
        state.isUpdated = true;
        state.updateError = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.isUpdated = false;
        state.userData = action.payload;
        state.updateError = null;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.isUpdated = false;
        state.updateError = action.error.message;
      });
    // .addCase()
  },
});
export const { setLang } = globalState.actions; //logoutUser
export default globalState.reducer;
