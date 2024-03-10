// import { paymentMethodData } from "@/Shared/search/dropdown/dataDropdown";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

const DropdownPricing = ({
  defaultValue,
  // value,
  setPriceTo,
  priceFrom,
  setPriceFrom,
  priceTo,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

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

  // const handleSetOption = (e) => {
  //   setValue(e.name);
  //   setValueKey(e.value);
  // };
  return (
    <div className="relative ">
      <button
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className=" min-w-[9.97vw] h-[1.875rem] md:h-[3.313rem] text-gray1 text-md flex items-center justify-between
            bg-white border-[1px] border-gray1 rounded-[1vh] md:px-3 md:p-2 p-1 px-1 cursor-pointer whitespace-nowrap
            "
      >
        <span className=" max-w-[200px] line-clamp-1">
          {priceTo || priceFrom
            ? `من ${priceFrom} الي ${priceTo}`
            : defaultValue}
        </span>

        {/* <IoIosArrowDown /> */}

        <IoIosArrowDown
          className={`text-black duration-150 ${menuIsOpen && "rotate-180"}`}
        />
      </button>
      {menuIsOpen && (
        <div
          ref={dropdownContentRef}
          className={`animate-appearance-in space-y-1 md:w-full min-w-[130px] absolute  duration-200 border max-h-[17vh] overflow-y-auto shadow-sm py-2 p-1 bg-white`}
        >
          <input
            className="w-full indent-2 border border-gray1 rounded p-1 outline-none"
            type="number"
            name="number"
            value={priceFrom || ""}
            placeholder={language ? "من 0.00     جنية" : "From 0.00 Egy"}
            onChange={(e) => setPriceFrom(e.target.value)}
          />

          <input
            className="w-full indent-2 border border-gray1 rounded p-1 outline-none"
            type="number"
            name="number"
            value={priceTo || ""}
            placeholder={language ? "إلي 0.00     جنية" : "To 0.00 Egy"}
            onChange={(e) => setPriceTo(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
export default memo(DropdownPricing);
