import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialStateCategory } from "./initialState";
import { foundKeyword } from "@/components/category/api";

export const sendFilterSearch = createAsyncThunk(
  "Category/foundKeyword",
  async (keyword) => {
    const response = await foundKeyword(keyword);
    return response; // Assuming your API returns user data upon successful
  }
);

const categorySlice = createSlice({
  name: "Category",
  initialState: initialStateCategory,
  reducers: {
    updateAllStates: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(sendFilterSearch.pending, (state) => {
        state.sending = true;
      })
      .addCase(sendFilterSearch.fulfilled, (state, action) => {
        state.sending = false;
        state.filterResult = action.payload;
      })
      .addCase(sendFilterSearch.rejected, (state, action) => {
        state.sending = false;
        state.errorResult = action.error.message;
      });
  },
});
export const { updateAllStates } = categorySlice.actions;
// export default categorySlice;
export default categorySlice.reducer;
