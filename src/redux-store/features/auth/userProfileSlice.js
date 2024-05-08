import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { logoutUser } from "@/utils/userAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  userData: null,
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const getUserData = createAsyncThunk(
  "userProfile/getUserData",
  async () => {
    const userToken = Cookies.get("userToken");
    if (userToken) {
      const response = await axiosInstance.get(
        `/user/profile?token=${userToken}`,
      );
      return response.data.userData;
    }
  },
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    clearUserData: (state) => {
      logoutUser();
      Cookies.remove("userToken");
      localStorage.clear();
      state.userData = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = action.payload;
        console.log("succeeded::>>>succeeded::>>>succeeded");
        //faceLink instagramLink
        //   localStorage.setItem("id", action.payload._id);
        //   localStorage.setItem("instagramLink", action.payload.instagramLink);
        //   localStorage.setItem("faceLink", action.payload.faceLink);
        //   localStorage.setItem("fullname", action.payload.fullname);
        //   localStorage.setItem("email", action.payload.email);
        //   localStorage.setItem("avatarUrl", action.payload.avatarUrl);
        //   localStorage.setItem("phone", action.payload.phone);
        //   localStorage.setItem("code", action.payload.code);
        //   localStorage.setItem("username", action.payload.username);
        //   localStorage.setItem("typeOfUser", action.payload.typeOfUser);
        //   localStorage.setItem(
        //     "features",
        //     JSON.stringify(action.payload.Features),
        //   );
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});
export const { clearUserData } = userProfileSlice.actions;
export default userProfileSlice.reducer;
