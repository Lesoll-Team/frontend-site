import React, { useState, useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";

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
    <div className="w-full mx-auto px-8 md:px-8 my-5 ">
      <h2 className="text-center text-3xl font-bold my-50 text-darkGreen">
        Let's add your property
      </h2>
      {/* Property title */}
      <div className="">
        <h3 className="text-2xl text-darkGreen font-bold mb-4">
          Property title
        </h3>
        <input
          className="w-full text-xl font-medium text-darkGreen focus:outline-none placeholder:text-darkGreen placeholder:opacity-60   border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
          placeholder="Property title"
          type="text"
          value={propertyTitle}
          onChange={(e) => {
            setPropertyTitle(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start mt-14  gap-9 md:gap-5  ">
        {/* property type */}
        <div className="w-full">
          <h3 className="text-2xl text-darkGreen font-bold mb-4">
            Property Type
          </h3>
          <div className="relative">
            <button
              ref={propertyTypeButtonRef}
              onClick={handlePropertyTypeMenu}
              className="w-full font-semibold text-darkGreen text-xl flex items-center justify-between gap-6 focus:outline-none bg-white  border-lightGreen rounded-xl p-3 drop-shadow-xl  whitespace-nowrap"
            >
              {propertyType}
              <AiFillCaretDown className="text-darkGreen" />
            </button>
            {propertyTypeMenu && (
              <div
                className={`absolute z-10 w-full  mt-1 bg-white duration-200 drop-shadow-2xl border rounded-xl ${
                  !propertyTypeMenu && "hidden"
                }`}
              >
                <p
                  onClick={() => setPropertyType("Residential")}
                  className="text-lg font-semibold text-darkGreen py-2 px-3  duration-200 bg-slate-100 "
                >
                  Residential
                </p>
                <p
                  onClick={() => setPropertyType("Commercial")}
                  className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
                >
                  Commercial
                </p>
                <p
                  onClick={() => setPropertyType("Land")}
                  className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
                >
                  Land
                </p>
              </div>
            )}
          </div>
        </div>
        {/* unit type */}
        <div className="w-full">
          <h3 className="text-2xl text-darkGreen font-bold mb-4">Unit Type</h3>
          <div className="relative">
            <button
              ref={unitTypeButtonRef}
              onClick={handleUnitTypeMenu}
              className="w-full font-semibold text-darkGreen text-xl flex items-center justify-between gap-6 focus:outline-none bg-white  border-lightGreen rounded-xl p-3 drop-shadow-xl  whitespace-nowrap"
            >
              {unitType || "Unit Type"}
              <AiFillCaretDown className="text-darkGreen" />
            </button>
            {unitTypeMenu && (
              <div className="absolute z-10 w-full  mt-1 bg-white  drop-shadow-2xl border rounded-xl">
                <p
                  onClick={() => setUnitType("Residential")}
                  className="text-lg font-semibold text-darkGreen py-2 px-3  duration-200 bg-slate-100 "
                >
                  Residential
                </p>
                <p
                  onClick={() => setUnitType("Commercial")}
                  className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
                >
                  Commercial
                </p>
                <p
                  onClick={() => setUnitType("Land")}
                  className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
                >
                  Land
                </p>
              </div>
            )}
          </div>
        </div>
        {/* listing options */}
        <div className="w-full">
          <h3 className="text-2xl text-darkGreen font-bold mb-4">
            Listing Options
          </h3>
          <div className="relative">
            <button
              ref={listingOptionsButtonRef}
              onClick={handleListingOptionsMenu}
              className="w-full font-semibold text-darkGreen text-xl flex items-center justify-between gap-6 focus:outline-none bg-white  border-lightGreen rounded-xl p-3 drop-shadow-xl  whitespace-nowrap"
            >
              {listingOptions || "listing Options"}
              <AiFillCaretDown className="text-darkGreen" />
            </button>
            {listingOptionsMenu && (
              <div className="absolute z-10 w-full  mt-1 bg-white  drop-shadow-2xl border rounded-xl">
                <p
                  onClick={() => setListingOptions("Residential")}
                  className="text-lg font-semibold text-darkGreen py-2 px-3  duration-200 bg-slate-100 "
                >
                  Residential
                </p>
                <p
                  onClick={() => setListingOptions("Commercial")}
                  className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
                >
                  Commercial
                </p>
                <p
                  onClick={() => setListingOptions("Land")}
                  className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
                >
                  Land
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
