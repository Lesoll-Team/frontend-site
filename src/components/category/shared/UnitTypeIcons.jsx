// import {
//   // handleClickChangeUnitType, 
//   updateAllStates
// } from "@/redux-store/features/category/categorySlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSendFilterSearch } from "./FilterHooks";
import { useRouter } from "next/router";

const UnitTypeIcons = ({ items }) => {
  const router = useRouter();

  const language = useSelector((state) => state.GlobalState.languageIs);
  const {
    categoryType,
    saleOption,
    unitTypes,
    locationGovernorate,
    locationRegion,
    priceFrom,
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

  const handleTapClicked = (item) => {
    if (!categoryType) {
      const route = useSendFilterSearch({
        filterInput: {
          saleOptions: saleOption,
          category: item.keyword,
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
      router.push(route);

    } else if (!unitTypes) {
      const route = useSendFilterSearch({
        filterInput: {
          saleOptions: saleOption,
          category: categoryType,
          unitType: item.keyword,
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
      router.push(route);
    } else if (!locationGovernorate) {
      const route = useSendFilterSearch({
        filterInput: {
          saleOptions: saleOption,
          category: categoryType,
          unitType: unitTypes,
          governorate: item.keyword,
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
      router.push(route);
    } else if (!locationRegion) {
      const route = useSendFilterSearch({
        filterInput: {
          saleOptions: saleOption,
          category: categoryType,
          unitType: unitTypes,
          governorate: locationGovernorate,
          region: item.keyword,
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
      router.push(route);
    }
  };
  const [seeMore, setSeeMore] = useState(8);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 1280 ? setSeeMore(6) : setSeeMore(8);
      window.innerWidth <= 970 && setSeeMore(4);
      window.innerWidth >= 1280 && setSeeMore(9);
    };

    handleResize(); // Call the function to set the initial value
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);
  return (
    <div className="flex overflow-x-auto   no-scrollbar gap-x-[2.4vw] ">
      {items
        ?.filter((_, i) => i < seeMore)
        .map((item) => (
          <button
            key={item.keyword}
            onClick={() => handleTapClicked(item)}
            className=" text-[12px] md:text-[16px] whitespace-nowrap hover:text-lightGreen flex gap-x-1 "
          >
            <span className="text-gray2"> {language ? item.ar : item.en}</span>
            <span className="text-lightGreen">({item.getDataNumber})</span>
          </button>
        ))}
    </div>
  );
};

export default UnitTypeIcons;
