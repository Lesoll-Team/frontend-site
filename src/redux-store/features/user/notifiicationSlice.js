import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  notifications: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  visit: {
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
  visitAll: {
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getNotifications = createAsyncThunk(
  "notificationSlice/getNotifications",
  async (thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/notification/get/user`,
        {
          headers: {
            token: userToken,
          },
        }
      );
      return response.data.notification;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const visitNotification = createAsyncThunk(
  "notificationSlice/visitNotification",
  async (id, thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/notification/markasread/${id}?token=${userToken}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const visitAllNotifications = createAsyncThunk(
  "notificationSlice/visitAllNotifications",
  async (thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/notification/markall?token=${userToken}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const notificationSlice = createSlice({
  name: "notificationSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNotifications.pending, (state, action) => {
        state.notifications.status = "loading";
        state.notifications.error = null;
      })
      .addCase(getNotifications.fulfilled, (state, action) => {
        state.notifications.status = "succedded";
        state.notifications.data = action.payload;
        state.notifications.error = null;
      })
      .addCase(getNotifications.rejected, (state, action) => {
        state.notifications.status = "failed";
        state.notifications.error = action.payload;
      })
      .addCase(visitNotification.pending, (state, action) => {
        state.visit.status = "loading";
        state.visit.error = null;
      })
      .addCase(visitNotification.fulfilled, (state, action) => {
        state.visit.status = "succedded";
        // state.visit.data = action.payload;
        state.visit.error = null;
      })
      .addCase(visitNotification.rejected, (state, action) => {
        state.visit.status = "failed";
        state.visit.error = action.payload;
      })
      .addCase(visitAllNotifications.pending, (state, action) => {
        state.visitAll.status = "loading";
        state.visitAll.error = null;
      })
      .addCase(visitAllNotifications.fulfilled, (state, action) => {
        state.visitAll.status = "succedded";
        // state.visitAll.data = action.payload;
        state.visitAll.error = null;
      })
      .addCase(visitAllNotifications.rejected, (state, action) => {
        state.visitAll.status = "failed";
        state.visitAll.error = action.payload;
      });
  },
});

export default notificationSlice.reducer;