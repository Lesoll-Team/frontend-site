import React, { memo, useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
const Breadcrumb = dynamic(() => import("./barfilter-modules/Breadcrumb"));
const SidebarFilter = dynamic(() => import("./SidebarFilter"));
const BarFilter = dynamic(() => import("./BarFilter"));
const ResultNotFound = dynamic(() => import("./shared/ResultNotFound"));
const SubBarTitle = dynamic(() => import("./barfilter-modules/SubBarTitle"));
const PaginationPage = dynamic(
  () => import("../../Shared/Pagination/PaginationSearch"),
);
import RealtyCard from "../realtyCard/RealtyCard";

// const BarFilter = dynamic(() => import("./BarFilter"));
// import SidebarFilter from "./SidebarFilter";
// import BarFilter from "./BarFilter";
// import Breadcrumb from "./barfilter-modules/Breadcrumb";
// import PaginationPage from "@/Shared/Pagination/PaginationSearch";
// import ResultNotFound from "./shared/ResultNotFound";
// import SubBarTitle from "./barfilter-modules/SubBarTitle";

import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { useRouter } from "next/router";

const FilterLayout = ({ result, page, dataObjectFromURL, queries }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { openFilter } = useSelector((state) => state.Category);
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
      {/*title & save and filter button*/}
      <SubBarTitle result={result} />
      {/*cards result  */}
      <div
        className={`  grid grid-cols-1 md:container md:mx-auto  mx-[20px]  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10 `}
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
