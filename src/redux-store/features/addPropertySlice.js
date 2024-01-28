import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  step: 0,
  isSubmitting: false,
  errorMsg: null,
  addPropertyData: {
    title: "",
    offer: "",
    img: [],
    multiImage: null,
    mainImg: null,
    rentalPeriod: "",
    insurance: "",
    saleOption: "", //'', 'Cash', 'Installment', 'Real Estate Finance'
    governrate: null, //ID
    region: null, //ID
    propType: "Residential", //'Residential', 'Commercial', 'Land',
    unitType: "", //'Residential', 'Commercial', 'Land'
    landType: "", // '', 'Agriculture', 'Building'
    price: "",
    area: null,
    realEstateFinance: false,
    downPayment: null,
    maintenancePayment: null,

    rooms: null,
    bathRooms: null,
    description: "",
    service: [], //ID,
    installmentOption: {
      type: "Year",
      period: null,
      amount: null,
    },
    spaceType: "m",
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
    isRegisterd: false,
    isFurnished: false,
  },
};
const addPropertySlice = createSlice({
  name: "addProperty",
  initialState,
  reducers: {
    setNextStep: (state) => {
      state.step += 1;
    },
    setBackStep: (state) => {
      state.step -= 1;
    },
    setSaleOption: (state, action) => {
      state.addPropertyData.saleOption = action.payload;
    },
    setOffer: (state, action) => {
      state.addPropertyData.offer = action.payload;
    },
    setTitle: (state, action) => {
      state.addPropertyData.title = action.payload;
    },
    setPrice: (state, action) => {
      state.addPropertyData.price = action.payload;
    },
    setPropType: (state, action) => {
      state.addPropertyData.propType = action.payload;
    },
    setRealEstateFinance: (state) => {
      state.addPropertyData.realEstateFinance =
        !state.addPropertyData.realEstateFinance;
    },
    setNegotiable: (state, action) => {
      state.addPropertyData.negotiable = !state.addPropertyData.negotiable;
    },
    setUnitType: (state, action) => {
      state.addPropertyData.unitType = action.payload;
    },
    setArea: (state, action) => {
      state.addPropertyData.area = action.payload;
    },
    setSpaceType: (state, action) => {
      state.addPropertyData.spaceType = action.payload;
    },

    setRooms: (state, action) => {
      state.addPropertyData.rooms = action.payload;
    },
    setBathRooms: (state, action) => {
      state.addPropertyData.bathRooms = action.payload;
    },
    setFinishingType: (state, action) => {
      state.addPropertyData.finishingType = action.payload;
    },
    setIsFurnished: (state) => {
      state.addPropertyData.isFurnished = !state.addPropertyData.isFurnished;
    },
    setIsRegisterd: (state) => {
      state.addPropertyData.isRegisterd = !state.addPropertyData.isRegisterd;
    },
    setDescription: (state, action) => {
      state.addPropertyData.description = action.payload;
    },
    setRentalPeriod: (state, action) => {
      state.addPropertyData.rentalPeriod = action.payload;
    },
    setInsurance: (state, action) => {
      state.addPropertyData.insurance = action.payload;
    },
    setInstallmentPlan: (state, action) => {
      state.addPropertyData.installmentOption.type = action.payload;
    },
    setInstallmentPeriod: (state, action) => {
      state.addPropertyData.installmentOption.period = action.payload;
    },
    setDownPayment: (state, action) => {
      state.addPropertyData.downPayment = action.payload;
    },
    setMaintenancePayment: (state, action) => {
      state.addPropertyData.maintenancePayment = action.payload;
    },
    setMultiImage: (state, action) => {
      state.addPropertyData.multiImage = action.payload;
    },
    setStep: (state, action) => {
      state.addPropertyData.step = action.payload;
    },
    setMainImg: (state, action) => {
      state.addPropertyData.mainImg = action.payload;
    },
    setService: (state, action) => {
      state.addPropertyData.service = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const selectAddPropData = (state) => state.addProperty.addPropertyData;
export const {
  setStep,
  setNextStep,
  setBackStep,
  setSaleOption,
  setTitle,
  setPropType,
  setUnitType,
  setArea,
  setRooms,
  setBathRooms,
  setSpaceType,
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
  setMaintenancePayment,
  setMultiImage,
  setMainImg,
  setService,
} = addPropertySlice.actions;
export default addPropertySlice.reducer;
