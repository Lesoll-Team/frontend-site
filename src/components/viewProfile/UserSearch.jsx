import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import {
  propertyType,
  saleOptionsType,
  sortedData,
} from "@/Shared/search/dropdown/dataDropdown";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useUnitTypesData } from "../category/shared/FilterHooks";
import { GoGitPullRequestDraft } from "react-icons/go";
import { SearchDropdownLocation } from "@/Shared/search/SearchDropdownLocation";

const UserSearch = ({
  categoryType,
  setCategoryType,

  setCity,
  setRegion,
  offer,
  setOffer,
  unitType,
  setUnitType,
  sorting,
  setSorting,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const unitTypesData = useUnitTypesData(categoryType);

  return (
    <div className="grid md:grid-cols-7 grid-cols-3 gap-2 p-1 z-[100] w-full ">
      <div className="md:col-span-3  col-span-2 flex hover:border-gray-600 border-2 rounded-md px-2 items-center">
        <IoSearch className="text-2xl text-gray-400" />
        <SearchDropdownLocation
          isHome
          isBlog
          setCity={setCity}
          setRegion={setRegion}
        />
      </div>
      <div className="bg-blue-300">
        <Dropdown
          value={offer}
          defaultValue={language ? "العرض" : "offer"}
          data={saleOptionsType}
          classNames={"bg-white h-full  md:text-xl text-lg"}
          setStates={setOffer}
        />
      </div>
      <div className=" bg-yellow-300">
        <Dropdown
          value={categoryType}
          data={propertyType}
          defaultValue={language ? "الفئة" : "Category"}
          setStates={setCategoryType}
          classNames={"bg-white h-full  md:text-xl text-lg"}
        />
      </div>
      <div className=" bg-green-300">
        <Dropdown
          value={unitType}
          setStates={setUnitType}
          defaultValue={language ? "النوع" : "type"}
          data={unitTypesData()}
          classNames={"bg-white h-full  md:text-xl text-lg"}
        />
      </div>
      <div className=" bg-gray-300">
        <Dropdown
          value={sorting}
          setStates={setSorting}
          data={sortedData}
          defaultValue={language ? "ترتيب" : "sort"}
          classNames={"bg-white h-full  md:text-xl text-lg"}
          baseIcon={<GoGitPullRequestDraft className={`text-black  `} />}
        />
      </div>
    </div>
  );
};
export default UserSearch;