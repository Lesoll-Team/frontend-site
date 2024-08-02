import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  services: null,
  status: "",
  error: null,
};

export const getMotorServices = createAsyncThunk(
  "getFeaturesSlice/getFeatures",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `http://ec2-3-227-150-208.compute-1.amazonaws.com:8000/api/car/service`,
      );
      return response.data.service;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const getMotorServicesSlice = createSlice({
  name: "getFeaturesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMotorServices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMotorServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.services = action.payload;
      })
      .addCase(getMotorServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default getMotorServicesSlice.reducer;
