import { createSlice } from "@reduxjs/toolkit";
import { initialStateMotors } from "./initialState";

const searchMotorsSlice = createSlice({
  name: "Motors",
  initialState: initialStateMotors,
  reducers: {
    updateCarStates: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetCarStates: () => initialStateMotors,
  },
});
export const { updateCarStates, resetCarStates } = searchMotorsSlice.actions;
export default searchMotorsSlice.reducer;
