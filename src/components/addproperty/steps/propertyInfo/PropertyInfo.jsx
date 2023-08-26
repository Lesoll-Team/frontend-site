import React, { useEffect, useRef, useState } from "react";
import AddPropInput from "../../AddPropIputs/AddPropInput";
import AddPropCheck from "../../AddPropIputs/AddPropCheck";
import AddPropDropdown from "../../AddPropIputs/AddPropDropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  setArea,
  setRooms,
  setBathRooms,
  setFinishingType,
  setIsFurnished,
  setIsRegisterd,
} from "@/redux-store/features/propertySlice";
import FormControlBtns from "../../FormControlBtns";
import LandInfo from "./LandInfo";
import CommeRes from "./CommeRes";

const PropertyInfo = () => {
  // const [finishingOptions, setFinishingOptions] = useState("");

  // const [rooms, setRooms] = useState("");
  // const [bathRooms, setBathRooms] = useState("");
  const area = useSelector((state) => state.Property.area);
  const rooms = useSelector((state) => state.Property.rooms);
  const bathRooms = useSelector((state) => state.Property.bathRooms);
  const finishingType = useSelector((state) => state.Property.finishingType);
  const propType = useSelector((state) => state.Property.propType);
  const canGoNext =
    Boolean(area) &&
    Boolean(rooms) &&
    Boolean(bathRooms) &&
    Boolean(finishingType);

  return (
    <div className=" w-full min-h-[450px] mx-auto px-6 md:px-8 my-5 space-y- flex flex-col justify-between">
      {/* {propType === "Land" ? <LandInfo /> : <CommeRes />} */}
      <CommeRes />
      <div className="-mb-6 mt-4 w-full ">
        <FormControlBtns canGoNext={canGoNext} />
      </div>
    </div>
  );
};

export default PropertyInfo;
