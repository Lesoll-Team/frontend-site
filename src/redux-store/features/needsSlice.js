import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  needsData: {
    offer: "For Sale",
    unitType: "",
    propType: "",
    saleOption: "Cash",
    rentalPeriod: "Monthly",
    rooms: "",
    bathrooms: "",
    governrate: {
      name: "",
      id: "",
    },
    region: {
      name: "",
      id: "",
    },
    price: {
      from: 0,
      to: 0,
    },
    area: {
      from: 0,
      to: 0,
    },
    installmentOption: {
      type: "Yearly",
    },
    description: "",
  },
  status: "idle", //? idle | "loading" | "succeeded" | "falild"
  error: null,
  errors: {
    // offer: true,
    unitType: false,
    propType: false,
    saleOption: false,
    rentalPeriod: false,
    installmentType: false,
    rooms: false,
    bathrooms: false,
    governrate: false,
    region: false,
    minPrice: false,
    maxPrice: false,
    minArea: false,
    maxArea: false,
    description: false,
  },
  step: 1,
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
    setStep: (state, action) => {
      state.step = action.payload;
    },
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
    setInstallmentType: (state, action) => {
      state.needsData.installmentOption.type = action.payload;
    },
    setRooms: (state, action) => {
      state.needsData.rooms = action.payload;
    },
    setBathrooms: (state, action) => {
      state.needsData.bathrooms = action.payload;
    },
    setGovernrateName: (state, action) => {
      state.needsData.governrate.name = action.payload;
    },
    setGovernrateId: (state, action) => {
      state.needsData.governrate.id = action.payload;
    },

    setRegionName: (state, action) => {
      state.needsData.region.name = action.payload;
    },
    setRegionId: (state, action) => {
      state.needsData.region.id = action.payload;
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
    setDescription: (state, action) => {
      state.needsData.description = action.payload;
    },
    resetData: (state, action) => {
      state.needsData = {
        offer: "For Sale",
        unitType: "",
        propType: "",
        saleOption: "Cash",
        rentalPeriod: "Monthly",
        rooms: "",
        bathrooms: "",
        governrate: "",
        region: "",
        price: {
          from: 0,
          to: 0,
        },
        area: {
          from: 0,
          to: 0,
        },
        installmentOption: {
          type: "Yearly",
        },
        description: "",
      };
      state.status = "idle";
    },
    setOfferErr: (state, action) => {
      state.errors.offer = action.payload;
    },
    setUnitTypeErr: (state, action) => {
      state.errors.unitType = action.payload;
    },
    setPropTypeErr: (state, action) => {
      state.errors.propType = action.payload;
    },
    setInstallmentTypeErr: (state, action) => {
      state.errors.installmentType = action.payload;
    },
    setRentalPeriodErr: (state, action) => {
      state.errors.rentalPeriod = action.payload;
    },
    setRoomsErr: (state, action) => {
      state.errors.rooms = action.payload;
    },
    setBathroomsErr: (state, action) => {
      state.errors.bathrooms = action.payload;
    },
    setGovernrateErr: (state, action) => {
      state.errors.governrate = action.payload;
    },
    setRegionErr: (state, action) => {
      state.errors.region = action.payload;
    },
    setMinPriceErr: (state, action) => {
      state.errors.minPrice = action.payload;
    },
    setMaxPriceErr: (state, action) => {
      state.errors.maxPrice = action.payload;
    },
    setDescriptionErr: (state, action) => {
      state.errors.description = action.payload;
    },
    setMinAreaErr: (state, action) => {
      state.errors.minArea = action.payload;
    },
    setMaxAreaErr: (state, action) => {
      state.errors.maxArea = action.payload;
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
export const validate = (state) => {};
export const validateNeed = () => {};
export const {
  setStep,
  setOffer,
  setUnitType,
  setPropType,
  setSaleOption,
  setRentalPeriod,
  setInstallmentType,
  setRooms,
  setBathrooms,
  setGovernrateName,
  setGovernrateId,
  setRegionName,
  setRegionId,
  setPriceFrom,
  setPriceTo,
  setAreaFrom,
  setAreaTo,
  setDescription,
  resetData,
  setOfferErr,
  setUnitTypeErr,
  setPropTypeErr,
  setRoomsErr,
  setBathroomsErr,
  setGovernrateErr,
  setRegionErr,
  setMinPriceErr,
  setMaxPriceErr,
  setMinAreaErr,
  setMaxAreaErr,
  setRentalPeriodErr,
  setDescriptionErr,
} = needsSlice.actions;

export default needsSlice.reducer;
