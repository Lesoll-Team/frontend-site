import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  projects: {
    data: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  delete: {
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getAllProjects = createAsyncThunk(
  "allProjects/getAllProjects",
  async (thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/property/all-project`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const deleteProject = createAsyncThunk(
  "allProjects/deleteProject",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(
        `/property/delete-project/${id}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const allProjectsSlice = createSlice({
  name: "allProjectsSlice",
  initialState,
  reducers: {
    resetAllProjects: (state) => {
      state.projects.error = null;
      state.projects.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.pending, (state) => {
        state.projects.error = null;
        state.projects.status = "loading";
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.projects.error = null;
        state.projects.status = "succeeded";
        state.projects.data = action.payload;
      })
      .addCase(getAllProjects.rejected, (state, action) => {
        state.projects.error = action.payload;
        state.projects.status = "failed";
      })
      .addCase(deleteProject.pending, (state) => {
        state.delete.error = null;
        state.delete.status = "loading";
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.delete.error = null;
        state.delete.status = "succeeded";
        // state.delete.data = action.payload;
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.delete.error = action.payload;
        state.delete.status = "failed";
      });
  },
});

export const { resetAllProjects } = allProjectsSlice.actions;
export default allProjectsSlice.reducer;
