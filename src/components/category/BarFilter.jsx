import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import {
  propertyType,
  saleOptionsType,
} from "@/Shared/search/dropdown/dataDropdown";
import { useRouter } from "next/router";
import React, { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { SearchDropdownLocation } from "@/Shared/search/SearchDropdownLocation";
import { CgOptions } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { useGetNameWithValue, useUnitTypesData } from "./FilterHooks";

const BarFilter = ({
  filterData,
  setOpenFilter,
  categoryType,
  categoryTypeKey,
  saleOption,
  // saleOptionKey,
  unitTypes,
  // unitTypesKey,
  // locationGovernorate,
  // locationRegion,
  setCategoryType,
  setCategoryTypeKey,
  setSaleOption,
  setSaleOptionKey,
  setUnitTypes,
  setUnitTypesKey,
  setLocationGovernorate,
  setLocationRegion,
  handleFilterAction,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  useEffect(() => {
    setUnitTypes("");
    setUnitTypesKey("");
    if (categoryTypeKey == "graves" || filterData.category == "graves") {
      setSaleOptionKey("sale");
    }
  }, [categoryTypeKey]);
  const getNameWithValue = useGetNameWithValue(categoryTypeKey);

  const unitTypesData = useUnitTypesData(
    categoryTypeKey || filterData.category
  );

  useEffect(() => {
    if (
      categoryTypeKey !== "graves" &&
      filterData.category !== "graves" &&
      filterData.category !== "" &&
      categoryTypeKey &&
      categoryTypeKey !== "graves"
    ) {
      setUnitTypes("");
      setUnitTypesKey("");
    }
  }, [categoryTypeKey, filterData.category]);
  return (
    <div className="relative md:py-8 py-4  w-full md:container md:mx-auto mx-[20px]">
      <div
        className="flex gap-x-[1vw] md:bg-inherit  border-1 md:border-0
       shadow-sm md:shadow-none  bg-white rounded-[1vw]  justify-around"
      >
        <div
          className="w-full flex items-center border-0 md:border-1
         border-[#CCCCCC] bg-white px-2 min-w-[200px] rounded-[0.6vw]"
        >
          <IoIosSearch className="text-[1.45rem] text-gray2" />
          <SearchDropdownLocation
            defaultGovernorate={filterData.governorate}
            defaultRegion={filterData.region}
            setLocationGovernorate={setLocationGovernorate}
            setLocationRegion={setLocationRegion}
          />
        </div>
        <div className="hidden md:flex gap-x-[1vw] ">
          {(categoryTypeKey !== "graves" &&
            filterData.category !== "graves" &&
            filterData.category !== "") ||
          (categoryTypeKey && categoryTypeKey !== "graves") ? (
            <Dropdown
              defaultValue={language ? "العرض" : "offer"}
              data={saleOptionsType}
              value={
                saleOption ||
                getNameWithValue({
                  language,
                  type: filterData.saleOptions,
                  dataObject: saleOptionsType,
                })
              }
              setValue={setSaleOption}
              setValueKey={setSaleOptionKey}
              dataOptions="text"
              isDisabled={
                categoryTypeKey == "graves" ||
                (filterData.category == "graves" && categoryType == "graves")
              }
            />
          ) : null}
          <Dropdown
            defaultValue={language ? "نوع الإعلان" : "property type"}
            data={propertyType}
            value={
              categoryType ||
              getNameWithValue({
                language,
                type: filterData.category,
                dataObject: propertyType,
              })
            }
            setValue={setCategoryType}
            setValueKey={setCategoryTypeKey}
            dataOptions="text"
          />
          {(categoryTypeKey !== "graves" &&
            filterData.category !== "graves" &&
            filterData.category !== "") ||
          (categoryTypeKey && categoryTypeKey !== "graves") ? (
            <Dropdown
              defaultValue={language ? "نوع الوحدة" : "payment method"}
              data={unitTypesData()}
              value={
                unitTypes ||
                getNameWithValue({
                  language,
                  type: filterData.unitType,
                  dataObject: unitTypesData(),
                })
              }
              setValue={setUnitTypes}
              setValueKey={setUnitTypesKey}
              dataOptions="text"
            />
          ) : null}
        </div>

        <button
          className=" md:gap-x-2 gap-x-0  h-[1.875rem] md:h-[3.313rem] text-gray1 text-md flex items-center justify-between
         md:border-[1px] border-0 md:border-[#CCCCCC] rounded-[1vh] md:px-3 md:p-2 p-1 px-1 cursor-pointer"
          onClick={() => setOpenFilter(true)}
        >
          <span className="whitespace-nowrap hidden md:block text-gray1">
            {language ? "خيارات اكثر" : "More filter"}
          </span>
          <CgOptions className=" text-gray2" />
        </button>

        <button
          onClick={handleFilterAction}
          className="w-[100px] md:w-[9.97vw] md:min-w-[165px] h-[1.875rem] md:h-[3.313rem] rounded-[1vh] font-bold text-[12px] md:text-[20px] text-white bg-lightGreen"
        >
          {language ? "بحث" : "Search"}
        </button>
      </div>
    </div>
  );
};

export default memo(BarFilter);
