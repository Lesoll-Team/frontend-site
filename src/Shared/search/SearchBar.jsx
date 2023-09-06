"use client";
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
  const dispatch = useDispatch();
  const router=useRouter()
  const [saleOptions, setSaleOptions] = useState("");

  const [fromPrice, setFromPrice] = useState(0.0);
  const [toPrice, setToPrice] = useState(0.0);

  let [countBedrooms, setCountBedrooms] = useState(0);
  let [countBathrooms, setCountBathroom] = useState(0);

  let [paymentMethod, setPaymentMethod] = useState("");
  let [keywords, setKeywords] = useState("");
  let [finishingOptions, setFinishingOptions] = useState("");
  let [unitType, setUnitType] = useState("");
  let [propertyType, setPropertyType] = useState("");
  let [isFurnished, setFurnished] = useState(false);
const page=useSelector((state)=>state.Search.page)

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
    // Dispatch the action with the InputKeywords and current page
    dispatch(propertyFromSearch({ InputKeywords, page }));
    router.push('/search');
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
      <div dir="ltr" className=" w-full flex justify-center p-2">
        <div className="p-2 flex  flex-col md:w-8/12 w-full  ">
          {/*bg-blue-200 grid lg:grid-cols-3 grid-cols-2 items-center */}
          <div className="p-2 ">
            <Input
              className=" h-full"
              size="lg"
              isClearable
              placeholder="Search by City, Region or Unit type"
              onValueChange={setKeywords}
            />
          </div>
          <div className=" flex">
            <Dropdown
              valueDefault="Sale Option"
              classNames="max-w-[200px]"
              value={saleOptions}
              options={saleOptionsData}
              setValue={setSaleOptions}
            />
            <Dropdown
              classNames="lg:block hidden max-w-[200px]"
              value={propertyType}
              options={propertyTypeData}
              setValue={setPropertyType}
              valueDefault="Property Type"
            />
            <Dropdown
              classNames=" max-w-[200px] lg:block hidden"
              value={unitType}
              options={unitTypeData}
              setValue={setUnitType}
              valueDefault="Unit Type"
            />
            <DropdownRooms
              classNames="lg:block hidden max-w-[200px]"
              name="Bedroom & Bathroom"
              setCountBedrooms={setCountBedrooms}
              setCountBathroom={setCountBathroom}
              countBedrooms={countBedrooms}
              countBathrooms={countBathrooms}
            />
            <DropdownPrice
              name="Price"
              classNames="max-w-[200px]"
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
              name="More"
              classNames="max-w-[200px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center py-3">
          <Button type="submit" className="h-full bg-lightGreen">
            <LuSearch className="text-5xl text-white" />
          </Button>
        </div>
      </div>
    </form>
  );
}
