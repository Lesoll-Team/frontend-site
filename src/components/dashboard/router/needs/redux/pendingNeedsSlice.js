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
