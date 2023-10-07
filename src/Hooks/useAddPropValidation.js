import { useState } from "react";
import { useSelector } from "react-redux";

const useAddPropValidation = () => {
  const [errors, setErrors] = useState([]);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const errorMessages = {
    title: {
      en: "Title is missing.",

      ar: " يرجى كتابة العنوان .",
    },

    propType: {
      en: "Property type is missing.",

      ar: "يرجى تحديد نوع العقار .",
    },

    offer: {
      en: "Offer is missing.",

      ar: "يرجى اختيار العرض بيع أو إيجار.",
    },

    landType: {
      en: "Land type is missing.",

      ar: "يرجى تحديد نوع الأرض .",
    },

    areaType: {
      en: "Land Area Unit is missing.",

      ar: "يرجى اختيار وحدة مساحة الأرض .",
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

    price: {
      en: "Price is missing.",

      ar: "يرجى كتابة السعر .",
    },

    downPayment: {
      en: "Down payment is missing.",

      ar: "يرجى كتابة الدفعة الأولى .",
    },

    period: {
      en: "Installment Period is missing.",

      ar: "يرجى كتابة مدة التقسيط.",
    },

    amount: {
      en: "Down payment is greater than the total price.",

      ar: "  الدفعه الأولى أكبر من السعر الكلي للعقار.",
    },

    area: {
      en: "Property Area is missing.",

      ar: "يرجى كتابة مساحة العقار .",
    },

    rooms: {
      en: "Number of Rooms are missing.",

      ar: " يرجى كتابة عدد الغرف .",
    },

    bathRooms: {
      en: "Number of Bathrooms are missing.",

      ar: "يرجى كتابة عدد الحمامات .",
    },

    finishingType: {
      en: "Finishing type is missing.",

      ar: "يرجى تحديد نوع التشطيب .",
    },

    description: {
      en: "Description is missing.",

      ar: "يرجى كتابة وصف تفصيلي للعقار.",
    },

    mainImage: {
      en: "Main image is missing.",

      ar: "يرجى رفع الصورة الرئيسية .",
    },

    multiImage: {
      en: "Multi-images are missing and should not be less than 3.",

      ar: " لا ينبغي أن تقل الصور المتعددة عن 3 صور .",
    },

    address: {
      en: "Address is missing.",

      ar: "يرجى ادخال موقع العقار في الخريطه.",
    },

    connectPhoneNumber: {
      en: "Seller Phone Number is missing.",

      ar: "يرجى ادخال رقم هاتف المعلن   .",
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
    if (!propertyDetails.offer) {
      newErrors.push(translateErrorMessage("offer"));
    }
    if (propertyDetails.offer === "For Rent") {
      if (!propertyDetails.rentalPeriod) {
        newErrors.push(translateErrorMessage("rentalPeriod"));
      }
      if (!propertyDetails.price) {
        newErrors.push(translateErrorMessage("price"));
      }
    }
    if (propertyDetails.offer === "For Sale") {
      if (
        propertyDetails.saleOption === "Cash" ||
        propertyDetails?.saleOption[0] === "Cash"
      ) {
        if (!propertyDetails.price) {
          newErrors.push(translateErrorMessage("price"));
        }
      }
      if (
        propertyDetails.saleOption === "Installment" ||
        propertyDetails?.saleOption[0] === "Installment"
      ) {
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
      if (!propertyDetails.saleOption) {
        newErrors.push(translateErrorMessage("saleOption"));
      }
    }
    // if (propertyDetails.offer !== "For Investment") {
    // }
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
      if (!propertyDetails.thumbnail) {
        newErrors.push(translateErrorMessage("mainImage"));
      }
    }

    // if (
    //   (!propertyDetails?.multiImage ||
    //     propertyDetails?.multiImage?.length < 3) &&
    //   (!propertyDetails?.album ||
    //     propertyDetails?.multiImage?.length + propertyDetails?.album?.length <
    //       3)
    // ) {
    //   newErrors.push(translateErrorMessage("multiImage"));
    // }
    // if (!propertyDetails.multiImage) {
    //   if (!propertyDetails.album || propertyDetails?.album?.length + propertyDetails.multiImage < 3){

    //     newErrors.push(translateErrorMessage("multiImage"));
    //   }
    // }
    // if (propertyDetails.album ) {
    //   if (
    //     (propertyDetails?.multiImage || 0) + propertyDetails.album.length <
    //     3
    //   ) {
    //     newErrors.push(translateErrorMessage("multiImage"));
    //   }
    // } else {
    //   if (
    //     !propertyDetails.multiImage ||
    //     propertyDetails?.multiImage.length > 3
    //   ) {
    //     newErrors.push(translateErrorMessage("multiImage"));
    //   }
    // }
    if (!propertyDetails.album) {
      if (
        !propertyDetails.multiImage ||
        propertyDetails.multiImage.length < 3
      ) {
        newErrors.push(translateErrorMessage("multiImage"));
      }
    } else {
      if (
        propertyDetails?.album?.length +
          (propertyDetails?.multiImage?.length || 0) <
        3
      ) {
        newErrors.push(translateErrorMessage("multiImage"));
      }
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
