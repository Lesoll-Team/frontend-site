export const saleOptions = [
  { value: ["Cash"], name: { ar: "كاش", en: "Cash" } },
  { value: ["Installment"], name: { ar: "تقسيط", en: "Installment" } },
  {
    value: ["Cash", "Installment"],
    name: { ar: "كاش وتقسيط", en: "Cash & Installment" },
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
