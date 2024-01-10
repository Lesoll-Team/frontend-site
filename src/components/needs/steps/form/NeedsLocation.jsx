import { useDispatch, useSelector } from "react-redux";
import {
  setAreaFrom,
  setAreaTo,
  setBathrooms,
  setGovernrateErr,
  setGovernrateId,
  setGovernrateName,
  setRegionErr,
  setRegionId,
  setRegionName,
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
    dispatch(
      setGovernrateName(
        language ? gov.governorate_name_ar : gov.governorate_name_en
      )
    );
    dispatch(setGovernrateId(gov._id));
    dispatch(
      setGovernrateName(
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
      setGovernrateName(
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

    dispatch(
      setRegionName(language ? region.city_name_ar : region.city_name_en)
    );
    dispatch(setRegionId(region._id));
    dispatch(setGovernrateId(region._id));
    setFilterRegion(null);
    setRegionInput("");
  };
  const removeGov = () => {
    dispatch(setGovernrateName(""));
    dispatch(setGovernrateId(""));
    dispatch(setRegionName(""));
    dispatch(setRegionId(""));
    setShowedRegion(region);
  };
  //    className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-4 ${
  //                   errors.governrate && "border-red-500 focus:border-red-500"
  //                 }`}
  return (
    <section className="space-y-6 md:col-span-2">
      <h3 className="text-xl text-lightGray font-bold">
        {language ? "موقع العقار" : "Property Address"}
      </h3>
      <div className="grid md:grid-cols-2 gap-4 md:gap-x-8">
        <div className="relative">
          <div className="relative">
            <div className="relative">
              <input
                disabled={needData.governrate.name ? true : false}
                value={govInput}
                onChange={(e) => {
                  onGovChange(e);
                }}
                placeholder={
                  !needData.governrate.name
                    ? language
                      ? "المحافظة"
                      : "Governrate"
                    : ""
                }
                type="text"
                className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-4 ${
                  errors.governrate && "border-red-500 focus:border-red-500"
                }`}
              />

              {needData.governrate.name && (
                <div className="absolute bottom-[10px] mx-4 flex items-center gap-2 bg-lightGreen p-2 px-3 text-xl rounded-lg text-white font-semibold">
                  {needData.governrate.name}
                  <button
                    onClick={removeGov}
                    className="mt-1 bg-red-500 rounded-full text-lg "
                  >
                    <HiMiniXMark />
                  </button>
                </div>
              )}
              {filterdGov && filterdGov.length > 0 && (
                <menu className="border absolute w-full bg-white drop-shadow-lg  rounded-md max-h-[200px] overflow-auto z-50">
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
            <div className="relative">
              <input
                disabled={needData.region.name ? true : false}
                value={refionInput}
                onChange={(e) => {
                  onRegionChange(e);
                }}
                placeholder={
                  !needData.region.name ? (language ? "المنطقة" : "Region") : ""
                }
                type="text"
                className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-4 ${
                  errors.region && "border-red-500 focus:border-red-500"
                }`}
              />
              {needData.region.name && (
                <div className="absolute bottom-[10px] mx-4 flex items-center gap-2 bg-lightGreen p-2 px-3 text-xl rounded-lg text-white font-semibold">
                  {needData.region.name}{" "}
                  <button
                    onClick={() => {
                      dispatch(setRegionName(""));
                      dispatch(setRegionId(""));
                    }}
                    className="mt-1 bg-red-500 rounded-full text-lg "
                  >
                    <HiMiniXMark />
                  </button>
                </div>
              )}
              {filterdRegion && filterdRegion.length > 0 && (
                <menu className="border absolute w-full bg-white drop-shadow-lg rounded-md max-h-[200px] overflow-auto z-50">
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
            {errors.region && (
              <p className="text-red-500">{language ? "مطلوب" : "Required"}</p>
            )}
          </div>
          {/* <p className="text-red-500">{propErrors?.region && "مطلوب"}</p> */}
        </div>
      </div>
    </section>
  );
};
export default NeedsLocation;
