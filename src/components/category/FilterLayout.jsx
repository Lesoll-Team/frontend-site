import React, {
  memo,
  useEffect,
  useRef,
  useCallback,
  useState,
  useMemo,
} from "react";
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

import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { useRouter } from "next/router";

const FilterLayout = ({ result, page, dataObjectFromURL, queries }) => {
  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { openFilter, searchData } = useSelector((state) => state.Category);
  const router = useRouter();
  const paginationRef = useRef(null);
  const newData = result?.categoryResults;
  useEffect(() => {
    dispatch(
      updateAllStates({
        searchData: searchData
          ? newData
            ? [...searchData, ...newData]
            : [...searchData]
          : newData,
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

  const handleIntersection = useCallback(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        // Log to console when the pagination element is in view
        if (searchData) {
          setvisible(true);
        }
      }
    },
    [searchData],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 1.0, // Trigger when 100% of the target is visible
    });

    if (paginationRef.current) {
      observer.observe(paginationRef.current);
    }

    return () => {
      if (paginationRef.current) {
        observer.unobserve(paginationRef.current);
      }
    };
  }, [handleIntersection, searchData]);

  return (
    <>
      {openFilter && (
        <div className={`fixed z-[700]  w-full top-0`}>
          <SidebarFilter languageIs={language} result={result} />
        </div>
      )}
      <div
        className={` z-20 shadow-sm bg-white flex justify-center sticky  md:top-[57px] top-[62px] lg:top-[80px]`}
      >
        <BarFilter />
      </div>
      <div className="md:container py-[15px] md:mx-auto mx-[20px]">
        <Breadcrumb queries={queries} dataObjectFromURL={dataObjectFromURL} />
      </div>
      <SubBarTitle result={result} />
      <div
        className={`grid grid-cols-1 md:container md:mx-auto mx-[20px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10`}
      >
        {searchData?.map((property) => (
          <RealtyCard key={property._id} propertyDetails={property} />
        ))}
      </div>
      {result == null && !searchData && (
        <div className="w-full md:container md:mx-auto mx-[10px]">
          <ResultNotFound />
        </div>
      )}
      <div className="my-[4vh]" ref={paginationRef}>
        {searchData && result?.totalPages && page != result?.totalPages && (
          <PaginationPage
            setVisible={setvisible}
            visible={visible}
            totalPage={result.totalPages}
            currentPage={page}
          />
        )}{" "}
      </div>
      <div className="flex items-center justify-center py-2"> </div>
    </>
  );
};

export default memo(FilterLayout);
