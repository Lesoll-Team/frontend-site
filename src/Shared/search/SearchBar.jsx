import { useCallback, useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import {
  saleOptionsData,
  propertyTypeData,
  unitTypeData,
  sortedData,
} from "./dropdown/dataDropdown";
import { LuSearch } from "react-icons/lu";
import Dropdown from "./dropdown/Dropdown";
import DropdownMore from "./dropdown/DropdownMore";
// import DropdownPrice from "./dropdown/DropdownPrice";
// import DropdownRooms from "./dropdown/DropdownRooms";
import {
  propertyFromSearch,
  setInputKeywords,
} from "../../redux-store/features/searchSlice";
import DropdownUintType from "./dropdown/DropdownUintType";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FaSortNumericDown } from "react-icons/fa";
import DropdownSort from "./dropdown/DropdownSort";

export function SearchBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [saleOptions, setSaleOptions] = useState("");
  const languageIs = useSelector((state) => state.GlobalState.languageIs);

  const [fromPrice, setFromPrice] = useState(0.0);
  const [toPrice, setToPrice] = useState(0.0);

  const [fromArea, setFromArea] = useState(0);
  const [toArea, setToArea] = useState(0);

  let [countBedrooms, setCountBedrooms] = useState(0);
  let [countBathrooms, setCountBathroom] = useState(0);
  let [propertyFinance, setPropertyFinance] = useState("");
  let [paymentMethod, setPaymentMethod] = useState("");
  let [keywords, setKeywords] = useState("");
  let [finishingOptions, setFinishingOptions] = useState("");
  let [unitType, setUnitType] = useState("");
  let [propertyType, setPropertyType] = useState("");
  let [sortProp, setSortProp] = useState("");
  let [isFurnished, setFurnished] = useState(null);
  // const InputKeywords = {
  //   saleOptions,
  //   propertyType,
  //   unitType,
  //   paymentMethod,
  //   countBathrooms,
  //   countBedrooms,
  //   // isFurnished,
  //   finishingOptions,
  //   toPrice,
  //   fromPrice,
  //   keywords,
  //   fromArea,
  //   toArea,
  //   propertyFinance,
  //   sortProp,
  // };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const InputKeywords = {
      saleOptions,
      propertyType,
      unitType,
      paymentMethod,
      countBathrooms,
      countBedrooms,
      // isFurnished,
      finishingOptions,
      toPrice,
      fromPrice,
      keywords,
      fromArea,
      toArea,
      propertyFinance,
      sortProp,
    };
    dispatch(propertyFromSearch({ InputKeywords, page: 1 }));
    dispatch(setInputKeywords(InputKeywords));
    router.asPath != "/search" ? router.push("/search") : null;
    // router.push("/search");
    // console.log("concole.log in search bar",InputKeywords)
  };

  const handelClearFilter = () => {
    // Reset all state variables to their default values
    setSaleOptions("");
    setFromPrice(0.0);
    setToPrice(0.0);
    setFromArea(0);
    setToArea(0);
    setCountBedrooms(0);
    setCountBathroom(0);
    setPropertyFinance("");
    setPaymentMethod("");
    setKeywords("");
    setFinishingOptions("");
    setUnitType("");
    setPropertyType("");
    setSortProp("");
    setFurnished(null);
  };
  const setForSaleButton=(e)=>{
    e.preventDefault();
    setSaleOptions("For Sale")
  }

  const setForRentButton=(e)=>{
    e.preventDefault();
    setSaleOptions("For Rent")
  }
  const setForAllButton=(e)=>{
    e.preventDefault();
    setSaleOptions("")
  }
//() => setSaleOptions("For Sale")
  return (
    <form onSubmit={handleSubmitSearch} className="  h-72 grid  ">
      <div dir="ltr" className=" w-full flex justify-center  mt-5 mb-14  ">
        <div className="flex  gap-x-1 md:w-9/12  items-end">
          <div className=" w-8/12">
            <div className="flex">
              <button
                className={` ${
                  saleOptions == ""
                    ? "bg-white border-2 border-lightOrange text-lightOrange "
                    : " bg-lightOrange text-white "
                }  font-bold py-[4px] px-3 mx-1  rounded-t-medium`}
                onClick={setForAllButton}
              >
                {languageIs ? "الكل" : "All"}
              </button>

              <button
                onClick={setForRentButton}
                className={` ${
                  saleOptions == "For Rent"
                    ? "text-lightGreen border-2 border-lightGreen bg-white"
                    : "text-white bg-lightGreen"
                }  font-bold  px-2 mx-1 rounded-t-medium`}
              >
                {languageIs ? "للإيجار" : "Rent"}
              </button>
              <button
                onClick={setForSaleButton}
                className={` ${
                  saleOptions == "For Sale"
                    ? "text-lightGreen border-2 border-lightGreen bg-white"
                    : "text-white bg-lightGreen"
                }  font-bold  px-2 mx-1 rounded-t-medium`}
              >
                {languageIs ? "للبيع" : "Buy"}
              </button>

              {/* <button
              onClick={() => setSaleOptions("For Investment")}
  
              className={` ${
                saleOptions == "For Investment"
                  ? "text-lightGreen border-2 border-lightGreen bg-white"
                  : "text-white bg-lightGreen"
              }  font-bold  px-2 mx-1 rounded-t-medium`}
            >
              {languageIs ? "للإستثمار" : "Investment"}
            </button> */}
            </div>
            <Input
              className=" h-full  "
              size="md"
              isClearable
              placeholder={
                languageIs
                  ? " ...بحث بالمنطة او عنوان "
                  : "Search by City or title..."
              }
              onValueChange={setKeywords}
            />
          </div>
          <div className="flex items-end">
            <Dropdown
              classNames=" w-[auto]  sm:block hidden"
              ifSaleOptions={saleOptions}
              value={propertyType}
              options={propertyTypeData}
              moreOptions={saleOptions}
              setValue={setPropertyType}
              valueDefault={`${languageIs ? "نوع العقار" : "Property Type"}`}
            />
            <DropdownUintType
              classNames=" w-[auto]  sm:block hidden"
              value={unitType}
              options={unitTypeData}
              propertyType={propertyType}
              setValue={setUnitType}
              valueDefault={`${languageIs ? "نوع الوحدة" : "Unit Type"}`}
            />

            <DropdownMore
              setPaymentMethod={setPaymentMethod}
              paymentMethod={paymentMethod}
              setFinishingOptions={setFinishingOptions}
              finishingOptions={finishingOptions}
              setUnitType={setUnitType}
              unitType={unitType}
              setPropertyType={setPropertyType}
              propertyType={propertyType}
              isFurnished={isFurnished}
              setFurnished={setFurnished}
              countBedrooms={countBedrooms}
              setCountBedrooms={setCountBedrooms}
              countBathrooms={countBathrooms}
              setCountBathroom={setCountBathroom}
              setPropertyFinance={setPropertyFinance}
              propertyFinance={propertyFinance}
              fromPrice={fromPrice}
              setFromPrice={setFromPrice}
              toPrice={toPrice}
              setToPrice={setToPrice}
              fromArea={fromArea}
              setFromArea={setFromArea}
              toArea={toArea}
              setToArea={setToArea}
              classNames="max-w-[40px]"
            />
            <div className="flex gap-x-3">
              <button
                type="submit"
                className="rounded-xl p-3 bg-lightGreen flex items-center"
              >
                {/* <span className="font-medium text-white">{languageIs ? "بحث" : "search"}</span> */}

                <LuSearch className="lg:text-3xl text-xl text-white" />
              </button>
              <button
                // type="submit"
                onClick={handelClearFilter}
                className="border-3 border-lightOrange text-lightOrange font-semibold  p-1 rounded-lg   select-none"
              >
                {languageIs ? "إزالة" : "clear"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  flex items-center gap-x-2 w-10/12 m-auto ">
        <h6 className="text-default-500 font-medium">
          {languageIs ? "الترتيب حسب:" : "Sort Buy"}
        </h6>
        <DropdownSort
          classNames=" w-[130px] "
          // dropdownIcons={false}
          // InputKeywords={InputKeywords}
          value={sortProp}
          options={sortedData}
          setValue={setSortProp}
          valueDefault={<FaSortNumericDown />}
        />
      </div>
    </form>
  );
}
