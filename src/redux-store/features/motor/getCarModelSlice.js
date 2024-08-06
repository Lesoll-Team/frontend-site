import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  models: null,
  status: "idle",
  error: null,
};

export const getCarModels = createAsyncThunk(
  "getCarModels/getModels",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `http://ec2-3-227-150-208.compute-1.amazonaws.com:8000/v2/api/car/service/model`,
      );
      return response.data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const getCarModelSlice = createSlice({
  name: "getCarModelSlice",
  initialState,
  reducers: {
    setBrandModels: (state, action) => {
      state.models = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarModels.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCarModels.fulfilled, (state, action) => {
        state.status = "success";
        state.error = null;
        state.models = action.payload;
      })
      .addCase(getCarModels.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default getCarModelSlice.reducer;

export const { setBrandModels } = getCarModelSlice.actions;
