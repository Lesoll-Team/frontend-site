import { getLangBoolean } from "@/utils/getLangBoolean";
import React, { useEffect, useRef, useState, memo } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDown = ({
  selected,
  setValue,
  options,
  disabled,
  error,
  errorMessage,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
  const dropdownButtonRef = useRef(null);
  const dropdownOptionsRef = useRef([]);

  const language = getLangBoolean();

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
    setFocusedOptionIndex(-1); // Reset focused option index when menu is opened
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && menuIsOpen) {
      e.preventDefault();
      if (focusedOptionIndex < options.length - 1) {
        setFocusedOptionIndex((prevIndex) => prevIndex + 1);
      }
    } else if (e.key === "ArrowUp" && menuIsOpen) {
      e.preventDefault();
      if (focusedOptionIndex > 0) {
        setFocusedOptionIndex((prevIndex) => prevIndex - 1);
      }
    } else if (e.key === "Enter" && menuIsOpen) {
      e.preventDefault();
      if (focusedOptionIndex !== -1) {
        dropdownOptionsRef.current[focusedOptionIndex].click();
      }
    }
  };

  useEffect(() => {
    if (error) {
      dropdownButtonRef.current.focus();
    }
  }, [error]);

  const handleOptionClick = (option) => {
    setValue(option);
    setMenuIsOpen(false);
    setFocusedOptionIndex(-1);
  };
  const optionLength = options.length;
  return (
    <div className="relative w-full cursor-pointer space-y-2">
      <button
        type="button"
        disabled={disabled}
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        onKeyDown={handleKeyDown}
        className={`w-full font-semibold outline-none overflow-hidden  h-12  flex items-center justify-between  focus:border-lightGreen bg-white border-2 rounded-md px-4 py-3  ${
          disabled && "bg-slate-200"
        } ${error && "border-red-500 focus:border-red-500"}`}
      >
        <p className="text-sm line-clamp-1 overflow-hidden">
          {selected ? (language ? selected?.name?.ar : selected?.name?.en) : ""}
        </p>

        <FaChevronDown
          className={`duration-150 ${menuIsOpen && "rotate-180"}`}
        />
      </button>
      {menuIsOpen && (
        <div
          className={`absolute fade-in border z-50 w-full top-10 bg-white duration-200 drop-shadow-xl overflow-y-auto rounded-md max-h-[300px] ${
            language ? "left-0" : "right-0"
          }`}
        >
          {options.map((option, i) => (
            <div key={option.value} className="w-full">
              <button
                ref={(el) => (dropdownOptionsRef.current[i] = el)}
                type="button"
                onClick={() => handleOptionClick(option)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleOptionClick(option);
                  }
                }}
                className={`dropdown-option text-lg w-full text-start  font-semibold text-darkGray py-2 px-5 md:px-8 cursor-pointer active:ring-none duration-200 focus:outline-none focus:bg-slate-100 hover:bg-slate-100 ${
                  focusedOptionIndex === i && "bg-gray-200"
                }`}
              >
                {language ? option.name.ar : option.name.en}
              </button>
              {i + 1 !== optionLength && <hr className="w-[90%] mx-auto" />}
            </div>
          ))}
        </div>
      )}
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default memo(DropDown);
