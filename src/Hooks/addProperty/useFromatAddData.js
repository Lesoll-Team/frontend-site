const useFromatAddData = (data) => {
  const address = {
    name: data.address.name,
    longitude: data.address.longitude,
    latitude: data.address.lat,
    region: data.address.region.city_name_ar,
    governrate: data.address.governrate.governorate_name_ar,
  };
  const installment = data.installment.map((plan) => {
    return {
      type: plan.type.value,
      period: plan.period || "",
      amount: plan.amount || "",
      downPayment: plan.downPayment || "",
      discount: plan.discount || "",
    };
  });
  const saleOption = data.saleOption.value.map((item) => {
    return item;
  });
  const formData = new FormData();
  for (let i = 0; i < data.multiImage.length; i++) {
    formData.append("multiImage", data.multiImage[i]);
  }
  for (let i = 0; i < saleOption.length; i++) {
    formData.append("saleOption", saleOption[i]);
  }
  for (let i = 0; i < installment.length; i++) {
    formData.append("installment", JSON.stringify(installment[i]));
  }
  data.service.map((service) => {
    formData.append("service", service);
  });
  data.otherPhone &&
    formData.append("connectPhoneNumber", data.connectPhoneNumber);
  data.deliveryDate && formData.append("deliveryDate", data.deliveryDate);
  formData.append("title", data.title);
  formData.append("isCompound", data.isCompound);
  data.isCompound && formData.append("compaounds", data.compaounds?._id);
  formData.append("offer", data.offer);
  formData.append("mainImage", data.mainImage);
  formData.append("installmentOption", JSON.stringify(data.installmentOption));
  formData.append("address", JSON.stringify(address));
  formData.append("negotiable", data.negotiable);
  formData.append("finishingType", data.finishingType.value || "");
  formData.append("isFurnished", data.isFurnished);
  formData.append("isRegisterd", data.isRegisterd);
  formData.append("rentalPeriod", data.rentalPeriod.value) || "";
  formData.append("insurance", data.insurance || "");
  formData.append("propType", data.propType.value);
  formData.append("unitType", data.unitType.value);
  formData.append("price", data.price);
  formData.append("area", data.area);
  formData.append("RealEstateFinance", data.realEstateFinance);
  formData.append("downPayment", data.downPayment || "");
  formData.append("rooms", data.rooms);
  formData.append("bathRooms", data.bathRooms);
  formData.append("description", data.description);
  formData.append("level", data.level);
  return { formData };
};
export default useFromatAddData;