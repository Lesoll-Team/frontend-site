import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";//createAsyncThunk
import { getUserData,updateUserDataInfo } from "../../utils/userAPI";


const initialState = {
  userData:null,
  userLod:false,
  userErr:null,
  languageIs: false, //(false = ENG) ?& (true= ARB)
  isUpdated: false,
  updateError: null,
};
export const fetchUserData=createAsyncThunk("GlobalState/fetchUserData",
async()=>{
  try {
    const response=await getUserData()
    return response
  } catch (error) {
    error.message
  }
}
)
export const updateUserData =createAsyncThunk("GlobalState/updateUserData",
async(data)=>{
  try {
    const response= await updateUserDataInfo(data.userID,data.userToken,data.userUpdate)
    return response
  } catch (error) {
    return error.message
  }
}
)
export const globalState = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {   
    handleLanguage: (state) => {
      state.languageIs = !state.languageIs;
    },
  },
  extraReducers:(builder) => {
    builder
    .addCase(fetchUserData.pending, (state) => {
      state.userLod=true
      // state.userData = action.payload;
    })
    .addCase(fetchUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.userLod=false

    })
    .addCase(fetchUserData.rejected, (state, action) => {
      state.userErr = action.error.message;
    })
.addCase(updateUserData.pending,(state)=>{
  state.isUpdated = true;
  state.updateError = null;
})
.addCase(updateUserData.fulfilled,(state,action)=>{
  state.isUpdated = false;
  state.userData = action.payload;
  state.updateError = null;
})
.addCase(updateUserData.rejected,(state,action)=>{
  state.isUpdated = false;
  state.updateError = action.error.message;
})
    // .addCase()
  }
});
export const { handleLanguage } = globalState.actions;//logoutUser
export default globalState.reducer;
