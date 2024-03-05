import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AreaRange = ({ setAreaFrom, setAreaTo, areaFrom, areaTo }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();

  const handleChangeAreaFrom = (e) => {
    // setSearchKeyword(e.target.value);
    setAreaFrom(e.target.value);
    dispatch(
      updateAllStates({
        areaFrom: e.target.value,
      })
    );
  };

  const handleChangeAreaTo = (e) => {
    // setSearchKeyword(e.target.value);
    setAreaTo(e.target.value);
    dispatch(
      updateAllStates({
        areaTo: e.target.value,
      })
    );
  };
  return (
    <div className="bg-[#F8F8F8] gap-y-[10px] flex flex-col pt-[10px] pb-[10px]">
      <div className="flex gap-x-2 text-gray2 font-bold">
        <span>{language ? "المساحة" : "area"}</span>

        <span className="">{language ? "(متر مربع)" : "(Square meters)"}</span>
      </div>
      <div className="flex justify-between gap-x-[1.5vw]">
        <input
          type="number"
          className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
          placeholder={language ? "اقل مساحة" : "min area"}
          onChange={handleChangeAreaFrom}
          value={areaFrom || ""}
        />

        <input
          type="number"
          className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
          placeholder={language ? "اكبر مساحة" : "max area"}
          onChange={handleChangeAreaTo}
          value={areaTo || ""}
        />
      </div>
    </div>
  );
};

export default AreaRange;
