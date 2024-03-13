import { SearchDropdownLocation } from "@/Shared/search/SearchDropdownLocation";
import React, { memo } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";

const SearchByLocations = ({ setLocationRegion, setLocationGovernorate }) => {
  const { locationGovernorate, locationRegion } = useSelector(
    (state) => state.Category
  );
  return (
    <>
      <IoIosSearch className="text-[1.45rem] text-gray2" />
      <SearchDropdownLocation
        defaultGovernorate={locationGovernorate}
        defaultRegion={locationRegion}
        setLocationGovernorate={setLocationGovernorate}
        setLocationRegion={setLocationRegion}
      />
    </>
  );
};

export default memo(SearchByLocations);
