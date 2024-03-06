// import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import React, { memo } from "react";
import { IoClose } from "react-icons/io5";
import // finishingOptionsData,
// paymentMethodData,
// propertyType,
// saleOptionsType,
"@/Shared/search/dropdown/dataDropdown";
// import UnitTypeIcons from "./UnitTypeIcons";
// import { useGetNameWithValue } from "./FilterHooks";
import SearchKeywords from "./sidebar-modules/SearchKeywords";
import OfferButtons from "./sidebar-modules/OfferButtons";
import PropertiesTypes from "./sidebar-modules/PropertiesTypes";
import PricingRange from "./sidebar-modules/PricingRange";
import ButtonsRooms from "./sidebar-modules/ButtonsRooms";
import AreaRange from "./sidebar-modules/AreaRange";
import FinishingList from "./sidebar-modules/FinishingList";
import PaymentType from "./sidebar-modules/PaymentType";
import FinancingButtons from "./sidebar-modules/FinancingButtons";
import ButtonSearchAction from "./sidebar-modules/ButtonSearchAction";
// import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
// import React, { memo } from "react";
// import { IoClose } from "react-icons/io5";
// import {
//   finishingOptionsData,
//   propertyType,
// } from "@/components/category/dataDropdown";
// import UnitTypeIcons from "./UnitTypeIcons";
// import { useGetNameWithValue } from "./FilterHooks";
// import { TbSearch } from "react-icons/tb";
const SidebarFilter = ({
  languageIs,
  setOpenFilter,
  categoryType,
  categoryTypeKey,
  setCategoryType,
  setCategoryTypeKey,
  setSaleOptionKey,
  filterData,
  setPriceFrom,
  setPriceTo,
  saleOptionKey,
  priceFrom,
  priceTo,
  setNumBathrooms,
  setNumBedrooms,
  numBedrooms,
  numBathrooms,
  // handleFilterAction,
  setAreaFrom,
  setAreaTo,
  areaFrom,
  areaTo,
  setFinishedOptionKey,
  setFinishedOption,
  finishedOption,
  setPaymentTypeKey,
  paymentTypeKey,
  searchKeyword,
  setSearchKeyword,
  setPropFinancing,
  // propFinancing,
  finishedOptionKey,
}) => {
  // const getNameWithValue = useGetNameWithValue(categoryTypeKey);
  document.body.style.overflow = "hidden";

  return (
    <div dir="ltr" className="w-full  h-screen flex   ">
      {/*body content in sidebar */}
      <div
        dir={languageIs ? "rtl" : "ltr"}
        className={` bg-white shadow-lg overflow-y-auto shadow-gray-600 z-[1] h-screen  md:w-[37.7vw] w-full  
         p-[2vw] flex flex-col md:gap-y-[3vh] gap-y-[20px]`}
      >
        {/*search text and button close*/}
        <div className=" w-full flex justify-between items-center">
          <span className="text-[25px]">
            {languageIs ? "خيارات أكثر" : "More Option"}
          </span>
          <IoClose
            onClick={() => setOpenFilter(false)}
            className="text-[20px] cursor-pointer"
          />
        </div>
        {/*search by keywords  */}
        <SearchKeywords
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />

        {/*offer and property type  */}
        <OfferButtons
          saleOptionKey={saleOptionKey}
          setSaleOptionKey={setSaleOptionKey}
        />
        <PropertiesTypes
          categoryTypeKey={categoryTypeKey}
          setCategoryTypeKey={setCategoryTypeKey}
          categoryType={categoryType}
          setCategoryType={setCategoryType}
          filterData={filterData}
        />

        {/*pricing from and to limit  */}
        <PricingRange
          setPriceTo={setPriceTo}
          priceTo={priceTo}
          setPriceFrom={setPriceFrom}
          priceFrom={priceFrom}
        />
        {/*number bedrooms and bathrooms */}
        <ButtonsRooms
          numBedrooms={numBedrooms}
          numBathrooms={numBathrooms}
          setNumBedrooms={setNumBedrooms}
          setNumBathrooms={setNumBathrooms}
        />
        {/* area range */}
        <AreaRange
          areaFrom={areaFrom}
          setAreaFrom={setAreaFrom}
          setAreaTo={setAreaTo}
          areaTo={areaTo}
        />
        <FinishingList
          finishedOption={finishedOption}
          setFinishedOptionKey={setFinishedOptionKey}
          finishedOptionKey={finishedOptionKey}
          setFinishedOption={setFinishedOption}
          filterData={filterData}
        />
        {/* area from & to */}
        <PaymentType
          paymentTypeKey={paymentTypeKey}
          setPaymentTypeKey={setPaymentTypeKey}
        />
        {/* buttons Property Financing */}
        <FinancingButtons setPropFinancing={setPropFinancing} />

        {/* submit button */}
        <ButtonSearchAction />
      </div>

      <div
        onClick={() => setOpenFilter(false)}
        className="h-screen absolute w-full bg-[#323232] z-[0] opacity-30"
      />
      <style>
        {`
      body {
        overflow: hidden;
      }
      `}
      </style>
    </div>
  );
};

export default memo(SidebarFilter);
