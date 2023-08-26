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

const CommeRes = () => {
  const dispatch = useDispatch();
  const area = useSelector((state) => state.Property.area);
  const rooms = useSelector((state) => state.Property.rooms);
  const bathRooms = useSelector((state) => state.Property.bathRooms);
  const finishingType = useSelector((state) => state.Property.finishingType);
  const isFurnished = useSelector((state) => state.Property.isFurnished);
  const isRegisterd = useSelector((state) => state.Property.isRegisterd);
  const canGoNext =
    Boolean(area) &&
    Boolean(rooms) &&
    Boolean(bathRooms) &&
    Boolean(finishingType);
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
            setValue={(area) => dispatch(setArea(area))}
            // m2={true}
            isLand={"carat"}
          />
          <AddPropInput
            title={"Number of rooms"}
            placeholder={"Number of rooms"}
            type={"number"}
            value={rooms}
            setValue={(rooms) => dispatch(setRooms(rooms))}
          />
          <AddPropInput
            title={"Number of bathrooms"}
            placeholder={"Number of batrooms"}
            type={"number"}
            value={bathRooms}
            setValue={(bathrooms) => dispatch(setBathRooms(bathrooms))}
          />
        </div>
        <div className="  w-full md:w-[48%] space-y-5">
          <AddPropDropdown
            title={"Finishing Type"}
            options={["Super Lux", "Lux", "Semi Finished", "Not Finished"]}
            value={finishingType}
            setValue={(type) => dispatch(setFinishingType(type))}
          />

          <AddPropCheck
            title={"Furnished"}
            value={isFurnished}
            setValue={() => dispatch(setIsFurnished())}
          />
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

export default CommeRes;
