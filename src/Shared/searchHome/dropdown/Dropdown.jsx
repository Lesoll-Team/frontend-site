import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useSelector } from "react-redux";
const Dropdown = ({ classNames, setValue, options ,valueDefault}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const choices = language ? options.ar : options.en;
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
  const [selectoption, setSelectedOption] = useState();

  const setSelectedOptionBasedOnLanguage = useCallback(() => {
    setSelectedOption(language ? options.ar.name : options.en.name);
  }, [language]);

  useEffect(() => {
    setSelectedOptionBasedOnLanguage();
  }, [language, setSelectedOptionBasedOnLanguage]);
  return (
    <div className={`${classNames} relative w-full `}>
      <div
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className="select-none w-full font-semibold text-darkGreen text-md flex items-center justify-between
          focus:outline-lightGreen bg-white border-[3px] rounded-xl p-2 cursor-pointer whitespace-nowrap">
        {selectoption|| valueDefault}
        <div>
          <AiFillCaretDown
            className={`text-darkGreen duration-150 ${
              menuIsOpen && "rotate-180"
            }`}
          />
        </div>
      </div>
      {menuIsOpen && (
        <div
          className={`absolute animate-appearance-in z-10 w-full  mt-1 bg-white duration-200
           drop-shadow-xl border overflow-y-auto rounded-xl max-h-[150px]`}
        >
          {choices.map((option, i) => (
            <p
              key={i}
              onClick={() => {
                setValue(option.value);
                setSelectedOption(option.name);
              }}
              className="text-lg select-none font-semibold text-darkGray py-2 px-3 cursor-pointer  duration-200 hover:bg-slate-100 "
            >
              {option.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Dropdown);
