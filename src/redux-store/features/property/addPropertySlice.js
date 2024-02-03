import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  step: 1,
  status: "idle", // ? "idle" | "loading" | "succeeded" |"failed"
  error: null,
};

export const submitProperty = createAsyncThunk(
  "addPropert/submitPropert",
  async (data, thunkAPI) => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/property/create`,
        data,
        {
          headers: {
            token: userToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const addPropertySlice = createSlice({
  name: "addProperty",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    resetAddProp: (state) => {
      state.error = null;
      state.step = 1;
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(submitProperty.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitProperty.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitProperty.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setStep, resetAddProp } = addPropertySlice.actions;
export default addPropertySlice.reducer;
