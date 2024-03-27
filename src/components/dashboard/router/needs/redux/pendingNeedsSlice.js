import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pending: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  active: {
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
      if (error.response.status === 400) {
        return { getData: [] };
      } else {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  }
);
export const getActiveNeeds = createAsyncThunk(
  "pendingNeeds/getActiveNeeds",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/need/get-all-needs?page=${page || 1}&limit=9`
      );
      return response.data;
    } catch (error) {
      if (error.response.status === 400) {
        return { getAllData: [] };
      } else {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  }
);
export const acceptNeed = createAsyncThunk(
  "pendingNeeds/acceptNeed",
  async (id, thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
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
export const deleteNeed = createAsyncThunk(
  "pendingNeeds/deleteNeed",
  async (id, thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/need/delete-need/${id}?token=${userToken}`,
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
    builder
      .addCase(getPendingNeeds.pending, (state) => {
        state.pending.status = "loading";
        state.pending.error = null;
      })
      .addCase(getPendingNeeds.fulfilled, (state, action) => {
        state.pending.data = action.payload;
        state.pending.status = "succeeded";
        state.pending.error = null;
      })
      .addCase(getPendingNeeds.rejected, (state, action) => {
        state.pending.status = "failed";
        state.pending.error = action.payload;
      })
      .addCase(acceptNeed.pending, (state) => {
        state.accept.status = "loading";
      })
      .addCase(acceptNeed.fulfilled, (state, action) => {
        state.accept.error = null;
        state.accept.status = "succeeded";
      })
      .addCase(acceptNeed.rejected, (state, action) => {
        state.accept.status = "failed";
        state.accept.error = action.payload;
      })
      .addCase(deleteNeed.pending, (state) => {
        state.delete.status = "loading";
      })
      .addCase(deleteNeed.fulfilled, (state, action) => {
        state.delete.error = null;
        state.delete.status = "succeeded";
      })
      .addCase(deleteNeed.rejected, (state, action) => {
        state.delete.status = "failed";
        state.delete.error = action.payload;
      })
      .addCase(getActiveNeeds.pending, (state) => {
        state.active.status = "loading";
        state.active.error = null;
      })
      .addCase(getActiveNeeds.fulfilled, (state, action) => {
        state.active.data = action.payload;
        state.active.status = "succeeded";
        state.active.error = null;
      })
      .addCase(getActiveNeeds.rejected, (state, action) => {
        state.active.status = "failed";
        state.active.error = action.payload;
      });
  },
});

export default pendingNeedsSlice.reducer;
