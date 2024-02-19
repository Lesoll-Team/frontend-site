// import { paymentMethodData } from "@/Shared/search/dropdown/dataDropdown";
import React, { memo, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { SearchDropdownLocation } from "../SearchDropdownLocation";

const DropdownSearchLocation = ({
  output,
  setKeywords,
  setLocationGovernorate,
  setLocationRegion,
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
      )
        setMenuIsOpen(false);
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
    <div className=" mx-1 w-full h-full  relative">
      <button
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className="w-full h-full  text-white text-md flex items-center justify-between
            bg-lightGreen rounded-[0.5vh] md:px-3 px-1 cursor-pointer whitespace-nowrap"
        //min-w-[9.97vw] h-[1.875rem] md:h-[3.313rem] rounded-[1vh] md:px-3 md:p-2 p-1 px-1
      >
        <span className="flex items-center gap-x-5 ">
          {/* <FaLocationCrosshairs /> */}
          {/* <ImLocation2 className="text-[20px]" /> */}
          <IoLocationSharp className="text-[20px]" />
          {output}
        </span>
        <IoIosArrowDown
          className={`text-white duration-150 ${menuIsOpen && "rotate-180"}`}
        />
      </button>
      {menuIsOpen && (
        <div
          ref={dropdownContentRef}
          className={` bg-white shadow-sm w-full py-[1vh]  animate-appearance-in duration-200 absolute`}
        >
          <SearchDropdownLocation
            //   keywords={keywords}
            setKeywords={setKeywords}
            setLocationGovernorate={setLocationGovernorate}
            setLocationRegion={setLocationRegion}
          />
        </div>
      )}
    </div>
  );
};
export default memo(DropdownSearchLocation);
