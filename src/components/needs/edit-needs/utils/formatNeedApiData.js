import { propTypeList, rentalTypes } from "@/utils/addAndEditOptions";

export const formatNeedApiData = (setValue, data) => {
  const unitType = {
    value: data?.unitType?._id,
    name: {
      ar: data?.unitType?.title.ar,
      en: data?.unitType?.title.en,
    },
  };
  const address = {
    name: data?.address?.name,
    governrate: data?.governrate,
    region: data?.region,
    longitude: data?.longitude || "",
    latitude: data?.latitude || "",
  };
  const propType = propTypeList.find((item) => item.value === data?.propType);
  const rentalPeriod =
    rentalTypes.find((item) => item?.value === data?.rentalPeriod) || "";
  // console.log(data);
  setValue("address", address);
  setValue("unitType", unitType);
  setValue("propType", propType);
  setValue("priceTo", data?.price.to);
  setValue("priceFrom", data?.price.from);
  setValue("areaFrom", data?.area.from);
  setValue("areaTo", data?.area.to);
  setValue("area", data?.area);
  setValue("rooms", data?.rooms);
  setValue("bathRooms", data?.bathRooms);

  setValue("saleOption", data?.saleOption);

  setValue("installment", data?.installment);
  setValue("description", data?.description);
  setValue("rentalPeriod", data?.rentalPeriod);
  setValue("offer", data?.offer);
  setValue("id", data?._id);
};
