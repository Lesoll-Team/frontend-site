export const paymentMethodData = {
  en: [
    { value: "", name: " All" },
    { value: "Cash", name: "Cash" },
    { value: "Installment", name: "Installment" },
    { value: "Real_Estate_Finance", name: "Real Estate Finance" },
  ],
  ar: [
    { value: "", name: "الكل" },
    { value: "Cash", name: "نقدى" },
    { value: "Installment", name: "تقسيط" },
    // { value: "Real_Estate_Finance", name: "تمويل عقارى" },
  ],
};
export const percentageProperty = {
  en: [
    { value: "", name: " All" },
    { value: "3_Real_Estate_Finance", name: " CBE 3% Initiative" },
    { value: "8_Real_Estate_Finance", name: "CBE 8% Initiative" },
  ],
  ar: [
    { value: "", name: "الكل" },
    { value: "3_Real_Estate_Finance", name: "3% تمويل عقارى" },
    { value: "8_Real_Estate_Finance", name: "8% تمويل عقارى " },
  ],
};
export const finishingOptionsData = {
  en: [
    { value: "", name: " All" },
    { value: "Super Lux", name: "Super Lux" },
    { value: "Lux", name: "Lux" },
    { value: "Finished", name: "Semi Finished" },
    { value: "Not Finished", name: "Not Finished" },
  ],
  ar: [
    { value: "", name: "الكل" },
    { value: "Super Lux", name: "سوبر لوكس" },
    { value: "Lux", name: "لوكس" },
    { value: "Finished", name: "نصف تشطيب" },
    { value: "Not Finished", name: "بدون تشطيب" },
  ],
};

export const saleOptionsData = {
  en: [
    { value: "", name: " All" },
    { value: "For Sale", name: "For Sale" },
    { value: "For Rent", name: "For Rent" },
  ],
  ar: [
    { value: "", name: "الكل" },
    { value: "For Sale", name: "للبيع" },
    { value: "For Rent", name: "للإيحار" },
  ],
};
export const propertyTypeData = {
  en: [
    { value: "", name: " All" },
    { value: "Residential", name: "Residential" },
    { value: "Commercial", name: "Commercial" },
    { value: "Land", name: "Land" },
  ]
,
  ar: [
      // { value: "", name: "الكل" },
      { value: "Residential", name: "سكني" },
      { value: "Commercial", name: "تجاري" },
      { value: "Land", name: "أرض" },
    ]
};

export const unitTypeData = {
  en: {
    Residential: [
      { value: "Apartment", name: "Apartment" },
      { value: "Apartment_with_garden", name: "Apartment with garden" },
      { value: "Duplex", name: "Duplex" },
      { value: "Studio", name: "Studio" },
      { value: "Penthouse", name: "Penthouse" },
      { value: "Hotel_Apartment", name: "Hotel Apartment" },
      { value: "Floor", name: "Floor" },
      { value: "Residential_Building", name: "Residential Building" },
      { value: "Home", name: "Home" },
      { value: "Chalete", name: "Chalete" },
      { value: "Cabin", name: "Cabin" },
      { value: "Village", name: "Village" },
      { value: "Townhouse", name: "Townhouse" },
      { value: "Twin house", name: "Twin house" },
    ],

    Commercial: [
      { value: "Clinic", name: "Clinic" },
      { value: "Office", name: "Office" },
      { value: "Garage", name: "Garage" },
      { value: "Factory", name: "Factory" },
      { value: "Warehouse", name: "Warehouse" },
      { value: "Retail", name: "Retail" },
      { value: "Restaurant", name: "Restaurant" },
      { value: "Cafe", name: "Cafe" },
      { value: "Shop", name: "Shop" },
    ],

    Land: [
      { value: "Building", name: "Land for building" },
      { value: "Agriculture", name: "Agrarian" },
    ],
  },

  ar: {
    Residential: [
      { value: "شقة", name: "شقة" },
      { value: "شقة بحديقة", name: "شقة بحديقة" },
      { value: "دوبلكس", name: "دوبلكس" },
      { value: "ستوديو", name: "ستوديو" },
      { value: "بينتهاوس", name: "بينتهاوس" },
      { value: "شقق فندقية", name: "شقق فندقية" },
      { value: "أرضى", name: "أرضى" },
      { value: "شقق مفروشة", name: "شقق مفروشة" },
      // { value: "642449f07502ee416a864e95", name: "عمارة" },
      { value: "بيت", name: "بيت" },
      { value: "شالية", name: "شالية" },
      { value: "كابينة", name: "كابينة" },
      { value: "فيلا", name: "فيلا" },
      { value: "تاون هاوس", name: "تاون هاوس" },
      { value: "توين هاوس", name: "توين هاوس" },
    ],
  
    Commercial: [
      { value: "عياده", name: "عيادة" },
      { value: "مكتب", name: "مكتب" },
      { value: "جراج", name: "جراج" },
      { value: "مصنع", name: "مصنع" },
      { value: "مستودع", name: "مستودع" },
      { value: "ريتيل", name: "ريتيل" },
      { value: "مطعم", name: "مطعم" },
      { value: "كافية", name: "كافية" },
      { value: "محل", name: "محل" },
    ],
  
    Land: [
      { value: "زراعية", name: "زراعى" },
      { value: "مبانى", name: "ارض للبناء" },
    ],
  },
};


export const sortedData = {
  en: [
    { value: "", name: " All" },
    { value: "min_price", name: "Low Price" },
    { value: "max_price", name: "High Price" },
    { value: "max_view", name: "Most viewed" },
    { value: "min_view", name: "Less viewed" },
    { value: "old_prop", name: "Old" },
  ],
  ar: [
    { value: "", name: "الكل" },
    { value: "min_price", name: "أقل سعر" },
    { value: "max_price", name: "أكثر سعر" },
    { value: "max_view", name: "أكثر مشاهدة" },
    { value: "min_view", name: "أقل مشاهدة" },
    { value: "old_prop", name: "أقدم" },
  ],
};