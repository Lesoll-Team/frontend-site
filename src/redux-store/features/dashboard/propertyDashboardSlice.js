import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  // massage:null,
  // sending:false,
  // errorMassage:null
};
export const getAllUserData = createAsyncThunk(
  "UserDashboard/getAllUser",
  async () => {
    const response = await getAllUser();
    return response.message; // Assuming your API returns user data upon successful signup
  }
);
const UserDashboardSlice = createSlice({
  name: "UserDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});
//   export const {} = dashBoredUserSlice.actions;
export default UserDashboardSlice.reducer;
