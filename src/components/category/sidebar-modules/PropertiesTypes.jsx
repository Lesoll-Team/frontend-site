import React, { memo } from "react";
import { useSelector } from "react-redux";

import Dropdown from "@/Shared/category/Dropdowns/Dropdown";

import { propertyType } from "@/Shared/search/dropdown/dataDropdown";
import { useUnitTypesData } from "../shared/FilterHooks";
import { useTranslation } from "next-i18next";

const PropertiesTypes = () => {
  const { t } = useTranslation("common");
  const { categoryType, unitTypes } = useSelector((state) => state.Category);

  const unitTypesData = useUnitTypesData(categoryType);
  return (
    <div className="flex  justify-center md:hidden md:gap-x-[1vw]  gap-x-[1.5vw] p-[1.5vw] bg-[#F8F8F8]">
      <div className="flex flex-col  w-6/12 gap-y-[1.5vh]">
        <span className="flex lg-text font-bold text-gray2 ">
          {t("Property_Type")}
        </span>
        <Dropdown
          stateName="categoryType"
          defaultValue={t("Type_Ad")}
          data={propertyType}
          value={categoryType}
          classNames="bg-white"
        />
      </div>
      <div className="  flex flex-col  w-6/12 gap-y-[1.5vh]">
        <span className="flex lg-text font-bold text-gray2 ">
          {t("Unit_Type")}
        </span>
        <Dropdown
          stateName="unitTypes"
          defaultValue={t("Unit_Type")}
          data={unitTypesData()}
          value={unitTypes}
          classNames="bg-white"
        />
      </div>
    </div>
  );
};

export default memo(PropertiesTypes);
