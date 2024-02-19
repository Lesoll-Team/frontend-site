import { useState } from "react";
import { useSelector } from "react-redux";
import { SearchDropdown } from "../search/SearchDropdown";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

export function SearchBarHome() {
  const languageIs = useSelector((state) => state.GlobalState.languageIs);
  const [saleOptions, setSaleOptions] = useState("sale");
  const router = useRouter();
  const [keywords, setKeywords] = useState("");
  const [locationGovernorate, setLocationGovernorate] = useState("");
  const [locationRegion, setLocationRegion] = useState("");

  /**contain search data from state
   * */
  const InputKeywords = {
    offer: saleOptions,
    governorate: locationGovernorate,
    region: locationRegion,
  };

  /**
   * @function handleSubmitSearch got to searching page with input search
   * @param filteredKeywords make filter "InputKeywords" just get value is equal data
   * @param queryString make "filteredKeywords" to query text
   */
  const handleSubmitSearch = (e) => {
    e?.preventDefault();
    //  this step make filter "InputKeywords" just get value is equal data
    const filteredKeywords = Object.fromEntries(
      Object.entries(InputKeywords).filter(
        ([_, value]) => value != null && value !== "" && value !== 0
      )
    );

    //  this step make "filteredKeywords" to query text
    const pagesInput = Object.keys(filteredKeywords)
      .map((key) => `${filteredKeywords[key]}`)
      .join("/")
      .toLowerCase();

    const url = `${pagesInput}${
      keywords && "/search?keyword=" + keywords.split(" ").join("_")
    }`;
    router.push(`/properties/${url}`);
  };

  // start code 3 button in search bar
  const setForSaleButton = (e) => {
    e.preventDefault();
    setSaleOptions("sale");
  };
  const setForRentButton = (e) => {
    e.preventDefault();
    setSaleOptions("rent");
    // languageIs ? setSaleOptions("للايجار") : setSaleOptions("For_Rent");
    // setPropertyFinance("");
    // setFinishingOptions("");
  };
  const setForInvestmentButton = (e) => {
    e.preventDefault();
    // languageIs ? setSaleOptions("للإستثمار") : setSaleOptions("For_Investment");
    setSaleOptions("investment");
  };
  // end code 3 button in search bar

  return (
    <div className=" w-full  flex justify-center ">
      <div className="  w-full  flex flex-col justify-end">
        {/* 3 button in search bar */}
        <div className=" flex gap-x-1 w-fit items-end">
          <button
            id="Click-Gtm"
            onClick={setForSaleButton}
            className={` ${
              saleOptions == "sale"
                ? "text-lightGreen bg-white"
                : "text-white  bg-lightGreen"
            }  
            h-[20px]  lg:h-[26px]   xl:h-[32px]   2xl:h-[40px]
            w-[70px]   lg:w-[88px]   xl:w-[111px]   2xl:w-[139px] 
             text-[12px] md:text-[14px] gl-text-[17px] xl:text-[20px] 2xl:text-[24px] 
                font-inter rounded-t-sm md:rounded-t-md`}
          >
            {languageIs ? "للبيع" : "Buy"}
          </button>
          <button
            id="Click-Gtm"
            onClick={setForRentButton}
            className={` ${
              saleOptions == "rent"
                ? "text-lightGreen bg-white"
                : "text-white  bg-lightGreen"
            } 
                        h-[20px]  lg:h-[26px]   xl:h-[32px]   2xl:h-[40px]
            w-[70px]   lg:w-[88px]   xl:w-[111px]   2xl:w-[139px] 
             text-[12px] md:text-[14px] gl-text-[17px] xl:text-[20px] 2xl:text-[24px] 
            font-inter rounded-t-sm md:rounded-t-md`}
          >
            {languageIs ? "للإيجار" : "Rent"}
          </button>

          <button
            id="Click-Gtm"
            onClick={setForInvestmentButton}
            className={` ${
              saleOptions == "investment"
                ? "text-lightGreen bg-white"
                : "text-white  bg-lightGreen"
            }
                        h-[20px]  lg:h-[26px]   xl:h-[32px]   2xl:h-[40px]
            w-[70px]   lg:w-[88px]   xl:w-[111px]   2xl:w-[139px] 
             text-[12px] md:text-[14px] gl-text-[17px] xl:text-[20px] 2xl:text-[24px] 
            font-inter  rounded-t-sm md:rounded-t-md `}
          >
            {languageIs ? "للإستثمار" : "Investment"}
          </button>
        </div>
        {/*box search bar */}
        <div
          className={`flex items-center ${
            languageIs
              ? "rounded-br-sm rounded-l-sm md:rounded-br-md md:rounded-l-md"
              : "rounded-bl-md rounded-r-md md:rounded-bl-md md:rounded-r-md"
          }  bg-white h-[30px] sm:h-[45px]
          md:h-[55px] xl:h-[70px] 2xl:h-[80px] 
          `}
        >
          {/*search icon inside search box */}
          <div
            className="
           w-[30px] md:w-[39px] lg:w-[52px] xl:w-[69px] 2xl:w-[92px] h-full flex items-center justify-center"
          >
            <AiOutlineSearch
              className="w-[16px] h-[16px] md:w-[20px]
               md:h-[20px] 
               lg:w-[26px] lg:h-[26px]  xl:w-[32px] xl:h-[32px]  2xl:w-[40px] 2xl:h-[40px] 
               text-grayText 
            "
            />
          </div>
          {/*search box */}
          <div className="w-full ">
            <SearchDropdown
              keywords={keywords}
              setKeywords={setKeywords}
              setLocationGovernorate={setLocationGovernorate}
              setLocationRegion={setLocationRegion}
            />
          </div>

          {/*search button */}
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
              {languageIs ? "بـحـث" : "Search"}
            </button>
          </div>
        </div>
      </div>
      <div
        className="
          w-[52px] xl:w-[69px] 2xl:w-[92px] bg-red-200 h-full flex items-center justify-center"
      ></div>
    </div>
  );
}
//   keywords: keywords.trim().split(" ").join("_"), // page search in category
//   saleOption: paymentMethod,
//   bathRooms: countBathrooms,
//   rooms: countBedrooms,
//   finishingType: finishingOptions,
//   maxPrice: toPrice,
//   minPrice: fromPrice,
//   minArea: fromArea,
//   maxArea: toArea,
//   MortgagePrice: propertyFinance,
// {
//   /*search box */
// }
// <div className="w-[52px] xl:w-[69px] 2xl:w-[92px] h-full flex items-center justify-center">
//   <DropdownMoreHome
//     offer={saleOptions}
//     setPaymentMethod={setPaymentMethod}
//     paymentMethod={paymentMethod}
//     setFinishingOptions={setFinishingOptions}
//     finishingOptions={finishingOptions}
//     setUnitType={setUnitType}
//     unitType={unitType}
//     setPropertyType={setPropertyType}
//     propertyType={propertyType}
//     isFurnished={isFurnished}
//     setFurnished={setIsFurnished}
//     countBedrooms={countBedrooms}
//     setCountBedrooms={setCountBedrooms}
//     countBathrooms={countBathrooms}
//     setCountBathroom={setCountBathrooms}
//     setPropertyFinance={setPropertyFinance}
//     propertyFinance={propertyFinance}
//     fromPrice={fromPrice}
//     setFromPrice={setFromPrice}
//     toPrice={toPrice}
//     setToPrice={setToPrice}
//     fromArea={fromArea}
//     setFromArea={setFromArea}
//     toArea={toArea}
//     setToArea={setToArea}
//     selectoption={selectedOption}
//     setSelectedOption={setSelectedOption}
//     setKeywords={setKeywords}
//     keywords={keywords}
//     classNames="max-w-[40px]"
//   />
// </div>;
// const queryString = Object.keys(filteredKeywords)
//   .map((key) => `${key}=${encodeURIComponent(filteredKeywords[key])}`)
//   .join("&");
// console.log("queryString", queryString);
// console.log("filteredKeywords", filteredKeywords);
// const [fromPrice, setFromPrice] = useState(0.0);
// const [toPrice, setToPrice] = useState(0.0);
// const [fromArea, setFromArea] = useState(0);
// const [toArea, setToArea] = useState(0);
// const [countBedrooms, setCountBedrooms] = useState(0);
// const [countBathrooms, setCountBathrooms] = useState(0);
// const [propertyFinance, setPropertyFinance] = useState("");
// const [paymentMethod, setPaymentMethod] = useState("");
// const [keywords, setKeywords] = useState("");
// const [finishingOptions, setFinishingOptions] = useState("");
// const [unitType, setUnitType] = useState("");
// const [propertyType, setPropertyType] = useState("");
// const [isFurnished, setIsFurnished] = useState(false);
// const [selectedOption, setSelectedOption] = useState("");

// const [locationName, setLocationName] = useState("");
// const [locationValue, setLocationValue] = useState("");
