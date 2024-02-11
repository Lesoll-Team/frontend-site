import { useEffect, useMemo } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
const useGooglePlaces = ({ input = "" }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  useEffect(() => {
    setValue(input);

    if (!input) {
      clearSuggestions();
    }
  }, [input, setValue]);
  const places = useMemo(() => {
    return data;
  }, [input, setValue]);
  return { places, setValue, ready, clearSuggestions };
};

export default useGooglePlaces;
