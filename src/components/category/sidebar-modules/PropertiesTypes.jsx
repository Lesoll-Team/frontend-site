import React from "react";
import { useSelector } from "react-redux";

import Dropdown from "@/Shared/category/Dropdowns/Dropdown";

import { propertyType } from "@/Shared/search/dropdown/dataDropdown";
import { useUnitTypesData } from "../shared/FilterHooks";

const PropertiesTypes = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { categoryType, unitTypes } = useSelector((state) => state.Category);

  const unitTypesData = useUnitTypesData(categoryType);
  return (
    <div className="flex  justify-center md:hidden md:gap-x-[1vw]  gap-x-[1.5vw] p-[1.5vw] bg-[#F8F8F8]">
      <div className="flex flex-col  w-6/12 gap-y-[1.5vh]">
        <span className="flex lg-text font-bold text-gray2 ">
          {language ? "نوع العقار" : "Property type"}
        </span>
        <Dropdown
          stateName="categoryType"
          defaultValue={language ? "نوع الإعلان" : "Property type"}
          data={propertyType}
          value={categoryType}
          classNames="bg-white"
        />
      </div>
      <div className="  flex flex-col  w-6/12 gap-y-[1.5vh]">
        <span className="flex lg-text font-bold text-gray2 ">
          {language ? "نوع الوحدة" : "Unit type"}
        </span>
        <Dropdown
          stateName="unitTypes"
          defaultValue={language ? "نوع الوحدة" : "Unit type"}
          data={unitTypesData()}
          value={unitTypes}
          classNames="bg-white"
        />
      </div>
    </div>
  );
};

export default PropertiesTypes;
