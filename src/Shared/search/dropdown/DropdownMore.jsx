import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Dropdown from "./Dropdown";
import { Checkbox } from "@nextui-org/react";
import {
  paymentMethodData,
  finishingOptionsData,
  propertyTypeData,
  unitTypeData,
} from "./dataDropdown";
import DropdownRooms from "./DropdownRooms";

//Listings Available for Mortgage
const DropdownMore = ({
  classNames,
  name,
  propertyType,
  paymentMethod,
  isFurnished,
  setPaymentMethod,
  setFinishingOptions,
  setUnitType,
  setPropertyType,
  finishingOptions,
  setFurnished,
  unitType,
  countBedrooms,
  countBathrooms,
  setCountBedrooms,
  setCountBathroom,
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

  // let [countBedrooms, setCountBedrooms] = useState(0);
  // let [countBathrooms, setCountBathroom] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownContentRef = useRef(null);
  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const [value, setValue] = useState("");

  return (
    <div className={`${classNames} relative w-full cursor-pointer `}>
      <div
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className="w-full font-semibold text-darkGreen text-md flex items-center justify-around
          focus:outline-lightGreen bg-white border-[3px]   rounded-xl p-2   whitespace-nowrap"
      >
        {name}
        <AiFillCaretDown
          className={`text-darkGreen duration-150 ${
            menuIsOpen && "rotate-180"
          }`}
        />
      </div>
      {menuIsOpen && (
        <div
          ref={dropdownContentRef}
          className={`absolute right-0 p-4 w-[250px] lg:w-[600px] animate-appearance-in z-10  mt-1
           bg-white duration-200 drop-shadow-xl border overflow-y-auto rounded-xl max-h-[700px] min-h-[350px]`}
        >
          <div className="w-full flex">
            <Dropdown
              valueDefault={'payment'}
              value={paymentMethod}
              setValue={setPaymentMethod}
              options={paymentMethodData}
            />

            <Dropdown
              value={finishingOptions}
              setValue={setFinishingOptions}
              options={finishingOptionsData}
              valueDefault="Finishing"
            />
          </div>
          <div className="flex items-center ">
            <br />
            <br />
            <Dropdown
              classNames=" max-w-[200px] lg:hidden block "
              value={unitType}
              valueDefault="Unit Type"
              options={unitTypeData}
              setValue={setUnitType}
            />
            <div className="flex ">
              <span className="font-bold lg:mx-3 mx-0">Furnished</span>
              <div className="lg:mx-3 mx-0">
                <Checkbox
                  size="lg"
                  onClick={() => setFurnished(!isFurnished)}
                  isSelected={isFurnished}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <Dropdown
              classNames="lg:hidden block  max-w-[200px]"
              value={propertyType}
              valueDefault="Property Type"
              options={propertyTypeData}
              setValue={setPropertyType}
            />
            <DropdownRooms
              classNames="lg:hidden block  max-w-[200px]"
              name="Bedroom & Bathroom"
              setCountBedrooms={setCountBedrooms}
              setCountBathroom={setCountBathroom}
              countBedrooms={countBedrooms}
              countBathrooms={countBathrooms}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(DropdownMore);
