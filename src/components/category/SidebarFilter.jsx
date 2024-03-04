import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import React, { memo } from "react";
import { IoClose } from "react-icons/io5";
import {
  finishingOptionsData,
  // paymentMethodData,
  propertyType,
  // saleOptionsType,
} from "@/Shared/search/dropdown/dataDropdown";
// import UnitTypeIcons from "./UnitTypeIcons";
import { useGetNameWithValue } from "./FilterHooks";
import { TbSearch } from "react-icons/tb";
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
  handleFilterAction,
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
  propFinancing,
}) => {
  const getNameWithValue = useGetNameWithValue(categoryTypeKey);

  const handleButtonClick = (i, name) => {
    switch (name) {
      case "bed":
        setNumBedrooms(numBedrooms === i + 1 ? null : i + 1);
        break;

      case "bath":
        setNumBathrooms(numBathrooms === i + 1 ? null : i + 1);
        break;

      default:
        break;
    }
  };

  const handleOfferClick = (name) => {
    switch (name) {
      case "sale":
        setSaleOptionKey("sale");
        break;

      case "rent":
        setSaleOptionKey("rent");
        break;
      case "investment":
        setSaleOptionKey("investment");
        break;
    }
  };

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
        <div className=" w-full py-[10px] flex flex-col gap-y-[10px] bg-[#F8F8F8]">
          <label className="font-bold text-gray2" htmlFor="keywords">
            {languageIs ? "بحث بالكلمات المميزة" : "Search by keywords"}
          </label>
          <div className="flex h-[34] md:h-[3.313rem] w-full p-1 border-gray1 border-1 items-center rounded-[1vw] bg-white">
            <input
              name="keywords"
              className="w-full h-full focus:outline-none "
              type="text"
              placeholder={languageIs ? "كلمات مميزة " : "spacial keywords"}
              value={searchKeyword}
              // value={searchKeyword || filterData.searchKeywords.keyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <TbSearch className="mx-1 " />
          </div>
        </div>
        {/*offer and property type  */}
        <div className="flex md:hidden w-full flex-col p-[10px] bg-[#F8F8F8] gap-y-[10px] gap-x-2">
          <span className="font-bold text-gray2">
            {languageIs ? "نوع الإعلان" : "Add Property"}
          </span>
          <div className="gap-x-[10px]  flex">
            <button
              onClick={() => handleOfferClick("sale")}
              className={`py-2 px-5 bg-white ${
                saleOptionKey == "sale"
                  ? "border-1 border-lightGreen text-lightGreen "
                  : "border-1 border-gray1"
              }  rounded-[6px] p-[10px] `}
            >
              {languageIs ? "للبيع" : "For Sale"}
            </button>
            <button
              onClick={() => handleOfferClick("rent")}
              className={`py-2 px-5 bg-white ${
                saleOptionKey == "rent"
                  ? "border-1 border-lightGreen text-lightGreen  "
                  : "border-1 border-gray1"
              }  rounded-[6px] p-[10px] `}
            >
              {languageIs ? "للإيجار" : "For Rent"}
            </button>
            <button
              onClick={() => handleOfferClick("investment")}
              className={`py-2 px-5 bg-white ${
                saleOptionKey == "investment"
                  ? "border-1 border-lightGreen text-lightGreen  "
                  : "border-1 border-gray1"
              }  rounded-[6px] p-[10px] `}
            >
              {languageIs ? "للإستثمار" : "For Investment"}
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center md:hidden pt-[10px] pb-[20px] gap-y-[10px] bg-[#F8F8F8]">
          <span className="flex font-bold text-gray2 ">
            {languageIs ? "نوع العقار" : "Property type"}
          </span>
          <div className="h-[34px] ">
            <Dropdown
              defaultValue={languageIs ? "نوع الإعلان" : "property type"}
              data={propertyType}
              value={
                categoryType ||
                getNameWithValue({
                  language: languageIs,
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
        {/*pricing from and to limit  */}
        <div className="bg-[#F8F8F8] gap-y-[10px] pt-[10px] pb-[10px]">
          <div className="flex font-bold text-gray2 gap-x-2">
            <span>{languageIs ? "السعر" : "Price"}</span>

            <span className="">{languageIs ? "(جنيه)" : "(EGY)"}</span>
          </div>
          <div className="flex justify-between gap-x-[1.5vw]">
            <input
              type="number"
              className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
              onChange={(e) => {
                setPriceFrom(e.target.value);
              }}
              placeholder={languageIs ? "اقل سعر" : "min price"}
              value={priceFrom || ""}
            />

            <input
              type="number"
              className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
              onChange={(e) => setPriceTo(e.target.value)}
              placeholder={languageIs ? "اعلى سعر" : "max price"}
              value={priceTo || ""}
            />
          </div>
        </div>
        {/*number bedrooms and bathrooms */}
        <div className="flex bg-[#F8F8F8] gap-y-[10px] flex-col p-1 gap-x-[1.5vw]">
          <div className="flex w-full flex-col   gap-x-2">
            <span className="font-bold text-gray2">
              {languageIs ? "عدد الغرف" : "Bedrooms"}
            </span>

            <div className="p-1 flex gap-x-[14px] ">
              {Array.from(Array(7), (_, i) => (
                <button
                  className={` md:w-[40px] md:h-[40px] h-[30px] w-[30px] bg-white  rounded-[1vw]  
                             transition-colors duration-200 ease-in-out md:hover:bg-gray-200 md:active:bg-gray-300
                             ${
                               numBedrooms == i + 1
                                 ? "border-1  border-lightGreen text-lightGreen "
                                 : "border-1 border-gray-400 text-gray-400"
                             }`}
                  key={i}
                  onClick={() => handleButtonClick(i, "bed")}
                >
                  {i == 6 ? "7+" : `${i + 1}`}
                </button>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col  gap-x-2">
            <span className="font-bold text-gray2">
              {languageIs ? "عدد الحمامات" : "Bathrooms"}
            </span>

            <div className="p-1 flex gap-x-[14px] ">
              {Array.from(Array(7), (_, i) => (
                <button
                  className={` md:w-[40px] md:h-[40px] h-[30px] w-[30px] bg-white  rounded-[1vw]  
                             transition-colors duration-200 ease-in-out md:hover:bg-gray-200 md:active:bg-gray-300
                             ${
                               numBathrooms == i + 1
                                 ? "border-1  border-lightGreen text-lightGreen "
                                 : "border-1 border-gray-400 text-gray-400"
                             }`}
                  key={i}
                  onClick={() => handleButtonClick(i, "bath")}
                >
                  {i == 6 ? "7+" : `${i + 1}`}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* saleOptions & finished dropdown*/}
        <div className="bg-[#F8F8F8] gap-y-[10px] flex flex-col pt-[10px] pb-[10px]">
          <div className="flex gap-x-2 text-gray2 font-bold">
            <span>{languageIs ? "المساحة" : "area"}</span>

            <span className="">
              {languageIs ? "(متر مربع)" : "(Square meters)"}
            </span>
          </div>
          <div className="flex justify-between gap-x-[1.5vw]">
            <input
              type="number"
              className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
              placeholder={languageIs ? "اقل مساحة" : "min area"}
              onChange={(e) => setAreaFrom(e.target.value)}
              value={areaFrom || ""}
            />

            <input
              type="number"
              className="indent-2 h-[40px] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
              placeholder={languageIs ? "اكبر مساحة" : "max area"}
              onChange={(e) => setAreaTo(e.target.value)}
              value={areaTo || ""}
            />
          </div>
        </div>
        <div className="flex bg-[#F8F8F8] gap-y-[10px] pt-[10px] pb-[10px]  ">
          <div className="flex flex-col w-full gap-x-2">
            <span className="font-bold text-gray2 ">
              {languageIs ? "تشطيب" : "Finishing"}
            </span>
            <Dropdown
              defaultValue={languageIs ? "تشطيب" : "Finishing"}
              data={finishingOptionsData}
              value={
                finishedOption ||
                getNameWithValue({
                  language: languageIs,
                  type: filterData.searchKeywords.finishedOption,
                  dataObject: finishingOptionsData,
                })
              }
              setValue={setFinishedOption}
              setValueKey={setFinishedOptionKey}
              classNames={" w-full bg-white"}
              dataOptions="text"
            />
          </div>
        </div>
        {/* area from & to */}
        <div className="bg-[#F8F8F8] gap-y-[18px] flex flex-col w-full">
          <span className="font-bold text-gray2">
            {languageIs ? "طريقة السداد" : "Payment Options"}
          </span>
          <div className="flex gap-x-3">
            <button
              onClick={() => setPaymentTypeKey("cash")}
              className={`bg-white h-[40px] px-2 rounded-[6px] ${
                paymentTypeKey === "cash"
                  ? "border-1 border-lightGreen text-lightGreen"
                  : "border-1 border-gray1"
              }`}
            >
              {languageIs ? "كاش" : "Cash"}
            </button>
            <button
              onClick={() => setPaymentTypeKey("installment")}
              className={`bg-white h-[40px] px-2 rounded-[6px] ${
                paymentTypeKey === "installment"
                  ? "border-1 border-lightGreen text-lightGreen"
                  : "border-1 border-gray1"
              }`}
            >
              {languageIs ? "تقسيط" : "Installment"}
            </button>
          </div>
        </div>
        {/* buttons Property Financing */}
        <div className="flex flex-col bg-[#F8F8F8] mb-5 gap-y-[10px]">
          <span className="font-bold text-gray2">
            {languageIs ? "تمويل العقاري" : "Property Financing"}
          </span>
          <div className="flex gap-x-2">
            <button
              onClick={() => setPropFinancing("cbe3")}
              className={` text-gray2 border-1 border-gray1 bg-white md:px-3 md:p-2 h-[40px] px-3  md:h-[3.313rem]  rounded-[1vh]
              ${
                propFinancing == "cbe3" && " border-lightGreen  text-lightGreen"
              }
              `}
            >
              {languageIs ? "تمويل العقاري 3%" : "CBE 3% initiative"}
            </button>
            <button
              onClick={() => setPropFinancing("cbe8")}
              className={`
              ${
                propFinancing == "cbe8" && " border-lightGreen  text-lightGreen"
              }
              
              text-gray2 border-1 border-gray1  md:px-3 md:p-2 bg-white  px-3 h-[40px]  md:h-[3.313rem]  rounded-[1vh]`}
            >
              {languageIs ? "تمويل العقاري 8%" : "CBE 8% initiative"}
            </button>
          </div>
        </div>
        {/* submit button */}
        <div className="mb-5 flex justify-center">
          <button
            onClick={handleFilterAction}
            className="md:w-[24.2vw] w-full rounded-[1vh] h-[40px] md:h-[3.813rem] bg-lightGreen text-white"
          >
            {languageIs ? "عرض النتائج" : "Show results"}
          </button>
        </div>
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
