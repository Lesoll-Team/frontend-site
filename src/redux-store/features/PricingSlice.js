import {
  createPlanPrice,
  getPlanPrice,
  getServicePricePlan,
} from "@/utils/PricingAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceInfo: null,
  pricesPlans: null,
  priceService: null,
  priceError: null,
  isCreated: false,
};

export const createPricePlan = createAsyncThunk(
  "Pricing/createPlanPrice",
  async (pricePlanData) => {
    const response = await createPlanPrice(pricePlanData);
    return response; // Assuming your API returns user data upon successful signup
  }
);

export const getPricesPlans = createAsyncThunk(
  "Pricing/getPlanPrice",
  async () => {
    const response = await getPlanPrice();
    return response; // Assuming your API returns user data upon successful signup
  }
);

export const getServicePrice = createAsyncThunk(
  "Pricing/getServicePricePlan",
  async () => {
    const response = await getServicePricePlan();
    return response.service; // Assuming your API returns user data upon successful signup
  }
);

const PricingSlice = createSlice({
  name: "Pricing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPricePlan.pending, (state) => {
        state.isCreated = true;
      })
      .addCase(createPricePlan.fulfilled, (state, action) => {
        state.priceInfo = action.payload;
        state.priceError = null;
        state.isCreated = false;
      })
      .addCase(createPricePlan.rejected, (state, action) => {
        state.priceError = action.error.message;
        state.priceInfo = null;
        state.isCreated = true;
      })
      .addCase(getServicePrice.pending, (state) => {
        state.isCreated = true;
      })
      .addCase(getServicePrice.fulfilled, (state, action) => {
        state.priceService = action.payload;
        state.priceError = null;
        state.isCreated = false;
      })
      .addCase(getServicePrice.rejected, (state, action) => {
        state.priceError = action.error.message;
        state.priceService = null;
        state.isCreated = true;
      })
      .addCase(getPricesPlans.pending, (state) => {
        state.isCreated = false;
      })
      .addCase(getPricesPlans.fulfilled, (state, action) => {
        state.pricesPlans = action.payload;
        state.priceError = null;
        state.isCreated = false;
      })
      .addCase(getPricesPlans.rejected, (state, action) => {
        state.pricesPlans = action.payload;
        state.priceError = null;
        state.isCreated = false;
      });
  },
});
//   export const { deleteMessage } = contactSlice.actions;
export default PricingSlice.reducer;
