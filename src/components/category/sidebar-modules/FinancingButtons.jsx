import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FinancingButtons = ({ setPropFinancing }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const propFinancing = useSelector((state) => state.Category.propFinancing);
  const dispatch = useDispatch();
  const [cbe8ClickCount, setCbe8ClickCount] = useState(0);
  const [cbe3ClickCount, setCbe3ClickCount] = useState(0);
  const handleFinancingClick = (name) => {
    switch (name) {
      case "cbe3":
        setPropFinancing("cbe3");
        setCbe3ClickCount((prevCount) => prevCount + 1);
        if (cbe3ClickCount % 2 === 0) {
          dispatch(updateAllStates({ propFinancing: "cbe3" }));
        } else {
          dispatch(updateAllStates({ propFinancing: null }));
        }

        break;

      case "cbe8":
        setPropFinancing("cbe8");
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
    <div className="flex flex-col bg-[#F8F8F8] mb-5 gap-y-[10px]">
      <span className="font-bold text-gray2">
        {language ? "تمويل العقاري" : "Property Financing"}
      </span>
      <div className="flex gap-x-2">
        <button
          onClick={() => handleFinancingClick("cbe3")}
          className={` text-gray2 border-1 border-gray1 bg-white md:px-3 md:p-2 h-[40px] px-3  md:h-[3.313rem]  rounded-[1vh]
              ${
                propFinancing == "cbe3" && " border-lightGreen  text-lightGreen"
              }
              `}
        >
          {language ? "تمويل العقاري 3%" : "CBE 3% initiative"}
        </button>
        <button
          onClick={() => handleFinancingClick("cbe8")}
          className={`
              ${
                propFinancing == "cbe8" && " border-lightGreen  text-lightGreen"
              }
              
              text-gray2 border-1 border-gray1  md:px-3 md:p-2 bg-white  px-3 h-[40px]  md:h-[3.313rem]  rounded-[1vh]`}
        >
          {language ? "تمويل العقاري 8%" : "CBE 8% initiative"}
        </button>
      </div>
    </div>
  );
};

export default FinancingButtons;
