// import { paymentMethodData } from "@/Shared/search/dropdown/dataDropdown";
// import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

const Dropdown = ({
  defaultValue,
  data,
  value,
  classNames,
  setValue,
  setValueKey,
  setPriceFrom,
  setPriceTo,
  priceTo,
  priceFrom,
  dataOptions,
  isDisabled,
  baseIcon,
  isSort,
  // setSortKey,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const dropdownContentRef = useRef(null);
  // const [activeButton, setActiveButton] = useState(null);

  // const handleButtonClick = (index) => {
  //   // setActiveButton(index);
  // };
  useEffect(() => {
    const handleClickOutside = (event) => {
      switch (dataOptions) {
        case "text":
          if (
            dropdownButtonRef.current &&
            !dropdownButtonRef.current.contains(event.target)
          ) {
            setMenuIsOpen(false);
          }
          break;
        case "price":
          if (
            dropdownButtonRef.current &&
            !dropdownButtonRef.current.contains(event.target) &&
            dropdownContentRef.current &&
            !dropdownContentRef.current.contains(event.target)
          ) {
            setMenuIsOpen(false);
          }
          break;
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [data, value, language]);

  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleSetOption = (e) => {
    setValue(e.name);
    setValueKey(e.value);
  };

  const renderOptionType = useCallback(
    (dataOptions) => {
      switch (dataOptions) {
        case "text":
          return (
            <div
              className={`animate-appearance-in  md:w-full min-w-[130px] absolute  duration-200 border max-h-[17vh] overflow-y-auto shadow-sm px-2 bg-white`}
            >
              {data?.ar ? (
                language ? (
                  data.ar?.map((option) => (
                    <div
                      key={option.id}
                      className=" p-1 flex flex-col border-b hover:bg-gray-200"
                    >
                      <button
                        onClick={() => handleSetOption(option)}
                        className="w-full py-1"
                      >
                        {option.name}
                      </button>
                    </div>
                  ))
                ) : (
                  data.en?.map((option) => (
                    <div
                      key={option.id}
                      className="p-1 flex flex-col border-b hover:bg-gray-200"
                    >
                      <button
                        onClick={() => handleSetOption(option)}
                        className=" "
                      >
                        {option.name}
                      </button>
                    </div>
                  ))
                )
              ) : (
                <span className="p-1 flex text-gray1">
                  {language ? "حدد نوع العقار" : "first choose property type"}
                </span>
              )}
            </div>
          );
        case "price":
          return (
            <div
              ref={dropdownContentRef}
              className={`animate-appearance-in space-y-1 md:w-full min-w-[130px] absolute  duration-200 border max-h-[17vh] overflow-y-auto shadow-sm py-2 p-1 bg-white`}
            >
              <input
                className="w-full indent-2 border border-gray1 rounded p-1 outline-none"
                type="number"
                name="number"
                value={priceFrom || ""}
                placeholder={language ? "من 0.00     جنية" : "From 0.00 Egy"}
                onChange={(e) => setPriceFrom(e.target.value)}
              />

              <input
                className="w-full indent-2 border border-gray1 rounded p-1 outline-none"
                type="number"
                name="number"
                value={priceTo || ""}
                placeholder={language ? "إلي 0.00     جنية" : "To 0.00 Egy"}
                onChange={(e) => setPriceTo(e.target.value)}
              />
            </div>
          );
      }
    },
    [data, value, router, language]
  );

  return (
    <div className={`${classNames}  min-w-[9.97vw] relative`}>
      <button
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        disabled={isDisabled}
        className={` w-full ${classNames}   text-gray1 text-md flex items-center justify-between
         rounded-[1vh] md:px-3 ${
           isSort ? "  h-[24px] md:h-[40px] " : "h-[40px] md:h-[3.313rem]"
         } px-1 cursor-pointer  ${
           baseIcon
             ? "shadow-md bg-[#F2F8F9]"
             : "border-[1px] border-[#CCCCCC] "
         }`}
      >
        {(value && <span className="text-[#4E4E4E]">{value}</span>) ||
          (defaultValue && <span className="text-gray1">{defaultValue}</span>)}

        {baseIcon || (
          <IoIosArrowDown
            className={`text-black duration-150 ${menuIsOpen && "rotate-180"}`}
          />
        )}
      </button>
      {menuIsOpen && renderOptionType(dataOptions)}
    </div>
  );
};
export default memo(Dropdown);
