import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const userRegister = createAsyncThunk(
  "register/userRegister",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        userData
      ); // register
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    resetRegister: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "succeeded";
        localStorage.setItem("userToken", JSON.stringify(action.payload.token));
        localStorage.setItem("userIsLogin", JSON.stringify(true));
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        console.log(action.payload);
      });
  },
});
export const { resetRegister } = registerSlice.actions;
export default registerSlice.reducer;
