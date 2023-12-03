import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import DropdownMoreHome from "./dropdown/DropdownMoreHome";
import { setCurrentPage } from "@/redux-store/features/searchingSlice";
import { SearchDropdown } from "./SearchDropdown";

export function SearchBarHome() {
  const dispatch = useDispatch();

  const languageIs = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const [saleOptions, setSaleOptions] = useState("all");
  const [fromPrice, setFromPrice] = useState(0.0);
  const [toPrice, setToPrice] = useState(0.0);
  const [fromArea, setFromArea] = useState(0);
  const [toArea, setToArea] = useState(0);
  let [countBedrooms, setCountBedrooms] = useState(0);
  let [countBathrooms, setCountBathroom] = useState(0);
  let [propertyFinance, setPropertyFinance] = useState("");
  let [paymentMethod, setPaymentMethod] = useState("");
  const [keywords, setKeywords] = useState("");
  let [finishingOptions, setFinishingOptions] = useState("");
  let [unitType, setUnitType] = useState("");
  let [propertyType, setPropertyType] = useState("");
  let [isFurnished, setFurnished] = useState(false);
  let [selectoption, setSelectedOption] = useState("");

  const [locationName, setLocationName] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [isTyping, setTyping] = useState(false);

  const InputKeywords = {
    offer: saleOptions,
    propType: propertyType,
    unitType: unitType,
    saleOption: paymentMethod,
    bathRooms: countBathrooms,
    rooms: countBedrooms,
    finishingType: finishingOptions,
    maxPrice: toPrice,
    minPrice: fromPrice,
    keywords: keywords.trim().split(" ").join("_"),
    minArea: fromArea,
    maxArea: toArea,
    MortgagePrice: propertyFinance,
    cdb: locationValue || locationName.trim().split(" ").join("_"),
  };
  const handleSubmitSearch = (e) => {
    e?.preventDefault();
    const filteredKeywords = Object.fromEntries(
      Object.entries(InputKeywords).filter(
        ([_, value]) => value != null && value !== "" && value !== 0
      )
    );
    const queryString = Object.keys(filteredKeywords)
      .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
      .join("&");
    dispatch(setCurrentPage(1));
    router.push(`/searching/${queryString}`);
  };

  const setForSaleButton = (e) => {
    e.preventDefault();
    languageIs ? setSaleOptions("للبيع") : setSaleOptions("For_Sale");
  };

  const setForRentButton = (e) => {
    e.preventDefault();
    languageIs ? setSaleOptions("للايجار") : setSaleOptions("For_Rent");
    setPropertyFinance("");
    setFinishingOptions("");
  };
  const setForInvestmentButton = (e) => {
    e.preventDefault();
    languageIs ? setSaleOptions("للإستثمار") : setSaleOptions("For_Investment");
  };

  const setForAllButton = (e) => {
    e.preventDefault();
    languageIs ? setSaleOptions("كل") : setSaleOptions("all");
  };
  return (
    <div>
      <div dir="ltr" className=" w-full flex justify-center ">
        <div className="  md:w-8/12 w-11/12 ">
          <div className="">
            <button
              className={` ${
                saleOptions == "all" || saleOptions == "كل"
                  ? " bg-lightOrange text-white "
                  : "bg-white border-2 border-lightOrange text-lightOrange "
              } mx-1 font-bold py-[4px] px-3   rounded-t-medium`}
              onClick={setForAllButton}
            >
              {languageIs ? "الكل" : "All"}
            </button>
            <button
              onClick={setForRentButton}
              className={` ${
                saleOptions == "For_Rent" || saleOptions == "للايجار"
                  ? "text-white bg-lightGreen"
                  : "text-lightGreen border-2 border-lightGreen bg-white"
              } mx-1 px-2 font-bold  rounded-t-medium`}
            >
              {languageIs ? "للإيجار" : "Rent"}
            </button>
            <button
              onClick={setForSaleButton}
              className={` ${
                saleOptions == "For_Sale" || saleOptions == "للبيع"
                  ? "text-white bg-lightGreen"
                  : "text-lightGreen border-2 border-lightGreen bg-white"
              } mx-1 px-2 font-bold  rounded-t-medium`}
            >
              {languageIs ? "للبيع" : "Buy"}
            </button>

            <button
              onClick={setForInvestmentButton}
              className={` ${
                saleOptions == "For_Investment" || saleOptions == "للإستثمار"
                  ? "text-white bg-lightGreen"
                  : "text-lightGreen border-2 border-lightGreen bg-white"
              }  font-bold  px-2 mx-1 rounded-t-medium`}
            >
              {languageIs ? "للإستثمار" : "Investment"}
            </button>
          </div>
          <div className="flex items-center">
            <div className="w-full gap-y-3  gap-x-2">
              <SearchDropdown
                setLocationName={setLocationName}
                setLocationValue={setLocationValue}
                setTyping={setTyping}
              />
            </div>

            <DropdownMoreHome
              offer={saleOptions}
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
              selectoption={selectoption}
              setSelectedOption={setSelectedOption}
              setKeywords={setKeywords}
              keywords={keywords}
              classNames="max-w-[40px]"
            />
            <button
              onClick={handleSubmitSearch}
              className="bg-lightGreen text-white font-semibold  p-4 rounded-lg   select-none"
            >
              {languageIs ? "بـحـث" : "Search"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
