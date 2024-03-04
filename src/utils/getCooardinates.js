import { getGeocode, getLatLng } from "use-places-autocomplete";

export const getCooardinates = async (address) => {
  const result = await getGeocode({ address });
  const { lat, lng } = getLatLng(result[0]);

  return { lat: lat, lng: lng };
};
