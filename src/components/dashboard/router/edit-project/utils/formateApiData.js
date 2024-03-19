export const formateApiData = (setValue, data) => {
  const compaounds = {
    _id: data?.compaounds?._id,
    CompoundsAR: data?.compaounds?.CompoundsAR,
    CompoundsEN: data?.compaounds?.CompoundsEN,
  };
  const address = {
    name: data?.address?.name,
    governrate: data?.governrate,
    region: data?.region,
    longitude: data?.longitude || "",
    latitude: data?.latitude || "",
  };
  setValue("titleAr", data?.titleAr);
  setValue("titleEn", data?.titleEn);
  setValue("descriptionAr", data?.descriptionAr);
  setValue("descriptionEn", data?.descriptionEn);
  setValue("aboutAr", data?.aboutAr);
  setValue("aboutEn", data?.aboutEn);
  setValue("address", address);
  setValue("compaounds", compaounds);
  setValue("isCompound", data?.isCompound);
  setValue("thumbnail", data?.thumbnail);
  setValue("album", data?.album);
  setValue("areaFrom", data?.areaFrom);
  setValue("areaTo", data?.areaTo);
  setValue("priceFrom", data?.priceFrom);
  setValue("priceTo", data?.priceTo);
  setValue("installment", data?.installment);
  setValue("id", data?._id);
};
