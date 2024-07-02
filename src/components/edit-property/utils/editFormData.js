import { convertToNumber } from "@/components/newAddProperty/utils/handleNumberInput";

export const editFormData = (data) => {
  const address = {
    name: data?.address.name,
    longitude: data?.address.longitude,
    latitude: data?.address.latitude,
    region: data?.address?.region.city_name_ar,
    governrate: data?.address?.governrate?.governorate_name_ar,
  };
  const installment = data.installment.map((plan) => {
    return {
      type: plan.type.value,
      period: convertToNumber(plan.period) || "",
      amount: convertToNumber(plan.amount) || "",
      downPayment: convertToNumber(plan.downPayment) || "",
      discount: plan.discount || "",
      ProjectPercentage: plan.ProjectPercentage || "",
    };
  });

  const saleOption =
    data.saleOption &&
    data?.saleOption?.value?.map((item) => {
      return item;
    });
  const formData = new FormData();
  if (data?.multiImage) {
    for (let i = 0; i < data?.multiImage.length; i++) {
      formData.append("multiImage", data?.multiImage[i]);
    }
  }
  if (data.saleOption) {
    for (let i = 0; i < saleOption?.length; i++) {
      formData.append("saleOption", saleOption[i]);
    }
  }
  for (let i = 0; i < installment?.length; i++) {
    formData.append("installment", JSON.stringify(installment[i]));
  }
  data?.service.map((service) => {
    formData.append("service", service);
  });
  data?.otherPhone &&
    formData.append("connectPhoneNumber", data?.connectPhoneNumber);
  data?.deliveryDate && formData.append("deliveryDate", data?.deliveryDate);
  formData.append("title", data?.title);
  formData.append("isCompound", data?.isCompound);
  data?.isCompound && formData.append("compaounds", data?.compaounds?._id);
  formData.append("offer", data?.offer);
  formData.append("mainImage", data?.mainImage);
  formData.append("resale", data?.resale);
  // formData.append("installmentOption", JSON.stringify(data.installmentOption));
  formData.append("address", JSON.stringify(address));
  formData.append("negotiable", data?.negotiable);
  formData.append("resale", data?.resale);
  formData.append("finishingType", data?.finishingType?.value || "");
  formData.append("isFurnished", data?.isFurnished);
  formData.append("isRegisterd", data?.isRegisterd || false);
  formData.append("rentalPeriod", data?.rentalPeriod.value || "");
  formData.append("insurance", data?.insurance || "");
  formData.append("propType", data?.propType.value);
  formData.append("unitType", data?.unitType.value);
  // formData.append("installmentOption", "");
  formData.append("price", convertToNumber(data.price));
  formData.append("area", convertToNumber(data.area));
  formData.append("RealEstateFinance", data?.RealEstateFinance);
  formData.append("downPayment", convertToNumber(data.downPayment) || "");
  formData.append("rooms", data?.rooms || 0);
  formData.append("bathRooms", data?.bathRooms || 0);
  formData.append("description", data?.description);
  formData.append("level", data?.level);
  formData.append("thumbnail", data?.thumbnail);
  for (let i = 0; i < data?.album.length; i++) {
    formData.append("album", data?.album[i]._id);
  }
  data.ProjectID && formData.append("ProjectID", data?.ProjectID?.value);
  formData.append("currencies", data.currencies.ISO_code);

  return { formData };
};
