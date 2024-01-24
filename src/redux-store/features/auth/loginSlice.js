import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const userLogin = createAsyncThunk("login/userLogin", async () => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      userData
    ); //login
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export default loginSlice.reducer;
