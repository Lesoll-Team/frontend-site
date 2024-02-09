import { useEffect, useState } from "react";
import { getGeocode, getLatLng } from "use-places-autocomplete";

const useCoordinates = (place) => {
  const [cooardinates, setCooardinates] = useState();
  //   const [result, setResult] = useState();
  useEffect(() => {
    const getCooardinates = async () => {
      console.log("place", place);
      const result = await getGeocode({ address: place });
      console.log("result", result);
      const { lat, lng } = getLatLng(result[0]);
      setCooardinates({ lat, lng });
    };
    if (place) {
      getCooardinates();
    }
  }, [place, getLatLng]);
  const getCooardinates = async (address) => {
    const result = await getGeocode({ address });
    const { lat, lng } = getLatLng(result[0]);

    return { lat: lat, lng: lng };
  };
  return { cooardinates, onSelect };
};
export default useCoordinates;
