import { propTypeList, saleOptions } from "@/utils/addAndEditOptions";
import { rentalTypes, installmentTypeOptions } from "@/utils/addAndEditOptions";
export const formatApiData = (data) => {
  const Installment = data?.installment?.map((installment) => {
    return {
      ...installment,
      type:
        installmentTypeOptions.find(
          (item) => item.value === installment.type
        ) || "",
    };
  });
  const formatedData = {
    title: data?.title,
    offer: data?.offer,
    propType: propTypeList.find((item) => item.value === data?.propType),
    mainImage: "",
    multiImage: "",
    rentalPeriod:
      rentalTypes.find((item) => item.value === data?.rentalPeriod) || "",
    insurance: data?.insurance,
    saleOption: findSaleOption(saleOptions, data?.saleOption),
    unitType: {
      value: data?.unitType?._id,
      name: {
        ar: data?.unitType?.title.ar,
        en: data?.unitType?.title.en,
      },
    },

    price: data?.price,
    service: data?.service?.map((item) => item._id),
    area: data?.area,
    realEstateFinance: data?.realEstateFinance,
    rooms: data?.rooms,
    bathRooms: data?.bathRooms,
    otherPhone: data?.connectPhoneNumber ? true : false,
    isCompound: data?.isCompound,
    level: data?.level || "default",
    compaounds: {
      _id: data?.compaounds?._id,
      CompoundsAR: data?.compaounds?.CompoundsAR,
      CompoundsEN: data?.compaounds?.CompoundsEN,
    },
    address: {
      name: data?.address?.name,
      governrate: data?.governrate,
      region: data?.region,
      longitude: data?.longitude || "",
      latitude: data?.latitude || "",
    },
    installment: Installment,
    deliveryDate: data?.deliveryDate,
    description: data?.description,
  };
  console.log("data", data);
  console.log("formatedData", formatedData);
  return data;
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
