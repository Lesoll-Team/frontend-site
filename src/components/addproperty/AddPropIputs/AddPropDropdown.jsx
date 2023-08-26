import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const AddPropDropdown = ({ title, value, setValue, options }) => {
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

  return (
    <div className="relative w-full ">
      <h3 className="text-lg md:text-2xl text-darkGreen font-bold mb-2">
        {title}
      </h3>
      <button
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        className="w-full font-semibold text-darkGreen text-lg flex items-center justify-between gap-6 focus:outline-lightGreen bg-white  border-lightGreen rounded-xl p-4 drop-shadow-xl  whitespace-nowrap"
      >
        {value || title}
        <AiFillCaretDown
          className={`text-darkGreen duration-150 ${
            menuIsOpen && "rotate-180"
          }`}
        />
      </button>
      {menuIsOpen && (
        <div
          className={`absolute z-10 w-full  mt-1 bg-white duration-200 drop-shadow-2xl border overflow-y-auto rounded-xl max-h-[200px]`}
        >
          {options.map((option, i) => (
            <p
              key={i}
              onClick={() => setValue(option)}
              className="text-lg font-semibold text-darkGray py-2 px-3 cursor-pointer  duration-200 hover:bg-slate-100 "
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddPropDropdown;
