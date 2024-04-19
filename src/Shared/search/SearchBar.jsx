import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import {
  propertyTypeData,
  unitTypeData,
  sortedData,
} from "./dropdown/dataDropdown";
import { LuSearch } from "react-icons/lu";
import Dropdown from "./dropdown/Dropdown";
import DropdownMore from "./dropdown/DropdownMore";
import DropdownUintType from "./dropdown/DropdownUintType";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FaSortNumericDown } from "react-icons/fa";
import DropdownSort from "./dropdown/DropdownSort";
import { MdClear } from "react-icons/md";
import { setCurrentPage } from "@/redux-store/features/searchingSlice";
import { SearchDropdown } from "./SearchDropdown";

export function SearchBar({
  pageSaleOption,
  reversedFilteredKeywords,
}) {
  const router = useRouter();
  let [sortPropChanged, setSortPropChanged] = useState(false);
  const dispatch = useDispatch();

  let languageIs = useSelector((state) => state.GlobalState.languageIs);
  let [saleOptions, setSaleOptions] = useState(
    reversedFilteredKeywords?.offer || "all"
  );
  const propLengthResult = useSelector(
    (state) => state.Searching.propLengthResult
  );

  let [fromPrice, setFromPrice] = useState(
    reversedFilteredKeywords?.minPrice || 0.0
  );
  let [toPrice, setToPrice] = useState(
    reversedFilteredKeywords?.maxPrice || 0.0
  );

  let [fromArea, setFromArea] = useState(
    reversedFilteredKeywords?.minArea || 0
  );
  let [toArea, setToArea] = useState(reversedFilteredKeywords?.maxArea || 0);
  let [selectoption, setSelectedOption] = useState("");
  let [countBedrooms, setCountBedrooms] = useState(
    reversedFilteredKeywords?.rooms || 0
  );
  let [countBathrooms, setCountBathroom] = useState(
    reversedFilteredKeywords?.bathRooms || 0
  );
  let [propertyFinance, setPropertyFinance] = useState(
    reversedFilteredKeywords?.MortgagePrice || ""
  );
  let [paymentMethod, setPaymentMethod] = useState(
    reversedFilteredKeywords?.saleOption || ""
  );
  let [keywords, setKeywords] = useState(
    reversedFilteredKeywords?.keywords
      ? reversedFilteredKeywords?.keywords.trim().split("_").join(" ")
      : ""
  );
  let [finishingOptions, setFinishingOptions] = useState(
    reversedFilteredKeywords?.finishingType || ""
  );
  let [unitType, setUnitType] = useState(
    reversedFilteredKeywords?.unitType || ""
  );
  let [propertyType, setPropertyType] = useState(
    reversedFilteredKeywords?.propType || ""
  );
  let [sortProp, setSortProp] = useState(
    reversedFilteredKeywords?.sort_by || ""
  );
      const [isTyping, setTyping] = useState(false);

  // let [locationKeyword, setLocationKeyword] =
  // useState(reversedFilteredKeywords?.cdb
  //     ? reversedFilteredKeywords?.cdb.trim().split("_").join(" ")
  //     : "");

  const [locationName, setLocationName] = useState("");
  const [locationValue, setLocationValue] = useState("");

  const InputKeywords = {
    offer: saleOptions,
    propType: propertyType,
    unitType: unitType,
    saleOption: paymentMethod,
    bathRooms: countBathrooms,
    rooms: countBedrooms,
    maxPrice: toPrice,
    minPrice: fromPrice,
    keywords: keywords.trim().split(" ").join("_"),
    finishingType: finishingOptions,
    minArea: fromArea,
    maxArea: toArea,
    MortgagePrice: propertyFinance,
    sort_by: sortProp,
    cdb: locationValue || locationName.trim().split(" ").join("_"),
    // isFurnished,
  };

  const handleSubmitSearch = (e) => {
    e?.preventDefault();
    const filteredKeywords = Object.fromEntries(
      Object.entries(InputKeywords).filter(
        ([_, value]) => value != null && value !== "" && value !== 0
      )
    );
    const queryString = Object.keys(filteredKeywords)
      .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
      .join("&");
    dispatch(setCurrentPage(1))
    router.push(`/searching/${queryString}`)};
  const handelClearFilter = () => {
    setSaleOptions("all");
    setFromPrice(0.0);
    setToPrice(0.0);
    setFromArea(0);
    setToArea(0);
    setCountBedrooms(0);
    setCountBathroom(0);
    setPropertyFinance("");
    setPaymentMethod("");
    setKeywords("");
    setFinishingOptions("");
    setUnitType("");
    setPropertyType("");
    setSortProp("");
    setSelectedOption("");
    setLocationValue("");
    setLocationName("");
    dispatch(setCurrentPage(1));
  };
  const setForSaleButton = (e) => {
    e.preventDefault();
    languageIs ? setSaleOptions("للبيع") : setSaleOptions("For_Sale");
  };

  const setForRentButton = (e) => {
    e.preventDefault();
    languageIs ? setSaleOptions("للايجار") : setSaleOptions("For_Rent");
    setPropertyFinance("");
    setFinishingOptions("");
  };

  const setForInvestmentButton = (e) => {
    e.preventDefault();
    languageIs ? setSaleOptions("للإستثمار") : setSaleOptions("For_Investment");
  };

  const setForAllButton = (e) => {
    e.preventDefault();
    languageIs ? setSaleOptions("كل") : setSaleOptions("all");
  };
  useEffect(() => {
    if (sortPropChanged) {
      const filteredKeywords = Object.fromEntries(
        Object.entries(InputKeywords).filter(
          ([_, value]) => value != null && value !== "" && value !== 0
        )
      );

      const queryString = Object.keys(filteredKeywords)
        .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
        .join("&");
      router.push(`/searching/${queryString}`);
      setSortPropChanged(false);
    }
  }, [sortPropChanged, sortProp]);

  const handleSortPropChange = (value) => {
    setSortProp(value);
    setSortPropChanged(true);
    dispatch(setCurrentPage(1));
  };

  return (
    <form
      onSubmit={handleSubmitSearch}
      className="  h-72 mb-5 grid md:justify-normal justify-center "
    >
      <div
        dir="ltr"
        className="w-full flex flex-col justify-center items-center  mt-5 mb-9  "
      >
        <div className="flex flex-col   md:w-10/12 ">
          <div className="flex  w-full  ">
            <div className=" w-full">
              <div className="flex">
                <button
                  className={` ${
                    saleOptions == "all" || saleOptions == "كل"
                      ? " bg-lightOrange text-white "
                      : "bg-white border-2 border-lightOrange text-lightOrange "
                  }  font-bold py-[4px] px-3 mx-1  rounded-t-medium`}
                  onClick={setForAllButton}
                >
                  {languageIs ? "الكل" : "All"}
                </button>
                <button
                  onClick={setForRentButton}
                  className={` ${
                    saleOptions == "For_Rent" || saleOptions == "للايجار"
                      ? "text-white bg-lightGreen"
                      : "text-lightGreen border-2 border-lightGreen bg-white"
                  }  font-bold  px-2 mx-1 rounded-t-medium`}
                >
                  {languageIs ? "للإيجار" : "Rent"}
                </button>
                <button
                  onClick={setForSaleButton}
                  className={` ${
                    saleOptions == "For_Sale" || saleOptions == "للبيع"
                      ? "text-white bg-lightGreen"
                      : "text-lightGreen border-2 border-lightGreen bg-white"
                  }  font-bold  px-2 mx-1 rounded-t-medium`}
                >
                  {languageIs ? "للبيع" : "Buy"}
                </button>

                <button
                  onClick={setForInvestmentButton}
                  className={` ${
                    saleOptions == "For_Investment" ||
                    saleOptions == "للإستثمار"
                      ? "text-white bg-lightGreen"
                      : "text-lightGreen border-2 border-lightGreen bg-white"
                  }  font-bold  px-2 mx-1 rounded-t-medium`}
                >
                  {languageIs ? "للإستثمار" : "Investment"}
                </button>
              </div>
              <div className="w-full gap-y-3  gap-x-2">
                <SearchDropdown
                  setLocationName={setLocationName}
                  setLocationValue={setLocationValue}
                  setTyping={setTyping}
                />
              </div>
            </div>
            <div className="flex items-end">
              <div dir={"rtl"} className="flex">
                <Dropdown
                  classNames=" w-[auto]  sm:block hidden"
                  ifSaleOptions={saleOptions}
                  value={propertyType}
                  options={propertyTypeData}
                  moreOptions={saleOptions}
                  setValue={setPropertyType}
                  selectoption={selectoption}
                  setSelectedOption={setSelectedOption}
                  valueDefault={`${
                    languageIs ? "نوع العقار" : "Property Type"
                  }`}
                />
                <DropdownUintType
                  classNames=" w-[auto]  sm:block hidden"
                  value={unitType}
                  options={unitTypeData}
                  propertyType={propertyType}
                  setValue={setUnitType}
                  valueDefault={`${languageIs ? "نوع الوحدة" : "Unit Type"}`}
                />
              </div>

              <div className="flex items-center gap-x-3">
                <DropdownMore
                  setPaymentMethod={setPaymentMethod}
                  paymentMethod={paymentMethod}
                  setFinishingOptions={setFinishingOptions}
                  finishingOptions={finishingOptions}
                  setUnitType={setUnitType}
                  unitType={unitType}
                  setPropertyType={setPropertyType}
                  propertyType={propertyType}
                  countBedrooms={countBedrooms}
                  setCountBedrooms={setCountBedrooms}
                  countBathrooms={countBathrooms}
                  setCountBathroom={setCountBathroom}
                  setPropertyFinance={setPropertyFinance}
                  propertyFinance={propertyFinance}
                  fromPrice={fromPrice}
                  setFromPrice={setFromPrice}
                  toPrice={toPrice}
                  setToPrice={setToPrice}
                  fromArea={fromArea}
                  setFromArea={setFromArea}
                  toArea={toArea}
                  setToArea={setToArea}
                  offer={saleOptions}
                  keywords={keywords}
                  setKeywords={setKeywords}
                  selectoption={selectoption}
                  setSelectedOption={setSelectedOption}
                  classNames="max-w-[40px]"
                />
                <button
                  type="submit"
                  className="rounded-xl p-3 bg-lightGreen flex items-center"
                >
                  <LuSearch className="lg:text-3xl text-xl text-white" />
                </button>
                <button
                  onClick={handelClearFilter}
                  className=" bg-lightOrange rounded-xl p-3 flex  items-center"
                >
                  <MdClear className="lg:text-3xl text-xl text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={` ${
          pageSaleOption == undefined ? "" : "hidden"
        } flex items-center gap-x-2 w-10/12 m-auto `}
      >
        <h1 className="text-default-500 text-[15px] sm:text-medium md:text-lg font-medium">
          {languageIs
            ? `${
                reversedFilteredKeywords?.unitType == "شقة"
                  ? " شقق "
                  : reversedFilteredKeywords?.unitType || "عقارات "
              }${
                reversedFilteredKeywords?.offer == "all" ||
                reversedFilteredKeywords?.offer == "كل"
                  ? "للبيع والإيجار"
                  : reversedFilteredKeywords?.offer || "للبيع والإيجار"
              } فى ${reversedFilteredKeywords?.cdb || "مصر"} `
            : ` ${reversedFilteredKeywords?.unitType || "Properties"} ${
                reversedFilteredKeywords?.offer == "all" ||
                reversedFilteredKeywords?.offer == "كل"
                  ? "For Rent Or Buy"
                  : reversedFilteredKeywords?.offer || "for rent or buy"
              } In ${reversedFilteredKeywords.cdb || "Egypt"}`}{" "}
          <span
            className={`${propLengthResult ? "text-default-500" : "hidden"} `}
          >
            {languageIs
              ? `( ${propLengthResult} ${
                  reversedFilteredKeywords?.unitType || "عقارات"
                })  `
              : `( ${propLengthResult} ${
                  reversedFilteredKeywords?.unitType || "Properties"
                })`}
          </span>
        </h1>
      </div>
      <div className="  flex items-center gap-x-2 w-10/12 m-auto ">
        <h6 className="text-default-500 text-[15px] sm:text-medium md:text-lg font-medium">
          {languageIs ? "الترتيب حسب:" : "Sort Buy"}
        </h6>
        <DropdownSort
          classNames=" w-[130px] "
          value={sortProp}
          options={sortedData}
          setValue={handleSortPropChange}
          valueDefault={<FaSortNumericDown />}
        />
      </div>
    </form>
  );
}
