import { Button, Input } from "@nextui-org/react";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
// import { useSelector } from "react-redux";
const DropdownArea = ({
  classNames,
  name,
  valueToPrice,
  valueFromPrice,
  setFromPrice,
  setToPrice,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownContentRef = useRef(null);
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

  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <div className={`${classNames} relative w-full  `}>
      <div
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className="w-full font-semibold text-darkGreen text-md flex items-center justify-between
          focus:outline-lightGreen select-none bg-white border-[3px] cursor-pointer  rounded-xl p-2   whitespace-nowrap"
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
          className={`absolute right-0 w-[200px] lg:w-[260px] animate-appearance-in z-10  mt-1
           bg-white duration-200 drop-shadow-xl border overflow-y-auto rounded-xl max-h-[550px]`}
        >
          <div className="w-full  p-4 flex flex-col items-center ">
            <Input
              className="pb-4"
              type="number"
              placeholder="0.00"
              value={valueFromPrice}
              labelPlacement="outside"
              onChange={(e) => setFromPrice(e.target.value)}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">From:</span>
                </div>
              }
            />
            <Input
              className="pb-4"
              type="number"
              placeholder="0.00"
              labelPlacement="outside"
              value={valueToPrice}
              onChange={(e) => setToPrice(e.target.value)}
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">To:</span>
                </div>
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(DropdownArea);