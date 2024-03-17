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
  } = useSelector((state) => state.Category);
  const route = useSendFilterSearch({
    filterInput: {
      category: categoryType,
      saleOptions: saleOption,
      unitType: unitTypes,
      governorate: locationGovernorate,
      region: locationRegion,
    },
    queryInput: {
      priceFrom,
      page: 1,
      priceTo,
      numBathrooms,
      numBedrooms,
      areaFrom,
      areaTo,
      finishedOption: finishedOption,
      paymentType,
      sort: sort,
      mortgage: propFinancing,
      keyword: searchKeyword,
    },
  });
  const handleFilterAction = useCallback(() => {
    router.push(route);
  }, [router, route, pageNumber]);

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
        className="w-[100px] md:w-[9.97vw] md:min-w-[165px] h-[1.875rem] md:h-[3.313rem] rounded-l-[6px]  md:rounded-[6px] font-bold 
        
        lg-text text-white bg-lightGreen "
      >
        {language ? "بحث" : "Search"}
      </button>
    );
  } else {
    return (
      <div className="mb-5 flex justify-center">
        <button
          onClick={handleClick}
          className="md:w-[24.2vw] lg-text w-full rounded-[6px] h-[40px] md:h-[3.813rem] bg-lightGreen text-white"
        >
          {language ? "عرض النتائج" : "Show results"}
        </button>
      </div>
    );
  }
};

export default memo(ButtonSearchAction);
