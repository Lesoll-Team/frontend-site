
import { useSelectListByKey, useSendFilterSearch } from "@/components/category/shared/FilterHooks";
import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import { useRouter } from "next/router";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { GoXCircleFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = ({
  defaultValue,
  data,
  value,
  classNames,
  isDisabled,
  baseIcon,
  isSort,
  stateName,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const dispatch = useDispatch();
  const [dropdownName, setDropdownName] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);
  const nameIs = useSelectListByKey({ key: value, language, data });
  const {
    categoryType,
    saleOption,
    unitTypes,
    locationGovernorate,
    locationRegion,
    priceFrom,
    priceTo,
    numBathrooms,
    numBedrooms,
    areaFrom,
    areaTo,
    finishedOption,
    paymentType,
    sort,
    propFinancing,
    searchKeyword,
  } = useSelector((state) => state.Category);
  const route = useSendFilterSearch({
    filterInput: {
      category: categoryType,
      saleOptions: saleOption,
      unitType: unitTypes,
      governorate: locationGovernorate,
      region: locationRegion,
    },
    queryInput: {
      priceFrom,
      page: 1,
      priceTo,
      numBathrooms,
      numBedrooms,
      areaFrom,
      areaTo,
      finishedOption: finishedOption,
      paymentType,
      sort: sort,
      mortgage: propFinancing,
      keyword: searchKeyword,
    },
  });
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
  }, [data, value, language]);

  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleSetOption = (e) => {
    if (stateName) {
      const payload = {};
      payload[stateName] = e.value;
      dispatch(updateAllStates(payload));

    }

  };

  const renderOptionType = useCallback(
    () => {
      return (
        <div
          className={`animate-appearance-in  md:w-full min-w-[130px] absolute  duration-200 border max-h-[22vh] overflow-y-auto shadow-sm px-2 bg-white`}
        >
          {data ? data[language && 'ar' || 'en'].map((option) => (
            <div
              key={option.id}
              className="p-1 flex flex-col border-b hover:bg-gray-200"
            >
              <button
                dir={language && 'rtl'}
                onClick={() => handleSetOption(option)}
                className="w-full text-start py-1"
              >
                {option.name}
              </button>
            </div>
          ))
            : (
              <span className="p-1 py-4 flex text-gray1">
                {language ? "حدد نوع العقار" : "first choose property type"}
              </span>
            )}
        </div>
      );

    },
    [data, value, router, language]
  );
  const handleDeleteOption = () => {
    if (stateName) {
      const payload = {};
      payload[stateName] = null;
      dispatch(updateAllStates(payload));
    }
  };


  const handleSelectList = useCallback(() => {
    if (nameIs) {
      setDropdownName(language ? nameIs.name : nameIs.value.split("_").join(" "))
    }



  }, [language, data, value]);

  useEffect(() => {
    handleSelectList();
  }, [handleSelectList]);
  useEffect(() => {
    if (isSort) {
      router.push(route);
    }
  }, [sort]);
  return (
    <div className={`${classNames}  min-w-[9.97vw] relative`}>
      <button
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        disabled={isDisabled}
        className={`  ${classNames}   text-gray1 lg-text flex items-center justify-between
         rounded-[1vh] md:px-3 ${isSort
            ? " md:w-[150px] w-[80px]  h-[24px] md:h-[40px] "
            : "w-full h-[40px] md:h-[3.313rem]"
          } px-1 cursor-pointer border-[1px] border-[#CCCCCC] `}
      >
        {/**${isSort
            ? "shadow-md bg-[#F2F8F9]"
            : "border-[1px] border-[#CCCCCC] "
          } */}
        {(value && (
          <span className="text-[#4E4E4E]">
            {/* {language ? value.name : value.value} */}
            {dropdownName}
          </span>
        )) ||
          (defaultValue && <span className="text-gray1">{defaultValue}</span>)}
        {value ? (
          <div onClick={handleDeleteOption}>
            <GoXCircleFill className="text-2xl" />
          </div>
        ) : (
          baseIcon || (
            <IoIosArrowDown
              className={`text-black duration-150 ${menuIsOpen && "rotate-180"
                }`}
            />
          )
        )}
      </button>
      {menuIsOpen && renderOptionType()}
    </div>
  );
};
export default memo(Dropdown);
