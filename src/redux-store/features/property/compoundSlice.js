import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const getCompounds = createAsyncThunk(
  "compoundSlice/getCompounds",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/service/get-compounds`
      );
      return response.data.compounds[0];
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const compoundSlice = createSlice({
  name: "compoundSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompounds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCompounds.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(getCompounds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export default compoundSlice.reducer;
