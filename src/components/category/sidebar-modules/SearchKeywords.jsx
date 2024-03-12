import React from "react";
import { TbSearch } from "react-icons/tb";
import { updateAllStates } from "../../../redux-store/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
const SearchKeywords = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();

  const handleStateChange = (e) => {
    dispatch(
      updateAllStates({
        searchKeyword: e.target.value,
      })
    );
  };
  return (
    <div className=" w-full p-[1.5vw] flex flex-col gap-y-[1.5vh] bg-[#F8F8F8]">
      <label className="lg-text font-bold text-gray2" htmlFor="keywords">
        {language ? "بحث بالكلمات المميزة" : "Search by keywords"}
      </label>
      <div className="flex h-[34] md:h-[3.313rem] w-full p-1 border-[#CCCCCC] border-1 items-center rounded-[6px] bg-white">
        <input
          name="keywords"
          className="w-full h-full sm-text placeholder:sm-text focus:outline-none indent-3"
          type="text"
          placeholder={language ? "كلمات مميزة " : "spacial keywords"}
          onChange={handleStateChange}
        />
        <TbSearch className="mx-1 " />
      </div>
    </div>
  );
};

export default SearchKeywords;
