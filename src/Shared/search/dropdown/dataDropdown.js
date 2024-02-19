export const propertyType = {
  ar: [
    // { value: "sale", name: "بيع", id: 1 },
    // { value: "rent", name: "للإيجار", id: 2 },
    { value: "investment", name: "إستثمار", id: 3 },
    { value: "finance", name: "تمويل عقاري", id: 4 },
    { value: "graves", name: "مدافن", id: 5 },
    { value: "commercial", name: "تجاري", id: 6 },
    { value: "compounds", name: "كمباوند", id: 7 },
    { value: "lands", name: "اراضي", id: 8 },
  ],
  en: [
    // { value: "sale", name: "Sale", id: 1 },
    // { value: "rent", name: "Rent", id: 1 },
    { value: "investment", name: "Investment", id: 1 },
    { value: "finance", name: "Finance", id: 1 },
    { value: "graves", name: "Graves", id: 1 },
    { value: "commercial", name: "Commercial", id: 1 },
    { value: "compounds", name: "Compounds", id: 1 },
    { value: "lands", name: "Lands", id: 1 },
  ],
};
export const categoryType = [
  "sale",
  "rent",
  // "residential",
  // { value: "installment", name: "Installment", id: 2 },
  "investment",
  "finance",
  "graves",

  "commercial",
  // "commercial-sale",
  // "commercial-rent",

  "compounds",
  // "compounds-rent",
  // "compounds-sale",

  "lands",
  // "lands-rent",
  // "lands-sale",
  // "cash",
  // "installment",
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
    { value: "cash", name: "Cash", id: 1 },
    { value: "installment", name: "Installment", id: 2 },
  ],
  ar: [
    { value: "cash", name: "كاش", id: 1 },
    { value: "installment", name: "تقسيط", id: 2 },
  ],
};
export const percentageProperty = {
  en: [
    { value: "3_Real_Estate_Finance", name: " CBE 3% Initiative" },
    { value: "8_Real_Estate_Finance", name: "CBE 8% Initiative" },
  ],
  ar: [
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
    { value: "residential", name: "Residential" },
    { value: "commercial", name: "Commercial" },
    { value: "land", name: "Land" },
  ],
  ar: [
    { value: "", name: "الكل" },
    { value: "residential", name: "سكني" },
    { value: "commercial", name: "تجاري" },
    { value: "land", name: "أرض" },
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
