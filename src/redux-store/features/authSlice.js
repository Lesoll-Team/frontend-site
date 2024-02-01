// store/SignUpSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser, signWithGoogle, getTokenGoogle } from "../../utils/userAPI";
import axios from 'axios';

const getUserTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const userToken = localStorage.getItem("userToken");
    return userToken ? JSON.parse(userToken) : null;
  }
  return null;
};

const getUserAuthFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const userIsLogin = localStorage.getItem("userIsLogin");
    return userIsLogin ? JSON.parse(userIsLogin) : null;
  }
  return null;
};
const initialState = {
  userToken: getUserTokenFromLocalStorage(),
  isRegistering: false,
  registrationError: null,
  isLoding: getUserAuthFromLocalStorage(),
};

export const loginUserAsync = createAsyncThunk(
  "Auth/loginUser",
  async (userData) => {
    const response = await loginUser(userData);
    return response.token; // Assuming your API returns user data upon successful login
  }
);

export const signupUserAsync = createAsyncThunk(
  "Auth/registerUser",
  async (userData) => {
    const response = await registerUser(userData);
    return response.token; // Assuming your API returns user data upon successful signup
  }
);

export const signInWithGoogle = createAsyncThunk(
  "Auth/signWithGoogle",
  async (token) => {
      localStorage.setItem("userToken", JSON.stringify(token))
}
);

export const deleteAccount = createAsyncThunk(
  "Auth/deleteUserAccount",
  async (data, thunkAPI) => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/user/delete/${data.userID}?token=${userToken}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logoutUserToken(state) {
      state.userToken = null;
      state.isLoding = false;
    },
  },
  extraReducers: (builder) => {
    builder //start case login
      .addCase(loginUserAsync.pending, (state) => {
        state.isRegistering = true;
        state.registrationError = null;
        state.isLoding = false;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isRegistering = false;
        state.userToken = action.payload;
        state.isLoding = true;
        localStorage.setItem("userToken", JSON.stringify(action.payload));
        localStorage.setItem("userIsLogin", JSON.stringify(state.isLoding));
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isRegistering = false;
        state.registrationError = action.error.message;
        state.isLoding = false;
      }) //end case login
      //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//
      //start case signup
      .addCase(signupUserAsync.pending, (state) => {
        state.isRegistering = true;
        state.registrationError = null;
        state.isLoding = false;
      })
      .addCase(signupUserAsync.fulfilled, (state, action) => {
        state.isRegistering = false;
        state.userToken = action.payload;
        state.isLoding = true;
        localStorage.setItem("userToken", JSON.stringify(action.payload));
        localStorage.setItem("userIsLogin", JSON.stringify(state.isLoding));
      })
      .addCase(signupUserAsync.rejected, (state, action) => {
        state.isRegistering = false;
        state.registrationError = action.error.message;
        state.isLoding = false;
      })
      //end case signup
      //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//
      //start case delete account
      .addCase(deleteAccount.pending, (state) => {
        state.isRegistering = true;
        state.registrationError = null;
        state.isLoding = true;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        localStorage.clear()
        state.userToken=null
        state.isRegistering = false;
        state.isLoding = false;
        state.registrationError = null;
      })
      .addCase(deleteAccount.rejected, (state,action) => {
        state.isRegistering = true;
        state.registrationError = action.error.message;
        state.isLoding = true;
        // state.registrationError = action.error;
      })



      // .addCase(signInWithGoogle.pending,(state)=>{
      //   state.isRegistering = true;
      //   state.registrationError = null;
      //   state.isLoding = false;
      // })
      .addCase(signInWithGoogle.fulfilled,(state,action)=>{
      const  useToken=localStorage.getItem("userToken");
        if (useToken) {
          state.isRegistering = false;
          state.userToken = action.payload;
          state.isLoding = true;
          // localStorage.setItem("userToken", JSON.stringify(action.payload));
          localStorage.setItem("userIsLogin", JSON.stringify(state.isLoding));
        }

      })
      // .addCase(signInWithGoogle.rejected,(state)=>{
      //   state.isRegistering = false;
      //   state.registrationError = action.error.message;
      //   state.isLoding = false;
      // })
    //end case delete account
    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*//



  },
});
export const selectUserToken = (state) => state.Auth.userToken;

export const { logoutUserToken } = AuthSlice.actions;
export default AuthSlice.reducer;
