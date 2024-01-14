import React, { memo, useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import {
  paymentMethodData,
  finishingOptionsData,
  propertyTypeData,
  unitTypeData,
  percentageProperty,
} from "./dataDropdown";
import DropdownRooms from "./DropdownRooms";
import DropdownPrice from "./DropdownPrice";
import { useSelector } from "react-redux";
import DropdownArea from "./DropdownArea";
import DropdownUintType from "./DropdownUintType";
import { CgOptions } from "react-icons/cg";
const DropdownMoreHome = ({
  classNames,
  propertyType,
  paymentMethod,
  offer,
  setPaymentMethod,
  setFinishingOptions,
  setUnitType,
  setPropertyType,
  finishingOptions,
  unitType,
  countBedrooms,
  countBathrooms,
  setCountBedrooms,
  setCountBathroom,
  setPropertyFinance,
  propertyFinance,
  fromPrice,
  setFromPrice,
  toPrice,
  setToPrice,
  setFromArea,
  fromArea,
  setToArea,
  toArea,
  setSelectedOption,
  selectoption,
  setKeywords,
  keywords,
}) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target) &&
        dropdownContentRef.current &&
        !dropdownContentRef.current.contains(event.target)
      ) {
        setMenuIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownContentRef = useRef(null);
  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const languageIs = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className={`${classNames} relative w-full cursor-pointer `}>
      <div
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className=" font-semibold text-darkGreen text-md flex items-center justify-center
          focus:outline-lightGreen   rounded-xl    whitespace-nowrap"
      >
        {/* <IoOptionsOutline className="text-3xl " /> */}
        <CgOptions className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]  lg:w-[26px] lg:h-[26px]  xl:w-[32px] xl:h-[32px]  2xl:w-[40px] 2xl:h-[40px]  text-grayText " />
      </div>
      {menuIsOpen && (
        <div
          ref={dropdownContentRef}
          className={`absolute ${
            languageIs ? "left-0" : "right-0"
          }  p-4 w-[250px] lg:w-[600px] animate-appearance-in z-10  mt-1
           bg-white  duration-200 drop-shadow-xl border  rounded-xl h-auto`}
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 gap-0">
            <Dropdown
              classNames="my-1"
              value={propertyType}
              valueDefault={languageIs ? "نوع العقار" : "Property Type"}
              options={propertyTypeData}
              setValue={setPropertyType}
              selectoption={selectoption}
              setSelectedOption={setSelectedOption}
            />

            <DropdownUintType
              classNames="my-1 "
              value={unitType}
              options={unitTypeData}
              propertyType={propertyType}
              setValue={setUnitType}
              valueDefault={`${languageIs ? "نوع الوحدة" : "Unit Type"}`}
            />

            <DropdownRooms
              classNames="my-1 "
              name={`${
                languageIs ? "الغرف & الحمامات " : "Bedrooms & Bathrooms"
              }`}
              setCountBedrooms={setCountBedrooms}
              setCountBathroom={setCountBathroom}
              countBedrooms={countBedrooms}
              countBathrooms={countBathrooms}
            />
            <DropdownPrice
              name={`${languageIs ? "السعر " : "Price"}`}
              classNames="my-1"
              valueToPrice={toPrice}
              setFromPrice={setFromPrice}
              setToPrice={setToPrice}
              valueFromPrice={fromPrice}
            />
            <DropdownArea
              name={`${languageIs ? "المساحة " : "Area"}`}
              classNames="my-1"
              setFromArea={setFromArea}
              valueFromArea={fromArea}
              setToArea={setToArea}
              valueToArea={toArea}
            />
            <div
              className={
                offer == "للايجار" || offer == "For Rent" ? "hidden" : ""
              }
            >
              <Dropdown
                classNames="my-1"
                valueDefault={`${
                  languageIs ? "طريقة السداد" : "Payment Method"
                }`}
                value={paymentMethod}
                setValue={setPaymentMethod}
                options={paymentMethodData}
                selectoption={selectoption}
                setSelectedOption={setSelectedOption}
              />
            </div>

            <Dropdown
              classNames="my-1"
              selectoption={selectoption}
              setSelectedOption={setSelectedOption}
              value={finishingOptions}
              setValue={setFinishingOptions}
              options={finishingOptionsData}
              valueDefault={`${languageIs ? "التشطيب" : "Finishing"}`}
            />
            <div
              className={
                offer == "للايجار" || offer == "For Rent" ? "hidden" : ""
              }
            >
              <Dropdown
                classNames="my-1"
                value={propertyFinance}
                valueDefault={`${
                  languageIs ? "التمويل العقاري" : "Mortgage listings"
                }`}
                options={percentageProperty}
                setValue={setPropertyFinance}
                selectoption={selectoption}
                setSelectedOption={setSelectedOption}
              />
            </div>
          </div>
          <input
            dir={languageIs ? "rtl" : "ltr"}
            className="w-full placeholder-orange-400 border-lightOrange active:outline-none hover:outline-none focus:outline-none  p-[9px] border shadow-md rounded-md mt-2 focus:ring "
            // size="md"
            name="Search"
            // isClearable
            autocomplete="off"
            placeholder={
              languageIs
                ? "كلمة بحث : أرض , إستثمار , ايجار يومى...  "
                : "Search by Keywords: e.g. investment, Daily rent, land..."
            }
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default memo(DropdownMoreHome);
