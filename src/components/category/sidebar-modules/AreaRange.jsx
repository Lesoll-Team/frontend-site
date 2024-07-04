import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const AreaRange = () => {
  const { areaFrom, areaTo } = useSelector((state) => state.Category);
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  const handleChangeAreaFrom = (e) => {
    dispatch(
      updateAllStates({
        areaFrom: e.target.value,
      }),
    );
  };

  const handleChangeAreaTo = (e) => {
    dispatch(
      updateAllStates({
        areaTo: e.target.value,
      }),
    );
  };
  return (
    <div className="bg-[#F8F8F8] gap-y-[10px] flex flex-col p-[1.5vw]">
      <div className="flex gap-x-2 text-gray2 lg-text font-bold">
        <span>{t("Area")}</span>

        <span className="">{t("Square_Meters")}</span>
      </div>
      <div className="flex sm-text md:gap-x-[1vw]  gap-x-[1.5vw]">
        <input
          type="number"
          className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-[#CCCCCC] md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
          placeholder={t("Min_Area")}
          onChange={handleChangeAreaFrom}
          value={areaFrom || ""}
        />

        <input
          type="number"
          className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-[#CCCCCC] md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
          placeholder={t("Max_Area")}
          onChange={handleChangeAreaTo}
          value={areaTo || ""}
        />
      </div>
    </div>
  );
};

export default memo(AreaRange);
