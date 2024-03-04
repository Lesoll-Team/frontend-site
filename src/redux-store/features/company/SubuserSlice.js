import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    const userToken = JSON.parse(localStorage.getItem("userToken"));

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/company/send-invite-user/`,
        data,
        {
          headers: {
            token: userToken,
          },
        }
      );

      return response.data.userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
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
