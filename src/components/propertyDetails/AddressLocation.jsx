import { memo } from "react";
import { FaMapLocationDot } from "react-icons/fa6";

import { useSelector } from "react-redux";

function AddressLocation({ singleAddressLocation }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  // console.log(singleAddressLocation);
  return (
    <div className="flex justify-between  items-center px-3 py-5 w-full bg-white rounded-lg drop-shadow-lg ">
      <p className="text-xl font-semibold  flex items-center gap-2">
        {language
          ? " اعرف موقع العقار على الخريطة "
          : "Property location on the map"}
        <FaMapLocationDot className="text-darkGreen" />
      </p>
      <button className="px-4 rounded-md py-1 bg-darkGreen text-white font-medium">
        {language ? "الموقع" : "Location"}
      </button>
      {/* <div className=" lg:w-[100%]  h-[300px]">
        <ShowMap
          center={{
            lat: parseFloat(singleAddressLocation.address.latitude),
            lng: parseFloat(singleAddressLocation.address.longitude),
          }}
        />
      </div> */}
    </div>
  );
}
export default memo(AddressLocation);
