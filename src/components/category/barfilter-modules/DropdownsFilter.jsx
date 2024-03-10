import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useUnitTypesData } from "../shared/FilterHooks";
import {
  propertyType,
  saleOptionsType,
} from "@/Shared/search/dropdown/dataDropdown";

const DropdownsFilter = () => {
  const { saleOption, unitTypes, categoryType } = useSelector(
    (state) => state.Category
  );
  const unitTypesData = useUnitTypesData(categoryType?.value);
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Dropdown
        stateName={"saleOption"}
        defaultValue={language ? "العرض" : "offer"}
        data={saleOptionsType}
        value={saleOption}
        dataOptions="text"
      />

      <Dropdown
        stateName={"categoryType"}
        defaultValue={language ? "نوع الإعلان" : "property type"}
        data={propertyType}
        value={categoryType}
        dataOptions="text"
      />

      <Dropdown
        stateName={"unitTypes"}
        defaultValue={language ? "نوع الوحدة" : "Unit types"}
        data={unitTypesData()}
        value={unitTypes}
        dataOptions="text"
      />
    </>
  );
};

export default memo(DropdownsFilter);
