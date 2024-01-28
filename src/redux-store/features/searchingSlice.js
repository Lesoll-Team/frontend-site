import { foundKeyword } from "@/utils/searchAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchResult: null,
  searchingError:null,
  isSearching:false,
  currentPage: 1, // Add current page state
  totalPages: 0, // Add total pages state
  propLengthResult:null,
};

export const dataFoundFromSearch = createAsyncThunk(
  "Searching/foundKeyword",
  async({ InputKeywords, page }) => {
    try {
      const response =await foundKeyword(InputKeywords, page);
      return response;
    } catch (error) {
      return error.response.data;
    }
  }
);

const SearchingSlice = createSlice({
  name: "Searching",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(dataFoundFromSearch.pending, (state) => {
      state.isSearching = true;
      state.searchResult = null;
      state.propLengthResult = null;
    })
    .addCase(dataFoundFromSearch.fulfilled, (state, action) => {
      state.searchResult = action.payload;
      state.totalPages = action.payload.totalPages;
      state.currentPage = state.currentPage;
      state.propLengthResult=action.payload.resultCount
      state.searchingError = null;
      state.isSearching = false;
    })
    .addCase(dataFoundFromSearch.rejected, (state, action) => {
      state.searchingError = action.meta.requestStatus;
      state.isSearching = false;
      state.propLengthResult = null;
    });
  },
});

export const { setCurrentPage } = SearchingSlice.actions;

export default SearchingSlice.reducer;
