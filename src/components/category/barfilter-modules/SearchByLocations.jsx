import { SearchDropdownLocation } from "@/Shared/search/SearchDropdownLocation";
import React, { memo } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchByLocations = () => {
  return (
    <div
      aria-label="Search by locations"
      className="w-full flex items-center border-1
         border-[#CCCCCC] bg-white px-2 min-w-[200px] rounded-[6px]"
    >
      <IoIosSearch className="text-[1.45rem] text-gray1" />
      <SearchDropdownLocation />
    </div>
  );
};

export default memo(SearchByLocations);
