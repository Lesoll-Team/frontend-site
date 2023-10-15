import React, { memo, useCallback, useEffect, useRef, useState } from "react";
// import { AiFillCaretDown } from "react-icons/ai";
import Dropdown from "./Dropdown";
import { Checkbox } from "@nextui-org/react";
import { MdOutlineMoreVert } from "react-icons/md";
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
const DropdownMoreHome = ({
  classNames,
  propertyType,
  paymentMethod,
  isFurnished,
  setPaymentMethod,
  setFinishingOptions,
  setUnitType,
  setPropertyType,
  finishingOptions,
  // setFurnished,
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
  toArea,setSelectedOption,selectoption,
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
  // console.log(paymentMethod);
  // let [countBedrooms, setCountBedrooms] = useState(0);
  // let [countBathrooms, setCountBathroom] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownContentRef = useRef(null);
  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  // const [value, setValue] = useState("");
  const languageIs = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className={`${classNames} relative w-full cursor-pointer `}>
      <div
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className="w-[40px] font-semibold text-darkGreen text-md flex items-center justify-between
          focus:outline-lightGreen bg-white    rounded-xl p-1   whitespace-nowrap"
      >
        <MdOutlineMoreVert className="text-3xl " />
      </div>
      {menuIsOpen && (
        <div
          ref={dropdownContentRef}
          className={`absolute right-0 p-4 w-[250px] lg:w-[600px] animate-appearance-in z-10  mt-1
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
            <Dropdown
              classNames="my-1"
              valueDefault={`${languageIs ? "طريقة السداد" : "Payment Method"}`}
              value={paymentMethod}
              setValue={setPaymentMethod}
              options={paymentMethodData}
              selectoption={selectoption}
              setSelectedOption={setSelectedOption}
            />
            <Dropdown
              classNames="my-1"
              selectoption={selectoption}
              setSelectedOption={setSelectedOption}
              value={finishingOptions}
              setValue={setFinishingOptions}
              options={finishingOptionsData}
              valueDefault={`${languageIs ? "التشطيب" : "Finishing"}`}
            />
            {/* <div className="lg:col-span-2 col-span-1 grid lg:grid-cols-2  grid-cols-1"> */}
            {/* <div
              className={`${
                paymentMethod == "Real_Estate_Finance" ? "" : "hidden"
              }`}
            > */}
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
            {/* </div> */}
            {/* <div className="flex items-center justify-center">
              <span className="font-bold mx-3 select-none ">
                {languageIs ? "مفروشة" : "Furnished"}
              </span>
              <Checkbox
                className="my-1 "
                size="lg"
                onClick={() => setFurnished(!isFurnished)}
                isSelected={isFurnished}
              />
            </div> */}
            {/* </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(DropdownMoreHome);
