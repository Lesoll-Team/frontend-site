import { createSlice } from "@reduxjs/toolkit";
import { initialStateCategory } from "./initialState";
import { sendFilterSearch } from "@/components/category/api";

const categorySlice = createSlice({
  name: "Category",
  initialState: initialStateCategory,
  reducers: {
    updateAllStates: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    sendFilterToRootsPage: (state) => {
      const filterInput = {
        category: state.categoryType,
        saleOptions: state.saleOption,
        unitType: state.unitTypes,
        governorate: state.locationGovernorate,
        region: state.locationRegion,
      };
      const queryInput = {
        priceFrom: state.priceFrom,
        priceTo: state.priceTo,
        areaFrom: state.areaFrom,
        areaTo: state.areaTo,
        numBathrooms: state.numBathrooms,
        numBedrooms: state.numBedrooms,
        finishedOption: state.finishedOption,
        keyword: state.searchKeyword,
        paymentType: state.paymentType,
        page: state.pageNumber,
        mortgage: state.propFinancing,
        sort: state.sort,
      };
      sendFilterSearch({
        queryInput,
        filterInput,
      });
    },
  },
});
export const { updateAllStates, sendFilterToRootsPage } = categorySlice.actions;
export default categorySlice.reducer;
