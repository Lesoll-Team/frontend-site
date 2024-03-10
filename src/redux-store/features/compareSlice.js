// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { AddPropertyToCompare, GetPropertiesCompare } from "@/utils/compareAPI";
// const initialState = {
//   propertyIs: null,
//   propertyData:null,
//   sending: false,
//   errorMassage: null,
// };

// export const AddCompareCard = createAsyncThunk(
//   "Compare/AddCompare",
//   async (propertyId) => {
//     const response = await AddPropertyToCompare(propertyId);
//     return response; // Assuming your API returns user data upon successful signup
//   }
// );

// export const GetCompareCard = createAsyncThunk(
//   "Compare/GetCompare",
//   async () => {
//     const response = await GetPropertiesCompare();
//     return response; // Assuming your API returns user data upon successful signup
//   }
// );

// const compareSlice = createSlice({
//   name: "Compare",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       //add to compared
//       .addCase(AddCompareCard.pending, (state) => {
//         state.sending = true;
//       })
//       .addCase(AddCompareCard.fulfilled, (state, action) => {
//         state.sending = false;
//         state.propertyIs = action.payload;
//       })
//       .addCase(AddCompareCard.rejected, (state, action) => {
//         state.sending = false;
//         state.errorMassage = action.error.message;
//       })
//       //---------------------------//
//       .addCase(GetCompareCard.pending, (state) => {
//         state.sending = true;
//       })
//       .addCase(GetCompareCard.fulfilled, (state, action) => {
//         state.sending = false;
//         state.propertyData = action.payload;
//       })
//       .addCase(GetCompareCard.rejected, (state, action) => {
//         state.sending = false;
//         state.errorMassage = action.error.message;
//       });
//   },
// });
// export default compareSlice.reducer;
