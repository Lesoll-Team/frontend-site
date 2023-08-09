import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";//createAsyncThunk
import { getUserData,updateUserDataInfo } from "../../utils/userAPI";

export const fetchUserData = createAsyncThunk(
  "GlobalState/getUserData",
  async (_,thunkAPI) => {
    const token = thunkAPI.getState().Auth.userToken;
    try {
      const user = await getUserData(token);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  userData:null,
  languageIs: false, //(false = ENG) ?& (true= ARB)
  isUpdated: false,
  updateError: null,
};
export const updateUserData =createAsyncThunk("Auth/updateUserData",
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
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
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
