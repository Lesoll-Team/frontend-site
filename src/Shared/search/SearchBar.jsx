"use client";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { saleOptions, propertyType, unitType } from "./dropdown/dataDropdown";

// import Select from "react-select";
import Dropdown from "./dropdown/Dropdown";
import DropdownMore from "./dropdown/DropdownMore";
import DropdownPrice from "./dropdown/DropdownPrice";
import DropdownRooms from "./dropdown/DropdownRooms";

export function SearchBar() {
  const [value, setValue] = useState("");
  return (
    <div className=" w-full flex justify-center p-2">
      <div className="p-2 flex  flex-col md:w-8/12 w-full  ">
        {/*bg-blue-200 grid lg:grid-cols-3 grid-cols-2 items-center */}
        <div className="p-2 ">
          <Input
            className=" h-full"
            size="lg"
            isClearable
            placeholder="Search by City, Region or Unit type"
          />
        </div>
        <div className=" flex">
          <Dropdown
            classNames="max-w-[200px]"
            value={value}
            options={saleOptions}
            setValue={setValue}
          />
          <Dropdown
            classNames="lg:block hidden max-w-[200px]"
            value={value}
            options={propertyType}
            setValue={setValue}
          />
          <Dropdown
            classNames=" max-w-[200px] lg:block hidden"
            value={value}
            options={unitType}
            setValue={setValue}
          />
          <DropdownRooms
            classNames="lg:block hidden max-w-[200px]"
            name="Bedroom & Bathroom"
          />
          <DropdownPrice name="Price" classNames="max-w-[200px]" />
          <DropdownMore name="More" classNames="max-w-[200px]" />
        </div>
      </div>
    </div>
  );
}
