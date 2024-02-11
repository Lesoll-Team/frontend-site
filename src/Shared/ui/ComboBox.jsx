import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";
const ComboBox = ({
  filteredOptions,
  onSelect,
  inputValue,
  setInputValue,
  placeholder,
  renderItem,
  disabled,
  error,
  errorMessage,
  inputStyle,
  optionStyle,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showOptions && !event.target.closest(".combo-box")) {
        setShowOptions(false);
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [showOptions]);

  useEffect(() => {
    if (error) {
      inputRef.current.focus();
    }
  }, [error]);
  useEffect(() => {
    if (showOptions && filteredOptions.length > 0) {
      const highlightedOption = dropdownRef.current.children[focusedIndex];
      if (highlightedOption) {
        highlightedOption.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [focusedIndex, showOptions, filteredOptions]);
  useEffect(() => {
    if (!inputValue) {
      setShowOptions(false);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowOptions(true);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (focusedIndex !== -1) {
        onSelect(filteredOptions[focusedIndex]);
        setShowOptions(false);
        setInputValue("");
        setFocusedIndex(-1);
      }
    }
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setShowOptions(false);
    setInputValue("");
    setFocusedIndex(-1);
  };

  return (
    <div className=" w-full">
      <div className="relative w-full">
        <input
          autoComplete="off"
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            `w-full text-lg font-semibold disabled:bg-white  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60 border-2 rounded-md p-3 py-2 ${
              error && "border-red-500 focus:border-red-500 "
            }`,
            inputStyle
          )}
        />
        {showOptions && (
          <div
            ref={dropdownRef}
            className={
              "absolute fade-in border z-10 mt-[1px] w-full bg-white duration-200 drop-shadow-xl overflow-y-auto rounded-md max-h-[300px]"
            }
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleOptionClick(option)}
                    type="button"
                    className={cn(
                      `text-lg w-full text-center font-semibold text-darkGray py-2 px-3 cursor-pointer active:ring-none duration-200 focus:outline-none focus:bg-slate-100 hover:bg-slate-100 ${
                        focusedIndex === index ? "bg-gray-200" : ""
                      }`,
                      optionStyle
                    )}
                  >
                    {renderItem(option)}
                  </button>
                  <hr className="w-[95%] mx-auto" />
                </div>
              ))
            ) : (
              <div className="w-full grid place-content-center min-h-[150px]">
                <p>No results</p>
              </div>
            )}
          </div>
        )}
      </div>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};

export default ComboBox;
