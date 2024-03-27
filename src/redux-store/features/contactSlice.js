import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "@/utils/contactAPI";
const initialState = {
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const postConatctMessage = createAsyncThunk(
  "Contact/registerUser",
  // async (data) => {
  //   try {
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_URL}/admin/contact/add`,
  //       data
  //     ); // register
  //     // const response = await axios.post(`http://api0.lesoll-demo.site/api/auth/register`,userData);// register
  //     return response.data;
  //   } catch (error) {
  //     throw error.response.data;
  //   }
  // }
  async (data) => {
    const response = await sendMessage(data);
    return response.message; // Assuming your API returns user data upon successful signup
  }
);
const contactSlice = createSlice({
  name: "Contact",
  initialState,
  reducers: {
    resetData: (state) => {
      state.status = "idle";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(postConatctMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postConatctMessage.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.message = action.payload;
      })
      .addCase(postConatctMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { resetData } = contactSlice.actions;
export default contactSlice.reducer;
