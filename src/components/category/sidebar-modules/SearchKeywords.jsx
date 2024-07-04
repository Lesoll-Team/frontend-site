import React, { memo } from "react";
import { TbSearch } from "react-icons/tb";
import { updateAllStates } from "../../../redux-store/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
const SearchKeywords = () => {
  const { t } = useTranslation("common");
  const { searchKeyword } = useSelector((state) => state.Category);
  const dispatch = useDispatch();

  const handleStateChange = (e) => {
    dispatch(
      updateAllStates({
        searchKeyword: e.target.value,
      }),
    );
  };
  return (
    <div className=" w-full p-[1.5vw] flex flex-col gap-y-[1.5vh] bg-[#F8F8F8]">
      <label className="lg-text font-bold text-gray2" htmlFor="keywords">
        {t("Search_By_Keywords")}
      </label>
      <div className="flex h-[34] md:h-[3.313rem] w-full p-1 border-[#CCCCCC] border-1 items-center rounded-[6px] bg-white">
        <input
          name="keywords"
          className="w-full h-full sm-text placeholder:sm-text focus:outline-none indent-3"
          type="text"
          placeholder={t("Spacial_keywords")}
          value={searchKeyword || ""}
          onChange={handleStateChange}
        />
        <TbSearch className="mx-1 " />
      </div>
    </div>
  );
};

export default memo(SearchKeywords);
