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
  setValue("description", data?.description);
  setValue("about", data?.about);
  setValue("address", address);
  setValue("compaounds", compaounds);
  setValue("isCompound", data?.isCompound);
  setValue("thumbnail", data?.thumbnail);
  setValue("album", data?.album);
  setValue("area", data?.area);
  setValue("price", data?.price);
  setValue("id", data?._id);
};
