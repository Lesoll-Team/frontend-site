import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import SidebarFilter from "./SidebarFilter";
import BarFilter from "./BarFilter";

import PaginationPage from "@/Shared/Pagination/PaginationSearch";
import RealtyCard from "../realtyCard/RealtyCard";
import ResultNotFound from "./shared/ResultNotFound";
import SubBarTitle from "./barfilter-modules/SubBarTitle";

const FilterLayout = ({ result, page }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { openFilter } = useSelector((state) => state.Category);
  const userInfo = useSelector((state) => state.userProfile.userData);

  return (
    <>
      {/*Sidebar filter */}
      {openFilter && (
        <div className="fixed z-[700] w-full top-0">
          <SidebarFilter languageIs={language} />
        </div>
      )}
      {/*bar filter */}
      <div
        className={` z-20 shadow-sm bg-white flex justify-center sticky ${userInfo
          ? "md:top-[57px] top-[62px] lg:top-[80px]"
          : "md:top-[97px] top-[97px] lg:top-[122px]"
          } `}
      >
        <BarFilter />
      </div>
      {/*unit types */}
      {/*title & save and filter button*/}
      <SubBarTitle result={result} />
      {/*cards result  */}
      <div
        className="md:container mx-[20px] md:mx-auto md:flex flex-wrap  grid  gap-y-3 md:gap-y-16  lg:justify-between justify-center"
      //   "  md:container mx-[10px] md:mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      //  gap-y-3 md:gap-y-16 bg-red-200 justify-between"
      >
        {result?.categoryResults?.map((property) => (
          <RealtyCard key={property._id} propertyDetails={property} />
        ))}
      </div>
      {/*error not found */}
      {result == null && (
        <div className="w-full md:container md:mx-auto mx-[10px">
          <ResultNotFound />
        </div>
      )}
      {/*Pagination   */}
      {result?.totalPages && (
        <div className="my-[4vh]">
          <PaginationPage totalPage={result.totalPages} currentPage={page} />
        </div>
      )}
    </>
  );
};

export default memo(FilterLayout);

/* <div className="md:container py-[48px] md:mx-auto mx-[20px] md:block hidden">
  <UnitTypeIcons
    category={categoryTypeKey}
    items={result?.aggregation_links}
    setUnitTypesKey={setUnitTypesKey}
    unitTypesKey={unitTypesKey}
    setLocationGovernorate={setLocationGovernorate}
    setLocationRegion={setLocationRegion}
    setCategoryTypeKey={setCategoryTypeKey}
    // setClickOnTap={setClickOnTap}
    // clickOnTap={clickOnTap}
    locationGovernorate={locationGovernorate}
    locationRegion={locationRegion}
  />
</div> */