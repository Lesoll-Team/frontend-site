import { getLangBoolean } from "@/utils/getLangBoolean";
import React, { memo } from "react";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { PiBathtubThin, PiBedLight } from "react-icons/pi";

const LocationAndRooms = ({ propertyDetails }) => {
  const language = getLangBoolean();
  return (
    <div className="flex w-fit justify-end  gap-x-4">
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
        <ul className="flex items-center gap-x-1  ">
          <LiaVectorSquareSolid className="text-lg sm:text-xl" />
          <li className="text-[11px] font-inter md:text-[17px]">
            {propertyDetails?.area} {language ? "م" : "m"}
            <sup>2</sup>
          </li>
        </ul>
      )}

      <span className="p-[8px]"></span>
    </div>
  );
};

export default memo(LocationAndRooms);
