import { foundKeyword } from "@/utils/searchAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchResult: null,
  currentPage: 1, // Add current page state
  totalPages: 0, // Add total pages state
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
    setCurrentPageSearching: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(dataFoundFromSearch.fulfilled, (state, action) => {
      state.searchResult = action.payload;
      state.totalPages = action.payload.totalPages;
      state.currentPage = state.currentPage;
    });
  },
});

export const { setCurrentPageSearching } = SearchingSlice.actions;

export default SearchingSlice.reducer;
