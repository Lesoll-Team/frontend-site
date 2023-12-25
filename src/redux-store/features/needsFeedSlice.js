import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  needsPosts: null,
  status: "idle", //? "idle" | "loading" | "succeeded" | "falild"
  page: 1,
  error: null,
  totalPages: null,
};

export const getNeeds = createAsyncThunk("needsFeed/getNeeds", async (page) => {
  // need/get-all-needs
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/need/get-all-needs?page=${page}&limit=9`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const needsFeedSlice = createSlice({
  name: "needsFeed",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNeeds.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getNeeds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.needsPosts = action.payload.getAllData;
        state.totalPages = action.payload.totalPages;
        console.log(action.payload);
      })
      .addCase(getNeeds.rejected, (state, action) => {
        state.status = "faild";
        state.error = action.payload;
      });
  },
});

export const { setPage } = needsFeedSlice.actions;
export default needsFeedSlice.reducer;
