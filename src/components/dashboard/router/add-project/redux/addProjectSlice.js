import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const addProject = createAsyncThunk(
  "addProjectSlice/addProject",
  async (data, thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/create-new-project`,
        data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
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
