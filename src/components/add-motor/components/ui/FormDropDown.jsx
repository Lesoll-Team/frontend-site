import React, { useEffect, useRef, useState, memo } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import styles from "../../styles/addMoto.module.css";
import Error from "@/Shared/ui/Error";
const { addMotorInput, inputError, customScrollbar } = styles;
const FormDropDown = ({
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
        className={`${addMotorInput} ${error && inputError} flex justify-between items-center min-h-[43px] disabled:opacity-75`}
      >
        <p className="text-sm line-clamp-1 overflow-hidden">
          {selected ? (language ? selected?.ar : selected?.en) : ""}
        </p>

        <FaChevronDown
          className={`duration-150 ${menuIsOpen && "rotate-180"} text-darkGray`}
        />
      </button>
      {menuIsOpen && (
        <div
          className={`absolute fade-in border z-50 w-full  top-9 bg-white duration-200 drop-shadow-xl overflow-y-auto rounded max-h-[300px] ${
            language ? "left-0" : "right-0"
          }`}
        >
          {options.map((option, i) => (
            <div key={i} className="w-full">
              <button
                type="button"
                ref={(el) => (dropdownOptionsRef.current[i] = el)}
                onClick={() => handleOptionClick(option)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleOptionClick(option);
                  }
                }}
                className={`dropdown-option  w-full text-start  py-3 px-4 md:px-4 cursor-pointer active:ring-none duration-200 focus:outline-none focus:bg-slate-100 hover:bg-slate-100 ${
                  focusedOptionIndex === i && "bg-gray-200"
                }`}
              >
                {language ? option.ar : option.en}
              </button>
              {i + 1 !== optionLength && <hr className="w-[95%] mx-auto" />}
            </div>
          ))}
        </div>
      )}
      {errorMessage && <Error>{errorMessage}</Error>}
    </div>
  );
};

export default memo(FormDropDown);
