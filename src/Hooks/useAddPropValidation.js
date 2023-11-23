import { useState } from "react";
import { useSelector } from "react-redux";

const useAddPropValidation = (propErrors, setPropErrors) => {
  const [errors, setErrors] = useState([]);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const errorMessages = {
    title: {
      en: "Title is missing.",

      ar: " يرجى كتابة العنوان .",
    },
    longTitle: {
      en: "Title is too long",

      ar: " لايجب ان يتخطى العنوان 100 حرف.",
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

    priceLowRent: {
      en: "Price must not be less than 100.",

      ar: "يجب ألا يقل السعر عن 100.",
    },
    priceLowSale: {
      en: "Price must not be less than 100.",

      ar: "يجب ألا يقل السعر عن 1000.",
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
    insurance: {
      en: "insurance is messing",
      ar: "برجى ادخال سعر التأمين",
    },
    connectPhoneNumber: {
      en: "Seller Phone Number is missing.",

      ar: "يرجى ادخال رقم هاتف المعلن   .",
    },
    governrate: {
      en: "Please select a governrate",
      ar: "يرجى اختيار المحافظة ",
    },
    region: {
      en: "Please selec a region",
      ar: "يرجى اختيار المنطقه",
    },
    addressName: {
      en: "Address is missing.",
      ar: "يرجى ادخال عنوان العقار  .",
    },
  };

  const translateErrorMessage = (key) => {
    return errorMessages[key][language ? "ar" : "en"];
  };

  const validateProperty = (propertyDetails) => {
    const newErrors = [];

    if (!propertyDetails.title) {
      newErrors.push(translateErrorMessage("title"));
      setPropErrors((prevErrors) => ({ ...prevErrors, title: true }));
    }
    if (propertyDetails.title.length > 100) {
      newErrors.push(translateErrorMessage("longTitle"));
      setPropErrors((prevErrors) => ({ ...prevErrors, longTitle: true }));
    }
    if (!propertyDetails.propType) {
      newErrors.push(translateErrorMessage("propType"));
      setPropErrors((prevErrors) => ({ ...prevErrors, propType: true }));
    }

    if (!propertyDetails.unitType) {
      newErrors.push(translateErrorMessage("unitType"));
      setPropErrors((prevErrors) => ({ ...prevErrors, unitType: true }));
    }

    if (!propertyDetails.offer) {
      newErrors.push(translateErrorMessage("offer"));
      setPropErrors((prevErrors) => ({ ...prevErrors, offer: true }));
    }

    if (propertyDetails.offer === "For Rent") {
      if (!propertyDetails.price) {
        newErrors.push(translateErrorMessage("price"));
        setPropErrors((prevErrors) => ({ ...prevErrors, price: true }));
      }
      if (parseInt(propertyDetails.price) < 100) {
        setPropErrors((prevErrors) => ({ ...prevErrors, price: true }));
        newErrors.push(translateErrorMessage("priceLowRent"));
      }
      if (!propertyDetails.rentalPeriod) {
        newErrors.push(translateErrorMessage("rentalPeriod"));
        setPropErrors((prevErrors) => ({ ...prevErrors, rentalPeriod: true }));
      }
      if (!propertyDetails.insurance) {
        newErrors.push(translateErrorMessage("insurance"));
        setPropErrors((prevErrors) => ({ ...prevErrors, insurance: true }));
      }
    }
    if (propertyDetails.offer === "For Sale") {
      if (
        propertyDetails.saleOption === "Cash" ||
        propertyDetails?.saleOption[0] === "Cash"
      ) {
        if (!propertyDetails.price) {
          newErrors.push(translateErrorMessage("price"));
          setPropErrors((prevErrors) => ({ ...prevErrors, price: true }));
        }
        if (parseInt(propertyDetails.price) < 1000) {
          setPropErrors((prevErrors) => ({ ...prevErrors, price: true }));
          newErrors.push(translateErrorMessage("priceLowSale"));
        }
      }
      if (
        propertyDetails.saleOption === "Installment" ||
        propertyDetails?.saleOption[0] === "Installment"
      ) {
        if (!propertyDetails.price) {
          newErrors.push(translateErrorMessage("price"));
          setPropErrors((prevErrors) => ({ ...prevErrors, price: true }));
        }
        if (parseInt(propertyDetails.price) < 1000) {
          setPropErrors((prevErrors) => ({ ...prevErrors, price: true }));
          newErrors.push(translateErrorMessage("priceLowSale"));
        }
        if (
          !propertyDetails.downPayment ||
          propertyDetails.downPayment == "0"
        ) {
          newErrors.push(translateErrorMessage("downPayment"));
          setPropErrors((prevErrors) => ({ ...prevErrors, downPayment: true }));
        }
        if (
          !propertyDetails.installmentOption.period ||
          propertyDetails.installmentOption.period == "0"
        ) {
          newErrors.push(translateErrorMessage("period"));
          setPropErrors((prevErrors) => ({
            ...prevErrors,
            installmentPeriod: true,
          }));
        }
        if (!propertyDetails.installmentOption.amount) {
          newErrors.push(translateErrorMessage("amount"));
          setPropErrors((prevErrors) => ({
            ...prevErrors,
            installmentAmount: true,
          }));
        }
      }
      if (!propertyDetails.saleOption) {
        newErrors.push(translateErrorMessage("saleOption"));
        setPropErrors((prevErrors) => ({ ...prevErrors, saleOption: true }));
      }
    }
    // if (propertyDetails.offer !== "For Investment") {
    // }
    if (!propertyDetails.area) {
      newErrors.push(translateErrorMessage("area"));
      setPropErrors((prevErrors) => ({ ...prevErrors, area: true }));
    }
    if (
      propertyDetails.propType === "Residential" ||
      propertyDetails.propType === "Commercial"
    ) {
      if (!propertyDetails.rooms) {
        newErrors.push(translateErrorMessage("rooms"));
        setPropErrors((prevErrors) => ({ ...prevErrors, rooms: true }));
      }
      if (!propertyDetails.bathRooms) {
        newErrors.push(translateErrorMessage("bathRooms"));
        setPropErrors((prevErrors) => ({ ...prevErrors, bathRooms: true }));
      }
      if (!propertyDetails.finishingType) {
        newErrors.push(translateErrorMessage("finishingType"));
        setPropErrors((prevErrors) => ({ ...prevErrors, finishingType: true }));
      }
    }
    if (!propertyDetails.description) {
      newErrors.push(translateErrorMessage("description"));
      setPropErrors((prevErrors) => ({ ...prevErrors, description: true }));
    }

    if (!propertyDetails.mainImage) {
      if (!propertyDetails.thumbnail) {
        newErrors.push(translateErrorMessage("mainImage"));
        setPropErrors((prevErrors) => ({ ...prevErrors, mainImage: true }));
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
        setPropErrors((prevErrors) => ({ ...prevErrors, multiImage: true }));
      }
    } else {
      if (
        propertyDetails?.album?.length +
          (propertyDetails?.multiImage?.length || 0) <
        3
      ) {
        newErrors.push(translateErrorMessage("multiImage"));
        setPropErrors((prevErrors) => ({ ...prevErrors, multiImage: true }));
      }
    }
    if (!propertyDetails.address.name) {
      newErrors.push(translateErrorMessage("addressName"));
      setPropErrors((prevErrors) => ({ ...prevErrors, addressName: true }));
    }
    if (!propertyDetails.address.governrate) {
      newErrors.push(translateErrorMessage("governrate"));
      setPropErrors((prevErrors) => ({ ...prevErrors, governrate: true }));
    }
    if (!propertyDetails.address.region) {
      newErrors.push(translateErrorMessage("region"));
      setPropErrors((prevErrors) => ({ ...prevErrors, region: true }));
    }
    if (propertyDetails.phoneChoice === "other") {
      if (!propertyDetails.connectPhoneNumber) {
        newErrors.push(translateErrorMessage("connectPhoneNumber"));
        setPropErrors((prevErrors) => ({ ...prevErrors, phone: true }));
      }
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  return { errors, validateProperty };
};

export default useAddPropValidation;
