import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import {
  propertyType,
  saleOptionsType,
  sortedData,
} from "@/Shared/search/dropdown/dataDropdown";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useUnitTypesData } from "../category/shared/FilterHooks";
import { RiEqualizer2Fill } from "react-icons/ri";

const UserSearch = ({
  categoryType,
  setCategoryType,

  offer,
  setOffer,
  unitType,
  setUnitType,
  keywords,
  setKeywords,
  sorting,
  setSorting,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const unitTypesData = useUnitTypesData(categoryType);

  return (
    <div className="grid md:grid-cols-7 grid-cols-3 gap-2 p-1 z-[100] w-full ">
      <div className="md:col-span-3  col-span-2 flex hover:border-gray-600 border-2 rounded-md px-2 items-center">
        <IoSearch className="text-2xl text-gray-400" />

        <input
          type="text"
          placeholder={language ? "ابحث عن عقار" : "Search for properties"}
          className="w-full p-2  outline-none md:text-xl text-lg"
        />
      </div>
      <div className="bg-blue-300">
        <Dropdown
          value={offer}
          // stateName={"saleOption"}
          defaultValue={language ? "العرض" : "offer"}
          data={saleOptionsType}
          classNames={"bg-white h-full  md:text-xl text-lg"}
          setStates={setOffer}

          // value={saleOption}
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
          baseIcon={<RiEqualizer2Fill />}
        />
      </div>
    </div>
  );
};
export default UserSearch;

/**
 *         {properties?.getConfirmedRealty &&
          properties.getConfirmedRealty.length > 0 && (
            <div ref={menuRef} className="relative">
              <button
                onClick={toggleFilterMeu}
                className=" flex items-center gap-1 relative border-2 rounded border-outLine py-1 px-4 md:py-2 md:px-8"
              >
                {filterName} <MdKeyboardArrowDown />
              </button>
              {ShowFilterMenu && (
                <ul className="absolute w-full space-y-1 p-2 text-center bg-white drop-shadow z-10 rounded border">
                  <li>
                    <Link
                      onClick={() => setShowFilterMenu(false)}
                      href={`/view-profile/${user.getUser.username}?page=1&type=000`}
                      className="text-center"
                    >
                      {language ? "الكل" : "All"}
                    </Link>
                  </li>
                  {user.RealtySaleNumber > 0 && (
                    <>
                      <hr />
                      <li>
                        <Link
                          onClick={() => setShowFilterMenu(false)}
                          href={`/view-profile/${user.getUser.username}?page=1&type=111`}
                          className="text-center"
                        >
                          {language ? "للبيع" : "For Sale"}
                        </Link>
                      </li>
                    </>
                  )}
                  {user.RealtyRentNumber > 0 && (
                    <>
                      <hr />
                      <li>
                        <Link
                          onClick={() => setShowFilterMenu(false)}
                          href={`/view-profile/${user.getUser.username}?page=1&type=222`}
                          className="text-center"
                        >
                          {language ? "للإيحار" : "For Rent"}
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </div>
          )}
 */
