// store/SignUpSlice.js
import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { registerUser, loginUser } from '../../utils/api';
const getUserDataFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }
  return null;
};
const getUserAuthFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const userAuth = localStorage.getItem('userAuth');
    return userAuth ? JSON.parse(userAuth) : null;
  }
  return null;
};

const initialState = {
  user: getUserDataFromLocalStorage(),
  isRegistering: false,
  registrationError: null,
  loading: getUserAuthFromLocalStorage(),
};

export const loginUserAsync = createAsyncThunk(
  'Auth/loginUser',
  async (userData) => {
    const response = await loginUser(userData);
    return response.userData; // Assuming your API returns user data upon successful login
  }
);

export const signupUserAsync = createAsyncThunk(
  'Auth/signupUser',
  async (userData) => {
    const response = await registerUser(userData);
    return response.userData; // Assuming your API returns user data upon successful signup
  }
);
export const clearLocalStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.clear()
  }
};
const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.registrationError = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.isRegistering = true;
        state.registrationError = null;

      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isRegistering = false;
        state.user = action.payload;
        state.loading = true;
        // Store the user data in localStorage
        localStorage.setItem('userData', JSON.stringify(action.payload));
        localStorage.setItem('userAuth', JSON.stringify(state.loading));
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isRegistering = false;
        state.registrationError = action.error.message;

      })
      .addCase(signupUserAsync.pending, (state) => {
        state.isRegistering = true;
        state.registrationError = null;

      })
      .addCase(signupUserAsync.fulfilled, (state, action) => {
        state.isRegistering = false;
        state.user = action.payload;
        state.loading = true;
        // Store the user data in localStorage
        localStorage.setItem('userData', JSON.stringify(action.payload));
      })
      .addCase(signupUserAsync.rejected, (state, action) => {
        state.isRegistering = false;
        state.registrationError = action.error.message;

      });
  },
});

// export const { registerStart, registerSuccess, registerFailure,logout } = AuthSlice.actions;
export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;

