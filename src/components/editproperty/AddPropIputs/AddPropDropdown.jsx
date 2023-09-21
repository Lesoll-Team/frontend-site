import React, { useEffect, useRef, useState, memo } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useSelector } from "react-redux";
const AddPropDropdown = ({
  title,
  value,
  setValue,
  options,
  disabled = true,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const choices = !language ? options.en : options.ar;
  const [selectoption, setSelectedOption] = useState(value);
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
    if (!disabled) return;
    setMenuIsOpen(!menuIsOpen);
  };
  useEffect(() => {
    setSelectedOption(value);
  }, []);
  // console.log(title, value);
  // const [selectName, setSelectedName] = useState(value);
  return (
    <div className="relative w-full cursor-pointer ">
      <h3 className="text-lg md:text-2xl text-darkGreen font-semibold mb-2">
        {title}
      </h3>

      <button
        disabled={!disabled}
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className={`w-full font-semibold text-darkGreen text-lg flex items-center justify-between gap-6 focus:outline-lightGreen bg-white border-[3px]   rounded-xl p-4   whitespace-nowrap ${
          !disabled && "opacity-50"
        }`}
      >
        {selectoption || title}
        <AiFillCaretDown
          className={`text-darkGreen duration-150 ${
            menuIsOpen && "rotate-180"
          }`}
        />
      </button>
      {menuIsOpen && (
        <div
          className={`absolute animate-appearance-in z-10 w-full  mt-1 bg-white duration-200 drop-shadow-xl border overflow-y-auto rounded-xl max-h-[150px]`}
        >
          {choices.map((option, i) => (
            <p
              key={i}
              onClick={() => {
                setValue(option.value);
                setSelectedOption(option.name);
              }}
              className="text-lg font-semibold text-darkGray py-2 px-3 cursor-pointer  duration-200 hover:bg-slate-100 "
            >
              {option.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(AddPropDropdown);
