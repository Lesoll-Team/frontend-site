// store/SignUpSlice.js
import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../../utils/api';

const getUserTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const userToken = localStorage.getItem('userToken');
    return userToken ? JSON.parse(userToken) : null;
  }
  return null;
};

const getUserAuthFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const userToken = localStorage.getItem('userIsLogin');
    return userToken ? JSON.parse(userToken) : null;
  }
  return null;
};
const initialState = {
  userToken: getUserTokenFromLocalStorage(),
  isRegistering: false,
  registrationError: null,
  isLoding:getUserAuthFromLocalStorage(),

};

export const loginUserAsync = createAsyncThunk(
  'Auth/loginUser',
  async (userData) => {
    const response = await loginUser(userData);
    return response.token; // Assuming your API returns user data upon successful login
  }
);

export const signupUserAsync = createAsyncThunk(
  'Auth/registerUser',
  async (userData) => {
    const response = await registerUser(userData);
    return response.token; // Assuming your API returns user data upon successful signup
  }
);

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    logoutUserToken(state) {
      state.userToken = null;
      state.isLoding=false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.isRegistering = true;
        state.registrationError = null;
        state.isLoding=false;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isRegistering = false;
        state.userToken = action.payload;
        state.isLoding=true;
        localStorage.setItem('userToken', JSON.stringify(action.payload));
        localStorage.setItem('userIsLogin', JSON.stringify(state.isLoding));
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isRegistering = false;
        state.registrationError = action.error.message;
        state.isLoding=false;
      })
      .addCase(signupUserAsync.pending, (state) => {
        state.isRegistering = true;
        state.registrationError = null;
        state.isLoding=false;

      })
      .addCase(signupUserAsync.fulfilled, (state, action) => {
        state.isRegistering = false;
        state.userToken = action.payload;
        state.isLoding=true;
        localStorage.setItem('userToken', JSON.stringify(action.payload));
        localStorage.setItem('userIsLogin', JSON.stringify(state.isLoding));
      })
      .addCase(signupUserAsync.rejected, (state, action) => {
        state.isRegistering = false;
        state.registrationError = action.error.message;
        state.isLoding=false;

      });
  },
});
export const { logoutUserToken } = AuthSlice.actions;
export default AuthSlice.reducer;

