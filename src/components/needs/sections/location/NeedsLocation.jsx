import { useDispatch, useSelector } from "react-redux";
import {
  setAreaFrom,
  setAreaTo,
  setBathrooms,
  setGovernrateErr,
  setRegionErr,
  setRooms,
  setTheGovernrate,
  setTheRegion,
} from "@/redux-store/features/needsSlice";
import { useEffect, useState } from "react";
import { getGovernorate, getRegion } from "@/utils/propertyAPI";
import { HiMiniXMark } from "react-icons/hi2";
const NeedsLocation = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const needData = useSelector((state) => state.needs.needsData);
  const errors = useSelector((state) => state.needs.errors);

  const dispatch = useDispatch();
  const [governrate, setGovernrate] = useState([]);
  const [region, setRegion] = useState([]);
  useEffect(() => {
    const fetchGovernrate = async () => {
      const gov = await getGovernorate();
      setGovernrate(gov);
    };
    fetchGovernrate();
    const fetchRegion = async () => {
      const gov = await getRegion();
      setRegion(gov);
    };
    fetchRegion();
  }, []);

  const [govInput, setGovInput] = useState("");
  const [filterdGov, setFilterGov] = useState(null);
  const [showedRegion, setShowedRegion] = useState();
  const [refionInput, setRegionInput] = useState("");
  const [filterdRegion, setFilterRegion] = useState(null);

  useEffect(() => {
    setShowedRegion(region);
  }, [region]);
  const onGovChange = (e) => {
    const input = e.target.value;
    setGovInput(input);
    if (input) {
      let filtered = governrate.filter((gov) => {
        const govNameAr = gov.governorate_name_ar || ""; // Ensure property exists
        const govNameEn = gov.governorate_name_en || "";
        return (
          govNameAr.includes(input) ||
          govNameEn.toLowerCase().includes(input.toLowerCase())
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
      let filtered = showedRegion.filter((reg) => {
        const cityNameAr = reg.city_name_ar || ""; // Ensure property exists
        const cityNameEn = reg.city_name_en || ""; // Ensure property exists

        return (
          cityNameAr.includes(input) ||
          cityNameEn.toLowerCase().includes(input.toLowerCase())
        );
      });

      setFilterRegion(filtered);
    } else {
      setFilterRegion(null);
    }
  };
  const filterRegions = (govNum) => {
    const relatedRegion = region.filter(
      (reg) => reg.governorate_number == govNum
    );
    setShowedRegion(relatedRegion);
  };
  const GovSelect = (gov) => {
    filterRegions(gov.number);

    //  setData((prevData) => ({
    //    ...prevData,
    //    address: {
    //      ...prevData.address,
    //      governrate: language
    //        ? gov.governorate_name_ar
    //        : gov.governorate_name_en,
    //    },
    //  }));
    dispatch(
      setTheGovernrate(
        language ? gov.governorate_name_ar : gov.governorate_name_en
      )
    );
    setFilterGov(null);
    setGovInput("");
    dispatch(setGovernrateErr(false));
  };

  const filterGov = (regionNum) => {
    const relatedGov = governrate.filter((gov) => gov.number == regionNum);

    dispatch(
      setTheGovernrate(
        language
          ? relatedGov[0].governorate_name_ar
          : relatedGov[0].governorate_name_en
      )
    );
  };

  const RegionSelect = (region) => {
    filterGov(region.governorate_number);
    filterRegions(region.governorate_number);
    dispatch(setRegionErr(false));
    // setData((prevData) => ({
    //   ...prevData,
    //   address: {
    //     ...prevData.address,
    //     region: language ? region.city_name_ar : region.city_name_en,
    //   },
    // }));
    dispatch(
      setTheRegion(language ? region.city_name_ar : region.city_name_en)
    );
    setFilterRegion(null);
    setRegionInput("");
  };
  const removeGov = () => {
    // setData((prevData) => ({
    //   ...prevData,
    //   address: {
    //     ...prevData.address,
    //     governrate: null,
    //   },
    // }));
    dispatch(setTheGovernrate(""));
    dispatch(setTheRegion(""));
    setShowedRegion(region);
  };

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
                disabled={needData.governrate ? true : false}
                value={govInput}
                onChange={(e) => {
                  onGovChange(e);
                }}
                placeholder={
                  !needData.governrate
                    ? language
                      ? "المحافظة"
                      : "Governrate"
                    : ""
                }
                type="text"
                className={`w-full z-10 text-lg font-semibold text-darkGreen focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-[3px] rounded-xl p-3 py-4 ${
                  errors.governrate && "border-red-500 focus:border-red-500"
                }`}
              />

              {needData.governrate && (
                <div className="absolute bottom-[10px] mx-4 flex items-center gap-2 bg-lightGreen p-2 px-3 text-xl rounded-lg text-white font-semibold">
                  {needData.governrate}
                  <button
                    onClick={removeGov}
                    className="mt-1 bg-red-500 rounded-full text-lg "
                  >
                    <HiMiniXMark />
                  </button>
                </div>
              )}
              {filterdGov && filterdGov.length > 0 && (
                <menu className="border absolute w-full bg-white drop-shadow-lg mt-1 rounded-lg max-h-[200px] overflow-auto z-50">
                  {filterdGov.map((gov) => {
                    return (
                      <option
                        onClick={() => GovSelect(gov)}
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
              {errors.governrate && (
                <p className="text-red-500">
                  {language ? "مطلوب" : "Required"}
                </p>
              )}
            </div>
            {/* <p className="text-red-500">{propErrors?.governrate && "مطلوب"}</p> */}
          </div>
        </div>
        <div className="relative">
          <div className="relative">
            <h3 className="text-lg md:text-xl text-darkGreen font-semibold mb-2">
              {language ? "المنطقة" : "Reigon"}
            </h3>
            <div className="relative">
              <input
                disabled={needData.region ? true : false}
                value={refionInput}
                onChange={(e) => {
                  onRegionChange(e);
                }}
                placeholder={
                  !needData.region ? (language ? "المنطقة" : "Region") : ""
                }
                type="text"
                className={`w-full z-10 text-lg font-semibold text-darkGreen focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-[3px] rounded-xl p-3 py-4  ${
                  errors.region && "border-red-500 focus:border-red-500"
                }`}
              />
              {needData.region && (
                <div className="absolute bottom-[10px] mx-4 flex items-center gap-2 bg-lightGreen p-2 px-3 text-xl rounded-lg text-white font-semibold">
                  {needData.region}{" "}
                  <button
                    onClick={() => {
                      dispatch(setTheRegion(""));
                    }}
                    className="mt-1 bg-red-500 rounded-full text-lg "
                  >
                    <HiMiniXMark />
                  </button>
                </div>
              )}
              {errors.region && (
                <p className="text-red-500">
                  {language ? "مطلوب" : "Required"}
                </p>
              )}
            </div>
            {filterdRegion && filterdRegion.length > 0 && (
              <menu className="border absolute w-full bg-white drop-shadow-lg rounded-lg max-h-[200px] overflow-auto z-50">
                {filterdRegion.map((region) => {
                  return (
                    <option
                      onClick={() => RegionSelect(region)}
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
          {/* <p className="text-red-500">{propErrors?.region && "مطلوب"}</p> */}
        </div>
      </div>
    </section>
  );
};
export default NeedsLocation;
