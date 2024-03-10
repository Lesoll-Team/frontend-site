import React from "react";
import { useSelector } from "react-redux";

import Dropdown from "@/Shared/category/Dropdowns/Dropdown";

import { propertyType } from "@/Shared/search/dropdown/dataDropdown";
import { useUnitTypesData } from "../shared/FilterHooks";

const PropertiesTypes = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { categoryType, unitTypes } = useSelector((state) => state.Category);

  const unitTypesData = useUnitTypesData(categoryType?.value);
  return (
    <div className="flex  justify-center md:hidden gap-x-[1vw] p-[1.5vw] bg-[#F8F8F8]">
      <div className="  w-6/12">
        <span className="flex font-bold text-gray2 ">
          {language ? "نوع العقار" : "Property type"}
        </span>
        <Dropdown
          stateName="categoryType"
          defaultValue={language ? "نوع الإعلان" : "property type"}
          data={propertyType}
          value={categoryType}
          dataOptions="text"
          classNames="bg-white"
        />
      </div>
      <div className="  w-6/12">
        <span className="flex font-bold text-gray2 ">
          {language ? "نوع الوحدة" : "unit type"}
        </span>
        <Dropdown
          stateName="unitTypes"
          defaultValue={language ? "نوع الوحدة" : "unit type"}
          data={unitTypesData()}
          value={unitTypes}
          dataOptions="text"
          classNames="bg-white"
        />
      </div>
    </div>
  );
};

export default PropertiesTypes;
