import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  project: {
    data: null,
    status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  postProject: {
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getProject = createAsyncThunk(
  "editProjectSlice/getProject",
  async (slug, thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/property/get-single-projects/${slug}`,

        {
          headers: {
            token: userToken,
          },
        }
      );
      return response.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const editProject = createAsyncThunk(
  "editProjectSlice/editProject",
  async (data, thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/property/update-project/${data.id}`,
        data.data,
        {
          headers: {
            token: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const editProjectSlice = createSlice({
  name: "editProjectSlice",
  initialState,
  reducers: {
    resetEditProject: (state) => {
      state.postProject.error = null;
      state.postProject.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProject.pending, (state) => {
        state.project.status = "loading";
        state.project.error = null;
      })
      .addCase(getProject.fulfilled, (state, action) => {
        state.project.status = "succeeded";
        state.project.error = null;
        state.project.data = action.payload;
      })
      .addCase(getProject.rejected, (state, action) => {
        state.project.status = "failed";
        state.project.error = action.payload;
      })
      .addCase(editProject.pending, (state) => {
        state.postProject.status = "loading";
        state.postProject.error = null;
      })
      .addCase(editProject.fulfilled, (state) => {
        state.postProject.status = "succeeded";
        state.postProject.error = null;
      })
      .addCase(editProject.rejected, (state, action) => {
        state.postProject.status = "failed";
        state.postProject.error = action.payload;
      });
  },
});

export const { resetEditProject } = editProjectSlice.actions;
export default editProjectSlice.reducer;