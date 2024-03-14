import { SearchDropdownLocation } from "@/Shared/search/SearchDropdownLocation";
// import { useSelect } from "@nextui-org/react";
// useSelector
import React, { memo } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";

const SearchByLocations = () => {
  const { locationGovernorate, locationRegion } = useSelector(
    (state) => state.Category
  );
  return (
    <div
      aria-label="Search by locations"
      className="w-full flex items-center border-0 md:border-1
         border-[#CCCCCC] bg-white px-2 min-w-[200px] rounded-[6px]"
    >
      <IoIosSearch className="text-[1.45rem] text-gray2" />
      <SearchDropdownLocation
        defaultGovernorate={locationGovernorate}
        defaultRegion={locationRegion}
        // setLocationGovernorate={setLocationGovernorate}
        // setLocationRegion={setLocationRegion}
      />
    </div>
  );
};

export default memo(SearchByLocations);
