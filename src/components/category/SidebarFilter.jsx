import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import React, { memo } from "react";
import { IoClose } from "react-icons/io5";
import {
  finishingOptionsData,
  paymentMethodData,
  propertyType,
  saleOptionsType,
} from "@/Shared/search/dropdown/dataDropdown";
import UnitTypeIcons from "./UnitTypeIcons";
import { useGetNameWithValue } from "./FilterHooks";
import { TbSearch } from "react-icons/tb";
const SidebarFilter = ({
  languageIs,
  setOpenFilter,
  categoryType,
  categoryTypeKey,
  setCategoryType,
  setCategoryTypeKey,
  saleOption,
  setSaleOption,
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
  setPaymentType,
  paymentType,
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
  return (
    <div dir="ltr" className="w-full  h-screen flex   ">
      {/*body content in sidebar */}
      <div
        dir={languageIs ? "rtl" : "ltr"}
        className={` bg-white shadow-lg overflow-y-auto shadow-gray-600 z-[1] h-screen  md:w-[37.7vw] w-full  
         p-[2vw] flex flex-col md:gap-y-[3vh] gap-y-[2vh]`}
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
        {/*unit type slider*/}
        <div className="w-[full]  md:hidden flex flex-col gap-y-1">
          <span>{languageIs ? "نوع الوحدة" : "Unit type"}</span>
          <UnitTypeIcons unitType={categoryTypeKey || filterData.category} />
        </div>
        {/*search by keywords  */}
        <div className=" w-full">
          <label className="" htmlFor="keywords">
            بحث بالكلمات المميزة
          </label>
          <div className="flex h-[1.875rem] md:h-[3.313rem]  p-1 border-gray1 border-1 items-center rounded-[1vw] bg-white">
            <input
              name="keywords"
              className="w-full h-full focus:outline-none "
              type="text"
              placeholder="كلمات مميزة "
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <TbSearch className="mx-1 " />
          </div>
        </div>
        {/*offer and property type  */}
        <div className="flex md:hidden  gap-x-[1.5vw]">
          <div className="flex w-full flex-col  gap-x-2">
            <span>{languageIs ? "العرض" : "Offer"}</span>

            <Dropdown
              defaultValue={languageIs ? "العرض" : "offer"}
              data={saleOptionsType}
              value={
                saleOption ||
                getNameWithValue({
                  language: languageIs,
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
          </div>
          <div className="flex w-full flex-col  gap-x-2">
            <span>{languageIs ? "نوع العقار" : "Property type"}</span>

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
            />
          </div>
        </div>
        {/*pricing from and to limit  */}
        <div className="">
          <div className="flex gap-x-2">
            <span>{languageIs ? "السعر" : "Price"}</span>

            <span className="text-gray1">
              {languageIs ? "(جنيه)" : "(EGY)"}
            </span>
          </div>
          <div className="flex justify-between gap-x-[1.5vw]">
            <input
              type="number"
              className="indent-2 h-[1.875rem] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
              onChange={(e) => {
                setPriceFrom(e.target.value);
              }}
              placeholder={languageIs ? "من" : "from"}
              value={priceFrom || ""}
            />

            <input
              type="number"
              className="indent-2 h-[1.875rem] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
              onChange={(e) => setPriceTo(e.target.value)}
              placeholder={languageIs ? "الى" : "to"}
              value={priceTo || ""}
            />
          </div>
        </div>
        {/*number bedrooms and bathrooms */}
        <div className="flex flex-col p-1 gap-x-[1.5vw]">
          <div className="flex w-full flex-col p-1  gap-x-2">
            <span>{languageIs ? "عدد الغرف" : "Bedrooms"}</span>

            <div className="p-1 flex gap-x-2 ">
              {Array.from(Array(7), (_, i) => (
                <button
                  className={` md:w-[40px] md:h-[40px] h-[30px] w-[30px]  rounded-[0.5vw]  
                             transition-colors duration-200 ease-in-out hover:bg-gray-200 active:bg-gray-300
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
          <div className="flex w-full flex-col p-1  gap-x-2">
            <span className="font-semibold">
              {languageIs ? "عدد الحمامات" : "Bathrooms"}
            </span>

            <div className="p-1 flex gap-x-2 ">
              {Array.from(Array(7), (_, i) => (
                <button
                  className={` md:w-[40px] md:h-[40px] h-[30px] w-[30px]  rounded-[0.5vw]  
                             transition-colors duration-200 ease-in-out hover:bg-gray-200 active:bg-gray-300
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
        <div className="flex   gap-x-[1.5vw]">
          <div className="flex w-full flex-col  gap-x-2">
            <span>{languageIs ? "طريقة السداد" : "Payment options"}</span>

            <Dropdown
              defaultValue={languageIs ? "طريقة السداد" : "Payment options"}
              data={paymentMethodData}
              value={
                paymentType ||
                getNameWithValue({
                  language: languageIs,
                  type: filterData.searchKeywords.paymentType,
                  dataObject: paymentMethodData,
                })
              }
              setValue={setPaymentType}
              setValueKey={setPaymentTypeKey}
              classNames={" w-full "}
              dataOptions="text"
            />
          </div>
          <div className="flex flex-col w-full gap-x-2">
            <span className="font-semibold">
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
              classNames={" w-full "}
              dataOptions="text"
            />
          </div>
        </div>
        {/* area from & to */}
        <div className="">
          <div className="flex gap-x-2">
            <span>{languageIs ? "المساحة" : "area"}</span>

            <span className="text-gray1">{languageIs ? "(م 2)" : "(2 M)"}</span>
          </div>
          <div className="flex justify-between gap-x-[1.5vw]">
            <input
              type="number"
              className="indent-2 h-[1.875rem] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
              placeholder={languageIs ? "من" : "from"}
              onChange={(e) => setAreaFrom(e.target.value)}
              value={areaFrom || ""}
            />

            <input
              type="number"
              className="indent-2 h-[1.875rem] md:h-[3.313rem] w-6/12  border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 focus:outline-none rounded-[1vh]"
              placeholder={languageIs ? "الى" : "to"}
              onChange={(e) => setAreaTo(e.target.value)}
              value={areaTo || ""}
            />
          </div>
        </div>
        {/* buttons Property Financing */}
        <div className="flex flex-col">
          <span>{languageIs ? "تمويل العقاري" : "Property Financing"}</span>
          <div className="flex gap-x-2">
            <button
              onClick={() => setPropFinancing("cbe3")}
              className={` text-gray2 border-1 border-gray1 md:px-3 md:p-2 p-1 px-1 h-[1.875rem] md:h-[3.313rem] w-6/12 rounded-[1vh]
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
              
              text-gray2 border-1 border-gray1  md:px-3 md:p-2 p-1 px-1 h-[1.875rem] md:h-[3.313rem] w-6/12 rounded-[1vh]`}
            >
              {languageIs ? "تمويل العقاري 8%" : "CBE 8% initiative"}
            </button>
          </div>
        </div>
        {/* submit button */}
        <div className=" flex justify-center">
          <button
            onClick={handleFilterAction}
            className="md:w-[24.2vw] w-full rounded-[1vh] h-[2.5rem] md:h-[3.813rem] bg-lightGreen text-white"
          >
            {languageIs ? "عرض النتائج" : "Show results"}
          </button>
        </div>
      </div>

      <div className="h-screen absolute w-full bg-[#323232] z-[0] opacity-30" />
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
