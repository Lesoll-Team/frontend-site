import React, { useEffect, useState } from "react";
import MapComp from "../location/MapComp";
import { useSelector } from "react-redux";
import { HiMiniXMark } from "react-icons/hi2";
const Place = ({
  governrate,
  region,
  setData,
  propertyDetils,
  propErrors,
  setPropErrors,
}) => {
  const [govInput, setGovInput] = useState("");
  const [filterdGov, setFilterGov] = useState(null);
  const [selectedGovernrate, setSelectedGovernrate] = useState(null);

  const [refionInput, setRegionInput] = useState("");
  const [filterdRegion, setFilterRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [addressName, setAddressName] = useState("");
  const onGovChange = (e) => {
    const input = e.target.value;
    setGovInput(input);
    if (input) {
      let filtered = governrate.filter((gov) => {
        const govNameAr = gov.governorate_name_ar || ""; // Ensure property exists
        const govNameEn = gov.governorate_name_en || "";
        return (
          govNameAr.indexOf(input) === 0 ||
          govNameEn.toLowerCase().indexOf(input.toLowerCase()) === 0
        );
      });

      setFilterGov(filtered);
    } else {
      setFilterGov(null);
    }
  };
  const onRegionChange = (e) => {
    const input = e.target.value;
    setRegionInput(input);

    if (input) {
      let filtered = region.filter((reg) => {
        const cityNameAr = reg.city_name_ar || ""; // Ensure property exists
        const cityNameEn = reg.city_name_en || ""; // Ensure property exists

        return (
          cityNameAr.indexOf(input) === 0 ||
          cityNameEn.toLowerCase().indexOf(input.toLowerCase()) === 0
        );
      });

      setFilterRegion(filtered);
    } else {
      setFilterRegion(null);
    }
  };
  const GovSelect = (gov) => {
    setData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        governrate: gov,
      },
    }));
    setFilterGov(null);
    setGovInput("");
  };
  const RegionSelect = (region) => {
    setData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        region: region,
      },
    }));
    setFilterRegion(null);
    setRegionInput("");
  };
  const language = useSelector((state) => state.GlobalState.languageIs);

  useEffect(() => {
    if (propertyDetils?.address?.governrate) {
      setPropErrors((prevState) => ({ ...prevState, governrate: false }));
    }
    if (propertyDetils?.address?.region) {
      setPropErrors((prevState) => ({ ...prevState, region: false }));
    }
    if (propertyDetils?.address?.name) {
      setPropErrors((prevState) => ({ ...prevState, addressName: false }));
    }
  }, [
    propertyDetils?.address?.governrate,
    propertyDetils?.address?.region,
    propertyDetils?.address?.name,
  ]);
  return (
    <section className="space-y-4">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "موقع العقار" : "Property Address"}
      </h3>
      <div className="grid md:grid-cols-2 gap-4 md:gap-x-8">
        <div className="relative">
          <div className="relative">
            <h3 className="text-lg md:text-xl text-darkGreen font-semibold mb-2">
              {language ? "المحافظة" : "Governorate"}
            </h3>
            <div className="relative">
              <input
                disabled={propertyDetils.address.governrate ? true : false}
                value={govInput}
                onChange={(e) => {
                  onGovChange(e);
                }}
                placeholder={
                  !propertyDetils.address.governrate
                    ? language
                      ? "المحافظة"
                      : "Governrate"
                    : ""
                }
                type="text"
                className={`w-full z-10 text-lg font-semibold text-darkGreen focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-[3px] rounded-xl p-3 py-4 ${
                  propErrors?.governrate &&
                  "border-red-500 focus:border-red-500"
                }`}
              />

              {propertyDetils?.address.governrate && (
                <div className="absolute bottom-[10px] mx-4 flex items-center gap-2 bg-lightGreen p-2 px-3 text-xl rounded-lg text-white font-semibold">
                  {propertyDetils?.address.governrate}
                  <button
                    onClick={() => {
                      setData((prevData) => ({
                        ...prevData,
                        address: {
                          ...prevData.address,
                          governrate: "",
                        },
                      }));
                    }}
                    className="mt-1 bg-red-500 rounded-full text-lg "
                  >
                    <HiMiniXMark />
                  </button>
                </div>
              )}
              {filterdGov && filterdGov.length > 0 && (
                <menu className="border absolute w-full bg-white drop-shadow-lg mt-1 rounded-lg max-h-[200px] overflow-auto z-50">
                  {/* {governrate.filter((governrate) => {
          governrate.governorate_name_ar.includes(govInput) ||
            governrate.governorate_name_en.includes(govInput);
        })} */}
                  {filterdGov.map((gov) => {
                    return (
                      <option
                        onClick={() =>
                          GovSelect(
                            language
                              ? gov.governorate_name_ar
                              : gov.governorate_name_en
                          )
                        }
                        className="hover:bg-gray-200 duration-150 px-2 py-1 cursor-pointer"
                        key={gov._id}
                      >
                        {language
                          ? gov.governorate_name_ar
                          : gov.governorate_name_en}
                      </option>
                    );
                  })}
                </menu>
              )}
            </div>
            <p className="text-red-500">{propErrors?.governrate && "مطلوب"}</p>
          </div>
        </div>
        <div className="relative">
          <div className="relative">
            <h3 className="text-lg md:text-xl text-darkGreen font-semibold mb-2">
              {language ? "المنطقة" : "Reigon"}
            </h3>
            <div className="relative">
              <input
                disabled={propertyDetils.address.region ? true : false}
                value={refionInput}
                onChange={(e) => {
                  onRegionChange(e);
                }}
                placeholder={
                  !propertyDetils.address.region
                    ? language
                      ? "المنطقة"
                      : "Region"
                    : ""
                }
                type="text"
                className={`w-full z-10 text-lg font-semibold text-darkGreen focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-[3px] rounded-xl p-3 py-4 ${
                  propErrors?.region && "border-red-500 focus:border-red-500"
                }`}
              />
              {propertyDetils.address.region && (
                <div className="absolute bottom-[10px] mx-4 flex items-center gap-2 bg-lightGreen p-2 px-3 text-xl rounded-lg text-white font-semibold">
                  {propertyDetils.address.region}{" "}
                  <button
                    onClick={() => {
                      setData((prevData) => ({
                        ...prevData,
                        address: {
                          ...prevData.address,
                          region: "",
                        },
                      }));
                    }}
                    className="mt-1 bg-red-500 rounded-full text-lg "
                  >
                    <HiMiniXMark />
                  </button>
                </div>
              )}
            </div>
            {filterdRegion && filterdRegion.length > 0 && (
              <menu className="border absolute w-full bg-white drop-shadow-lg rounded-lg max-h-[200px] overflow-auto z-50">
                {/* {governrate.filter((governrate) => {
          governrate.governorate_name_ar.includes(govInput) ||
            governrate.governorate_name_en.includes(govInput);
        })} */}
                {filterdRegion.map((region) => {
                  return (
                    <option
                      onClick={() =>
                        RegionSelect(
                          language ? region.city_name_ar : region.city_name_en
                        )
                      }
                      className="hover:bg-gray-200 duration-150 px-2 py-1 cursor-pointer"
                      key={region._id}
                    >
                      {language ? region.city_name_ar : region.city_name_en}
                    </option>
                  );
                })}
              </menu>
            )}
          </div>
          <p className="text-red-500">{propErrors?.region && "مطلوب"}</p>
        </div>
        {/* <div>
          <h3 className="text-lg md:text-xl text-darkGreen font-semibold mb-2">
            {language ? "العنوان بالتفصيل" : "Address in details"}
          </h3>
          <input
            value={propertyDetils.address.name}
            onChange={(e) => {
              if (e.target.value) {
                setPropErrors((prevState) => ({
                  ...prevState,
                  addressName: false,
                }));
              } else {
                setPropErrors((prevState) => ({
                  ...prevState,
                  addressName: true,
                }));
              }
              setData((prevData) => ({
                ...prevData,
                address: {
                  ...prevData.address,
                  name: e.target.value,
                },
              }));
            }}
            placeholder={
              language
                ? "مثال: عمارة 10 شارع صلاح سالم مدينة نصر القاهرة"
                : "Region"
            }
            type="text"
            className={`w-full z-10 text-lg font-semibold text-darkGreen focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-[3px] rounded-xl p-3 py-4 ${
              propErrors?.addressName && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500">{propErrors?.addressName && "مطلوب"}</p>
        </div> */}

        <div>
          <h3 className="text-lg md:text-xl text-darkGreen font-semibold mb-2">
            {language ? "العنوان بالتفصيل" : "Address in details"}
          </h3>
          <MapComp
            propertyDetils={propertyDetils}
            setData={setData}
            propErrors={propErrors}
            setPropErrors={setPropErrors}
          />
        </div>
      </div>
    </section>
  );
};

export default Place;
