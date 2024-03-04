import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  gov: null,
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const getGov = createAsyncThunk(
  "getGovSlice/getGov",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/governorate/getall`
      );
      return response.data.governorate;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getGovSlice = createSlice({
  name: "getGovSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGov.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGov.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.gov = action.payload;
      })
      .addCase(getGov.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default getGovSlice.reducer;
