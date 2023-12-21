import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  needsData: {
    offer: "For Sale",
    unitType: "",
    propType: "",
    saleOption: "Cash",
    rentalPeriod: "",
    rooms: "",
    bathrooms: "",
    governrate: "63be6b362518e5f7360e3d73",
    region: "63ebac546472f4aa4879ee2f",
    price: {
      from: 0,
      to: 0,
    },
    area: {
      from: 0,
      to: 0,
    },
  },
  status: "idle", //? idle | "loading" | "succeeded" | "falild"
  error: null,
};
export const postNeed = createAsyncThunk(
  "need/postNeed",
  async (needDetails) => {
    try {
      const userToken = JSON.parse(localStorage.getItem("userToken"));

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/need/create-need?token=${userToken}`,
        needDetails,
        {
          headers: {
            token: userToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      // console.log(error.response.data);
      throw error.response.data;
    }
  }
);
const needsSlice = createSlice({
  name: "need",
  initialState,
  reducers: {
    setOffer: (state, action) => {
      state.needsData.offer = action.payload;
    },
    setUnitType: (state, action) => {
      state.needsData.unitType = action.payload;
    },
    setPropType: (state, action) => {
      state.needsData.propType = action.payload;
    },
    setSaleOption: (state, action) => {
      state.needsData.saleOption = action.payload;
    },
    setRentalPeriod: (state, action) => {
      state.needsData.rentalPeriod = action.payload;
    },
    setRooms: (state, action) => {
      state.needsData.rooms = action.payload;
    },
    setBathrooms: (state, action) => {
      state.needsData.bathrooms = action.payload;
    },
    setTheGovernrate: (state, action) => {
      state.needsData.governrate = action.payload;
    },
    setTheRegion: (state, action) => {
      state.needsData.region = action.payload;
    },
    setPriceFrom: (state, action) => {
      state.needsData.price.from = action.payload;
    },
    setPriceTo: (state, action) => {
      state.needsData.price.to = action.payload;
    },
    setAreaFrom: (state, action) => {
      state.needsData.area.from = action.payload;
    },
    setAreaTo: (state, action) => {
      state.needsData.area.to = action.payload;
    },
    resetData: (state, action) => {
      state.needsData = {
        offer: "For Sale",
        unitType: "",
        propType: "",
        saleOption: "Cash",
        rentalPeriod: "",
        rooms: "",
        bathrooms: "",
        governrate: "63be6b362518e5f7360e3d73",
        region: "63ebac546472f4aa4879ee2f",
        price: {
          from: 0,
          to: 0,
        },
        area: {
          from: 0,
          to: 0,
        },
      };
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postNeed.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postNeed.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(postNeed.rejected, (state, action) => {
        state.status = "faild";
        state.error = action.error.data;
      });
  },
});

export const {
  setOffer,
  setUnitType,
  setPropType,
  setSaleOption,
  setRentalPeriod,
  setRooms,
  setBathrooms,
  setTheGovernrate,
  setTheRegion,
  setPriceFrom,
  setPriceTo,
  setAreaFrom,
  setAreaTo,
  resetData,
} = needsSlice.actions;

export default needsSlice.reducer;
