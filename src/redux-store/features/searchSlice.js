import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import {getPropertyFromSearch} from "@/utils/searchAPI";
const initialState = {
    searchResult:null,
    isSearching:false,
    setInputKeyword:null,
    searchingMassage:null,
    currentPage: 1, // Add current page state
    totalPages: 0,  // Add total pages state

  };

  export const propertyFromSearch = createAsyncThunk(
    "Search/getPropertyFromSearch",
     ({ InputKeywords, page }) => {
      // try {
        const response =  getPropertyFromSearch(InputKeywords, page);
        return response;
      // } catch (error) {
      //   return rejectWithValue(error.response.data);
      // }
    }
  );


  const SearchSlice = createSlice({
    name: "Search",
    initialState,
    reducers: {
      setInputKeywords: (state, action) => {
        state.setInputKeyword = action.payload;
      },
      setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(propertyFromSearch.pending, (state) => {
          state.isSearching = true;
        })
        .addCase(propertyFromSearch.fulfilled, (state, action) => {
          state.isSearching = false;
          state.searchResult = action.payload;
          state.totalPages = action.payload.totalPages;
          state.searchingMassage =null
          state.currentPage=state.currentPage
        })
        .addCase(propertyFromSearch.rejected, (state, action) => {
          state.sending = false;
          state.searchingMassage = action.error.message;
          state.searchResult = null;

        });
    },
  });
  
  export const { setInputKeywords, setCurrentPage } = SearchSlice.actions;
  
  export default SearchSlice.reducer;
