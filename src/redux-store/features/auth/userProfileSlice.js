import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userData: null,
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const getUserData = createAsyncThunk(
  "userProfile/getUserData",
  async (thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    if (userToken) {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/profile?token=${userToken}`
        );
        return response.data.userData;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response);
      }
    } else {
      throw "failed";
    }
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.userData = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});
export const { clearUserData } = userProfileSlice.actions;
export default userProfileSlice.reducer;
