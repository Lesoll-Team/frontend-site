import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  brands: null,
  status: "idle",
  error: null,
};

export const getCarBrands = createAsyncThunk(
  "getFeaturesSlice/getBrands",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `http://ec2-3-227-150-208.compute-1.amazonaws.com:8000/v2/api/car/service/brand`,
      );
      return response.data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const getCarBrandsSlice = createSlice({
  name: "getCarBrandsSlice",
  initialState,
  reducers: {
    setCarBrand: (state, action) => {
      state.brands = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarBrands.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCarBrands.fulfilled, (state, action) => {
        state.status = "success";
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(getCarBrands.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default getCarBrandsSlice.reducer;

export const { setCarBrand } = getCarBrandsSlice.actions;
