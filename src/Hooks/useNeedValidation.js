import { useState } from "react";
import { useSelector } from "react-redux";
const [errors, setErrors] = useState([]);
const needData = useSelector((state) => state.needs.needsData);
const language = useSelector((state) => state.GlobalState.languageIs);

const errorMessages = {
  propType: {
    en: "Property type is missing.",

    ar: "يرجى تحديد نوع العقار .",
  },
  ffer: {
    en: "Offer is missing.",

    ar: "يرجى اختيار العرض بيع أو إيجار.",
  },
  unitType: {
    en: "Unit type is missing.",

    ar: "يرجى تحديد نوع الوحدة .",
  },
  saleOption: {
    en: "Sale option is missing.",
    ar: "يرجى تحديد نظام البيع",
  },
  rentalPeriod: {
    en: "Rental type is missing.",

    ar: "يرجى تحديد نوع الإيجار .",
  },
  priceFrom: {
    en: "min Price is missing.",

    ar: "يرجى كتابة اقل سعر .",
  },
  priceTo: {
    en: "max Price is missing.",

    ar: "يرجى كتابة اعلى سعر .",
  },
  areaFrom: {
    en: "Property min Area is missing.",

    ar: "يرجى كتابة اقل مساحة للعقار .",
  },
  areaFrom: {
    en: "Property min Area is missing.",

    ar: "يرجى كتابة اقل مساحة للعقار .",
  },
  rooms: {
    en: "Number of Rooms are missing.",

    ar: " يرجى كتابة عدد الغرف .",
  },
  bathRooms: {
    en: "Number of Bathrooms are missing.",

    ar: "يرجى كتابة عدد الحمامات .",
  },
  description: {
    en: "Description is missing.",

    ar: "يرجى كتابة وصف تفصيلي للعقار.",
  },
  governrate: {
    en: "Please select a governrate",
    ar: "يرجى اختيار المحافظة ",
  },
  region: {
    en: "Please selec a region",
    ar: "يرجى اختيار المنطقه",
  },
};
const translateErrorMessage = (key) => {
  return errorMessages[key][language ? "ar" : "en"];
};
const validateProperty = (needData) => {
  const newErrors = [];
  if (!propertyDetails.unitType) {
    newErrors.push(translateErrorMessage("unitType"));
    setPropErrors((prevErrors) => ({ ...prevErrors, unitType: true }));
  }
  if (!propertyDetails.offer) {
    newErrors.push(translateErrorMessage("offer"));
    setPropErrors((prevErrors) => ({ ...prevErrors, offer: true }));
  }
};
