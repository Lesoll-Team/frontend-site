import { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import DropdownMoreHome from "./dropdown/DropdownMoreHome";
import { setCurrentPage } from "@/redux-store/features/searchingSlice";

export function SearchBar() {
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
  let [keywords, setKeywords] = useState("");
  let [finishingOptions, setFinishingOptions] = useState("");
  let [unitType, setUnitType] = useState("");
  let [propertyType, setPropertyType] = useState("");
  let [isFurnished, setFurnished] = useState(false);
  let [selectoption, setSelectedOption] = useState("");
  let [locationKeyword, setLocationKeyword] = useState("");
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
    keywords,
    minArea: fromArea,
    maxArea: toArea,
    MortgagePrice: propertyFinance,
    cdb:locationKeyword,
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
      dispatch(setCurrentPage(1))

    router.push(`/searching/${queryString}`);
  };
  // const handlePageChange = (selectedPage) => {
  //   dispatch(setCurrentPage(selectedPage + 1));
  // };
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
    <form onSubmit={handleSubmitSearch}>
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
            <div className="w-full flex gap-x-2">
              <Input
                // id="search"
                dir={languageIs ? "rtl" : "ltr"}
                className="border-2 border-default-100 rounded-large  shadow-sm"
                size="md"
                name="Search"
                isClearable
                placeholder={
                  languageIs
                    ? " كلمات بحث مثلا: شاطئ ،للايجار اليومى ,ارض ... "
                    : "Search by Keywords: e.g. beach, for daily rent, land..."
                }
                value={keywords}
                onValueChange={setKeywords}
              />
              <Input
                // id="search"
                dir={languageIs ? "rtl" : "ltr"}
                className=" border-2 w-6/12 border-default-100 rounded-large shadow-sm  "
                size="md"
                name="Search"
                isClearable
                placeholder={
                  languageIs
                    ? " المدينة أو البلدة أو الحي... "
                    : "Search by City or Town or District..."
                }
                value={locationKeyword}
                onValueChange={setLocationKeyword}
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
              classNames="max-w-[40px]"
            />
            <button
              type="submit"
              className="bg-lightGreen text-white font-semibold  p-4 rounded-lg   select-none"
            >
              {languageIs ? "بـحـث" : "Search"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
