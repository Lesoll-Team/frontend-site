import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const forgetPassEmail = createAsyncThunk(
  "forgetPassword/forgetPassEmail",
  async (email, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/reset-password?lang=AR`,
        { email: email }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const forgetPassSlice = createSlice({
  name: "forgetPassword",
  initialState,
  reducers: {
    resetForgetPassState: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(forgetPassEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(forgetPassEmail.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(forgetPassEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default forgetPassSlice.reducer;

export const { resetForgetPassState } = forgetPassSlice.actions;
