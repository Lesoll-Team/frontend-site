import { propertyFromSearch } from "@/redux-store/features/searchSlice";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
const DropdownSort = ({ classNames, options ,valueDefault,InputKeywords}) => {
  const dispatch = useDispatch();

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

  const handelSorted=(value)=>{
    // e.preventDefault();
    InputKeywords.sortProp = value;
    dispatch(propertyFromSearch({ InputKeywords, page: 1 }));
    // console.log("done");
    }
  //     const handleSubmitSearch = (e) => {
  //   e.preventDefault();
  //   const InputKeywords = {
  //     saleOptions,
  //     propertyType,
  //     unitType,
  //     paymentMethod,
  //     countBathrooms,
  //     countBedrooms,
  //     isFurnished,
  //     finishingOptions,
  //     toPrice,
  //     fromPrice,
  //     keywords,
  //     fromArea,
  //     toArea,
  //     propertyFinance,
  //   };
  //   dispatch(propertyFromSearch({ InputKeywords, page: 1 }));
  //   dispatch(setInputKeywords(InputKeywords));
  //   router.push("/search");
  // };
  return (
    <div className={`${classNames} relative  `}>
      <div
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}

        className="w-full font-semibold text-darkGreen text-md flex items-center justify-between
          focus:outline-lightGreen bg-white border-[3px]  rounded-xl p-3 cursor-pointer whitespace-nowrap">
        {selectoption||valueDefault}
        <div >{/**className={dropdownIcons?"":"hidden"} */}
          <AiFillCaretDown
            className={`text-darkGreen duration-150 ${
              menuIsOpen && "rotate-180"
            }`}
          />
        </div>
      </div>
      {menuIsOpen && (
        <div
          className={`absolute animate-appearance-in z-10 w-[140px]  mt-1  duration-200
           drop-shadow-xl border right-0 overflow-y-auto rounded-xl bg-white text-center max-h-[150px]`}
        >
        {/**absolute right-0 p-4 w-[250px] lg:w-[600px] animate-appearance-in z-10  mt-1
           bg-white  duration-200 drop-shadow-xl border  rounded-xl h-auto */}
          {choices.map((option, i) => (
            <p
              key={i}
              onClick={() => {
                // setValue(option.value);
                setSelectedOption(option.name);
                handelSorted(option.value)
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

export default memo(DropdownSort);
