import {
  createPlanPrice,
  deleteSinglePlanPrice,
  getPlanPrice,
  getServicePricePlan,
  updatePlanPrice,
} from "@/utils/PricingAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceInfo: null,
  pricesPlans: null,
  priceService: null,
  priceError: null,
  isCreated: false,
  isUpdated: false,
  isLoading: false,
};

export const createPricePlan = createAsyncThunk(
  "Pricing/createPlanPrice",
  async (pricePlanData) => {
    const response = await createPlanPrice(pricePlanData);
    return response; // Assuming your API returns user data upon successful signup
  }
);
export const EditPricePlan = createAsyncThunk(
  "Pricing/updatePlanPrice",
  async ({ pricePlanData, id }) => {
    const response = await updatePlanPrice({ pricePlanData, id });
    return response; // Assuming your API returns user data upon successful signup
  }
);
//deleteSinglePlanPrice

export const deletePricePlan = createAsyncThunk(
  "Pricing/deleteSinglePlanPrice",
  async ({ id }) => {
    const response = await deleteSinglePlanPrice({ id });
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
  reducers: {
    resetStats(state) {
      state.priceInfo = null;
      state.pricesPlans = null;
      state.priceService = null;
      state.priceError = null;
      state.isCreated = false;
      state.isUpdated = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePricePlan.pending, (state) => {
        state.isLoading = true;
        state.isUpdated = false;
      })
      .addCase(deletePricePlan.fulfilled, (state) => {
        // state.priceInfo = action.payload;
        // state.priceError = null;
        state.isUpdated = true;
        state.isLoading = false;
      })
      .addCase(deletePricePlan.rejected, (state) => {
        // state.priceError = action.error.message;
        // state.priceInfo = null;
        state.isUpdated = false;
        state.isLoading = false;
      })
      .addCase(EditPricePlan.pending, (state) => {
        state.isLoading = true;
        state.isUpdated = false;
      })
      .addCase(EditPricePlan.fulfilled, (state, action) => {
        state.priceInfo = action.payload;
        state.priceError = null;
        state.isUpdated = true;
        state.isLoading = false;
      })
      .addCase(EditPricePlan.rejected, (state, action) => {
        state.priceError = action.error.message;
        state.priceInfo = null;
        state.isUpdated = false;
        state.isLoading = false;
      })

      .addCase(createPricePlan.pending, (state) => {
        state.isCreated = false;
      })
      .addCase(createPricePlan.fulfilled, (state, action) => {
        state.priceInfo = action.payload;
        state.priceError = null;
        state.isCreated = true;
      })
      .addCase(createPricePlan.rejected, (state, action) => {
        state.priceError = action.error.message;
        state.priceInfo = null;
        state.isCreated = false;
      })

      .addCase(getServicePrice.pending, (state) => {
        // state.isCreated = true;
      })
      .addCase(getServicePrice.fulfilled, (state, action) => {
        state.priceService = action.payload;
        state.priceError = null;
        // state.isCreated = false;
      })
      .addCase(getServicePrice.rejected, (state, action) => {
        state.priceError = action.error.message;
        state.priceService = null;
        // state.isCreated = true;
      })
      .addCase(getPricesPlans.pending, (state) => {
        // state.isCreated = false;
      })
      .addCase(getPricesPlans.fulfilled, (state, action) => {
        state.pricesPlans = action.payload;
        state.priceError = null;
        // state.isCreated = false;
      })
      .addCase(getPricesPlans.rejected, (state, action) => {
        state.pricesPlans = action.payload;
        state.priceError = null;
        // state.isCreated = false;
      });
  },
});
export const { resetStats } = PricingSlice.actions;
export default PricingSlice.reducer;
