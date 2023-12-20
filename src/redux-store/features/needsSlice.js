import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offer: "",
  unitType: "",
  saleOption: "",
  rentalPeriod: "",
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
};

const needsSlice = createSlice({
  name: "need",
  initialState,
  reducers: {},
});
