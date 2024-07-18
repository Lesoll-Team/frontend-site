import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";

const SearchByAgents = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className=" z-10  flex flex-col  justify-around -space-y-28 items-center w-full h-full">
      {/**
       * search of best agents , but not launch  now because total users
       */}
      <div className="bg-gray-100 w-11/12 md:w-8/12 rounded-md flex flex-col md:flex-row p-5 gap-4 md:gap-8">
        <div className="flex h-full items-center bg-white w-full rounded-md gap-3 px-2 border-2 hover:border-gray-400">
          <BiSearch className="text-gray-400 text-2xl" />
          <input
            type="text"
            placeholder="ادخل اسم الشركة"
            className="w-full h-full outline-none"
          />
        </div>
        <Dropdown
          defaultValue={language ? "نوع الخدمة " : " service type "}
          // data={finishingOptionsData}
          // value={finishedOption}
          classNames="bg-white  w-full   h-full"
          dataOptions="text"
        />
        <button className="bg-lightGreen w-full md:w-[75px] min-w-[75px] text-white font-bold text-xl md:text-2xl h-[55px] py-1 flex justify-center items-center rounded-md">
          <BiSearch className="hidden md:block" />
          <span className="md:hidden block">
            {language ? "بحــــث" : "Search"}
          </span>
        </button>
      </div>
    </div>
  );
};
export default SearchByAgents;
