import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
};

export const addNeed = createAsyncThunk("need/addNeed", async (needDetails) => {
  try {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/need/create-need?token=${userToken}`,
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
});
const addNeedSlice = createSlice({
  name: "addNeedSlice",
  initialState,
  reducers: {
    resetAddNeed: (state) => {
      state.error = null;
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addNeed.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addNeed.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(addNeed.rejected, (state, action) => {
        state.status = "faild";
        state.error = action.payload;
      });
  },
});

export const { resetAddNeed } = addNeedSlice.actions;
export default addNeedSlice.reducer;
