import { memo } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { useSelector } from "react-redux";

function AddressLocation({ singleAddressLocation }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const openDirectionsInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${singleAddressLocation?.address.latitude},${singleAddressLocation?.address.longitude}`;
    window.open(url, "_blank");
  };
  return (
    <div className="space-y-4">
      <p className="sm:text-4xl text-lg  font-bold text-lightOrange  mb-2">
        {language ? " موقع العقار" : "Property location"}
      </p>
      <div className="space-y-2">
        <p className="text-sm text-darkGreen">
          {singleAddressLocation?.address.governrate},{" "}
          {singleAddressLocation?.address.region}
        </p>
        <div
          className=" relative overflow-hidden w-full rounded-lg "
          onClick={openDirectionsInGoogleMaps}
        >
          <button className="flex items-center gap-1 z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-7 rounded-md py-2 bg-white hover:scale-110 duration-200 text-darkGreen font-medium">
            {language ? "الموقع على الخريطة" : "Location on the map"}
            <FaMapLocationDot className="text-darkGreen" />
          </button>
          <div className="w-full rounded-xl border overflow-hidden drop-shadow-xl bg-white ">
            <img
              src="/map.svg"
              alt="map"
              className="w-full cursor-pointer hover:scale-105 duration-200 rounded-xl max-h-[300px]  object-cover"
            />
          </div>

          {/* <div className=" lg:w-[100%]  h-[300px]">
        <ShowMap
          center={{
            lat: parseFloat(singleAddressLocation.address.latitude),
            lng: parseFloat(singleAddressLocation.address.longitude),
          }}
        />
      </div> */}
        </div>
      </div>
    </div>
  );
}
export default memo(AddressLocation);
