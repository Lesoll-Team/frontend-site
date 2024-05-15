import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  needs: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  delete: {
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getUserNeeds = createAsyncThunk(
  "userNeeds/getUserNeeds",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/need/get-profile-needs`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const deleteNeed = createAsyncThunk(
  "userNeeds/deleteNeed",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`/need/delete-need/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const userNeedsSlice = createSlice({
  name: "userNeeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserNeeds.pending, (state, action) => {
        state.needs.status = "loading";
      })
      .addCase(getUserNeeds.fulfilled, (state, action) => {
        state.needs.data = action.payload;
        state.needs.status = "succeeded";
      })
      .addCase(getUserNeeds.rejected, (state, action) => {
        state.needs.status = "failed";
      })
      .addCase(deleteNeed.pending, (state, action) => {
        state.needs.status = "loading";
      })
      .addCase(deleteNeed.fulfilled, (state, action) => {
        state.needs.status = "succeeded";
      })
      .addCase(deleteNeed.rejected, (state, action) => {
        state.needs.error = action.payload;
        state.needs.status = "failed";
      });
  },
});

export default userNeedsSlice.reducer;
