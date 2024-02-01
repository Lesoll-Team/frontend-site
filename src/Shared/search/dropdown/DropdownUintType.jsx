import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useSelector } from "react-redux";
const DropdownUintType = ({
  propertyType,
  classNames,
  setValue,
  options,
  value,
  valueDefault,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const Residential = language
    ? options.ar.Residential
    : options.en.Residential;
  const Commercial = language ? options.ar.Commercial : options.en.Commercial;
  const Land = language ? options.ar.Land : options.en.Land;

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

  useEffect(() => {
    // Check if propertyType is empty and setValue accordingly
    if (propertyType === "") {
      setValue("");
    }
  }, [propertyType, setValue]);

  return (
    <div className={`${classNames} relative w-full `}>
      <div
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className="select-none w-full font-semibold text-darkGreen text-md flex items-center justify-between
          focus:outline-lightGreen bg-white border-[3px] rounded-xl p-2 cursor-pointer whitespace-nowrap">
        {value || valueDefault}
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
          className={`absolute animate-appearance-in z-10 w-auto right-0 min-w-[150px] text-center mt-1 bg-white duration-200
           drop-shadow-xl border overflow-y-auto rounded-xl max-h-[150px]`}
        >
          {propertyType == "Residential"||propertyType == "سكني"
            ? Residential.map((option, i) => (
                <p
                  key={i}
                  onClick={() => {
                    setValue(option.value);
                  }}
                  className="text-lg font-semibold text-darkGray py-2 px-3 cursor-pointer  duration-200 hover:bg-slate-100 "
                >
                  {option.name}
                </p>
              ))
            : null}
          {propertyType == "Commercial"||propertyType == "تجاري"
            ? Commercial.map((option, i) => (
                <p
                  key={i}
                  onClick={() => {
                    setValue(option.value);
                  }}
                  className="text-lg font-semibold text-darkGray py-2 px-3 cursor-pointer  duration-200 hover:bg-slate-100 "
                >
                  {option.name}
                </p>
              ))
            : null}
          {propertyType == "Land"||propertyType == "أرض"
            ? Land.map((option, i) => (
                <p
                  key={i}
                  onClick={() => {
                    setValue(option.value);
                  }}
                  className="text-lg font-semibold text-darkGray py-2 px-3 cursor-pointer  duration-200 hover:bg-slate-100 "
                >
                  {option.name}
                </p>
              ))
            : null}

          {propertyType == "" ? (
            <div className=" flex items-center justify-center text-default-500 cursor-no-drop py-14 ">
         {language?" اختار من نوع العقار اولاَ":"Choose a property type first"}   
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default memo(DropdownUintType);
