import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import { finishingOptionsData } from "@/Shared/search/dropdown/dataDropdown";
import React from "react";
import { useSelector } from "react-redux";

const FinishingList = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { finishedOption } = useSelector((state) => state.Category);
  return (
    <div className="flex bg-[#F8F8F8] flex-col p-[1.5vw] w-full gap-y-[1.5vh]">
      <span className="font-bold lg-text text-gray2 ">
        {language ? "تشطيب" : "Finishing"}
      </span>
      <Dropdown
        stateName="finishedOption"
        defaultValue={language ? "تشطيب" : "Finishing"}
        data={finishingOptionsData}
        value={finishedOption}
        classNames={" w-full bg-white"}
        dataOptions="text"
      />
    </div>
  );
};

export default FinishingList;
