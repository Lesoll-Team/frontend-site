import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AreaRange = () => {
  const { areaFrom, areaTo } = useSelector((state) => state.Category);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();

  const handleChangeAreaFrom = (e) => {
    dispatch(
      updateAllStates({
        areaFrom: e.target.value,
      })
    );
  };

  const handleChangeAreaTo = (e) => {
    dispatch(
      updateAllStates({
        areaTo: e.target.value,
      })
    );
  };
  return (
    <div className="bg-[#F8F8F8] gap-y-[10px] flex flex-col p-[1.5vw]">
      <div className="flex gap-x-2 text-gray2 lg-text font-bold">
        <span>{language ? "المساحة" : "Area"}</span>

        <span className="">{language ? "(متر مربع)" : "(Square meters)"}</span>
      </div>
      <div className="flex sm-text md:gap-x-[1vw]  gap-x-[1.5vw]">
        <input
          type="number"
          className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-[#CCCCCC] md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
          placeholder={language ? "اقل مساحة" : "min area"}
          onChange={handleChangeAreaFrom}
          value={areaFrom || ""}
        />

        <input
          type="number"
          className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-[#CCCCCC] md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
          placeholder={language ? "اكبر مساحة" : "max area"}
          onChange={handleChangeAreaTo}
          value={areaTo || ""}
        />
      </div>
    </div>
  );
};

export default AreaRange;
