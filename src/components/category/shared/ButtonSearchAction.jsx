// import { sendFilterToRootsPage } from "@/redux-store/features/category/categorySlice";
import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSendFilterSearch } from "./FilterHooks";
import { useRouter } from "next/router";
import { updateAllStates } from "@/redux-store/features/category/categorySlice";

const ButtonSearchAction = ({ isBar }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const {
    categoryType,
    saleOption,
    unitTypes,
    locationGovernorate,
    locationRegion,
    priceFrom,
    pageNumber,
    priceTo,
    numBathrooms,
    numBedrooms,
    areaFrom,
    areaTo,
    finishedOption,
    paymentType,
    sort,
    propFinancing,
    searchKeyword,
    // openFilter,
    // clickOnUnits,
    // sending,
    // filterResult,
    // errorResult,
    clickOnUnits,
  } = useSelector((state) => state.Category);
  const route = useSendFilterSearch({
    filterInput: {
      category: categoryType?.value,
      saleOptions: saleOption?.value,
      unitType: unitTypes?.value,
      governorate: locationGovernorate,
      region: locationRegion,
    },
    queryInput: {
      priceFrom,
      page: pageNumber,
      priceTo,
      numBathrooms,
      numBedrooms,
      areaFrom,
      areaTo,
      finishedOption: finishedOption?.value,
      paymentType,
      sort: sort?.value,
      mortgage: propFinancing,
      keyword: searchKeyword,
    },
  });
  const handleFilterAction = useCallback(() => {
    router.push(route);
  }, [router, route, clickOnUnits, pageNumber]);

  // Subscribe to changes in sort, pageNumber, and clickOnUnits

  const handleClick = () => {
    handleFilterAction();
    dispatch(
      updateAllStates({
        openFilter: false,
      })
    );
  };

  if (isBar) {
    return (
      <button
        onClick={handleClick}
        className="w-[100px] md:w-[9.97vw] md:min-w-[165px] h-[1.875rem] md:h-[3.313rem] rounded-l-[6px]  md:rounded-[6px] font-bold text-[12px] md:text-[20px] text-white bg-lightGreen "
      >
        {language ? "بحث" : "Search"}
      </button>
    );
  } else {
    return (
      <div className="mb-5 flex justify-center">
        <button
          onClick={handleClick}
          className="md:w-[24.2vw] w-full rounded-[6px] h-[40px] md:h-[3.813rem] bg-lightGreen text-white"
        >
          {language ? "عرض النتائج" : "Show results"}
        </button>
      </div>
    );
  }
};

export default memo(ButtonSearchAction);
