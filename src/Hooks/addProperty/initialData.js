export const initialAddPropData = {
  title: "",
  offer: "For Sale",
  mainImage: "",
  multiImage: "",
  rentalPeriod: "",
  insurance: 0,
  saleOption: "", //'', 'Cash', 'Installment', 'Cash & Installment'
  governrate: "", //ID
  region: "", //ID
  propType: {
    name: "",
    value: "",
  }, //'Residential', 'Commercial', 'Land',
  unitType: {
    name: "",
    value: "",
  }, //'Residential', 'Commercial', 'Land'
  landType: "", // '', 'Agriculture', 'Building'
  price: 0,
  area: 0,
  areaType: "m",
  realEstateFinance: false,
  downPayment: "",
  maintenancePayment: "",
  deliveryDate: "",
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
    governrate: "",
    region: "",
    longitude: "",
    latitude: "",
    placeId: "",
    postalCode: "",
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
