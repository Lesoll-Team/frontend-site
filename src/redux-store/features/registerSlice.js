import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const userRegister = createAsyncThunk(
  "register/userRegister",
  async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        userData
      ); // register
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "succeeded";
        localStorage.setItem("userToken", JSON.stringify(action.payload));
        localStorage.setItem("userIsLogin", JSON.stringify(true));
      });
  },
});

export default registerSlice.reducer;
