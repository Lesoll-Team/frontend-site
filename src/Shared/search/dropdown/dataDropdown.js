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
export const propertyType = {
  ar: [
    { value: "residential", name: "سكني", id: 1 },
    { value: "compounds", name: "كمباوند", id: 5 },
    { value: "commercial", name: "تجاري", id: 4 },
    { value: "graves", name: "مدافن", id: 3 },
    { value: "lands", name: "اراضي", id: 6 },
    { value: "finance", name: "تمويل عقاري", id: 2 },
  ],
  en: [
    { value: "residential", name: "Residential", id: 1 },
    { value: "compounds", name: "Compounds", id: 5 },
    { value: "commercial", name: "Commercial", id: 4 },
    { value: "graves", name: "Graves", id: 3 },
    { value: "lands", name: "Lands", id: 6 },
    { value: "finance", name: "Finance", id: 2 },
  ],
};
export const saleOptionsType = {
  en: [
    { value: "sale", name: "For Sale", id: 1 },
    { value: "rent", name: "For Rent", id: 2 },
    { value: "investment", name: "Investment", id: 3 },
  ],
  ar: [
    { value: "sale", name: "للبيع", id: 1 },
    { value: "rent", name: "للإيجار", id: 2 },
    { value: "investment", name: "للإستثمار", id: 3 },
  ],
};

export const finishingOptionsData = {
  en: [
    { value: "super_lux", name: "Super Lux", id: 1 },
    { value: "lux", name: "Lux", id: 2 },
    { value: "Semi_finished", name: "Semi Finished", id: 3 },
    { value: "not_finished", name: "Not Finished", id: 4 },
  ],
  ar: [
    { value: "super_lux", name: "سوبر لوكس", id: 1 },
    { value: "lux", name: "لوكس", id: 2 },
    { value: "Semi_finished", name: "نصف تشطيب", id: 3 },
    { value: "not_finished", name: "بدون تشطيب", id: 4 },
  ],
};

//////////////////////////////////*done bar filter*////////////////////////////////

export const categoryUnitType = [
  "apartment",
  "apartment_with_garden",
  "duplex",
  "studio",
  "penthouse",
  "hotel_apartment",
  "floor",
  "residential_building",
  "home",
  "chalet",
  "cabin",
  "villa",
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
];
//////////////////////////////////*_*////////////////////////////////

export const percentageProperty = {
  en: [
    { value: "3_Real_Estate_Finance", name: " CBE 3% Initiative", id: 1 },
    { value: "8_Real_Estate_Finance", name: "CBE 8% Initiative", id: 2 },
  ],
  ar: [
    { value: "تمويل_عقاري_3_بالمئة", name: "3% تمويل عقارى", id: 1 },
    { value: "تمويل_عقاري_8_بالمئة", name: "8% تمويل عقارى ", id: 2 },
  ],
};

export const sortedData = {
  en: [
    { value: "", name: "recently", id: 6 },
    { value: "min_price", name: "Low Price", id: 1 },
    { value: "max_price", name: "High Price", id: 2 },
    { value: "max_view", name: "Most viewed", id: 3 },
    { value: "min_view", name: "Less viewed", id: 4 },
    { value: "old_prop", name: "Old", id: 5 },
  ],
  ar: [
    { value: "", name: "الاحدث", id: 6 },
    { value: "min_price", name: "أقل سعر", id: 1 },
    { value: "max_price", name: "أكثر سعر", id: 2 },
    { value: "max_view", name: "أكثر مشاهدة", id: 3 },
    { value: "min_view", name: "أقل مشاهدة", id: 4 },
    { value: "old_prop", name: "أقدم", id: 5 },
  ],
};

//////////////* not call.. just for Dropdown*///////////////
export const unitTypeResidential = {
  en: [
    { value: "apartment", name: "Apartment", id: 1, key: "residential" },
    {
      value: "apartment_with_garden",
      name: "Apartment with garden",
      id: 2,
      key: "residential",
    },
    { value: "duplex", name: "Duplex", id: 3, key: "residential" },
    { value: "Studio", name: "Studio", id: 4, key: "residential" },
    { value: "penthouse", name: "Penthouse", id: 5, key: "residential" },
    {
      value: "hotel_apartment",
      name: "Hotel Apartment",
      id: 6,
      key: "residential",
    },
    { value: "floor", name: "Floor", id: 7 },
    {
      value: "residential_building",
      name: "Residential Building",
      id: 8,
      key: "residential",
    },
    { value: "home", name: "Home", id: 9, key: "residential" },
    { value: "chalet", name: "Chalet", id: 10, key: "residential" },
    { value: "cabin", name: "Cabin", id: 11, key: "residential" },
    { value: "villa", name: "Village", id: 12, key: "residential" },
    { value: "townhouse", name: "Townhouse", id: 13, key: "residential" },
    { value: "twin_house", name: "Twin house", id: 14, key: "residential" },
  ],

  ar: [
    { value: "apartment", name: "شقة", id: 1, key: "residential" },
    {
      value: "apartment_with_garden",
      name: "شقة بحديقة",
      id: 2,
      key: "residential",
    },
    { value: "duplex", name: "دوبلكس", id: 3, key: "residential" },
    { value: "studio", name: "ستوديو", id: 4, key: "residential" },
    { value: "penthouse", name: "بينتهاوس", id: 5, key: "residential" },
    { value: "hotel_apartment", name: "شقق فندقية", id: 6, key: "residential" },
    { value: "floor", name: "أرضية", id: 7, key: "residential" },
    {
      value: "residential_building",
      name: "شقق مفروشة",
      id: 8,
      key: "residential",
    },
    { value: "home", name: "بيت", id: 9, key: "residential" },
    { value: "chalet", name: "شالية", id: 10, key: "residential" },
    { value: "cabin", name: "كابينة", id: 11, key: "residential" },
    { value: "villa", name: "فيلا", id: 12, key: "residential" },
    { value: "townhouse", name: "تاون هاوس", id: 13, key: "residential" },
    { value: "twin_house", name: "توين هاوس", id: 14, key: "residential" },
  ],
};
export const unitTypeCommercial = {
  en: [
    { value: "clinic", name: "Clinic", id: 1, key: "commercial" },
    { value: "office", name: "Office", id: 2, key: "commercial" },
    { value: "garage", name: "Garage", id: 3, key: "commercial" },
    { value: "factory", name: "Factory", id: 4, key: "commercial" },
    { value: "warehouse", name: "Warehouse", id: 5, key: "commercial" },
    { value: "restaurant", name: "Restaurant", id: 6, key: "commercial" },
    { value: "cafe", name: "Cafe", id: 7, key: "commercial" },
    { value: "shop", name: "Shop", id: 8, key: "commercial" },
  ],

  ar: [
    { value: "clinic", name: "عيادة", id: 1, key: "commercial" },
    { value: "office", name: "مكتب", id: 2, key: "commercial" },
    { value: "garage", name: "جراج", id: 3, key: "commercial" },
    { value: "factory", name: "مصنع", id: 4, key: "commercial" },
    { value: "warehouse", name: "مستودع", id: 5, key: "commercial" },
    { value: "restaurant", name: "مطعم", id: 6, key: "commercial" },
    { value: "cafe", name: "كافية", id: 7, key: "commercial" },
    { value: "shop", name: "محل", id: 8, key: "commercial" },
  ],
};
export const unitTypeLand = {
  en: [
    { value: "agriculture", name: "Agrarian", id: 1, key: "lands" },
    { value: "building", name: "Land for building", id: 2, key: "lands" },
  ],

  ar: [
    { value: "agriculture", name: "أرض زراعية", id: 1, key: "lands" },
    { value: "building", name: "ارض للبناء", id: 2, key: "lands" },
  ],
};
