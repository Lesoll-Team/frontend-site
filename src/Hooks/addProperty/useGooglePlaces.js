// import { useLoadScript } from "@react-google-maps/api";
// import { useEffect } from "react";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// const useGooglePlaces = ({input}) => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_MAP,
//     libraries: ["places"],
//   });
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();
//   useEffect(() => {
//     setValue("حارة حنفى مرزوق");
//   }, [status]);
//   console.log(data);
//   return { data };
// };
// export default useGooglePlaces;
import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
const lib = ["places"];
/*
 * @param {useGooglePlaces} num1 - The first number.
 * @param {useGooglePlaces} num2 - The second number.
 * @returns {useGooglePlaces} The sum of num1 and num2.
 */
const useGooglePlaces = ({ input = "" }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  useEffect(() => {
    console.log("status", ready);
    setValue(input);
    console.log(value);
    console.log("wow");
    if (!input) {
      clearSuggestions();
    }
  }, [input, setValue]);
  const places = useMemo(() => {
    return data;
  }, [input, setValue]);

  console.log(data);
  return { places, setValue, wow: "hi", ready, clearSuggestions };
};

export default useGooglePlaces;
