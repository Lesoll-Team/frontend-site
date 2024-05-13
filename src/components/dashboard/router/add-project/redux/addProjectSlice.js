import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const addProject = createAsyncThunk(
  "addProjectSlice/addProject",
  async (data, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `/property/create-new-project`,
        data,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const addProjectSlice = createSlice({
  name: "addProjectSlice",
  initialState,
  reducers: {
    resetAddPoject: (state) => {
      state.error = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProject.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addProject.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(addProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetAddPoject } = addProjectSlice.actions;
export default addProjectSlice.reducer;
