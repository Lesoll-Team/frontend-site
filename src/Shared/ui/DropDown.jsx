import React, { useEffect, useRef, useState, memo } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
const DropDown = ({ selected, setValue, options, disabled, error }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);

  const language = useSelector((state) => state.GlobalState.languageIs);

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
    if (disabled) return;
    setMenuIsOpen(!menuIsOpen);
  };
  useEffect(() => {
    if (error) {
      dropdownButtonRef.current.focus();
    }
  }, [error]);

  return (
    <div className="relative w-full cursor-pointer focus:">
      <button
        type="button"
        disabled={disabled}
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className={`w-full font-semibold  outline-none text-lg flex items-center justify-between gap-6 focus:border-darkGreen bg-white  border-2   rounded-md p-4   whitespace-nowrap ${
          disabled && "opacity-50"
        } ${error && "border-red-500"}`}
      >
        <p className="text-sm">
          {" "}
          {selected ? (language ? selected?.name.ar : selected?.name.en) : ""}
        </p>

        <FaChevronDown
          className={` duration-150 ${menuIsOpen && "rotate-180"}`}
        />
      </button>
      {menuIsOpen && (
        <div
          className={`absolute animate-appearance-in z-10 w-full  mt-1 bg-white duration-200 drop-shadow-xl  overflow-y-auto rounded-md max-h-[300px]`}
        >
          {options.map((option) => (
            <p
              key={option.value}
              onClick={() => {
                setValue(option);
              }}
              className="text-lg font-semibold text-darkGray py-2 px-3 cursor-pointer  duration-200 hover:bg-slate-100 "
            >
              {language ? option.name.ar : option.name.en}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(DropDown);
