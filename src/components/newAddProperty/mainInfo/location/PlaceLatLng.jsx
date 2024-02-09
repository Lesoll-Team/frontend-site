import useGooglePlaces from "@/Hooks/addProperty/useGooglePlaces";
import { getCooardinates } from "@/utils/getCooardinates";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PlaceLatLng = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [searchinput, setSearchInput] = useState("");
  const [showPlaces, setShowPlaces] = useState(false);
  const { places, clearSuggestions } = useGooglePlaces({ input: searchinput });
  useEffect(() => {
    if (searchinput.trim() !== "") {
      setShowPlaces(true);
    } else {
      setShowPlaces(false);
    }
  }, [searchinput]);

  const handleSelect = async (address) => {
    const { lat, lng } = await getCooardinates(address);
    clearSuggestions();
  };
  return (
    <div className="lg:col-span-2 space-y-2">
      <h3 className="text-xl">
        {language ? "العنوان بالتفصيل" : "Goversnorate"}
      </h3>
      <input
        value={searchinput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        className={`w-full text-lg font-semibold disabled:bg-white focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60 border-2 rounded-md p-3 py-2 ${
          errors?.governrate?._id && "border-red-500 focus:border-red-500"
        }`}
      />
      {showPlaces && places && places.length > 0 && (
        <div className="w-full max-h-[300px]">
          {places.map((item) => (
            <button
              type="button"
              className="w-full"
              onClick={() => handleSelect(item.description)}
              key={item.place_id}
            >
              {item.description}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaceLatLng;
