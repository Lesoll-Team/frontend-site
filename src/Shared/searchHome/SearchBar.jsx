import { useCallback, useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import DropdownMore from "./dropdown/DropdownMore";
import {
  propertyFromSearch,
  setInputKeywords,
} from "../../redux-store/features/searchSlice";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export function SearchBar() {
  const languageIs = useSelector((state) => state.GlobalState.languageIs);

  const dispatch = useDispatch();
  const router = useRouter();
  const [saleOptions, setSaleOptions] = useState("");
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
  // const page = useSelector((state) => state.Search.page);
  
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
    };
    dispatch(propertyFromSearch({ InputKeywords, page: 1 }));
    dispatch(setInputKeywords(InputKeywords));
    router.push("/search");
  }
// console.log(propertyFinance);
// console.log(fromArea);
// console.log(toArea);
  return (
    <form onSubmit={handleSubmitSearch}>
      <div dir="ltr" className=" w-full flex justify-center ">
        <div className="  md:w-8/12 w-11/12 ">
          <div className="">
            <button
              // radius="none"
              className={` ${
                saleOptions == ""
                  ? "bg-white border-2 border-lightOrange text-lightOrange "
                  : " bg-lightOrange text-white "
              } mx-1 font-bold px-2  rounded-t-medium`}
              onClick={() => setSaleOptions("")}
            >
              {languageIs ? "الكل" : "All"}
            </button>
            <button
              onClick={() => setSaleOptions("For Rent")}
              // radius="none"
              className={` ${
                saleOptions == "For Rent"
                  ? "text-lightGreen border-2 border-lightGreen bg-white"
                  : "text-white bg-lightGreen"
              } mx-1 px-2 font-bold  rounded-t-medium`}
            >
              {languageIs ? "للإيجار" : "Rent"}
            </button>
            <button
              onClick={() => setSaleOptions("For Sale")}
              // radius="none"
              className={` ${
                saleOptions == "For Sale"
                  ? "text-lightGreen border-2 border-lightGreen bg-white"
                  : "text-white bg-lightGreen"
              } mx-1 px-2 font-bold  rounded-t-medium`}
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
          <div className="flex items-center">
            <div  className="w-full">
              <Input
                className="w-full select-none"
                size="lg"
                isClearable
                placeholder={languageIs?" ...بحث بالمنطة او عنوان ":"Search by City or title..."}
                onValueChange={setKeywords}
              />
            </div>

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
