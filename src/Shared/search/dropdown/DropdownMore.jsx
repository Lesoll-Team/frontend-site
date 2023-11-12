import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { MdOutlineMoreVert } from "react-icons/md";
import {
  paymentMethodData,
  finishingOptionsData,
  propertyTypeData,
  unitTypeData,
  percentageProperty,
  FurnishedOptions
} from "./dataDropdown";
import DropdownRooms from "./DropdownRooms";
import DropdownPrice from "./DropdownPrice";
import { useSelector } from "react-redux";
import DropdownArea from "./DropdownArea";
import DropdownUintType from "./DropdownUintType";
import { IoOptionsOutline } from "react-icons/io5";
const DropdownMore = ({
  classNames,
  propertyType,
  paymentMethod,
  setPaymentMethod,
  setFinishingOptions,
  setUnitType,
  setPropertyType,
  finishingOptions,
  offer,
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
  toArea
  ,setSelectedOption,selectoption,
  // isFurnished,
  // setFurnished,
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
    <div className={`${classNames} relative  cursor-pointer `}>
      <div
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className="w-[30px] font-semibold text-darkGreen text-md flex items-center 
          focus:outline-lightGreen  py-2       "
      >
        <IoOptionsOutline className="text-3xl " />
      </div>
      {menuIsOpen && (
        <div
          ref={dropdownContentRef}
          className={`absolute right-0 p-4 w-[250px] lg:w-[600px] animate-appearance-in z-10  mt-1
           bg-white  duration-200 drop-shadow-xl border  rounded-xl h-auto`}
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 gap-0">
            <Dropdown
              classNames="my-1 block sm:hidden"
              value={propertyType}
              valueDefault={languageIs ? "نوع العقار" : "Property Type"}
              options={propertyTypeData}
              setValue={setPropertyType}
              selectoption={selectoption}
              setSelectedOption={setSelectedOption}
            />

            <DropdownUintType
              classNames="my-1 sm:hidden"
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
              value={finishingOptions}
              setValue={setFinishingOptions}
              options={finishingOptionsData}
              valueDefault={`${languageIs ? "التشطيب" : "Finishing"}`}
              selectoption={selectoption}
              setSelectedOption={setSelectedOption}
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
            {/* <Dropdown
                classNames="my-1"
                value={isFurnished}
                valueDefault={`${
                  languageIs ? "مفروشة" : "Furnished"
                }`}
                options={FurnishedOptions}
                setValue={setFurnished}
                selectoption={selectoption}
              setSelectedOption={setSelectedOption}
              /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(DropdownMore);
