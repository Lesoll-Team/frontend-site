import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { result } from "lodash";

const libraries = ["places"];
export default function MapComp({ propertyDetils, setData, propErrors }) {
  // console.log(propertyDetils);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_MAP,
    libraries: libraries,
  });
  if (!isLoaded) return <div>loading ....</div>;
  return (
    <Map
      propertyDetils={propertyDetils}
      setData={setData}
      propErrors={propErrors}
    />
  );
}
const center = { lat: 30, lng: 31.4 };
const Map = ({ propertyDetils, setData, propErrors }) => {
  // const getLatLngWithGovAndRegion = async () => {
  //   const result = await getGeocode({ address: "cairo , nasr city" });
  //   console.log(result[0].geometry.location.lat());
  // };
  // geoo();
  // console.log(propertyDetils);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [selected, setSelected] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // const handleMapClick = async (e) => {
  //   // const { latLng } = e;
  //   // console.log(e);
  //   // const lat = latLng.lat();
  //   // const lng = latLng.lng();
  //   // setSelected({ lat, lng });
  //   setValue(e, false);
  //   clearSuggestions();
  //   const result = await getGeocode({ e });
  //   const { lat, lng } = getLatLng(result[0]);
  //   console.log(getLatLng(result[0]));
  //   setSelected({ lat, lng });
  // };

  const handleMapDoubleClick = async (event) => {
    const { latLng } = event;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setSelected({ lat, lng });
    // console.log(selected);
    const query = `${lat},${lng}`;
    // Use getGeocode to retrieve place details including place_id
    // const result = await getGeocode(selected);
    const result = await getGeocode({ address: query });
    // console.log(result);
    // console.log(result[0]);
    const { place_id, formatted_address, address_components } = result[0];

    let governrate = "";
    let region = "";
    address_components.forEach((component) => {
      const { long_name, types } = component;

      if (types.includes("administrative_area_level_1")) {
        governrate = long_name;
      } else if (types.includes("administrative_area_level_2")) {
        region = long_name;
      }
    });
    // const { lat, lng } = getLatLng(result[0]);
    setSelected({ lat, lng });
    // console.log(result[0]);
    setData({
      ...propertyDetils,
      address: {
        ...propertyDetils.address,
        placeId: result[0]?.place_id,
        name: result[0]?.formatted_address,
        governrate: governrate,
        region: region,
        longitude: lng,
        latitude: lat,
      },
    });
    setInputValue(propertyDetils.address.name);

    // setBlah(result);
    // console.log(getGeocode(selected));
    // const { place_id } = result[0];
    // console.log(place_id);

    // setSelected({ lat, lng });

    // You can perform additional actions or update your data here
  };
  useEffect(() => {
    setInputValue(propertyDetils.address.name);
  }, [propertyDetils.address.name]);
  return (
    <div className=" mx-auto  space-y-4 ">
      <div className="w-full  pt-4">
        <h2 className="text-lg md:text-2xl text-darkGreen font-semibold mb-2">
          {language ? "الموقع" : "Location"}
        </h2>
        <PlacesAutoComplete
          propErrors={propErrors}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setSelected={setSelected}
          propertyDetils={propertyDetils}
          setData={setData}
        />
      </div>
      <div className="w-full  overflow-auto rounded-lg h-[350px] md:h-[500px]">
        <GoogleMap
          // streetView={false}
          // mapTypeId="roadmap"
          options={{
            // disableDefaultUI: true, // Hide the default UI controls
            mapTypeControl: false, // Disable the map type control
            gestureHandling: "greedy",
            mapTypeControl: false,
            streetViewControl: false,
          }}
          zoom={selected ? 13 : 9}
          center={selected || center}
          mapContainerClassName="map"
          // onDblClick={handleMapClick}
          onClick={handleMapDoubleClick}
        >
          {selected && <Marker position={selected} />}
        </GoogleMap>
      </div>
    </div>
  );
};

const PlacesAutoComplete = ({
  setSelected,
  propertyDetils,
  setData,
  inputValue,
  setInputValue,
  propErrors,
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  const [government, setGovernment] = useState("");
  const [region, setRegion] = useState("");
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    // console.log(address);
    const result = await getGeocode({ address });
    const { place_id, formatted_address, address_components } = result[0];

    let governrate = "";
    let region = "";

    address_components.forEach((component) => {
      const { long_name, types } = component;

      if (types.includes("administrative_area_level_1")) {
        governrate = long_name;
      } else if (types.includes("administrative_area_level_2")) {
        region = long_name;
      }
    });
    setInputValue("");

    const { lat, lng } = getLatLng(result[0]);
    setSelected({ lat, lng });
    // console.log(result[0]);
    setData({
      ...propertyDetils,
      address: {
        ...propertyDetils.address,
        placeId: result[0]?.place_id,
        name: result[0]?.formatted_address,
        governrate: governrate,
        region: region,
        longitude: lng,
        latitude: lat,
      },
    });

    // console.log(propertyDetils);
    // console.log(result[0]);
  };
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Combobox onSelect={handleSelect} className="w-full">
        <ComboboxInput
          placeholder={language ? "أدخل موفع العقار" : "Select the location"}
          defaultValue={inputValue || ""}
          value={inputValue || value}
          onChange={(e) => {
            setInputValue(e.target.value);
            setValue(e.target.value);
            // setData({
            //   ...propertyDetils,
            //   address: {
            //     ...propertyDetils.address,
            //     placeId: result[0]?.place_id,
            //   },
            // });
            // console.log(data);
          }}
          disabled={!ready}
          className={` w-full text-lg font-semibold text-darkGreen focus:outline-none focus:border-lightGreen placeholder:text-gra placeholder:opacity-60   border-[3px] rounded-xl p-3 py-4 ${
            propErrors.address && "border-red-500 focus:border-red-500"
          }`}
        />
        {status === "OK" && (
          <ComboboxPopover className=" rounded-lg mt-2 drop-shadow-lg ">
            <ComboboxList className="rounded-lg sapce-y-4">
              {data.map(({ place_id, description }) => {
                return (
                  <ComboboxOption
                    key={place_id}
                    value={description}
                    className="text-darkGray "
                  />
                );
              })}
            </ComboboxList>
          </ComboboxPopover>
        )}
      </Combobox>
      {propErrors?.address && (
        <p className="text-red-500">{language ? "  مطلوب " : " Requird"}</p>
      )}
    </>
  );
};
