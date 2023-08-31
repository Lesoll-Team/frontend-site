import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Dropdown from "./Dropdown";
import { Checkbox } from "@nextui-org/react";
import {
  paymentMethod,
  finishingOptions,
  propertyType,
  unitType,
} from "./dataDropdown";
import DropdownRooms from "./DropdownRooms";

//Listings Available for Mortgage
const DropdownMore = ({ classNames, name, options }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
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
          className={`absolute right-0 p-4 w-[250px] lg:w-[600px] animate-appearance-in z-10  mt-1
           bg-white duration-200 drop-shadow-xl border overflow-y-auto rounded-xl max-h-[700px] min-h-[350px]`}
        >
          <div className="w-full flex">
            <Dropdown
              value={value}
              setValue={setValue}
              options={paymentMethod}
            />
         
            <Dropdown
              value={value}
              setValue={setValue}
              options={finishingOptions}
            />
          </div>
          <div className="flex items-center ">
          <br/>
          <br/>
            <Dropdown
              classNames=" max-w-[200px] lg:hidden block "
              value={value}
              options={unitType}
              setValue={setValue}
            />
            <div className="flex ">
              <span className="font-bold lg:mx-3 mx-0">Furnished</span>
              <div className="lg:mx-3 mx-0">
                <Checkbox size="lg" />
              </div>
            </div>
          </div>

<div className="grid grid-cols-1">
<Dropdown
            classNames="lg:hidden block  max-w-[200px]"
            value={value}
            options={propertyType}
            setValue={setValue}
          />
          <DropdownRooms
            classNames="lg:hidden block  max-w-[200px]"
            name="Bedroom & Bathroom"
          />
</div>
        </div>
      )}
    </div>
  );
};

export default memo(DropdownMore);
