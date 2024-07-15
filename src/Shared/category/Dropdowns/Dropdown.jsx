import {
  useSelectListByKey,
  useSendFilterSearch,
} from "@/components/category/shared/FilterHooks";
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
  setStates,
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
    // sort,
    propFinancing,
    searchKeyword,
  } = useSelector((state) => state.Category);

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
      if (isSort) {
        const route = useSendFilterSearch({
          filterInput: {
            saleOptions: saleOption,
            category: categoryType,
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
            sort: e.value,
            mortgage: propFinancing,
            keyword: searchKeyword,
          },
        });
        router.push(route);
      }
    }
    if (setStates) {
      setStates(e.value);
    }
  };

  const renderOptionType = useCallback(() => {
    return (
      <div
        className={`animate-appearance-in w-full min-w-[160px] absolute  duration-200 border max-h-[22vh] overflow-y-auto shadow-sm px-2 bg-white`}
      >
        {data ? (
          data[(language && "ar") || "en"].map((option) => (
            <div
              key={option.id}
              className="p-1 flex flex-col border-b hover:bg-gray-200"
            >
              <button
                dir={language && "rtl"}
                onClick={() => handleSetOption(option)}
                className="w-full text-start py-1"
              >
                {option.name}
              </button>
            </div>
          ))
        ) : (
          <span className="p-1 py-4 flex text-gray1">
            {language ? "حدد نوع العقار" : "first choose property type"}
          </span>
        )}
      </div>
    );
  }, [data, value, router, language]);
  const handleDeleteOption = () => {
    if (stateName) {
      const payload = {};
      payload[stateName] = null;
      dispatch(updateAllStates(payload));
      if (isSort) {
        const route = useSendFilterSearch({
          filterInput: {
            saleOptions: saleOption,
            category: categoryType,
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
            sort: null,
            mortgage: propFinancing,
            keyword: searchKeyword,
          },
        });
        router.push(route);
      }
    }
    if (setStates) {
      setStates("");
    }
  };

  const handleSelectList = useCallback(() => {
    if (nameIs) {
      setDropdownName(
        language ? nameIs.name : nameIs.value.split("_").join(" "),
      );
    }
  }, [language, data, value]);

  useEffect(() => {
    handleSelectList();
  }, [handleSelectList]);

  return (
    <div className={`${classNames} ${isSort ?? "min-w-[9.97vw]"}  relative`}>
      <button
        ref={dropdownButtonRef}
        onClick={handleMenuOpen}
        disabled={isDisabled}
        className={`  ${classNames}   text-gray1 lg-text flex items-center justify-between
         rounded-[1vh] md:px-3 ${
           isSort
             ? " md:min-w-[110px] min-w-[90px]  h-[34px] md:h-[40px] "
             : "w-full h-[40px] md:h-[3.313rem]"
         } px-[9px] cursor-pointer border-[1px] border-[#CCCCCC] `}
      >
        {(value && <span className="text-[#4E4E4E]">{dropdownName}</span>) ||
          (defaultValue && <span className="text-gray1">{defaultValue}</span>)}
        {value ? (
          <div onClick={handleDeleteOption}>
            <GoXCircleFill className="md:text-2xl text-xl" />
          </div>
        ) : (
          <IoIosArrowDown
            className={`text-black duration-150 ${menuIsOpen && "rotate-180"}`}
          />
        )}
      </button>
      {menuIsOpen && renderOptionType()}
    </div>
  );
};
export default memo(Dropdown);
