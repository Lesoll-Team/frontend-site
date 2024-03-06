import React from "react";
import { TbSearch } from "react-icons/tb";
import { updateAllStates } from "../../../redux-store/features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
const SearchKeywords = () =>
  // { searchKeyword, setSearchKeyword }
  {
    const language = useSelector((state) => state.GlobalState.languageIs);
    const dispatch = useDispatch();

    const handleStateChange = (e) => {
      // setSearchKeyword(e.target.value);
      dispatch(
        updateAllStates({
          searchKeyword: e.target.value,
        })
      );
    };
    return (
      <div className=" w-full py-[10px] flex flex-col gap-y-[10px] bg-[#F8F8F8]">
        <label className="font-bold text-gray2" htmlFor="keywords">
          {language ? "بحث بالكلمات المميزة" : "Search by keywords"}
        </label>
        <div className="flex h-[34] md:h-[3.313rem] w-full p-1 border-gray1 border-1 items-center rounded-[1vw] bg-white">
          <input
            name="keywords"
            className="w-full h-full focus:outline-none "
            type="text"
            placeholder={language ? "كلمات مميزة " : "spacial keywords"}
            // value={searchKeyword}
            // value={searchKeyword || filterData.searchKeywords.keyword}
            onChange={handleStateChange}
          />
          <TbSearch className="mx-1 " />
        </div>
      </div>
    );
  };

export default SearchKeywords;
