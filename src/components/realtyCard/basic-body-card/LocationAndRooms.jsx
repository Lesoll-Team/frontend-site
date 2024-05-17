import React, { memo } from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { PiBathtubThin, PiBedLight } from "react-icons/pi";
import { useSelector } from "react-redux";

const LocationAndRooms = ({ propertyDetails }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="flex w-fit justify-end   gap-x-2 sm:gap-x-4">
      {!propertyDetails.rooms == 0 && (
        <ul className="flex items-center gap-x-1   ">
          <PiBedLight className="sm:text-xl text-lg" />
          <li className=" text-[11px] font-inter md:text-[17px]">
            {propertyDetails.rooms}
          </li>
        </ul>
      )}

      {!propertyDetails.bathRooms == 0 && (
        <ul className="flex items-center gap-x-1   ">
          <PiBathtubThin className="text-lg sm:text-xl" />
          <li className=" text-[11px] font-inter md:text-[17px]">
            {propertyDetails?.bathRooms}
          </li>
        </ul>
      )}

      {!propertyDetails.area == 0 && (
        <ul className="flex items-center gap-x-1  whitespace-nowrap ">
          <LiaVectorSquareSolid className="text-lg sm:text-xl" />
          <li className="text-[11px] font-inter md:text-[17px]">
            {propertyDetails?.area} {language ? "م" : "m"}
            <sup>2</sup>
          </li>
        </ul>
      )}
    </div>
  );
};

export default memo(LocationAndRooms);

/* <span className="p-[8px]"></span> */
