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
      period: parseInt(plan.period) || 0,
      amount: parseInt(plan.amount) || 0,
      downPayment: parseInt(plan.downPayment) || 0,
      discount: parseInt(plan.discount) || 0,
    };
  });
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("offer", data.offer);
  formData.append("mainImage", data.mainImage);
  // Append each file individually from the multibulImg array
  for (let i = 0; i < data.multiImage.length; i++) {
    formData.append("multiImage", data.multiImage[i]);
  }
  formData.append("rentalPeriod", data.rentalPeriod.value);
  formData.append("insurance", data.insurance);
  formData.append("saleOption", data.saleOption.value);
  formData.append("propType", data.propType.value);
  formData.append("unitType", data.unitType.value);
  // formData.append("landType", data.landType);
  formData.append("price", data.price);
  formData.append("area", data.area);
  // formData.append("areaType", data.areaType);
  formData.append("RealEstateFinance", data.realEstateFinance);
  formData.append("downPayment", data.downPayment);
  formData.append("maintenancePayment", data.maintenancePayment);
  formData.append("rooms", data.rooms);
  formData.append("bathRooms", data.bathRooms);
  formData.append("description", data.description);
  formData.append("level", data.level);
  formData.append("deliveryDate", data.deliveryDate);
  data.service.map((service) => {
    formData.append("service", service);
  });
  for (let i = 0; i < installment.length; i++) {
    formData.append("installment", JSON.stringify(installment[i]));
  }
  // formData.append("region", data.region.city_name_ar);
  // formData.append("governrate", data.governrate.governorate_name_ar);
  formData.append("installmentOption", JSON.stringify(data.installmentOption));
  formData.append("address", JSON.stringify(address));
  if (data.connectPhoneNumber) {
    formData.append("connectPhoneNumber", data.connectPhoneNumber);
  }
  // formData.append("status", data.status);
  formData.append("negotiable", data.negotiable);
  formData.append("finishingType", data.finishingType.value);
  formData.append("isFurnished", data.isFurnished);
  formData.append("isRegisterd", data.isRegisterd);
  return { formData };
};
export default useFromatAddData;
