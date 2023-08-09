import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";

const initialState = {

  };


  const propertySlice=createSlice({

    name:"Property",
    initialState,
    reducers:{
    },
    // extraReducers:{}
  })
//   export const {} = propertySlice.actions;
  export default propertySlice.reducer;