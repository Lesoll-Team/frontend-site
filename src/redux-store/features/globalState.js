import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; //createAsyncThunk
import { getUserData, updateUserDataInfo } from "../../utils/userAPI";
// const getLanguageFromLocalStorage = () => {
//   if (typeof window !== "undefined") {
//     const language = localStorage.getItem("language");
//     return language === "ARB"; // Return true for Arabic, false for English
//   }
//   return false; // Default to English if localStorage is not available
// };
// console.log("function,",getLanguageFromLocalStorage());
const initialState = {
  userData: null,
  userLod: false,
  userErr: null,
  languageIs:true , // getLanguageFromLocalStorage() (false = ENG) ?& (true= ARB)
  isUpdated: false,
  updateError: null,
};
export const fetchUserData = createAsyncThunk(
  "GlobalState/fetchUserData",
  async () => {
    try {
      const response = await getUserData();
      return response;
    } catch (error) {
      error.message;
    }
  }
);
export const updateUserData = createAsyncThunk(
  "GlobalState/updateUserData",
  async (data) => {
    try {
      // console.log("createAsyncThunk",data);
      const response = await updateUserDataInfo(
        data.userID,
        // data.userToken,
        data.userUpdate
      );
      return response;
    } catch (error) {
      return error.message;
    }
  }
);
export const globalState = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {
    handleLanguage: (state) => {
      state.languageIs = !state.languageIs;
      // localStorage.setItem("language", state.languageIs ? "ARB" : "ENG");

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.userLod = true;
        // state.userData = action.payload;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.userLod = false;
        // localStorage.setItem("userID", JSON.stringify(state.userData?._id))

      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.userErr = action.error.message;
      })
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
export const { handleLanguage } = globalState.actions; //logoutUser
export default globalState.reducer;
