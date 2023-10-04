export const paymentMethodData = {
  en: [
    { value: "Cash", name: "Cash" },
    { value: "Installment", name: "Installment" },
    { value: "Real_Estate_Finance", name: "Real Estate Finance" },
  ],
  ar: [
    { value: "Cash", name: "نقدى" },
    { value: "Installment", name: "تقسيط" },
    // { value: "Real_Estate_Finance", name: "تمويل عقارى" },
  ],
};
export const percentageProperty = {
  en: [
    { value: "", name: " All Options" },
    { value: "3_Real_Estate_Finance", name: " CBE 3% Initiative" },

    { value: "8_Real_Estate_Finance", name: "CBE 8% Initiative" },
  ],
  ar: [
    { value: "", name: "جميع الخيارات" },
    { value: "3_Real_Estate_Finance", name: "3% تمويل عقارى" },

    { value: "8_Real_Estate_Finance", name: "8% تمويل عقارى " },
  ],
};
export const finishingOptionsData = {
  en: [
    { value: "Super Lux", name: "Super Lux" },
    { value: "Lux", name: "Lux" },
    { value: "Finished", name: "Semi Finished" },
    { value: "Not Finished", name: "Not Finished" },
  ],
  ar: [
    { value: "Super Lux", name: "سوبر لوكس" },
    { value: "Lux", name: "لوكس" },
    { value: "Finished", name: "نصف تشطيب" },
    { value: "Not Finished", name: "بدون تشطيب" },
  ],
};

export const saleOptionsData = {
  en: [
    { value: "For Sale", name: "For Sale" },
    { value: "For Rent", name: "For Rent" },
  ],
  ar: [
    { value: "For Sale", name: "للبيع" },
    { value: "For Rent", name: "للإيحار" },
  ],
};
export const propertyTypeData = {
  en: [
    { value: "Residential", name: "Residential" },
    { value: "Commercial", name: "Commercial" },
    { value: "Land", name: "Land" },
  ],
  ar: [
    { value: "Residential", name: "سكني" },
    { value: "Commercial", name: "تجاري" },
    { value: "Land", name: "أرض" },
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
