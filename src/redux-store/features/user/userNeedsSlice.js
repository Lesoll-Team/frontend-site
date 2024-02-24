import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  needs: {
    data: null,
    status: "idle", //? "idle" | "loading" | "succeeded" |"failed"
    error: null,
  },
};

export const getUserNeeds = createAsyncThunk(
  "userNeeds/getUserNeeds",
  async (id, thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/need/get-profile-needs`,
        {
          headers: {
            token: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userNeedsSlice = createSlice({
  name: "userNeeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserNeeds.pending, (state, action) => {
        state.needs.status = "loading";
      })
      .addCase(getUserNeeds.fulfilled, (state, action) => {
        state.needs.data = action.payload;
        state.needs.status = "succeeded";
      })
      .addCase(getUserNeeds.rejected, (state, action) => {
        state.needs.error = action.payload;
        state.needs.status = "failed";
      });
  },
});

export default userNeedsSlice.reducer;
