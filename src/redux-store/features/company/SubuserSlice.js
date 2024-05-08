import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  addUser: {
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  getUsers: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const addSubuser = createAsyncThunk(
  "subuserSlice/addSubuser",
  async (data, thunkAPI) => {
    const userToken = Cookies.get("userToken");

    try {
      const response = await axiosInstance.post(
        `/user/company/send-invite-user/`,
        data,
        {
          headers: {
            token: userToken,
          },
        },
      );

      return response.data.userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
const subuserSlice = createSlice({
  name: "subuserSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSubuser.pending, (state, action) => {
        state.addUser.status = "loading";
      })
      .addCase(addSubuser.fulfilled, (state, action) => {
        state.addUser.status = "succeeded";
      })
      .addCase(addSubuser.rejected, (state, action) => {
        state.addUser.status = "failed";
        state.addUser.error = action.payload;
      });
  },
});
