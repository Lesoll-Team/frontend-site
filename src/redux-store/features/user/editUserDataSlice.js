import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const updateUser = createAsyncThunk(
  "editUserDataSlice/updateUser",
  async (data, thunkAPI) => {
    const userToken = Cookies.get("userToken");

    try {
      const response = await axiosInstance.put(
        `/user/update/${data.id}`,
        data.userData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: userToken,
          },
        },
      );
      response.data.userData.token &&
        Cookies.set("userToken", response.data.userData.token);

      return response.data.userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
const editUserDataSlice = createSlice({
  name: "editUserDataSlice",
  initialState,
  reducers: {
    resetUpdateUserState: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
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

export const { resetUpdateUserState } = editUserDataSlice.actions;
