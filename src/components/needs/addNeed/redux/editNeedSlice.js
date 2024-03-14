import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
};

export const editNeed = createAsyncThunk(
  "need/editNeed",
  async (needDetails) => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/need/delete-need/${id}?token=${userToken}`,
        needDetails,
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
