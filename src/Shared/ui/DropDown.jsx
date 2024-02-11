import React, { useEffect, useRef, useState, memo } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
const DropDown = ({
  selected,
  setValue,
  options,
  disabled,
  error,
  errorMessage,
}) => {
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
    <div className="relative w-full cursor-pointer space-y-2 ">
      <button
        type="button"
        disabled={disabled}
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className={`w-full font-semibold  outline-none text-lg flex items-center justify-between gap-6 focus:border-lightGreen bg-white  border-2   rounded-md p-4   whitespace-nowrap ${
          disabled && "bg-slate-200"
        } ${error && "border-red-500 focus:border-red-500"}`}
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
          className={`absolute  fade-in border z-10 w-[70%] md:w-[50%]  top-12 bg-white duration-200 drop-shadow-xl  overflow-y-auto rounded-md max-h-[300px] ${
            language ? "left-0" : "right-0"
          }`}
        >
          {options.map((option, i) => (
            <div key={option.value}>
              <button
                type="button"
                onClick={() => {
                  setValue(option);
                }}
                className="text-lg w-full text-center font-semibold text-darkGray py-2 px-3 cursor-pointer active:ring-none   duration-200 focus:outline-none focus:bg-slate-100  hover:bg-slate-100 "
              >
                {language ? option.name.ar : option.name.en}
              </button>
              <hr className="mx-auto w-[95%]" />
            </div>
          ))}
        </div>
      )}
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default memo(DropDown);
