import React, { useState } from "react";
import { useSelector } from "react-redux";

const PriceFilter = ({ type, setType, typeExist }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full flex justify-center my-[7vh]">
      <div className="flex">
        <div
          className={`${type == "" ? "text-lightGreen" : "text-[#CCCCCC]"} items-center flex-col flex gap-y-[2.2vh] `}
        >
          <button onClick={() => setType("")} className="px-[1vw] lg-text">
            {language ? "الكل" : "All"}
          </button>
          <div
            className={`w-full h-[1px] ${type == "" ? "bg-lightGreen" : "bg-[#CCCCCC]"} `}
          />
        </div>
        {!!typeExist?.yearly && (
          <div
            className={`${type == "Yearly" ? "text-lightGreen" : "text-[#CCCCCC]"} items-center flex-col flex gap-y-[2.2vh] `}
          >
            <button
              onClick={() => setType("Yearly")}
              className="px-[1vw] lg-text"
            >
              {language ? "سنوية" : "Yearly"}
            </button>
            <div
              className={`w-full h-[1px] ${type == "Yearly" ? "bg-lightGreen" : "bg-[#CCCCCC]"} `}
            />
          </div>
        )}
        {!!typeExist?.monthly && (
          <div
            className={`${type == "Monthly" ? "text-lightGreen" : "text-[#CCCCCC]"} items-center flex-col flex gap-y-[2.2vh] `}
          >
            <button
              onClick={() => setType("Monthly")}
              className="px-[1vw] lg-text"
            >
              {language ? "شهرية" : "Monthly"}
            </button>
            <div
              className={`w-full h-[1px] ${type == "Monthly" ? "bg-lightGreen" : "bg-[#CCCCCC]"} `}
            />
          </div>
        )}
        {!!typeExist?.weakly && (
          <div
            className={`${type == "Weakly" ? "text-lightGreen" : "text-[#CCCCCC]"} items-center flex-col flex gap-y-[2.2vh] `}
          >
            <button
              onClick={() => setType("Weakly")}
              className="px-[1vw] lg-text"
            >
              {language ? "أسبوعية" : "Weakly"}
            </button>
            <div
              className={`w-full h-[1px] ${type == "Weakly" ? "bg-lightGreen" : "bg-[#CCCCCC]"} `}
            />
          </div>
        )}

        {!!typeExist?.daily && (
          <div
            className={`${type == "Daily" ? "text-lightGreen" : "text-[#CCCCCC]"} items-center flex-col flex gap-y-[2.2vh] `}
          >
            <button
              onClick={() => setType("Daily")}
              className="px-[1vw] lg-text"
            >
              {language ? "يومية" : "Daily"}
            </button>
            <div
              className={`w-full h-[1px] ${type == "Daily" ? "bg-lightGreen" : "bg-[#CCCCCC]"} `}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceFilter;
