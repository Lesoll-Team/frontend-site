import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import DropdownMoreHome from "./dropdown/DropdownMoreHome";
import { setCurrentPage } from "@/redux-store/features/searchingSlice";
import { SearchDropdown } from "./SearchDropdown";
import { AiOutlineSearch } from "react-icons/ai";

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
  // const [isTyping, setTyping] = useState(false);

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

  // const setForAllButton = (e) => {
  //   e.preventDefault();
  //   languageIs ? setSaleOptions("كل") : setSaleOptions("all");
  // };
  return (
    <div className=" w-full  flex justify-center ">
      <div className="  w-full  flex flex-col justify-end">
        <div className=" flex gap-x-1 w-fit items-end">
          <button
            id="Click-Gtm"
            onClick={setForSaleButton}
            className={` ${
              saleOptions == "For_Sale" || saleOptions == "للبيع"
                ? "text-lightGreen bg-white"
                : "text-white  bg-lightGreen"
            }  
            h-[20px]  lg:h-[26px]   xl:h-[32px]   2xl:h-[40px]
            w-[70px]   lg:w-[88px]   xl:w-[111px]   2xl:w-[139px] 
             text-[12px] md:text-[14px] gl-text-[17px] xl:text-[20px] 2xl:text-[24px] 
              rounded-t-lg  font-inter `}
          >
            {languageIs ? "للبيع" : "Buy"}
          </button>
          <button
            id="Click-Gtm"
            onClick={setForRentButton}
            className={` ${
              saleOptions == "For_Rent" || saleOptions == "للايجار"
                ? "text-lightGreen bg-white"
                : "text-white  bg-lightGreen"
            } 
                        h-[20px]  lg:h-[26px]   xl:h-[32px]   2xl:h-[40px]
            w-[70px]   lg:w-[88px]   xl:w-[111px]   2xl:w-[139px] 
             text-[12px] md:text-[14px] gl-text-[17px] xl:text-[20px] 2xl:text-[24px] 
            font-inter rounded-t-lg`}
          >
            {languageIs ? "للإيجار" : "Rent"}
          </button>
          <button
            id="Click-Gtm"
            onClick={setForInvestmentButton}
            className={` ${
              saleOptions == "For_Investment" || saleOptions == "للإستثمار"
                ? "text-lightGreen bg-white"
                : "text-white  bg-lightGreen"
            }
                        h-[20px]  lg:h-[26px]   xl:h-[32px]   2xl:h-[40px]
            w-[70px]   lg:w-[88px]   xl:w-[111px]   2xl:w-[139px] 
             text-[12px] md:text-[14px] gl-text-[17px] xl:text-[20px] 2xl:text-[24px] 
            font-inter  rounded-t-lg `}
          >
            {languageIs ? "للإستثمار" : "Investment"}
          </button>
        </div>
        <div
          className={`flex items-center ${
            languageIs
              ? "rounded-br-lg rounded-l-lg"
              : "rounded-bl-lg rounded-r-lg"
          }  bg-white h-[30px] sm:h-[45px] md:h-[55px] xl:h-[70px] 2xl:h-[80px] `}
        >
          <div className=" w-[30px] md:w-[39px] lg:w-[52px] xl:w-[69px] 2xl:w-[92px] h-full flex items-center justify-center">
            <AiOutlineSearch
              className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]  lg:w-[26px] lg:h-[26px]  xl:w-[32px] xl:h-[32px]  2xl:w-[40px] 2xl:h-[40px] 
               text-grayText 
            "
            />
            {/**            text-[13px] md:text-[18px] gl-text-[23px] xl:text-[28px] 2xl:text-[31px]
             */}
          </div>
          <div className="w-full ">
            <SearchDropdown
              setLocationName={setLocationName}
              setLocationValue={setLocationValue}
              // setTyping={setTyping} w-[50px] md:w-[39px] lg:
            />
          </div>

          <div className="w-[52px] xl:w-[69px] 2xl:w-[92px] h-full flex items-center justify-center">
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
          </div>
          <div className="">
            <button
              id="Click-Gtm"
              onClick={handleSubmitSearch}
              className={`bg-lightGreen text-white font-inter font-bold
             w-[62px] md:w-[100px] lg:w-[140px]  xl:w-[177px] 
             h-[30px] sm:h-[45px] md:h-[55px] xl:h-[70px] 2xl:h-[80px]
                text-[13px] md:text-[16px] lg:text-[20px] xl:text-[25px] 2xl:text-[31px]
             ${
               languageIs
                 ? "rounded-l-sm md:rounded-l-lg  lg:rounded-l-lg"
                 : "rounded-r-sm md:rounded-r-lg lg:rounded-r-lg  "
             }   select-none`}
            >
              {languageIs ? "أبـحـث" : "Search"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

