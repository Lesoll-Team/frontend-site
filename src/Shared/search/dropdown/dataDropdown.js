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
    { value: "3%_Real_Estate_Finance", name: " All Options" },
    { value: "3%_Real_Estate_Finance", name: " CBE 3% Initiative" },

    { value: "8%_Real_Estate_Finance", name: "CBE 8% Initiative" },
  ],
  ar: [
    { value: "3%_Real_Estate_Finance", name: "جميع الخيارات" },
    { value: "3%_Real_Estate_Finance", name: "3% تمويل عقارى" },

    { value: "8%_Real_Estate_Finance", name: "8% تمويل عقارى " },
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
    Residential:[
    { value: "Apartment", name: "Apartment" },
    { value: "Villa", name: "Villa" },
    { value: "Duplex", name: "Duplex" },
    { value: "Residential Building", name: "Residential Building" },
    { value: "Chalet", name: "Chalet" },
    // { value: "كابينة", name: "Cabin" },
    // { value: "Restaurant", name: "Restaurant" },
    // { value: "Cafe", name: "Cafe" },
    // { value: "Shop", name: "Shop" }
  ],

    Commercial:[
    { value: "Office", name: "Office" },
    { value: "Clinic", name: "Clinic" },
    { value: "Shop", name: "Shop" },
    { value: "Warehouse", name: "Warehouse" },

    // { value: "Garage", name: "Garage" },
    // { value: "Factory", name: "Factory" },
    // { value: "Retail", name: "Retail" },
    // { value: "Restaurant", name: "Restaurant" },
    // { value: "Cafe", name: "Cafe" },
  ],

    Land:[
    { value: "Agrarian", name: "Agrarian" },
    { value: "Land for building", name: "Land for building" },
    // { value: "Office", name: "Office" },
    // { value: "Garage", name: "Garage" },
    // { value: "Factory", name: "Factory" },
    // { value: "Warehouse", name: "Warehouse" },
    // { value: "Retail", name: "Retail" },
    // { value: "Restaurant", name: "Restaurant" },
    // { value: "Cafe", name: "Cafe" },
    // { value: "Shop", name: "Shop" }
  ],

  },

  ar:{
    Residential:[
    { value: "Apartment", name: "شقة" },
    { value: "Villa", name: "فيلا" },
    { value: "Duplex", name: "دوبلكس" },
    { value: "Residential Building", name: "عمارة" },
    { value: "Chalet", name: "شاليه" },
  ],

    Commercial:[
    { value: "Office", name: "كافيه" },
    { value: "Clinic", name: "عيادة" },
    { value: "Shop", name: "محل" },
    { value: "Warehouse", name: "مستودع" },
  ],

    Land:[
    { value: "Agrarian", name: "زراعى" },
    { value: "Land for building", name: "ارض للبناء" },
  ],

  }

};
