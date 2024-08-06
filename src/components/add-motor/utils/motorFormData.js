import { convertToNumber } from "@/components/newAddProperty/utils/handleNumberInput";

export const motorFormData = (data, step) => {
  const address = {
    region: data?.address?.region?.city_name_ar,
    governrate: data?.address?.governrate?.governorate_name_ar,
  };
  const formData = new FormData();
  data?.brand && formData.append("brand", data?.brand?.en);
  data?.model && formData.append("model", data?.model?.en);
  data?.usedSince && formData.append("usedSince", data?.usedSince);
  data?.carColor && formData.append("carColor", JSON.stringify(data?.carColor));
  if (step > 4) {
    data?.vehicleType && formData.append("vehicleType", data?.vehicleType.en);
    data?.title && formData.append("title", data.title);
    data?.transferCase && formData.append("transferCase", data?.transferCase);
    data?.kiloMeter &&
      formData.append("kiloMeter", convertToNumber(data?.kiloMeter));
    data?.carType && formData.append("carType", data?.carType);
    data?.CC && formData.append("CC", convertToNumber(data?.CC));
    data?.fuel && formData.append("fuel", data?.fuel?.en);
    data?.transmissionType &&
      formData.append("transmissionType", data?.transmissionType);
    data?.price && formData.append("price", convertToNumber(data?.price));
    data?.currencies?.ISO_code &&
      formData.append("currencies", data.currencies.ISO_code);
    data?.description && formData.append("description", data?.description);
    data?.service?.length > 0 &&
      data.service.map((service) => {
        formData.append("service", service);
      });
    data?.address && formData.append("address", JSON.stringify(address));
  }
  if (step > 5) {
    data?.mainImage && formData.append("mainImage", data.mainImage);
    data?.thumbnail && formData.append("mainImage", data.thumbnail);
    if (data?.multiImage) {
      for (let i = 0; i < data.multiImage?.length; i++) {
        formData.append("multiImage", data.multiImage[i]);
      }
    }
    data?.album?.length > 0 &&
      data.album.map((item) => {
        formData.append("album", item._id);
      });
  }
  if (step > 6) {
    data?.adType && formData.append("adType", data.adType);
    data?.toPin && formData.append("toPin", data.toPin);
    data?.packId && formData.append("packId", data.packId);
  }
  return formData;
};
