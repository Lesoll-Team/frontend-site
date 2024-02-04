export const categoryType = [
  // "sale",
  // "rent",
  "residential",
  "investment",
  "commercial",
  "graves",
  "compounds",
  "lands",
  // "all",
];
export const categoryUnitType = [
  "apartment",
  "apartment_with_garden",
  "duplex",
  "studio",
  "penthouse",
  "hotel_apartment",
  "floor",
  "fesidential_building",
  "home",
  "chalete",
  "cabin",
  "village",
  "townhouse",
  "twin_house",
  "clinic",
  "office",
  "garage",
  "factory",
  "warehouse",
  "retail",
  "restaurant",
  "cafe",
  "shop",
  "building",
  "agriculture",
  // "all",
];

export const paymentMethodData = {
  en: [
    { value: "", name: " All" },
    { value: "Cash", name: "Cash" },
    { value: "Installment", name: "Installment" },
    { value: "Real_Estate_Finance", name: "Real Estate Finance" },
  ],
  ar: [
    { value: "", name: "الكل" },
    { value: "كاش", name: "كاش" },
    { value: "تقسيط", name: "تقسيط" },
  ],
};

export const percentageProperty = {
  en: [
    { value: "", name: " All" },
    { value: "3_Real_Estate_Finance", name: " CBE 3% Initiative" },
    { value: "8_Real_Estate_Finance", name: "CBE 8% Initiative" },
  ],
  ar: [
    // { value: "", name: "الكل" },
    { value: "تمويل_عقاري_3_بالمئة", name: "3% تمويل عقارى" },
    { value: "تمويل_عقاري_8_بالمئة", name: "8% تمويل عقارى " },
  ],
};
export const finishingOptionsData = {
  en: [
    { value: "", name: " All" },
    { value: "Super_Lux", name: "Super Lux" },
    { value: "Lux", name: "Lux" },
    { value: "Finished", name: "Semi Finished" },
    { value: "Not_Finished", name: "Not Finished" },
  ],
  ar: [
    { value: "", name: "الكل" },
    { value: "سوبر_لوكس", name: "سوبر لوكس" },
    { value: "لوكس", name: "لوكس" },
    { value: "نصف_تشطيب", name: "نصف تشطيب" },
    { value: "بدون_تشطيب", name: "بدون تشطيب" },
  ],
};

export const saleOptionsData = {
  en: [
    { value: "all", name: " All" },
    { value: "For_Sale", name: "For Sale" },
    { value: "For_Rent", name: "For Rent" },
    { value: "For_Investment", name: "For Investment" },
  ],
  ar: [
    { value: "كل", name: "الكل" },
    { value: "للبيع", name: "للبيع" },
    { value: "للايجار", name: "للإيحار" },
    { value: "للإستثمار", name: "للإستثمار" },
  ],
};
export const propertyTypeData = {
  en: [
    { value: "", name: " All" },
    { value: "Residential", name: "Residential" },
    { value: "Commercial", name: "Commercial" },
    { value: "Land", name: "Land" },
  ],
  ar: [
    { value: "", name: "الكل" },
    { value: "سكني", name: "سكني" },
    { value: "تجاري", name: "تجاري" },
    { value: "أرض", name: "أرض" },
  ],
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
      { value: "Twin_house", name: "Twin house" },
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
      { value: "شقة_بحديقة", name: "شقة بحديقة" },
      { value: "دوبلكس", name: "دوبلكس" },
      { value: "ستوديو", name: "ستوديو" },
      { value: "بينتهاوس", name: "بينتهاوس" },
      { value: "شقق_فندقية", name: "شقق فندقية" },
      { value: "أرضى", name: "أرضى" },
      { value: "شقق_مفروشة", name: "شقق مفروشة" },
      // { value: "642449f07502ee416a864e95", name: "عمارة" },
      { value: "بيت", name: "بيت" },
      { value: "شالية", name: "شالية" },
      { value: "كابينة", name: "كابينة" },
      { value: "فيلا", name: "فيلا" },
      { value: "تاون_هاوس", name: "تاون هاوس" },
      { value: "توين_هاوس", name: "توين هاوس" },
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
    { value: "أقل_سعر", name: "أقل سعر" },
    { value: "أكثر_سعر", name: "أكثر سعر" },
    { value: "أكثر_مشاهدة", name: "أكثر مشاهدة" },
    { value: "أقل_مشاهدة", name: "أقل مشاهدة" },
    { value: "أقدم", name: "أقدم" },
  ],
};
