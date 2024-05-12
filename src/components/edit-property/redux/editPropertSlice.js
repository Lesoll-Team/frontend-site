import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { editFormData } from "../utils/editFormData";
import axiosInstance from "@/Shared/axiosInterceptorInstance";

const initialState = {
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const editProperty = createAsyncThunk(
  "editPropertySlice/editProperty",
  async (data, thunkAPI) => {
    const { formData } = editFormData(data);
    try {
      const response = await axiosInstance.put(
        `/property/update/property/${data.id}`,
        formData,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
const editPropertySlice = createSlice({
  name: "editPropertySlice",
  initialState,
  reducers: {
    resetEditPropertySlice: (state) => {
      state.status = "idle";
      state.error = "error";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editProperty.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editProperty.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(editProperty.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetEditPropertySlice } = editPropertySlice.actions;
export default editPropertySlice.reducer;
