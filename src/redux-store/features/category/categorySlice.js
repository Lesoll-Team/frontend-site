import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialStateCategory } from "./initialState";
import { foundKeyword } from "@/components/category/api";

export const sendFilterSearch = createAsyncThunk(
  "Category/foundKeyword",
  async (keyword) => {
    const response = await foundKeyword(keyword);
    return response.message; // Assuming your API returns user data upon successful
  }
);

const categorySlice = createSlice({
  name: "Category",
  initialState: initialStateCategory,
  reducers: {
    sendFilterSearch: (state) => {
      state.message = null;
    },
  },
  //   extraReducers: (builder) => {
  //     builder

  //       .addCase(sendUserMessage.pending, (state) => {
  //         state.sending = true;
  //       })
  //       .addCase(sendUserMessage.fulfilled, (state, action) => {
  //         state.sending = false;
  //         state.message = action.payload;
  //       })
  //       .addCase(sendUserMessage.rejected, (state, action) => {
  //         state.sending = false;
  //         state.errorMessage = action.error.message;
  //       });
  //   },
});
// export const { deleteMessage } = contactSlice.actions;
export default categorySlice;
// export default categorySlice.reducer;
