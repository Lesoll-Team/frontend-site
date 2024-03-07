import { createSlice } from "@reduxjs/toolkit";
import { initialStateCategory } from "./initialState";
// import { sendFilterSearch } from "@/components/category/api";

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
    changeNumberPage: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});
export const { updateAllStates, changeNumberPage } = categorySlice.actions;
export default categorySlice.reducer;
