import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";//createAsyncThunk
import { getUserData } from "../../utils/api";

export const fetchUserData = createAsyncThunk(
  "GlobalState/getUserData",
  async () => {
    try {
      const userToken = localStorage.getItem("userToken");
      const user = await getUserData(userToken);
      return user;
    } catch (error) {
      throw error.response.data;
    }
  }
);

const initialState = {
  userData:null,
  languageIs: false, //(false = ENG) ?& (true= ARB)
};
export const globalState = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {   
    handleLanguage: (state) => {
      state.languageIs = !state.languageIs;
    },
  },
  extraReducers:(builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
      // localStorage.setItem("userInfo",JSON.stringify(action.payload))
    })}
});
export const { handleLanguage } = globalState.actions;//logoutUser
export default globalState.reducer;

















/*
import { createSlice} from "@reduxjs/toolkit";//createAsyncThunk
// import { getUserData } from "../../utils/api";


// const getUserInfoFromLocalStorage = () => {
//   if (typeof window !== 'undefined') {
//     const userInfo = localStorage.getItem('userInfo');
//     return userInfo ? JSON.parse(userInfo) : null;
//   }
//   return null;
// };
// const getUserLoginFromLocalStorage = () => {
//   if (typeof window !== 'undefined') {
//     const userAuth = localStorage.getItem('isLoging');
//     return userAuth ? JSON.parse(userAuth) : null;
//   }
//   return null;
// };
const initialState = {
  // usersData:getUserInfoFromLocalStorage(),
  // isLogin:getUserLoginFromLocalStorage(),
  languageIs: false, //(false = ENG) ?& (true= ARB)
  // isAuth: false,
  // isVerification: false,
  // isError:null,
    // usersData:null,
  // isLogin:false,
};

// export const getAllUserData = createAsyncThunk(
//   'GlobalState/getUserData',
//   async (userToken) => {
//     const response = await getUserData(userToken);
//     return response.userData; // Assuming your API returns user data upon successful login
//   }
// );

export const globalState = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {   
    // logoutUser(state) {
    //   // Clear user data and error when logging out
    //   state.usersData = null;
    //   state.isError = null;
    //   state.isLogin = false;

    //   // Remove data from localStorage when logging out
    // },

    handleLanguage: (state) => {
      state.languageIs = !state.languageIs;
    },
    // handleAuth: (state, actoin) => {
    //   state.isAuth = actoin.payload;
    // },
    // handleVerification: (state, actoin) => {
    //   state.isVerification = actoin.payload;
    // },
  },
  // extraReducers:(builder)=>{
  //   builder
  //   .addCase(getAllUserData.pending,(state)=>{
  //     state.isLogin=false;
  //     state.isError=null;
  //   })
  //   .addCase(getAllUserData.fulfilled,(state,action)=>{
  //     state.isLogin=true;
  //     state.usersData=action.payload;
  //     // //save data to local storage 
  //     // if (typeof window !== 'undefined') {
  //       localStorage.setItem("userInfo",JSON.stringify(action.payload));
  //       localStorage.setItem("isLoging",JSON.stringify(state.isLogin));
  //     // }
      
  //   })
  //   .addCase(getAllUserData.rejected,(state,action)=>{
  //     state.isLogin=false;
  //     state.isError="rejected=>:"+action.error.message;
  //   })
  // }
});
export const { handleLanguage } = globalState.actions;//logoutUser
export default globalState.reducer;

*/