import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgOptions } from "react-icons/cg";
import SearchByLocations from "./barfilter-modules/SearchByLocations";
import DropdownsFilter from "./barfilter-modules/DropdownsFilter";
import ButtonSearchAction from "./shared/ButtonSearchAction";
import { updateAllStates } from "@/redux-store/features/category/categorySlice";

const BarFilter = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  const openSideFilter = () => {
    dispatch(
      updateAllStates({
        openFilter: true,
      })
    );
  };
  return (
    <div
      className="relative md:py-8 py-3  w-full md:container md:mx-auto mx-[20px]"
      aria-label="bar filter"
    >
      <div
        aria-label="search in category by locations"
        className="flex md:gap-x-[1vw] gap-x-[1.5vw] md:bg-inherit  
         bg-white rounded-[6px]  justify-around"
      >
        <SearchByLocations />
        <div className="hidden md:flex gap-x-[1vw]">
          <DropdownsFilter />
        </div>

        <button
          className=" md:gap-x-2 gap-x-0 md:bg-white bg-lightGreen md:w-auto w-[40px] h-[40px] md:h-[3.313rem] text-gray1 sm-text flex items-center md:justify-between justify-center
         md:border-[1px] border-0 md:border-[#CCCCCC] rounded-[6px] md:px-3 md:p-2  "
          onClick={openSideFilter}
        >
          <span className="whitespace-nowrap hidden md:block text-gray1">
            {language ? "خيارات اكثر" : "More filter"}
          </span>
          <CgOptions className=" md:text-gray2 text-white md:font-normal font-bold md:sm-text text-xl md:rotate-0 rotate-90" />
        </button>

        <ButtonSearchAction isBar />
      </div>
    </div>
  );
};

export default memo(BarFilter);
