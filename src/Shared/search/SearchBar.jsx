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
import { propertyFromSearch, setInputKeywords } from "../../redux-store/features/searchSlice";
import DropdownUintType from "./dropdown/DropdownUintType";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

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
  let [isFurnished, setFurnished] = useState(false);
  let page = useSelector((state) => state.Search.page);

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
      dispatch(setInputKeywords(InputKeywords));
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
      router,
      page,
      dispatch,
    ]
  );

  return (
    <form onSubmit={handleSubmitSearch}>
      <div dir="ltr" className=" w-full flex justify-center ">
        <div className="p-2 flex  flex-col md:w-8/12 w-full  ">
          {/*bg-blue-200 grid lg:grid-cols-3 grid-cols-2 items-center */}
          <div className="p-1 ">
            <Input
              className=" h-full "
              size="md"
              isClearable
              placeholder="Search by City, Region or Unit type"
              onValueChange={setKeywords}
            />
          </div>
          <div className=" flex items-center justify-around ">
            <Dropdown
              valueDefault={`${languageIs ? "خيار البيع" : "Sale Option"}`}
              classNames="max-w-[200px]"
              value={saleOptions}
              options={saleOptionsData}
              setValue={setSaleOptions}
            />
            <Dropdown
              classNames=" max-w-[200px]"
              value={propertyType}
              options={propertyTypeData}
              setValue={setPropertyType}
              valueDefault={`${languageIs ? "نوع العقار" : "Property Type"}`}
            />
            <DropdownUintType
              classNames="max-w-[200px]  sm:block hidden"
              value={unitType}
              options={unitTypeData}
              propertyType={propertyType}
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
            <DropdownMore
              paymentMethod={paymentMethod}
              finishingOptions={finishingOptions}
              unitType={unitType}
              propertyType={propertyType}
              isFurnished={isFurnished}
              setPaymentMethod={setPaymentMethod}
              setFinishingOptions={setFinishingOptions}
              setUnitType={setUnitType}
              setPropertyType={setPropertyType}
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
          </div>
        </div>
        <div className="flex items-center justify-center py-3">
          <Button type="submit" className="h-full bg-lightGreen">
            <LuSearch className="lg:text-5xl text-2xl text-white" />
          </Button>
        </div>
      </div>
    </form>
  );
}
