import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  offer: "",
  img: [],
  rentalPeriod: "",
  insurance: "",
  saleOption: null, //'', 'Cash', 'Installment', 'Real Estate Finance'
  governrate: null, //ID
  region: null, //ID
  propType: "Residential", //'Residential', 'Commercial', 'Land',
  unitType: "", //'Residential', 'Commercial', 'Land'
  landType: "", // '', 'Agriculture', 'Building'
  price: null,
  area: null,
  realEstateFinance: false,
  downPayment: null,
  rooms: null,
  bathRooms: null,
  description: "",
  service: "", //ID,
  installmentOption: {
    type: "Year",
    period: null,
    amount: null,
  },
  address: {
    name: "",
    governrate: "",
    region: "",
    longitude: "",
    latitude: "",
    placeId: "",
    postalCode: "",
  },

  appointments: {
    allDays: "",
    from: "",
    to: "",
    startDate: "",
    endDate: "",
  },
  status: "pendding",
  reason: "",
  level: "",
  negotiable: false,
  finishingType: "",
  isFurnished: false,
  isRegisterd: false,
};

const propertySlice = createSlice({
  name: "Property",
  initialState,
  reducers: {
    setPaymentMethod: (state, action) => {
      state.saleOption = action.payload;
    },
    setOffer: (state, action) => {
      state.offer = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setPropType: (state, action) => {
      state.propType = action.payload;
    },
    setRealEstateFinance: (state) => {
      state.realEstateFinance = !state.realEstateFinance;
    },
    setNegotiable: (state, action) => {
      state.negotiable = !state.negotiable;
    },
    setUnitType: (state, action) => {
      state.unitType = action.payload;
    },
    setArea: (state, action) => {
      state.area = action.payload;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setBathRooms: (state, action) => {
      state.bathRooms = action.payload;
    },
    setFinishingType: (state, action) => {
      state.finishingType = action.payload;
    },
    setIsFurnished: (state) => {
      state.isFurnished = !state.isFurnished;
    },
    setIsRegisterd: (state) => {
      state.isRegisterd = !state.isRegisterd;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setRentalPeriod: (state, action) => {
      state.rentalPeriod = action.payload;
    },
    setRentalPeriod: (state, action) => {
      state.rentalPeriod = action.payload;
    },
    setInsurance: (state, action) => {
      state.insurance = action.payload;
    },
    setInstallmentPlan: (state, action) => {
      state.installmentOption.type = action.payload;
    },
    setInstallmentPeriod: (state, action) => {
      state.installmentOption.period = action.payload;
    },
    setDownPayment: (state, action) => {
      state.downPayment = action.payload;
    },
  },
  // extraReducers:{}
});
export const {
  setPaymentMethod,
  setTitle,
  setPropType,
  setUnitType,
  setArea,
  setRooms,
  setBathRooms,
  setFinishingType,
  setIsFurnished,
  setIsRegisterd,
  setDescription,
  setPrice,
  setRentalPeriod,
  setInsurance,
  setRealEstateFinance,
  setNegotiable,
  setOffer,
  setInstallmentPlan,
  setInstallmentPeriod,
  setDownPayment,
} = propertySlice.actions;
export default propertySlice.reducer;
