import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import { finishingOptionsData } from "@/Shared/search/dropdown/dataDropdown";
import React from "react";
import { useSelector } from "react-redux";
import { useGetNameWithValue } from "../FilterHooks";

const FinishingList = ({
  finishedOption,
  setFinishedOptionKey,
  finishedOptionKey,
  setFinishedOption,
  filterData,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const getNameWithValue = useGetNameWithValue(finishedOptionKey);
  return (
    <div className="flex bg-[#F8F8F8] gap-y-[10px] pt-[10px] pb-[10px]  ">
      <div className="flex flex-col w-full gap-x-2">
        <span className="font-bold text-gray2 ">
          {language ? "تشطيب" : "Finishing"}
        </span>
        <Dropdown
          stateName="finishedOption"
          defaultValue={language ? "تشطيب" : "Finishing"}
          data={finishingOptionsData}
          value={
            finishedOption ||
            getNameWithValue({
              language: language,
              type: filterData.searchKeywords.finishedOption,
              dataObject: finishingOptionsData,
            })
          }
          setValue={setFinishedOption}
          setValueKey={setFinishedOptionKey}
          classNames={" w-full bg-white"}
          dataOptions="text"
        />
      </div>
    </div>
  );
};

export default FinishingList;
