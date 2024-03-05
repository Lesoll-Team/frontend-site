import React from "react";
import {
  //  useDispatch,
  useSelector,
} from "react-redux";
// import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import { useGetNameWithValue } from "../FilterHooks";
import { propertyType } from "@/Shared/search/dropdown/dataDropdown";

const PropertiesTypes = ({
  categoryTypeKey,
  setCategoryTypeKey,
  categoryType,
  setCategoryType,
  filterData,
}) => {
  //   const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const getNameWithValue = useGetNameWithValue(categoryTypeKey);

  return (
    <div className="flex flex-col justify-center md:hidden pt-[10px] pb-[20px] gap-y-[10px] bg-[#F8F8F8]">
      <span className="flex font-bold text-gray2 ">
        {language ? "نوع العقار" : "Property type"}
      </span>
      <div className="h-[34px] ">
        <Dropdown
          stateName="categoryType"
          defaultValue={language ? "نوع الإعلان" : "property type"}
          data={propertyType}
          value={
            categoryType ||
            getNameWithValue({
              language: language,
              type: filterData.category,
              dataObject: propertyType,
            })
          }
          setValue={setCategoryType}
          setValueKey={setCategoryTypeKey}
          dataOptions="text"
          classNames="bg-white"
        />
      </div>
    </div>
  );
};

export default PropertiesTypes;
