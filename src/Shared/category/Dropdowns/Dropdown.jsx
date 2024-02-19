// import { paymentMethodData } from "@/Shared/search/dropdown/dataDropdown";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

const Dropdown = ({
  defaultValue,
  data,
  value,
  classNames,
  setValue,
  setValueKey,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target)
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

  const handleSetOption = (e) => {
    setValue(e.name);
    setValueKey(e.value);
  };
  return (
    <div className={`${classNames}  min-w-[9.97vw] relative`}>
      <button
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className={` w-full  h-[1.875rem] md:h-[3.313rem] text-gray1 text-md flex items-center justify-between
         border-[1px] border-gray1 rounded-[1vh] md:px-3 md:p-2 p-1 px-1 cursor-pointer`}
      >
        {value || defaultValue}
        {/* <IoIosArrowDown /> */}

        <IoIosArrowDown
          className={`text-black duration-150 ${menuIsOpen && "rotate-180"}`}
        />
      </button>
      {menuIsOpen && (
        <div
          className={`animate-appearance-in  md:w-full min-w-[130px] absolute  duration-200 border max-h-[17vh] overflow-auto shadow-sm px-2 bg-white`}
        >
          {language
            ? data.ar.map((option) => (
                <div
                  key={option.id}
                  className=" p-1 flex flex-col border-b hover:bg-gray-200"
                >
                  <button
                    onClick={() => handleSetOption(option)}
                    className="w-full py-1"
                  >
                    {option.name}
                  </button>
                </div>
              ))
            : data.en.map((option) => (
                <div
                  key={option.id}
                  className="p-1 flex flex-col border-b hover:bg-gray-200"
                >
                  <button
                    onClick={() => handleSetOption(option)}
                    className="w-full py-1 "
                  >
                    {option.name}
                  </button>
                </div>
              ))}
        </div>
      )}
    </div>
  );
};
export default memo(Dropdown);
