import React, { useState } from "react";
import { useSelector } from "react-redux";

const PriceFilter = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [timeFilter, setTimeFilter] = useState("yearly");
  return (
    <div className="w-full flex justify-center my-[7vh]">
      <div className="flex">
        <div
          className={`${timeFilter == "yearly" ? "text-lightGreen" : "text-[#CCCCCC]"} items-center flex-col flex gap-y-[2.2vh] `}
        >
          <button
            onClick={() => setTimeFilter("yearly")}
            className="px-[1vw] lg-text"
          >
            {language ? "سنوية" : "Yearly"}
          </button>
          <div
            className={`w-full h-[1px] ${timeFilter == "yearly" ? "bg-lightGreen" : "bg-[#CCCCCC]"} `}
          />
        </div>
        <div
          className={`${timeFilter == "monthly" ? "text-lightGreen" : "text-[#CCCCCC]"} items-center flex-col flex gap-y-[2.2vh] `}
        >
          <button
            onClick={() => setTimeFilter("monthly")}
            className="px-[1vw] lg-text"
          >
            {language ? "شهرية" : "Monthly"}
          </button>
          <div
            className={`w-full h-[1px] ${timeFilter == "monthly" ? "bg-lightGreen" : "bg-[#CCCCCC]"} `}
          />
        </div>
        <div
          className={`${timeFilter == "daily" ? "text-lightGreen" : "text-[#CCCCCC]"} items-center flex-col flex gap-y-[2.2vh] `}
        >
          <button
            onClick={() => setTimeFilter("daily")}
            className="px-[1vw] lg-text"
          >
            {language ? "يومية" : "Daily"}
          </button>
          <div
            className={`w-full h-[1px] ${timeFilter == "daily" ? "bg-lightGreen" : "bg-[#CCCCCC]"} `}
          />
        </div>
        <div
          className={`${timeFilter == "by-lesoll" ? "text-lightGreen" : "text-[#CCCCCC]"} items-center flex-col flex gap-y-[2.2vh] `}
        >
          <button
            onClick={() => setTimeFilter("by-lesoll")}
            className="px-[1vw] lg-text"
          >
            {language ? "تحت إدارة ليسول" : "Managed by Lesoll"}
          </button>
          <div
            className={`w-full h-[1px] ${timeFilter == "by-lesoll" ? "bg-lightGreen" : "bg-[#CCCCCC]"} `}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
