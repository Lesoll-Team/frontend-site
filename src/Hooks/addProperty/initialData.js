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
  propType: "", //'Residential', 'Commercial', 'Land',
  unitType: "", //'Residential', 'Commercial', 'Land'
  landType: "", // '', 'Agriculture', 'Building'
  price: 0,
  area: 0,
  areaType: "m",
  realEstateFinance: false,
  downPayment: 0,
  maintenancePayment: 0,
  deliveryDate: "",
  sellerName: "",
  sellerEmail: "",
  rooms: 0,
  bathRooms: 0,
  description: "",
  service: [], //ID,
  installmentOption: {
    type: "Yearly",
    period: 0,
    amount: 0,
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
  downPaymentAmount: 0,
  installmentPeriodType: "yearly",
  // installmentPeriod: 0,
  phoneChoice: "same", // "same" , "other"
};
