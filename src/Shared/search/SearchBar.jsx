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
  let [isFurnished, setFurnished] = useState(false);
  const InputKeywords = {
    saleOptions,
    propertyType,
    unitType,
    paymentMethod,
    countBathrooms,
    countBedrooms,
    isFurnished,
    finishingOptions,
    toPrice,
    fromPrice,
    keywords,
    fromArea,
    toArea,
    propertyFinance,
    sortProp,
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    dispatch(propertyFromSearch({ InputKeywords, page: 1 }));
    dispatch(setInputKeywords(InputKeywords));
    router.push("/search");
  };


  // console.log(propertyType);

  return (
    <form onSubmit={handleSubmitSearch}>
      <div dir="ltr" className=" w-full flex justify-center  mt-10 mb-10">
          <div className="flex  gap-x-1 md:w-9/12  items-end">
          
            <div className=" w-8/12">
            <div className="flex">
            <button
  
              className={` ${
                saleOptions == ""
                  ? "bg-white border-2 border-lightOrange text-lightOrange "
                  : " bg-lightOrange text-white "
              }  font-bold  px-2 mx-1  rounded-t-medium`}
              onClick={() => setSaleOptions("")}
            >
              {languageIs ? "الكل" : "All"}
            </button>
            <button
              onClick={() => setSaleOptions("For Rent")}
  
              className={` ${
                saleOptions == "For Rent"
                  ? "text-lightGreen border-2 border-lightGreen bg-white"
                  : "text-white bg-lightGreen"
              }  font-bold  px-2 mx-1 rounded-t-medium`}
            >
              {languageIs ? "للإيجار" : "Rent"}
            </button>
            <button
              onClick={() => setSaleOptions("For Sale")}
  
              className={` ${
                saleOptions == "For Sale"
                  ? "text-lightGreen border-2 border-lightGreen bg-white"
                  : "text-white bg-lightGreen"
              }  font-bold  px-2 mx-1 rounded-t-medium`}
            >
              {languageIs ? "للبيع" : "Buy"}
            </button>

            <button
              onClick={() => setSaleOptions("For Investment")}
  
              className={` ${
                saleOptions == "For Investment"
                  ? "text-lightGreen border-2 border-lightGreen bg-white"
                  : "text-white bg-lightGreen"
              }  font-bold  px-2 mx-1 rounded-t-medium`}
            >
              {languageIs ? "للإستثمار" : "Investment"}
            </button>
          </div>
              <Input
                className=" h-full  "
                size="md"
                isClearable
                placeholder="Search by City, Region or Unit type"
                onValueChange={setKeywords}
              />
            </div>
            <div className="flex items-end">
            <Dropdown
              classNames=" w-[auto]  sm:block hidden"
              value={propertyType}
              options={propertyTypeData}
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

              <DropdownSort
              classNames=" w-[auto] "
              // dropdownIcons={false}
              InputKeywords={InputKeywords}
              value={sortProp}
              options={sortedData}
              setValue={setSortProp}
              valueDefault={<FaSortNumericDown/> }
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
          <button type="submit" className="rounded-xl p-3 bg-lightGreen">
            <LuSearch className="lg:text-3xl text-xl text-white" />
          </button>
          </div>
          </div>
        
      </div>
    </form>
  );
}
