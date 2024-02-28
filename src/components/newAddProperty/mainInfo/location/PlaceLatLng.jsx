import useGooglePlaces from "@/Hooks/addProperty/useGooglePlaces";
import ComboBox from "@/Shared/ui/ComboBox";
import { getCooardinates } from "@/utils/getCooardinates";
import { useState } from "react"; // Import useRef
import { useSelector } from "react-redux";

const PlaceLatLng = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [searchinput, setSearchInput] = useState(watch("address.name"));
  const { places, clearSuggestions } = useGooglePlaces({ input: searchinput });

  const handleSelect = async (address) => {
    const { lat, lng } = await getCooardinates(address.description);
    setValue("address.name", address.description);
    setValue("address.latitude", lat);
    setValue("address.longitude", lng);
    clearErrors("address.name");
    setSearchInput(address.description);
    clearSuggestions();
  };

  return (
    <div className="lg:col-span-2 space-y-2">
      <h3 className="text-xl">
        {language ? "العنوان بالتفصيل" : "Address in detail"}
      </h3>

      <ComboBox
        inputValue={searchinput}
        setInputValue={setSearchInput}
        filteredOptions={places}
        optionStyle={"text-start"}
        onSelect={handleSelect}
        renderItem={(option) => option.description}
        error={errors?.address?.name}
        errorMessage={errors?.address?.name?.message}
      />
      <input
        type="text"
        hidden
        {...register("address.name", {
          required: {
            value: true,
            message: "please enter property address",
          },
        })}
      />
    </div>
  );
};

export default PlaceLatLng;
