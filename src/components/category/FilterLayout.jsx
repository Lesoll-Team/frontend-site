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
import UnitTypeIcons from "./shared/UnitTypeIcons";

const FilterLayout = ({ result, page, dataObjectFromURL }) => {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { openFilter } = useSelector((state) => state.Category);
  const userInfo = useSelector((state) => state.userProfile.userData);
  const router = useRouter()
  useEffect(() => {
    dispatch(updateAllStates({
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
    }))
  }, [router])
  console.log(result);
  return (
    <>
      {/*Sidebar filter */}
      {openFilter && (
        <div className="fixed z-[700] w-full top-0">
          <SidebarFilter languageIs={language} result={result} />
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
      {result?.aggregation_links.length > 0 &&
        <div className="md:container py-[48px] md:mx-auto mx-[20px] md:block hidden">
          <UnitTypeIcons
            items={result?.aggregation_links}
            main
          />
        </div>
      }
      {/*title & save and filter button*/}
      <SubBarTitle result={result} />
      {/*cards result  */}
      <div
        className="md:container mx-[20px] md:mx-auto md:flex flex-wrap  grid  gap-y-3 md:gap-y-16  lg:justify-between justify-center"
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