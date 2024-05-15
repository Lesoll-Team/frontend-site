import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

export const getCurrencies = createAsyncThunk(
  "currenciesSlice/getCurrencies",
  async (thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/property/currencies`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const currenciesSlice = createSlice({
  name: "currenciesSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCurrencies.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
        state.status = "succeeded";
      })
      .addCase(getCurrencies.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "failed";
      });
  },
});

export default currenciesSlice.reducer;
