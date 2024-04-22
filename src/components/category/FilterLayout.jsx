import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarFilter from "./SidebarFilter";
import BarFilter from "./BarFilter";

import PaginationPage from "@/Shared/Pagination/PaginationSearch";
import RealtyCard from "../realtyCard/RealtyCard";
import ResultNotFound from "./shared/ResultNotFound";
import SubBarTitle from "./barfilter-modules/SubBarTitle";
import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { useRouter } from "next/router";
// import UnitTypeIcons from "./shared/UnitTypeIcons";
import Breadcrumb from "./barfilter-modules/Breadcrumb";

const FilterLayout = ({ result, page, dataObjectFromURL, queries }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { openFilter } = useSelector((state) => state.Category);
  // const userInfo = useSelector((state) => state.userProfile.userData);
  const router = useRouter();
  useEffect(() => {
    dispatch(
      updateAllStates({
        pageNumber: dataObjectFromURL.page,
        categoryType: dataObjectFromURL.category,
        saleOption: dataObjectFromURL.saleOptions,
        unitTypes: dataObjectFromURL.unitType,
        locationGovernorate: dataObjectFromURL.governorate,
        locationRegion: dataObjectFromURL.region,
        priceFrom: dataObjectFromURL.priceFrom,
        priceTo: dataObjectFromURL.priceTo,
        numBathrooms: dataObjectFromURL.numBathrooms,
        numBedrooms: dataObjectFromURL.numBedrooms,
        areaFrom: dataObjectFromURL.areaFrom,
        areaTo: dataObjectFromURL.areaTo,
        finishedOption: dataObjectFromURL.finishedOption,
        paymentType: dataObjectFromURL.paymentType,
        sort: dataObjectFromURL.sort,
        propFinancing: dataObjectFromURL.mortgage,
        searchKeyword: dataObjectFromURL.keyword,
      }),
    );
  }, [router]);
  // useEffect(() => {
  //   // Add or remove the class 'sidebar-open' to the body element based on 'openFilter' state
  //   if (openFilter) {
  //     document.body.classList.add("sidebar-open");
  //   } else {
  //     document.body.classList.remove("sidebar-open");
  //   }
  // }, [openFilter]);
  return (
    <>
      {/*Sidebar filter */}
      {openFilter && (
        <div className={`fixed z-[700]  w-full top-0`}>
          <SidebarFilter languageIs={language} result={result} />
        </div>
      )}
      {/*bar filter */}
      <div
        className={` z-20 shadow-sm bg-white flex justify-center sticky  md:top-[57px] top-[62px] lg:top-[80px]`}
      >
        <BarFilter />
      </div>
      <div className="md:container py-[15px] md:mx-auto mx-[20px]">
        <Breadcrumb queries={queries} dataObjectFromURL={dataObjectFromURL} />
      </div>
      {/*unit types */}
      {/* {result?.aggregation_links.length > 0 && (
        <div className="md:container pb-[48px] pt-[28px] md:mx-auto mx-[20px] md:block hidden">
          <UnitTypeIcons items={result?.aggregation_links} main />
        </div>
      )} */}
      {/*title & save and filter button*/}
      <SubBarTitle result={result} />
      {/*cards result  */}
      <div
        className={` md:container mx-[20px] md:mx-auto md:flex flex-wrap  grid  gap-y-3 md:gap-y-16  lg:justify-between justify-center `}
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
