import { propTypeList, saleOptions } from "@/utils/addAndEditOptions";
import { rentalTypes } from "@/utils/addAndEditOptions";
export const formatApiData = (data) => {
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
    service: data?.service,
    area: data?.area,
    realEstateFinance: data?.realEstateFinance,
    rooms: data?.rooms,
    bathRooms: data?.bathRooms,
    otherPhone: data?.connectPhoneNumber ? true : false,
    compaounds: {
      _id: data?.compaounds,
      CompoundsAR: "",
      CompoundsEN: "",
    },
  };
  console.log(formatedData.unitType);
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
