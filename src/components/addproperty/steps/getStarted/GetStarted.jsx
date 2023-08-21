// import React, { useState, useEffect, useRef } from "react";
// import { AiFillCaretDown } from "react-icons/ai";
import AddPropInput from "../../AddPropIputs/AddPropInput";
import AddPropDropdown from "../../AddPropIputs/AddPropDropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  setOffer,
  setTitle,
  setPropType,
  setUnitType,
} from "@/redux-store/features/propertySlice";

function GetStarted() {
  const dispatch = useDispatch();
  const listingOption = useSelector((state) => state.Property.offer);
  const propertyTitle = useSelector((state) => state.Property.title);
  const propertyType = useSelector((state) => state.Property.propType);
  const unitType = useSelector((state) => state.Property.unitType);

  return (
    <div className="w-full mx-auto px-6 md:px-8 my-5 space-y- flex flex-col justify-between">
      <h2 className="text-center text-3xl font-bold  text-darkGreen">
        Get started
      </h2>
      {/* Property title */}

      <div className="space-y-10">
        <AddPropInput
          title={"Property title"}
          placeholder={"Property title"}
          value={propertyTitle}
          setValue={(title) => dispatch(setTitle(title))}
        />
        <div className="flex flex-col md:flex-row justify-between items-start  gap-9 md:gap-4  ">
          {/* property type */}
          <AddPropDropdown
            title={"Propety type"}
            value={propertyType}
            setValue={(type) => dispatch(setPropType(type))}
            options={["Residential", "Commercial", "Land"]}
          />

          {/* unit type */}
          <AddPropDropdown
            title={"Unit type"}
            value={unitType}
            setValue={(type) => dispatch(setUnitType(type))}
            options={["Residential", "Commercial", "Land"]}
          />

          {/* listing options */}
          <AddPropDropdown
            title={"Listing options"}
            value={listingOption}
            setValue={(offer) => dispatch(setOffer(offer))}
            options={["Sell", "Rent"]}
          />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
