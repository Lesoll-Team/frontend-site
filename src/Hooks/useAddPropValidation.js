import { useState } from "react";
import { useSelector } from "react-redux";

const useAddPropValidation = () => {
  const [errors, setErrors] = useState([]);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const errorMessages = {
    title: {
      en: "Title is missing.",
      ar: "العنوان مفقود.",
    },
    propType: {
      en: "Property type is missing.",
      ar: "نوع العقار مفقود.",
    },
    offer: {
      en: "Offer is missing.",
      ar: "العرض مفقود.",
    },
    landType: {
      en: "Land type is missing.",
      ar: "نوع الأرض مفقود.",
    },
    areaType: {
      en: "Area type is missing.",
      ar: "نوع المنطقة مفقود.",
    },
    unitType: {
      en: "Unit type is missing.",
      ar: "نوع الوحدة مفقود.",
    },
    rentalPeriod: {
      en: "Rental period is missing.",
      ar: "فترة الإيجار مفقودة.",
    },
    price: {
      en: "Price is missing.",
      ar: "السعر مفقود.",
    },
    downPayment: {
      en: "Down payment is missing.",
      ar: "الدفعة الأولى مفقودة.",
    },
    period: {
      en: "Period is missing.",
      ar: "الفترة مفقودة.",
    },
    amount: {
      en: "Amount is missing.",
      ar: "المبلغ مفقود.",
    },
    area: {
      en: "Area is missing.",
      ar: "المساحة مفقودة.",
    },
    rooms: {
      en: "Rooms are missing.",
      ar: "الغرف مفقودة.",
    },
    bathRooms: {
      en: "Bathrooms are missing.",
      ar: "الحمامات مفقودة.",
    },
    finishingType: {
      en: "Finishing type is missing.",
      ar: "نوع التشطيب مفقود.",
    },
    description: {
      en: "Description is missing.",
      ar: "الوصف مفقود.",
    },
    mainImage: {
      en: "Main image is missing.",
      ar: "الصورة الرئيسية مفقودة.",
    },
    multiImage: {
      en: "Multi-images are missing and should not be less than 4.",
      ar: "الصور المتعددة مفقودة ولا ينبغي أن تقل عن 4.",
    },
    address: {
      en: "Address is missing.",
      ar: "العنوان مفقود.",
    },
    connectPhoneNumber: {
      en: "Connect Phone Number is missing.",
      ar: "رقم الهاتف غير متصل.",
    },
  };

  const translateErrorMessage = (key) => {
    return errorMessages[key][language ? "ar" : "en"];
  };

  const validateProperty = (propertyDetails) => {
    const newErrors = [];

    if (!propertyDetails.title) {
      newErrors.push(translateErrorMessage("title"));
    }
    if (!propertyDetails.propType) {
      newErrors.push(translateErrorMessage("propType"));
    }
    if (!propertyDetails.offer) {
      newErrors.push(translateErrorMessage("offer"));
    }
    if (propertyDetails.propType === "Land") {
      if (!propertyDetails.landType) {
        newErrors.push(translateErrorMessage("landType"));
      }
      if (!propertyDetails.areaType) {
        newErrors.push(translateErrorMessage("areaType"));
      }
    } else {
      if (!propertyDetails.unitType) {
        newErrors.push(translateErrorMessage("unitType"));
      }
    }
    if (propertyDetails.offer !== "For Investment") {
      if (propertyDetails.offer === "For Rent") {
        if (!propertyDetails.rentalPeriod) {
          newErrors.push(translateErrorMessage("rentalPeriod"));
        }
      }
      if (propertyDetails.offer === "For Sale") {
        if (propertyDetails.saleOption === "Cash") {
          if (!propertyDetails.price) {
            newErrors.push(translateErrorMessage("price"));
          }
        } else {
          if (!propertyDetails.price) {
            newErrors.push(translateErrorMessage("price"));
          }
          if (!propertyDetails.downPayment) {
            newErrors.push(translateErrorMessage("downPayment"));
          }
          if (!propertyDetails.installmentOption.period) {
            newErrors.push(translateErrorMessage("period"));
          }
          if (!propertyDetails.installmentOption.amount) {
            newErrors.push(translateErrorMessage("amount"));
          }
        }
      }
    }
    if (!propertyDetails.area) {
      newErrors.push(translateErrorMessage("area"));
    }
    if (
      propertyDetails.propType === "Residential" ||
      propertyDetails.propType === "Commercial"
    ) {
      if (!propertyDetails.rooms) {
        newErrors.push(translateErrorMessage("rooms"));
      }
      if (!propertyDetails.bathRooms) {
        newErrors.push(translateErrorMessage("bathRooms"));
      }
      if (!propertyDetails.finishingType) {
        newErrors.push(translateErrorMessage("finishingType"));
      }
    }
    if (!propertyDetails.description) {
      newErrors.push(translateErrorMessage("description"));
    }

    if (!propertyDetails.mainImage) {
      newErrors.push(translateErrorMessage("mainImage"));
    }

    if (!propertyDetails.multiImage || propertyDetails.multiImage.length < 4) {
      newErrors.push(translateErrorMessage("multiImage"));
    }
    if (!propertyDetails.address.name) {
      newErrors.push(translateErrorMessage("address"));
    }
    if (!propertyDetails.connectPhoneNumber) {
      newErrors.push(translateErrorMessage("connectPhoneNumber"));
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  return { errors, validateProperty };
};

export default useAddPropValidation;
