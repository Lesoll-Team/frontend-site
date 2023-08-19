import React, { useState, useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import AddPropInput from "../../AddPropIputs/AddPropInput";
import AddPropDropdown from "../../AddPropIputs/AddPropDropdown";

function GetStarted() {
  const [propertyTitle, setPropertyTitle] = useState("");
  const [propertyType, setPropertyType] = useState("Residential");
  const [propertyTypeMenu, setPropertyTypeMenu] = useState(false);
  const [unitType, setUnitType] = useState();
  const [unitTypeMenu, setUnitTypeMenu] = useState(false);
  const [listingOptions, setListingOptions] = useState("");
  const [listingOptionsMenu, setListingOptionsMenu] = useState(false);

  const propertyTypeButtonRef = useRef(null);
  const unitTypeButtonRef = useRef(null);
  const listingOptionsButtonRef = useRef(null);

  useEffect(() => {
    const closeMenus = () => {
      setPropertyTypeMenu(false);
      setUnitTypeMenu(false);
      setListingOptionsMenu(false);
    };

    const handleClickOutside = (event) => {
      if (
        propertyTypeButtonRef.current &&
        !propertyTypeButtonRef.current.contains(event.target) &&
        unitTypeButtonRef.current &&
        !unitTypeButtonRef.current.contains(event.target) &&
        listingOptionsButtonRef.current &&
        !listingOptionsButtonRef.current.contains(event.target)
      ) {
        closeMenus();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handlePropertyTypeMenu = () => {
    setPropertyTypeMenu(!propertyTypeMenu);
    setUnitTypeMenu(false);
    setListingOptionsMenu(false);
  };

  const handleUnitTypeMenu = () => {
    setUnitTypeMenu(!unitTypeMenu);
    setPropertyTypeMenu(false);
    setListingOptionsMenu(false);
  };

  const handleListingOptionsMenu = () => {
    setListingOptionsMenu(!listingOptionsMenu);
    setPropertyTypeMenu(false);
    setUnitTypeMenu(false);
  };

  return (
    <div className="w-full mx-auto px-8 md:px-8 my-5 space-y- flex flex-col justify-between">
      <h2 className="text-center text-3xl font-bold  text-darkGreen">
        Get started
      </h2>
      {/* Property title */}

      <div className="space-y-10">
        <AddPropInput
          title={"Property title"}
          placeholder={"Property title"}
          value={propertyTitle}
          setValue={setPropertyTitle}
        />
        <div className="flex flex-col md:flex-row justify-between items-start  gap-9 md:gap-4  ">
          {/* property type */}
          <AddPropDropdown
            title={"Propety type"}
            value={propertyType}
            setValue={setPropertyType}
            options={["Residential", "Commercial", "Land"]}
          />

          {/* unit type */}
          <AddPropDropdown
            title={"Unit type"}
            value={unitType}
            setValue={setUnitType}
            options={["Residential", "Commercial", "Land"]}
          />

          {/* listing options */}
          <AddPropDropdown
            title={"Listing options"}
            value={listingOptions}
            setValue={setListingOptions}
            options={["Residential", "Commercial", "Land"]}
          />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
