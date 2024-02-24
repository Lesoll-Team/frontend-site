import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const updateUser = createAsyncThunk(
  "editUserDataSlice/updateUser",
  async (data, thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/update/${data.id}`,
        data.userData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: userToken,
          },
        }
      );
      console.log("data", data);
      return response.data.userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const editUserDataSlice = createSlice({
  name: "editUserDataSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default editUserDataSlice.reducer;
