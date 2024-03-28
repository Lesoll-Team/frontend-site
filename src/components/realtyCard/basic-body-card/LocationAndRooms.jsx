import React from "react";
import { LiaBedSolid, LiaVectorSquareSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";

const LocationAndRooms = ({ propertyDetails }) => {
  return (
    <div className="md:flex  md:items-center  md:justify-between md:space-y-[0px] space-y-[8px]">
      <p className="flex items-center  min-w-max text-gray2 md:text-[16px] text-[12px] gap-1  ">
        {propertyDetails?.address?.region
          ? propertyDetails?.address?.region
          : propertyDetails?.address?.governrate}
      </p>
      <div className="  flex items-center  min-w-max  text-darkGray ">
        {propertyDetails?.rooms > 0 && (
          <ul className="flex items-center gap-x-1  ">
            <li className="font-bold text-[11px] font-inter md:text-[17px]">
              {propertyDetails?.rooms}
            </li>
            <LiaBedSolid className="md:text-[25px]" />
          </ul>
        )}
        {propertyDetails?.bathRooms > 0 && (
          <>
            <hr className=" border-gray-400 border-[1px] md:w-[25px] w-[15px] rotate-90" />
            <ul className="flex items-center gap-x-1  ">
              <li className="font-bold text-[11px] font-inter md:text-[17px]">
                {propertyDetails?.bathRooms}
              </li>
              <PiBathtub className="md:text-[25px]" />
            </ul>
          </>
        )}
        {propertyDetails?.area > 0 && (
          <>
            {propertyDetails?.rooms > 0 && propertyDetails?.bathRooms > 0 && (
              <hr className=" border-gray-400 border-[1px] md:w-[25px] w-[15px] rotate-90" />
            )}

            <ul className="flex items-center gap-x-1  ">
              <LiaVectorSquareSolid className=" md:text-[20px]" />
              <li className="font-bold text-[11px] font-inter md:text-[17px]">
                {propertyDetails?.area + " m "}
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default LocationAndRooms;
