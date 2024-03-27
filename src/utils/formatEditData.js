export const formatEditData = (data) => {
  const formattedData = {
    title: data?.title,
    offer: data?.offer,
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
    saleOption: {
      value: [],
      name: {
        ar: "",
        en: "",
      },
    }, //'', 'Cash', 'Installment', 'Cash & Installment'
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
    price: data.price,
    area: data.area,
    areaType: "m",
    realEstateFinance: data.realEstateFinance,
    downPayment: "",
    maintenancePayment: "",
    deliveryDate: data?.deliveryDate,
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
    installment: [
      {
        type: {
          value: "",
          name: {
            ar: "",
            en: "",
          },
        },
        period: "",
        amount: "",
        downPayment: "",
        discount: "",
      },
    ],
    address: {
      name: "",
      governrate: {},
      region: {},
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
};
