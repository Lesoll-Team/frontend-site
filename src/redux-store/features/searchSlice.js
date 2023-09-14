import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import {getPropertyFromSearch} from "@/utils/searchAPI";
const initialState = {
    searchResult:null,
    isSearching:false,
    searchingMassage:null,
    page:1,
    hasMore: true, // Initialize as true

  };

  export const propertyFromSearch = createAsyncThunk(
    "Search/getPropertyFromSearch",
    async ({ InputKeywords }, { getState, rejectWithValue }) => {
      try {
        const { page } = getState().Search;
        const response = await getPropertyFromSearch(InputKeywords, page);
        return response;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  // export const showMoreResult = createAsyncThunk(
  //   "Search/getMore",
  //   async (_,thunkAPI) => {
  //   let pageNum= thunkAPI.getState().page
  //     try {
  //       const { page } = getState().Search;
  //       const response = await getPropertyFromSearch(InputKeywords, page);
  //       return response;
  //     } catch (error) {
  //       return rejectWithValue(error.response.data);
  //     }
  //   }
  // );


  const SearchSlice=createSlice({
    name:"Search",
    initialState,
    reducers:{
      showMore: (state) => {
        state.page += 1;
      },
    },
    extraReducers:(builder) => {
        builder 

        .addCase(propertyFromSearch.pending, (state) => {
            state.isSearching=true
          })
          .addCase(propertyFromSearch.fulfilled, (state,action) => {
            state.isSearching=false
            state.searchResult=action.payload
          })
          .addCase(propertyFromSearch.rejected, (state,action) => {
            state.sending=false
            state.searchingMassage=action.error.message
          })
    }
  })
//   export const {} = contactSlice.actions;
export const { showMore } = SearchSlice.actions;

  export default SearchSlice.reducer;