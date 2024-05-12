import axiosInstance from "@/Shared/axiosInterceptorInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
  async () => {
    try {
      const response = await axiosInstance.get(`/notification/get/user`);
      return response.data.notification;
    } catch (error) {
      console.log("getNotifications slice,", error);
      return [];
    }
  },
);

export const visitNotification = createAsyncThunk(
  "notificationSlice/visitNotification",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.patch(
        `/notification/markasread/${id}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const visitAllNotifications = createAsyncThunk(
  "notificationSlice/visitAllNotifications",
  async (thunkAPI) => {
    try {
      const response = await axiosInstance.put(`/notification/markall`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
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
