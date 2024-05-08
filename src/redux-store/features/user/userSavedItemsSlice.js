import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  fav: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  search: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  deleteSearch: {
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getFavProp = createAsyncThunk(
  "userNeeds/getFavProp",
  async (thunkAPI) => {
    const userToken = Cookies.get("userToken");
    try {
      const response = await axiosInstance.get(` /user/favorites/get`, {
        headers: {
          token: userToken,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const getSavedSearch = createAsyncThunk(
  "userNeeds/getSavedSearch",
  async (thunkAPI) => {
    const userToken = Cookies.get("userToken");
    try {
      const response = await axiosInstance.get(` /search/get-save-search `, {
        headers: {
          token: userToken,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deleteSavedSearch = createAsyncThunk(
  "userNeeds/deleteNeed",
  async (id, thunkAPI) => {
    const userToken = Cookies.get("userToken");
    try {
      const response = await axiosInstance.delete(
        `/search/delete-save-search/${id}`,
        {
          headers: {
            token: userToken,
          },
        },
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const userSavedItems = createSlice({
  name: "userNeeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavProp.pending, (state, action) => {
        state.fav.status = "loading";
      })
      .addCase(getFavProp.fulfilled, (state, action) => {
        state.fav.data = action.payload;
        state.fav.status = "succeeded";
      })
      .addCase(getFavProp.rejected, (state, action) => {
        state.fav.error = action.payload;
        state.fav.status = "failed";
      })
      .addCase(getSavedSearch.pending, (state, action) => {
        state.search.status = "loading";
      })
      .addCase(getSavedSearch.fulfilled, (state, action) => {
        state.search.data = action.payload;
        state.search.status = "succeeded";
      })
      .addCase(getSavedSearch.rejected, (state, action) => {
        state.search.error = action.payload;
        state.search.status = "failed";
      })
      .addCase(deleteSavedSearch.pending, (state, action) => {
        state.deleteSearch.status = "loading";
      })
      .addCase(deleteSavedSearch.fulfilled, (state, action) => {
        state.deleteSearch.status = "succeeded";
      })
      .addCase(deleteSavedSearch.rejected, (state, action) => {
        state.deleteSearch.error = action.payload;
        state.deleteSearch.status = "failed";
      });
  },
});

export default userSavedItems.reducer;
