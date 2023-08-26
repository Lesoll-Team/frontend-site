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
  setSpaceType,
} from "@/redux-store/features/propertySlice";
import FormControlBtns from "../../FormControlBtns";
const LandInfo = () => {
  const dispatch = useDispatch();
  const area = useSelector((state) => state.Property.area);
  const spaceType = useSelector((state) => state.Property.spaceType);

  const isRegisterd = useSelector((state) => state.Property.isRegisterd);
  const canGoNext = Boolean(area) && Boolean(setSpaceType);

  return (
    <div>
      <h3 className="text-lg md:text-2xl text-darkGreen font-bold mb-3  ">
        Property Info
      </h3>
      <div className="flex flex-col  gap-3  md:gap-5 md:flex-row justify-between items-start">
        <div className=" w-full md:w-[48%] space-y-5">
          <AddPropInput
            title={"Area"}
            placeholder={"Area"}
            type={"number"}
            value={area}
            setValue={(area) => dispatch(setSpaceType(space))}
            // m2={true}
            isLand={spaceType}
          />

          <AddPropDropdown
            title={"Area Type"}
            options={["m", "caret", "acre"]}
            value={spaceType}
            setValue={(spaceType) => dispatch(setSpaceType(spaceType))}
          />
        </div>
        <div className="  w-full md:w-[48%] space-y-5">
          <AddPropCheck
            title={"Registerd"}
            value={isRegisterd}
            setValue={() => dispatch(setIsRegisterd())}
          />
        </div>
      </div>
    </div>
  );
};

export default LandInfo;
