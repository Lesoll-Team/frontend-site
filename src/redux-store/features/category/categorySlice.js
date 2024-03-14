import { createSlice } from "@reduxjs/toolkit";
import { initialStateCategory } from "./initialState";
// import { sendFilterSearch } from "@/components/category/api";

const categorySlice = createSlice({
  name: "Category",
  initialState: initialStateCategory,
  reducers: {
    // handleSendSearchFilter:async(state, action) =>{
    //   await saveSearchFilter()
    // },
    setSaveSearchFilter: (state, action) => {
      state.isSaved = action.payload;
    },
    setConfirmSendMessage: (state, action) => {
      state.confirmSendMessage = action.payload;
      //   confirmSendMessage: "",
      // state.isSaved = action.payload;
    },
    sendMessageData: (state, action) => {
      state.messageData = action.payload;
      //   confirmSendMessage: "",
      // state.isSaved = action.payload;
    },
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
export const { setConfirmSendMessage, updateAllStates,
  sendMessageData, setSaveSearchFilter, changeNumberPage } = categorySlice.actions;
export default categorySlice.reducer;
