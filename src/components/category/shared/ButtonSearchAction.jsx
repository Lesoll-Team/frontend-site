import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSendFilterSearch } from "./FilterHooks";
import { useRouter } from "next/router";
import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { useTranslation } from "next-i18next";

const ButtonSearchAction = ({ isBar }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
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
      saleOptions: saleOption,
      category: categoryType,
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

  const handleClick = () => {
    handleFilterAction();
    dispatch(
      updateAllStates({
        openFilter: false,
      }),
    );
  };

  if (isBar) {
    return (
      <button
        onClick={handleClick}
        className="w-[100px] md:w-[9.97vw] md:min-w-[165px]  rounded-l-[6px] hidden md:block md:rounded-[6px] font-bold

        lg-text text-white bg-lightGreen "
      >
        {t("Search")}
      </button>
    );
  } else {
    return (
      <div className="md:w-[37.7vw] w-full bottom-0 left-0 p-2 pb-3 justify-center flex bg-white fixed ">
        <button
          onClick={handleClick}
          className="bg-lightGreen rounded-[6px] md:w-[24.2vw] lg-text mx-[10px] w-full h-[40px] md:h-[3.813rem] text-white font-bold"
        >
          {t("Show_Results")}
        </button>
      </div>
    );
  }
};

export default memo(ButtonSearchAction);
