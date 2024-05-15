import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  region: null,
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const getRegion = createAsyncThunk(
  "getRegionSlice/getRegion",
  async (thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/admin/region/getall`);
      return response.data.Region;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const getRegionSlice = createSlice({
  name: "getRegionSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRegion.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRegion.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.region = action.payload;
      })
      .addCase(getRegion.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default getRegionSlice.reducer;
