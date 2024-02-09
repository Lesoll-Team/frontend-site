import useGooglePlaces from "@/Hooks/addProperty/useGooglePlaces";
import { useState } from "react";
import { useSelector } from "react-redux";

const GoogleMapLocation = ({
  errors,
  register,
  setValue,
  watch,
  clearErrors,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [searchinput, setSearchInput] = useState("");
  const { places, isLoaded } = useGooglePlaces({ input: searchinput });
  console.log("places", places);
  console.log("loaded", isLoaded);
  return (
    <div className="lg:col-span-2 space-y-2">
      <h3 className="text-xl">{language ? "المحافظة" : "Governorate"}</h3>
      <input
        value={searchinput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        className={` w-full text-lg font-semibold disabled:bg-white  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
          errors?.governrate?._id && "border-red-500 focus:border-red-500"
        }`}
      />
      {places && places.length > 0 && (
        <div className="w-full max-h-[300px]">
          {places.map((item) => (
            <div key={item.place_id}>{item.description}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default GoogleMapLocation;
