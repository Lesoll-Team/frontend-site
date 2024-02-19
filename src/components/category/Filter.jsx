import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
// import DropdownPricing from "@/Shared/category/Dropdowns/DropdownPricing";
import { RiEqualizerFill } from "react-icons/ri";

// import DropdownPrice from "@/Shared/search/dropdown/DropdownPrice";
import {
  paymentMethodData,
  propertyType,
} from "@/Shared/search/dropdown/dataDropdown";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";
import { useSelector } from "react-redux";
import DropdownSearchLocation from "@/Shared/search/dropdown/DropdownSearchLocation";
import { IoClose } from "react-icons/io5";
import { useFilterContextState } from "@/Shared/layout";
// paymentMethodData
const SearchFilter = ({ filterData }) => {
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);
  let { openFilter, setOpenFilter } = useFilterContextState();

  const [keywordValue, setKeywordValue] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentMethodKey, setPaymentMethodKey] = useState("");

  const [categoryType, setCategoryType] = useState("");
  const [categoryTypeKey, setCategoryTypeKey] = useState("");

  // const [priceFrom, setPriceFrom] = useState(0);
  // const [priceTo, setPriceTo] = useState(0);

  const getNameWithValue = ({ language, type, dataObject }) => {
    const value = language
      ? dataObject.ar.find((data) => data.value == type)?.name
      : dataObject.en.find((data) => data.value == type)?.name;
    return value;
  };
  const filterInput = {
    Payment: paymentMethodKey || filterData.paymentOption,
    category: categoryTypeKey || filterData.category,
    governorate: filterData.governorate,
    region: filterData.region,
    unitType: filterData.unitType,
  };

  const queryInput = {
    // priceTo,
    // priceFrom,
    keyword: keywordValue,
  };
  const handleFilterAction = useCallback(() => {
    const filteredKeywords = Object.fromEntries(
      Object.entries(queryInput).filter(
        ([_, value]) => value != null && value !== "" && value !== 0
      )
    );

    const filteredKeywords2 = Object.fromEntries(
      Object.entries(filterData.searchKeywords).filter(
        ([_, value]) => value != null && value !== "" && value !== 0
      )
    );

    const filterInputAfter = Object.fromEntries(
      Object.entries(filterInput).filter(
        ([_, value]) => value != null && value !== "" && value !== 0
      )
    );

    const pagesInput3 = Object.keys(filterInputAfter)
      .map((key) => `${filterInputAfter[key]}`)
      .join("/")
      .toLowerCase();
    const existingQueryParams = new URLSearchParams(
      router.asPath.split("?")[1]
    );
    const combinedKeywords = { ...filteredKeywords, ...filteredKeywords2 };
    for (const [key, value] of Object.entries(combinedKeywords)) {
      existingQueryParams.set(key, value);
    }

    const queryString = existingQueryParams.toString();
    router.push(`/properties/${pagesInput3}/search?${queryString}`);
  }, [queryInput, filterData.searchKeywords, router]);

  return (
    <div className="relative py-8 w-full">
      <div className="flex gap-x-[1vw]  justify-around">
        <div className="w-full">
          <input
            onChange={(e) => setKeywordValue(e.target.value)}
            placeholder={
              language ? "بحث بكلمات مميزة..." : "Search by region..."
            }
            type="text"
            className="w-full h-full  text-gray2 text-md flex items-center justify-between
            bg-white border-1 border-gray1 rounded-[0.5vh] md:px-3 px-1 cursor-pointer whitespace-nowrap "
          />
        </div>
        <div className="w-[300px]">
          <DropdownSearchLocation
            // setKeywords={setKeywords}
            // setLocationGovernorate={setLocationGovernorate}
            // setLocationRegion={setLocationRegion}
            output="giza-haram"
          />
        </div>
        <Dropdown
          defaultValue={language ? "العرض" : "property type"}
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
        />

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
        />
        <Dropdown
          defaultValue={language ? "نوع الفرعي" : "payment method"}
          data={paymentMethodData}
          value={
            paymentMethod ||
            getNameWithValue({
              language,
              type: filterData.paymentOption,
              dataObject: paymentMethodData,
            })
          }
          setValue={setPaymentMethod}
          setValueKey={setPaymentMethodKey}
        />
        <button
          className="min-w-[5.5vw] md:min-w-[3.5vw]  h-[1.875rem] md:h-[3.313rem] text-white text-md flex items-center justify-center
            bg-lightGreen rounded-[1vh] "
          onClick={() => setOpenFilter(true)}
        >
          <RiEqualizerFill className="text-[2.2vw]" />
        </button>

        <button
          onClick={handleFilterAction}
          className="w-[45px] md:w-[9.97vw] md:min-w-[165px] h-[1.875rem] md:h-[3.313rem] rounded-[1vh] font-bold text-[12px] md:text-[20px] text-white bg-lightGreen"
        >
          بحث
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
