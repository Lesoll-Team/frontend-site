import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  features: null,
  status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const getFeatures = createAsyncThunk(
  "getFeaturesSlice/getFeatures",
  async (thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/admin/service/getall`);
      return response.data.service;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const getFeaturesSlice = createSlice({
  name: "getFeaturesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatures.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFeatures.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.features = action.payload;
      })
      .addCase(getFeatures.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default getFeaturesSlice.reducer;
