export const initialAddPropData = {
  title: "",
  offer: "For Sale",
  mainImage: "",
  multiImage: "",
  rentalPeriod: {
    value: "",
    name: {
      ar: "",
      en: "",
    },
  },
  insurance: "",
  saleOption: "", //'', 'Cash', 'Installment', 'Cash & Installment'
  governrate: {},
  region: {},
  propType: {
    name: "",
    value: "",
  }, //'Residential', 'Commercial', 'Land',
  unitType: {
    name: "",
    value: "",
  }, //'Residential', 'Commercial', 'Land'
  price: "",
  area: "",
  areaType: "m",
  realEstateFinance: false,
  downPayment: "",
  maintenancePayment: "",
  deliveryDate: null,
  sellerName: "",
  sellerEmail: "",
  rooms: "",
  bathRooms: "",
  description: "",
  service: [], //ID,
  installmentOption: {
    type: "Yearly",
    period: "",
    amount: "",
  },
  address: {
    name: "",
    // governrate: "",
    // region: "",
    longitude: "",
    latitude: "",
    // placeId: "",
    // postalCode: "",
  },

  connectPhoneNumber: "",

  countryCode: "",
  status: "Pending",
  reason: "",
  level: "",
  negotiable: false,
  finishingType: "",
  isRegisterd: false,
  isFurnished: false,
  downPaymentType: "cash",
  downPaymentAmount: "",
  installmentPeriodType: "yearly",
  // installmentPeriod: 0,
  phoneChoice: "same", // "same" , "other"
};
