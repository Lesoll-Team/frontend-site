import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { GetActiveProp } from "@/utils/userAPI";


const initialState = {
    activeProp:null,
    isLoading:false,
    errorMessage:null,
    currentPage: 1, // Add current page state
    totalPages: 0,  // Add total pages state
  };

  export const GetAllActiveProp = createAsyncThunk(
    "Profile/GetActiveProp",
     ({page}) => {
        const response =  GetActiveProp(page);
        return response;
    }
  );
  const ProfileSlice = createSlice({
    name: "Profile",
    initialState,
    reducers: {
      setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(GetAllActiveProp.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(GetAllActiveProp.fulfilled, (state, action) => {
          state.isLoading = false;
          state.activeProp = action.payload;
          state.totalPages = action.payload.totalPages;
          state.errorMessage =null
          state.currentPage=state.currentPage
        })
        .addCase(GetAllActiveProp.rejected, (state, action) => {
          state.sending = false;
          state.errorMessage = action.error.message;
          state.activeProp = null;

        });
    },
  });
  export const { setCurrentPage } = ProfileSlice.actions;

  export default ProfileSlice.reducer;
