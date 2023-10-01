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
      { value: "", name: "الكل" },
      { value: "Residential", name: "سكني" },
      { value: "Commercial", name: "تجاري" },
      { value: "Land", name: "أرض" },
    ]
};

export const unitTypeData = {
  en: {
    Residential: [
      { value: "63cc933946d6193aa1f50f95", name: "Apartment" },
      { value: "63cc934b46d6193aa1f50fa0", name: "Apartment with garden" },
      { value: "63cc935946d6193aa1f50fab", name: "Duplex" },
      { value: "63cc936946d6193aa1f50fb6", name: "Studio" },
      { value: "63cc937b46d6193aa1f50fc1", name: "Penthouse" },
      { value: "63cc938b46d6193aa1f50fcc", name: "Hotel Apartment" },
      { value: "63cc939746d6193aa1f50fd7", name: "Floor" },
      { value: "63cc93ab46d6193aa1f50fe2", name: "Furnished Apartment" },
      { value: "642449f07502ee416a864e95", name: "Residential Building" },
      { value: "645376a84ef5131a0a061888", name: "Home" },
      { value: "63cc940a46d6193aa1f51014", name: "Chalete" },
      { value: "63cc941646d6193aa1f5101f", name: "Cabin" },
      { value: "63cc93c546d6193aa1f50fed", name: "Village" },
      { value: "63cc93d346d6193aa1f50ff8", name: "Townhouse" },
      { value: "63cc93f846d6193aa1f51009", name: "Twin house" },
    ],

    Commercial: [
      { value: "63cc942c46d6193aa1f5102a", name: "Clinic" },
      { value: "63cc944446d6193aa1f51035", name: "Office" },
      { value: "63cc945646d6193aa1f51040", name: "Garage" },
      { value: "63cc946146d6193aa1f5104b", name: "Factory" },
      { value: "63cc947546d6193aa1f5105c", name: "Warehouse" },
      { value: "63cc948146d6193aa1f51067", name: "Retail" },
      { value: "63cc949246d6193aa1f51072", name: "Restaurant" },
      { value: "63cc949e46d6193aa1f51077", name: "Cafe" },
      { value: "645375df4ef5131a0a061886", name: "Shop" },
    ],

    Land: [
      { value: "Agriculture", name: "Agrarian" },
      { value: "Building", name: "Land for building" },
    ],
  },

  ar: {
    Residential: [
      { value: "63cc933946d6193aa1f50f95", name: "شقة" },
      { value: "63cc934b46d6193aa1f50fa0", name: "شقة بحديقة" },
      { value: "63cc935946d6193aa1f50fab", name: "دوبلكس" },
      { value: "63cc936946d6193aa1f50fb6", name: "ستوديو" },
      { value: "63cc937b46d6193aa1f50fc1", name: "بينتهاوس" },
      { value: "63cc938b46d6193aa1f50fcc", name: "شقق فندقية" },
      { value: "63cc939746d6193aa1f50fd7", name: "أرضى" },
      { value: "63cc93ab46d6193aa1f50fe2", name: "شقق مفروشة" },
      { value: "642449f07502ee416a864e95", name: "عمارة" },
      { value: "645376a84ef5131a0a061888", name: "بيت" },
      { value: "63cc940a46d6193aa1f51014", name: "شالية" },
      { value: "63cc941646d6193aa1f5101f", name: "كابينة" },
      { value: "63cc93c546d6193aa1f50fed", name: "فيلا" },
      { value: "63cc93d346d6193aa1f50ff8", name: "تاون هاوس" },
      { value: "63cc93f846d6193aa1f51009", name: "توين هاوس" },
    ],

    Commercial: [
      { value: "63cc942c46d6193aa1f5102a", name: "عيادة" },
      { value: "63cc944446d6193aa1f51035", name: "مكتب" },
      { value: "63cc945646d6193aa1f51040", name: "جراج" },
      { value: "63cc946146d6193aa1f5104b", name: "مصنع" },
      { value: "63cc947546d6193aa1f5105c", name: "مستودع" },
      { value: "63cc948146d6193aa1f51067", name: "ريتيل" },
      { value: "63cc949246d6193aa1f51072", name: "مطعم" },
      { value: "63cc949e46d6193aa1f51077", name: "كافية" },
      { value: "645375df4ef5131a0a061886", name: "محل" },
    ],

    Land: [
      { value: "Agriculture", name: "زراعى" },
      { value: "Building", name: "ارض للبناء" },
    ],
  },
};

export const sortedData = {
  en: [
    { value: "", name: " All" },
    { value: "min_price", name: "Low Price" },
    { value: "max_price", name: "High Price" },
    { value: "min_view", name: "Most viewed" },
    { value: "max_view", name: "Less viewed" },
    { value: "old_prop", name: "Old" },
  ],
  ar: [
    { value: "", name: "الكل" },
    { value: "min_price", name: "أقل سعر" },
    { value: "max_price", name: "أكثر سعر" },
    { value: "min_view", name: "أكثر مشاهدة" },
    { value: "max_view", name: "أقل مشاهدة" },
    { value: "old_prop", name: "أقدم" },
  ],
};

// const unitType = {
//   Residential: {
//     en: [
//       { value: "63cc933946d6193aa1f50f95", name: "Apartment" },
//       { value: "63cc934b46d6193aa1f50fa0", name: "Apartment with garden" },
//       { value: "63cc935946d6193aa1f50fab", name: "Duplex" },
//       { value: "63cc936946d6193aa1f50fb6", name: "Studio" },
//       { value: "63cc937b46d6193aa1f50fc1", name: "Penthouse" },
//       { value: "63cc938b46d6193aa1f50fcc", name: "Hotel Apartment" },
//       { value: "63cc939746d6193aa1f50fd7", name: "Floor" },
//       { value: "63cc93ab46d6193aa1f50fe2", name: "Furnished Apartment" },
//       { value: "642449f07502ee416a864e95", name: "Residential Building" },
//       { value: "645376a84ef5131a0a061888", name:"Home"},
//       { value: "63cc940a46d6193aa1f51014", name: "Chalete" },
//       { value: "63cc941646d6193aa1f5101f", name: "Cabin" },
//       { value: "63cc93c546d6193aa1f50fed", name: "Village" },
//       { value: "63cc93d346d6193aa1f50ff8", name: "Townhouse" },
//       { value: "63cc93f846d6193aa1f51009", name: "Twin house" },
//     ],
//     ar: [

//       { value: "63cc933946d6193aa1f50f95", name: "شقة" },
//       { value: "63cc934b46d6193aa1f50fa0", name: "شقة بحديقة" },
//       { value: "63cc935946d6193aa1f50fab", name: "دوبلكس" },
//       { value: "63cc936946d6193aa1f50fb6", name: "ستوديو" },
//       { value: "63cc937b46d6193aa1f50fc1", name: "بينتهاوس" },
//       { value: "63cc938b46d6193aa1f50fcc", name: "شقق فندقية" },
//       { value: "63cc939746d6193aa1f50fd7", name: "أرضى" },
//       { value: "63cc93ab46d6193aa1f50fe2", name: "شقق مفروشة" },
//       { value: "642449f07502ee416a864e95", name: "عمارة" },
//       { value: "645376a84ef5131a0a061888", name: "بيت" },
//       { value: "63cc940a46d6193aa1f51014", name: "شالية" },
//       { value: "63cc941646d6193aa1f5101f", name: "كابينة" },
//       { value: "63cc93c546d6193aa1f50fed", name: "فيلا" },
//       { value: "63cc93d346d6193aa1f50ff8", name: "تاون هاوس" },
//       { value: "63cc93f846d6193aa1f51009", name: "توين هاوس" },
//     ],
//   },
//   Commercial: {
//     en: [
//       { value: "63cc942c46d6193aa1f5102a", name: "Clinic" },
//       { value: "63cc944446d6193aa1f51035", name: "Office" },
//       { value: "63cc945646d6193aa1f51040", name: "Garage" },
//       { value: "63cc946146d6193aa1f5104b", name: "Factory" },
//       { value: "63cc947546d6193aa1f5105c", name: "Warehouse" },
//       { value: "63cc948146d6193aa1f51067", name: "Retail" },
//       { value: "63cc949246d6193aa1f51072", name: "Restaurant" },
//       { value: "63cc949e46d6193aa1f51077", name: "Cafe" },
//       { value: "645375df4ef5131a0a061886", name: "Shop" },
//     ],
//     ar: [
//       { value: "63cc942c46d6193aa1f5102a", name: "عيادة" },
//       { value: "63cc944446d6193aa1f51035", name: "مكتب" },
//       { value: "63cc945646d6193aa1f51040", name: "جراج" },
//       { value: "63cc946146d6193aa1f5104b", name: "مصنع" },
//       { value: "63cc947546d6193aa1f5105c", name: "مستودع" },
//       { value: "63cc948146d6193aa1f51067", name: "ريتيل" },
//       { value: "63cc949246d6193aa1f51072", name: "مطعم" },
//       { value: "63cc949e46d6193aa1f51077", name: "كافية" },
//       { value: "645375df4ef5131a0a061886", name: "محل" },
//     ],
//   },
// };
