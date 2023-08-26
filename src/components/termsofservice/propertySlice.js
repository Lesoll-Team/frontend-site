import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  isSubmiting: false,
  errorMsg: null,
  dataProperty: null,
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
  isFurnished: false,
  isRegisterd: false,
};
/*
const PropertyData={isRegisterd:sdsdsd,dsdsds:sdsdsd,Sdsdsd}
dispatch(postProperty(PropertyData))
*/
export const postProperty = createAsyncThunk(
  "Property/postProperty",
  async (PropertyData) => {
    try {
      const response = await axios.post(
        `http://ec2-184-73-152-95.compute-1.amazonaws.com:9000/api/property/create`,
        PropertyData
      );
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);
const propertySlice = createSlice({
  name: "Property",
  initialState,
  reducers: {
    setNextStep: (state, action) => {
      state.step += 1;
    },
    setBackStep: (state, action) => {
      state.step -= 1;
    },
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
    setSpaceType: (state, action) => {
      state.spaceType = action.payload;
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
    setMultiImage: (state, action) => {
      state.multiImage = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setMainImg: (state, action) => {
      state.mainImg = action.payload;
    },
    setService: (state, action) => {
      state.service = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postProperty.pending, (state) => {
        // console.log(action.payload);
        state.isSubmiting = true;
      })
      .addCase(postProperty.fulfilled, (state, action) => {
        state.isSubmiting = false;
        state.dataProperty = action.payload;
      })
      .addCase(postProperty.rejected, (state, action) => {
        state.isSubmiting = false;
        state.errorMsg = action.error.message;
      });
  },
});
export const {
  setStep,
  setNextStep,
  setBackStep,
  setPaymentMethod,
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
  setMultiImage,
  setMainImg,
  setService,
} = propertySlice.actions;
export default propertySlice.reducer;
