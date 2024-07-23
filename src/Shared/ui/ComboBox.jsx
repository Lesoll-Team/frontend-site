import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";
import { useSelector } from "react-redux";
import styles from "@/components/newAddProperty/styles/addProperrty.module.css";
const { addPropInput, addPropInputError } = styles;
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
  const language = useSelector((state) => state.GlobalState.languageIs);

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
    if (showOptions && filteredOptions && filteredOptions?.length > 0) {
      const highlightedOption = dropdownRef.current.children[focusedIndex];
      if (highlightedOption) {
        highlightedOption.scrollIntoView({
          behavior: "instant",
          block: "nearest",
          inline: "start",
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
        prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex,
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
    <div className=" w-full space-y-2">
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
            `${addPropInput} ${error && addPropInputError}`,
            inputStyle,
          )}
        />
        {showOptions && (
          <div
            ref={dropdownRef}
            className={
              "absolute fade-in border z-10 mt-[1px] w-full bg-white duration-200 drop-shadow-xl overflow-y-auto rounded-md max-h-[300px]"
            }
          >
            {filteredOptions && filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleOptionClick(option)}
                    type="button"
                    className={cn(
                      `text-lg w-full text-start font-semibold text-darkGray py-2 px-5 md:px-6 cursor-pointer active:ring-none duration-200 focus:outline-none focus:bg-slate-100 hover:bg-slate-100 ${
                        focusedIndex === index ? "bg-gray-200" : ""
                      }`,
                      optionStyle,
                    )}
                  >
                    {renderItem(option)}
                  </button>
                  <hr className="w-[95%] mx-auto" />
                </div>
              ))
            ) : (
              <div className="w-full grid place-content-center min-h-[150px]">
                <p>{language ? "لا توجد نتائج مشابهة" : "No Result"}</p>
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
