import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import {
  GetActiveProp,
  getPendingProperties,
  getOutSoldProperties,
} from "@/utils/userAPI";


const initialState = {
  activeProp: null,
  pendingProp: null,
  outSoldProp: null,
  isLoading: false,
  errorMessage: null,
  currentPage: 1, // Add current page state
  totalPages: 0, // Add total pages state
};

  export const GetAllActiveProp = createAsyncThunk(
    "Profile/GetActiveProp",
     ({page}) => {
        const response =  GetActiveProp(page);
        return response;
    }
  );

    export const getPending = createAsyncThunk(
      "Profile/getPendingProperties",
      () => {
        const response = getPendingProperties();
        return response;
      }
    );


        export const getOutSold = createAsyncThunk(
          "Profile/getOutSoldProperties",
          () => {
            const response = getOutSoldProperties();
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
          state.errorMessage = null;
          state.currentPage = state.currentPage;
        })
        .addCase(GetAllActiveProp.rejected, (state, action) => {
          state.sending = false;
          state.errorMessage = action.error.message;
          state.activeProp = null;
        })

        .addCase(getOutSold.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getOutSold.fulfilled, (state, action) => {
          state.isLoading = false;
          state.outSoldProp = action.payload;
        })
        .addCase(getOutSold.rejected, (state, action) => {
          state.isLoading = false;
          state.errorMessage = action.error.message;
        })


        .addCase(getPending.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getPending.fulfilled, (state, action) => {
          state.isLoading = false;
          state.pendingProp = action.payload;
        })
        .addCase(getPending.rejected, (state, action) => {
          state.isLoading = false;
          state.errorMessage = action.error.message;
        });
    },
  });
  export const { setCurrentPage } = ProfileSlice.actions;

  export default ProfileSlice.reducer;
