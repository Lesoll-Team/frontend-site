import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  faqData: null,
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const getFaq = createAsyncThunk("faq/getFaq", async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/QandA/getall`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFaq.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFaq.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.faqData = action.payload;
      })
      .addCase(getFaq.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default faqSlice.reducer;
