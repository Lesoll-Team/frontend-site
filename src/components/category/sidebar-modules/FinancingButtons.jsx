import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { useTranslation } from "next-i18next";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FinancingButtons = () => {
  const { t } = useTranslation("common");
  const propFinancing = useSelector((state) => state.Category.propFinancing);
  const dispatch = useDispatch();
  const [cbe8ClickCount, setCbe8ClickCount] = useState(0);
  const [cbe3ClickCount, setCbe3ClickCount] = useState(0);
  const handleFinancingClick = (name) => {
    switch (name) {
      case "cbe3":
        setCbe3ClickCount((prevCount) => prevCount + 1);
        if (cbe3ClickCount % 2 === 0) {
          dispatch(updateAllStates({ propFinancing: "cbe3" }));
        } else {
          dispatch(updateAllStates({ propFinancing: null }));
        }

        break;

      case "cbe8":
        setCbe8ClickCount((prevCount) => prevCount + 1);
        if (cbe8ClickCount % 2 === 0) {
          dispatch(updateAllStates({ propFinancing: "cbe8" }));
        } else {
          dispatch(updateAllStates({ propFinancing: null }));
        }
        break;

      default:
        break;
    }
  };
  return (
    <div className="flex flex-col bg-[#F8F8F8] p-[1.5vw] gap-y-[1.5vh]">
      <span className="font-bold lg-text text-gray2">
        {t("Property_Financing")}
      </span>
      <div className="flex sm-text md:gap-x-[1vw]  gap-x-[1.5vw]">
        <button
          onClick={() => handleFinancingClick("cbe3")}
          className={` text-gray2 border-1 border-[#CCCCCC] bg-white md:px-3 md:p-2 h-[40px] px-3  md:h-[3.313rem]  rounded-[6px]
              ${
                propFinancing == "cbe3" && " border-lightGreen  text-lightGreen"
              }
              `}
        >
          {t("CBE_3")}
        </button>
        <button
          onClick={() => handleFinancingClick("cbe8")}
          className={`${propFinancing == "cbe8" && " border-lightGreen text-lightGreen"} text-gray2 border-1 border-[#CCCCCC]  md:px-3 md:p-2 bg-white  px-3 h-[40px]  md:h-[3.313rem]  rounded-[6px]`}
        >
          {t("CBE_8")}
        </button>
      </div>
    </div>
  );
};

export default memo(FinancingButtons);
