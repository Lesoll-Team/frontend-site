import {
  propTypeList,
  saleOptions,
  finishingTypes,
  rentalTypes,
  installmentTypeOptions,
} from "@/utils/addAndEditOptions";

export const formatApiData = ({ setValue, data }) => {
  const Installment = data?.installment?.map((installment) => {
    return {
      ...installment,
      type:
        installmentTypeOptions.find(
          (item) => item.value === installment.type,
        ) || "",
    };
  });
  const propType = propTypeList.find((item) => item.value === data?.propType);
  const rentalPeriod =
    rentalTypes.find((item) => item.value === data?.rentalPeriod) || "";
  const finishingType = finishingTypes.find(
    (item) => item.value === data?.finishingType,
  );
  const unitType = {
    value: data?.unitType?._id,
    name: {
      ar: data?.unitType?.title.ar,
      en: data?.unitType?.title.en,
    },
  };
  const services = data?.service?.map((item) => item._id);
  const saleOption = findSaleOption(saleOptions, data?.saleOption);
  const compaounds = {
    _id: data?.compaounds?._id,
    CompoundsAR: data?.compaounds?.CompoundsAR,
    CompoundsEN: data?.compaounds?.CompoundsEN,
  };
  const address = {
    name: data?.address?.name,
    governrate: data?.governrate,
    region: data?.region,
    longitude: data?.address?.longitude || "",
    latitude: data?.address?.latitude || "",
  };
  setValue("title", data?.title);
  setValue(
    "currencies",
    data?.currencies
      ? { ISO_code: data?.currencies }
      : {
          Country: "Egypt",
          Currency_symbol: "£E",
          ISO_code: "EGP",
          title: {
            ar: "الجنيه المصري",
            en: "Egyptian pound",
          },
        },
  );
  setValue("description", data?.description);
  setValue("offer", data?.offer);
  setValue("propType", propType);
  setValue("mainImage", "");
  setValue("multiImage", "");
  setValue("resale", data?.resale);
  setValue("rentalPeriod", rentalPeriod);
  setValue("unitType", unitType);
  if (saleOption) {
    setValue("saleOption", saleOption);
  }
  setValue("insurance", data?.insurance);
  setValue("price", data?.price);
  setValue("service", services);
  setValue("area", data?.area);
  setValue("realEstateFinance", data?.RealEstateFinance);
  setValue("rooms", data?.rooms);
  setValue("bathRooms", data?.bathRooms);
  setValue("compaounds", compaounds);
  setValue("compaounds", compaounds);
  setValue("isCompound", data?.isCompound);
  setValue("address", address);
  setValue("installment", Installment);
  setValue("level", data.level);
  setValue("finishingType", finishingType);
  setValue("isRegisterd", data?.isRegisterd);
  setValue("RealEstateFinance", data?.RealEstateFinance);
  setValue("negotiable", data?.negotiable);
  setValue("isFurnished", data?.isFurnished);
  setValue("thumbnail", data?.thumbnail);
  setValue("album", data?.album);
  setValue("connectPhoneNumber", data?.connectPhoneNumber);
  setValue("deliveryDate", data?.deliveryDate || "");
  setValue("otherPhone", data?.connectPhoneNumber ? true : false);
  setValue("id", data?._id);
};

function findSaleOption(saleOptionList = saleOptions, value) {
  // Loop through saleOptionList
  for (let i = 0; i < saleOptionList?.length; i++) {
    const arrayToCheck = saleOptionList[i]?.value;

    // Check if arrayToCheck has the same length as value
    if (arrayToCheck?.length !== value?.length) {
      continue; // Continue to the next iteration if lengths don't match
    }

    // Check if all elements in arrayToCheck match the corresponding elements in value
    if (arrayToCheck.every((element, index) => element === value[index])) {
      return saleOptionList[i]; // Return the matched sale option
    }
  }

  // Return undefined if no match found
  return undefined;
}
