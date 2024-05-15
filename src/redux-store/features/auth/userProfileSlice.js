import { logoutUser } from "@/utils/userAPI";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  userData: null,
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};
const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    clearUserData: (state) => {
      logoutUser();
      console.log("remove token from ClearUserData line 16");
      // Cookies.remove("userToken");
      localStorage.clear();
      state.userData = null;
    },
  },
});
export const { clearUserData } = userProfileSlice.actions;
export default userProfileSlice.reducer;
