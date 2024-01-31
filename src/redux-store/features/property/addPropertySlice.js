import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addPropertyInitialState } from "./addProperty/initialState";

const initialState = addPropertyInitialState;

const addPropertySlice = createSlice({
  name: "addProperty",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
