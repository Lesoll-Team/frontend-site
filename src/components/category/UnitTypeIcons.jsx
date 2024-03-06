import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UnitTypeIcons = ({ items }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const {
    categoryType,
    unitTypes,
    locationGovernorate,
    locationRegion,
    clickOnUnits,
  } = useSelector((state) => state.Category);
  const handleTapClicked = (item) => {
    if (!categoryType?.value) {
      // setClickOnTap(!clickOnTap);
      dispatch(
        updateAllStates({
          categoryType: {
            value: item.keyword,
            name: language ? item.ar : item.en,
          },
          clickOnUnits: !clickOnUnits,
        })
      );
    } else if (!unitTypes?.value) {
      dispatch(
        updateAllStates({
          unitTypes: {
            value: item.keyword,
            name: language ? item.ar : item.en,
          },
          clickOnUnits: !clickOnUnits,
        })
      );
    } else if (!locationGovernorate) {
      // setClickOnTap(!clickOnTap);
      dispatch(
        updateAllStates({
          locationGovernorate: item.keyword,
          clickOnUnits: !clickOnUnits,
        })
      );
      // setLocationGovernorate(Key);
    } else if (!locationRegion) {
      // setClickOnTap(!clickOnTap);
      dispatch(
        updateAllStates({
          locationRegion: item.keyword,
          clickOnUnits: !clickOnUnits,
        })
      );
      // setLocationRegion(Key);
    }
    console.log(item);
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
