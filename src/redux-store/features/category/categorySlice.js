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
  },
});
export const { updateAllStates } = categorySlice.actions;
export default categorySlice.reducer;
