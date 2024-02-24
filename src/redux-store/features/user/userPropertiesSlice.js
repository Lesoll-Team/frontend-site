import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  active: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  pending: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  sold: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getActiveProp = createAsyncThunk(
  "userProperties/getActive",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/user/confirmedprofile?limit=9&page=${1}`,
        {
          headers: {
            token: JSON.parse(localStorage.getItem("userToken")),
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getPendingProp = createAsyncThunk(
  "userProperties/getPending",
  async (thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/pendingrealtyprofile`,
        { headers: { token: userToken } }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getSoldProp = createAsyncThunk(
  "userProperties/getSold",
  async (thunkAPI) => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/sold/get`,
        { headers: { token: userToken } }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userPropertiesSlice = createSlice({
  name: "userProperties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActiveProp.pending, (state, action) => {
        state.active.status = "loading";
      })
      .addCase(getActiveProp.fulfilled, (state, action) => {
        state.active.status = "succeeded";
        state.active.data = action.payload;
      })
      .addCase(getActiveProp.rejected, (state, action) => {
        state.active.status = "failed";
        state.active.error = action.payload;
      })
      .addCase(getPendingProp.pending, (state, action) => {
        state.pending.status = "loading";
      })
      .addCase(getPendingProp.fulfilled, (state, action) => {
        state.pending.status = "succeeded";
        state.pending.data = action.payload;
      })
      .addCase(getPendingProp.rejected, (state, action) => {
        state.pending.status = "failed";
        state.pending.error = action.payload;
      })
      .addCase(getSoldProp.pending, (state, action) => {
        state.sold.status = "loading";
      })
      .addCase(getSoldProp.fulfilled, (state, action) => {
        state.sold.status = "succeeded";
        state.sold.data = action.payload;
      })
      .addCase(getSoldProp.rejected, (state, action) => {
        state.sold.status = "failed";
        state.sold.error = action.payload;
      });
  },
});

export default userPropertiesSlice.reducer;
