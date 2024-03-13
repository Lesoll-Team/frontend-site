import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pending: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  accept: {
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  delete: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};
export const getPendingNeeds = createAsyncThunk(
  "pendingNeeds/getPendingNeeds",
  async (thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/need/admin/pending-need?page=1&limit=9`,
        {
          headers: {
            token: `${userToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const acceptNeed = createAsyncThunk(
  "pendingNeeds/acceptNeed",
  async (id, thunkAPI) => {
    console.log(id);
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    console.log();
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/need/accept-need/${id}?token=${userToken}`,
        {
          headers: {
            token: `${userToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const pendingNeedsSlice = createSlice({
  name: "pendingNeeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPendingNeeds.pending, (state) => {
      state.pending.status = "loading";
      state.pending.error = null;
    });
    builder.addCase(getPendingNeeds.fulfilled, (state, action) => {
      state.pending.data = action.payload;
      state.pending.status = "succeeded";
      state.pending.error = null;
    });
    builder
      .addCase(getPendingNeeds.rejected, (state, action) => {
        state.pending.status = "failed";
        state.pending.error = action.payload;
      })
      .addCase(acceptNeed.pending, (state) => {
        state.accept.status = "loading";
      });
    builder.addCase(acceptNeed.fulfilled, (state, action) => {
      state.accept.error = null;
      state.accept.status = "succeeded";
    });
    builder.addCase(acceptNeed.rejected, (state, action) => {
      state.accept.status = "failed";
      state.accept.error = action.payload;
    });
  },
});

export default pendingNeedsSlice.reducer;
