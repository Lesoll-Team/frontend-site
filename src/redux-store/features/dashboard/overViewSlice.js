import {
  fetchPropertiesView,
  fetchSaleView,
  fetchUsersView,
  fetchDeleteView,
  fetchRentView,
} from "@/utils/dashboardApi/overviewDashboard";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataProperties: null,
  dataRent: null,
  dataSale: null,
  dataDeleted: null,
  dataUsers: null,
  status: false,
  errorMassage: null,
};

export const getRentView = createAsyncThunk(
  "OverView/fetchRentView",
  async (dates) => {
    const response = await fetchRentView(dates);
    return response; // Assuming your API returns user data upon successful signup
  }
);
export const getUsersView = createAsyncThunk(
  "OverView/fetchUsersView",
  async (dates) => {
    const response = await fetchUsersView(dates);
    return response; // Assuming your API returns user data upon successful signup
  }
);
export const getDeleteView = createAsyncThunk(
  "OverView/fetchDeleteView",
  async (dates) => {
    const response = await fetchDeleteView(dates);
    return response; // Assuming your API returns user data upon successful signup
  }
);
export const getSaleView = createAsyncThunk(
  "OverView/fetchSaleView",
  async (dates) => {
    const response = await fetchSaleView(dates);
    return response; // Assuming your API returns user data upon successful signup
  }
);
export const getPropertiesView = createAsyncThunk(
  "OverView/fetchPropertiesView",
  async (dates) => {
    const response = await fetchPropertiesView(dates);
    return response; // Assuming your API returns user data upon successful signup
  }
);
const OverViewSlice = createSlice({
  name: "OverView",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getRentView.pending, (state) => {
        state.status = true;
        state.errorMassage = null;
      })
      .addCase(getRentView.fulfilled, (state, action) => {
        state.status = false;
        state.dataRent = action.payload;
        state.errorMassage = null;
      })
      .addCase(getRentView.rejected, (state, action) => {
        state.status = false;
        state.errorMassage = action.error;
      })

      .addCase(getDeleteView.pending, (state) => {
        state.status = true;
        state.errorMassage = null;
      })
      .addCase(getDeleteView.fulfilled, (state, action) => {
        state.status = false;
        state.dataDeleted = action.payload;
        state.errorMassage = null;
      })
      .addCase(getDeleteView.rejected, (state, action) => {
        state.status = false;
        state.errorMassage = action.error;
      })

      .addCase(getUsersView.pending, (state) => {
        state.status = true;
        state.errorMassage = null;
      })
      .addCase(getUsersView.fulfilled, (state, action) => {
        state.status = false;
        state.dataUsers = action.payload;
        state.errorMassage = null;
      })
      .addCase(getUsersView.rejected, (state, action) => {
        state.status = false;
        state.errorMassage = action.error;
      })

      .addCase(getSaleView.pending, (state) => {
        state.status = true;
        state.errorMassage = null;
      })
      .addCase(getSaleView.fulfilled, (state, action) => {
        state.status = false;
        state.dataSale = action.payload;
        state.errorMassage = null;
      })
      .addCase(getSaleView.rejected, (state, action) => {
        state.status = false;
        state.errorMassage = action.error;
      })

      .addCase(getPropertiesView.pending, (state) => {
        state.status = true;
        state.errorMassage = null;
      })
      .addCase(getPropertiesView.fulfilled, (state, action) => {
        state.status = false;
        state.dataProperties = action.payload;
        state.errorMassage = null;
      })
      .addCase(getPropertiesView.rejected, (state, action) => {
        state.status = false;
        state.errorMassage = action.error;
      });
  },
});
//   export const {} = dashBoredUserSlice.actions;
export default OverViewSlice.reducer;
