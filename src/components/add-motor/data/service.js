const carService = [
  {
    _id: "66ab4a50826e0b6e6bca4c9f",
    ar: "السيارة في الضمان",
    en: "car in warranty",
  },
  {
    _id: "66ab4a50826e0b6e6bca4ca0",
    ar: "صيانات الوكيل",
    en: "New maintenance in the authorized agency",
  },
  {
    _id: "66ab4a50826e0b6e6bca4ca1",
    ar: "تيل فرامل جديد",
    en: "New front brake pads",
  },
  {
    _id: "66ab4a50826e0b6e6bca4ca2",
    ar: "كاوتش جديد",
    en: "New tires",
  },
  {
    _id: "66ab4a50826e0b6e6bca4ca3",
    ar: "بطارية جديدة",
    en: "New Battery",
  },
  {
    _id: "66ab4a50826e0b6e6bca4ca4",
    ar: "المكيف",
    en: "Air Conditioning",
  },
  {
    _id: "66ab4a50826e0b6e6bca4ca5",
    ar: "ريموت كنترول",
    en: "Remote Keyless",
  },
  {
    _id: "66ab4a50826e0b6e6bca4ca6",
    ar: "فتحة سقف",
    en: "Sunroof",
  },
  {
    _id: "66ab4a50826e0b6e6bca4ca7",
    ar: "مرايات كهرباء",
    en: "Electric mirrors",
  },
  {
    _id: "66ab4a50826e0b6e6bca4ca8",
    ar: "مرايات ضم، إغلاق",
    en: "Closing mirrors",
  },
  {
    _id: "66ab4a50826e0b6e6bca4ca9",
    ar: "فرش جلد",
    en: "Leather seats",
  },
  {
    _id: "66ab4a50826e0b6e6bca4caa",
    ar: "فرش قماش",
    en: "Fabric brushes",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cab",
    ar: "باور",
    en: "Power Steering",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cac",
    ar: "النظام الذكى لركن السيارة",
    en: "Intelligent parking system",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cad",
    ar: "نوافذ كهربائية امامية",
    en: "Front Power Windows",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cae",
    ar: "نوافذ كهربائية خلفية",
    en: "Back Power Windows",
  },
  {
    _id: "66ab4a50826e0b6e6bca4caf",
    ar: "زجاج فاميه",
    en: "Tinted Glass",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cb0",
    ar: "راديو كاسيت",
    en: "Cassette Radio",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cb1",
    ar: "مبدل أقراص",
    en: "CD Changer",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cb2",
    ar: "مشغل دي في دي",
    en: "DVD Player",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cb3",
    ar: "مشغل اسطوانات",
    en: "CD Player",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cb4",
    ar: "مدخل AUX",
    en: "AUX",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cb5",
    ar: "مدخل USB",
    en: "USB Port",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cb6",
    ar: "بلوتوث",
    en: "Bluetooth",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cb7",
    ar: "نظام تحكم في الطاره",
    en: "Multifunction",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cb8",
    ar: "نظام الفرامل المانع للانغلاق-ABS",
    en: "ABS",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cb9",
    ar: "وسادة هوائية للسائق",
    en: "Driver Airbag",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cba",
    ar: "وسادة هوائية للركاب",
    en: "Passenger Airbag",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cbb",
    ar: "وسادة هوائية جانبية",
    en: "Side Airbag",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cbc",
    ar: "نظام توزيع قوة الفرامل EBD",
    en: "EBD",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cbd",
    ar: "حساسات",
    en: "Sensors",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cbe",
    ar: "ESP",
    en: "EPS",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cbf",
    ar: "حساسات اماميه",
    en: "Front sensors",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cc0",
    ar: "حساسات خلفيه",
    en: "Rear sensors",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cc1",
    ar: "نظام إيموبليزر ضد السرقة",
    en: "Anti - theft System",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cc2",
    ar: "جنوط",
    en: "Alloy wheels",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cc3",
    ar: "مقاعد كهربائية",
    en: "Power Seats",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cc4",
    ar: "إنذار",
    en: "Alarm",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cc5",
    ar: "كشافات ضباب",
    en: "Fog light",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cc6",
    ar: "كاميرا خلفية",
    en: "Rear camera",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cc7",
    ar: "GPS",
    en: "GPS",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cc8",
    ar: "مثبت سرعة",
    en: "Cruise control",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cc9",
    ar: "قفل مركزى للابواب",
    en: "Central lock",
  },
  {
    _id: "66ab4a50826e0b6e6bca4cca",
    ar: "سبويلر خلفي",
    en: "Rear spoiler",
  },
];
