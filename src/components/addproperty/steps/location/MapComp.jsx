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
import { useState } from "react";
import { useSelector } from "react-redux";

const libraries = ["places"];
export default function MapComp({ propertyDetils, setData }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_MAP,
    libraries: libraries,
  });
  if (!isLoaded) return <div>loading ....</div>;
  return <Map propertyDetils={propertyDetils} setData={setData} />;
}
const center = { lat: 30, lng: 31.4 };
const Map = ({ propertyDetils, setData }) => {
  // console.log(propertyDetils);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [selected, setSelected] = useState(null);

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
  return (
    <div className=" mx-auto  space-y-4 ">
      <div className="w-full  pt-4">
        <h2 className="text-lg md:text-2xl text-darkGreen font-semibold mb-2">
          {language ? "الموقع" : "Location"}
        </h2>
        <PlacesAutoComplete
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
            disableDefaultUI: true, // Hide the default UI controls
            mapTypeControl: false, // Disable the map type control
          }}
          zoom={selected ? 13 : 9}
          center={selected || center}
          mapContainerClassName="map"
          // onDblClick={handleMapClick}
        >
          {selected && <Marker position={selected} />}
        </GoogleMap>
      </div>
    </div>
  );
};

const PlacesAutoComplete = ({ setSelected, propertyDetils, setData }) => {
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
    <Combobox onSelect={handleSelect} className="w-full">
      <ComboboxInput
        placeholder={language ? "أدخل موفع العقار" : "Select the location"}
        value={value}
        onChange={(e) => {
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
        className=" w-full text-lg font-semibold text-darkGreen focus:outline-none focus:border-lightGreen placeholder:text-gra placeholder:opacity-60   border-[3px] rounded-xl p-3 py-4 "
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
  );
};
