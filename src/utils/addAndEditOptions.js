export const saleOptions = [
  { value: ["Cash"], name: { ar: "كاش", en: "Cash" } },
  { value: ["Installment"], name: { ar: "تقسيط", en: "Installment" } },
  {
    value: ["Cash", "Installment"],
    name: { ar: "كاش أو تقسيط", en: "Cash or Installment" },
  },
];
export const installmentTypeOptions = [
  { value: "Monthly", name: { ar: "شهرى", en: "Monthly" } },
  { value: "Yearly", name: { ar: "سنوى", en: "Yearly" } },
  { value: "3 Monthly", name: { ar: "ربع سنوى", en: "Quarterly" } },
  {
    value: "6 Monthly",
    name: {
      ar: "نصف سنوى",
      en: "Semi-Annually",
    },
  },
];

export const propTypeList = [
  { value: "Residential", name: { ar: "سكنى", en: "Residential" } },
  { value: "Commercial", name: { ar: "تجارى", en: "Commercial" } },
  { value: "Land", name: { ar: "أرض", en: "Land" } },
];

export const rentalTypes = [
  { value: "Daily", name: { ar: "يومي", en: "Daily" } },
  { value: "Monthly", name: { ar: "شهري", en: "Monthly" } },
  { value: "Yearly", name: { ar: "سنوي", en: "Yearly" } },
];
export const finishingTypes = [
  { value: "Super Lux", name: { ar: "سوبر لوكس", en: "Super Lux" } },
  { value: "Lux", name: { ar: "لوكس", en: "Lux" } },
  { value: "Semi Finished", name: { ar: "نصف تشطيب", en: "Semi Finished" } },
  { value: "Not Finished", name: { ar: "بدون تشطيب", en: "Not Finished" } },
];
