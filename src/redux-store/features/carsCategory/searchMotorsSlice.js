import { createSlice } from "@reduxjs/toolkit";
import { initialStateMotors } from "./initialState";

const searchMotorsSlice = createSlice({
  name: "Motors",
  initialState: initialStateMotors,
  reducers: {
    updateAllStates: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export const { updateAllStates } = searchMotorsSlice.actions;
export default searchMotorsSlice.reducer;
