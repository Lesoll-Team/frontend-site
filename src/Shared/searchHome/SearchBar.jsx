import { useCallback, useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import {
  saleOptionsData,
  propertyTypeData,
  unitTypeData,
} from "./dropdown/dataDropdown";
import { LuSearch } from "react-icons/lu";
import Dropdown from "./dropdown/Dropdown";
import DropdownMore from "./dropdown/DropdownMore";
import DropdownPrice from "./dropdown/DropdownPrice";
import DropdownRooms from "./dropdown/DropdownRooms";
import { propertyFromSearch } from "../../redux-store/features/searchSlice";

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
  const page = useSelector((state) => state.Search.page);
console.log(saleOptions);
  const handleSubmitSearch = useCallback(
    (e) => {
      e.preventDefault();
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
      };
      dispatch(propertyFromSearch({ InputKeywords, page }));
      router.push("/search");
    },
    [
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
      dispatch,
      router,
      page,
    ]
  );

  return (
    <form onSubmit={handleSubmitSearch}>
      <div dir="ltr" className=" w-full flex justify-center ">
        <div className="  md:w-8/12 w-11/12 ">
          {/*bg-blue-200 grid lg:grid-cols-3 grid-cols-2 items-center */}
          <div className="">
            <Button
              radius="none"
              className={` ${saleOptions==""?"bg-white border-2 border-lightOrange text-lightOrange ":" bg-lightOrange text-white "} mx-1 font-bold   rounded-t-medium`}
              onClick={()=>setSaleOptions("")}

            >
              
              {languageIs?"جميع الخيارات":"All"}

            </Button>
            <Button
              onClick={()=>setSaleOptions("For Rent")}
              radius="none"
              className={` ${saleOptions=="For Rent"?"text-lightGreen border-2 border-lightGreen bg-white":"text-white bg-lightGreen"} mx-1 font-bold  rounded-t-medium`}
            >
              
              {languageIs?"للإيجار":"Rent"}

            </Button>
            <Button
              onClick={()=>setSaleOptions("For Sale")}
              
              radius="none"
              className={` ${saleOptions=="For Sale"?"text-lightGreen border-2 border-lightGreen bg-white":"text-white bg-lightGreen"} mx-1 font-bold  rounded-t-medium`}
            >
            
              {languageIs?"للبيع":"Buy"}

            </Button>
          </div>
          <div className="flex items-center">
            <div className="w-full">
              <Input
              
                className="w-full "
                size="lg"
                isClearable
                placeholder="Search by City, Region..."
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
              // name="More"
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
            {/*  
        disableRipple="false"
*/}
            <button type="submit" className="bg-lightGreen text-white font-semibold  p-4 rounded-lg">
              {languageIs?"بحث":"Search"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

/**
 *             <Dropdown
              valueDefault={`${languageIs ? "خيار البيع" : "Sale Option"}`}
              classNames="max-w-[200px]"
              value={saleOptions}
              options={saleOptionsData}
              setValue={setSaleOptions}
            />
            ------------------------------------------------------------------
            <Dropdown
              classNames=" max-w-[200px]"
              value={propertyType}
              options={propertyTypeData}
              setValue={setPropertyType}
              valueDefault={`${languageIs ? "نوع العقار" : "Property Type"}`}
            />
            <Dropdown
              classNames=" max-w-[200px] sm:block hidden"
              value={unitType}
              options={unitTypeData}
              setValue={setUnitType}
              valueDefault={`${languageIs ? "نوع الوحدة" : "Unit Type"}`}
            />
            <DropdownRooms
              classNames="lg:block hidden max-w-[200px]"
              name={`${
                languageIs ? "الغرف & الحمامات " : "Bedrooms & Bathrooms"
              }`}
              setCountBedrooms={setCountBedrooms}
              setCountBathroom={setCountBathroom}
              countBedrooms={countBedrooms}
              countBathrooms={countBathrooms}
            />
            <DropdownPrice
              name={`${languageIs ? "السعر " : "Price"}`}
              classNames="max-w-[200px] lg:block hidden"
              valueToPrice={toPrice}
              setFromPrice={setFromPrice}
              setToPrice={setToPrice}
              valueFromPrice={fromPrice}
            />
 */
