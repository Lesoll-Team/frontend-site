import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useUnitTypesData } from "../shared/FilterHooks";
import {
  propertyType,
  saleOptionsType,
} from "@/Shared/search/dropdown/dataDropdown";
import { useTranslation } from "next-i18next";

const DropdownsFilter = () => {
  const { saleOption, unitTypes, categoryType } = useSelector(
    (state) => state.Category,
  );
  const unitTypesData = useUnitTypesData(categoryType);
  const { t } = useTranslation("common");
  return (
    <>
      <Dropdown
        stateName={"saleOption"}
        defaultValue={t("offer")}
        data={saleOptionsType}
        value={saleOption}
      />

      <Dropdown
        stateName={"categoryType"}
        defaultValue={t("Property_Type")}
        data={propertyType}
        value={categoryType}
      />

      <Dropdown
        stateName={"unitTypes"}
        defaultValue={t("Unit_Types")}
        data={unitTypesData()}
        value={unitTypes}
      />
    </>
  );
};

export default memo(DropdownsFilter);
