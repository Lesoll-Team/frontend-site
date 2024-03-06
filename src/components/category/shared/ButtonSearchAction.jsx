// import { sendFilterToRootsPage } from "@/redux-store/features/category/categorySlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSendFilterSearch } from "../FilterHooks";
import { useRouter } from "next/router";

const ButtonSearchAction = ({ isBar }) => {
  const router = useRouter();
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

  const handleFilterAction = () => {
    router.push(route);
  };
  useEffect(() => {
    handleFilterAction();
  }, [sort, pageNumber, clickOnUnits]);

  if (isBar) {
    return (
      <button
        onClick={handleFilterAction}
        className="w-[100px] md:w-[9.97vw] md:min-w-[165px] h-[1.875rem] md:h-[3.313rem] rounded-[1vh] font-bold text-[12px] md:text-[20px] text-white bg-lightGreen"
      >
        {language ? "بحث" : "Search"}
      </button>
    );
  } else {
    return (
      <div className="mb-5 flex justify-center">
        <button
          onClick={handleFilterAction}
          className="md:w-[24.2vw] w-full rounded-[1vh] h-[40px] md:h-[3.813rem] bg-lightGreen text-white"
        >
          {language ? "عرض النتائج" : "Show results"}
        </button>
      </div>
    );
  }
};

export default ButtonSearchAction;
