import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  status: "idle",
  error: null,
};

export const editNeed = createAsyncThunk(
  "need/editNeed",
  async (needDetails) => {
    try {
      const userToken = Cookies.get("userToken");

      const response = await axiosInstance.post(
        `/need/delete-need/${id}?token=${userToken}`,
        needDetails,
        {
          headers: {
            token: userToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
const editNeedSlice = createSlice({
  name: "editNeedSlice",
  initialState,
  reducers: {
    resetEditNeed: (state) => {
      state.error = null;
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(editNeed.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(editNeed.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(editNeed.rejected, (state, action) => {
        state.status = "faild";
        state.error = action.payload;
      });
  },
});

export const { resetEditNeed } = editNeedSlice.actions;
export default editNeedSlice.reducer;
