import useGovRegion from "@/Hooks/addProperty/useGovRegion";
import { useEffect, useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Ring } from "@uiball/loaders";
const GovRegion = ({ errors, register, setValue, watch, clearErrors }) => {
  const [govInput, setGovInput] = useState("");
  const [regionInput, setRegionInput] = useState("");

  const [showGovSearch, setShowGovSearch] = useState(false);
  const [ShowRegionSearch, setShowRegionSearch] = useState(false);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const govStatus = useSelector((state) => state.getGov.status);
  const regionStatus = useSelector((state) => state.getRegion.status);

  const {
    filteredGov,
    searchedRegions,
    selectGov,
    selectRegion,
    clearGov,
    clearRegion,
  } = useGovRegion({
    govInput,
    regionInput,
    selectedGov: watch("governrate"),
    selectedRegion: watch("region"),
    watch,
    setValue,
    clearErrors,
  });
  const onGovInputChange = (e) => {
    setGovInput(e.target.value);
    e.target.value ? setShowGovSearch(true) : setShowGovSearch(false);
  };
  const onRegionInputChange = (e) => {
    setRegionInput(e.target.value);
    e.target.value ? setShowRegionSearch(true) : setShowRegionSearch(false);
  };
  // console.log(searchedRegions);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showGovSearch && !event.target.closest(".relative")) {
        setShowGovSearch(false);
      }
      if (ShowRegionSearch && !event.target.closest(".relative")) {
        setShowRegionSearch(false);
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [showGovSearch, ShowRegionSearch]);

  const onGovSelect = (gov) => {
    selectGov(gov);
    setShowGovSearch(false);
    setGovInput("");
  };
  const onRegionSelect = (region) => {
    selectRegion(region);
    setValue("reigon", region);

    setShowRegionSearch(false);
    setRegionInput("");
  };
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-xl">{language ? "المحافظة" : "Governorate"}</h3>
        <div className="relative">
          <div className="flex items-center">
            <div className="flex w-full items-center">
              <input
                disabled={watch("governrate._id") || govStatus === "loading"}
                value={govInput}
                onChange={onGovInputChange}
                type="text"
                className={` w-full text-lg font-semibold disabled:bg-white  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                  errors?.governrate?._id &&
                  "border-red-500 focus:border-red-500"
                }`}
              />
              {govStatus === "loading" && (
                <div className="-mx-10">
                  <Ring size={20} />
                </div>
              )}
            </div>
            {watch("governrate._id") && (
              <div className="absolute mx-4 bg-gray-200 px-3 py-[2px] rounded flex items-center gap-2">
                <p>
                  {" "}
                  {language
                    ? watch("governrate.governorate_name_ar")
                    : watch("governrate.governorate_name_en")}
                </p>
                <button type="button" className="mt-[2px]" onClick={clearGov}>
                  <FaCircleXmark className="text-xs" />
                </button>
              </div>
            )}
          </div>
          {filteredGov && showGovSearch && (
            <div
              className={`absolute fade-in border z-10    mt-[1px] w-full  bg-white duration-200 drop-shadow-xl  overflow-y-auto rounded-md max-h-[300px] `}
            >
              {filteredGov.length > 0 ? (
                filteredGov.map((gov) => (
                  <div key={gov._id}>
                    <button
                      onClick={() => onGovSelect(gov)}
                      type="button"
                      className="text-lg w-full text-center font-semibold text-darkGray py-2 px-3 cursor-pointer active:ring-none   duration-200 focus:outline-none focus:bg-slate-100  hover:bg-slate-100 "
                    >
                      {language
                        ? gov.governorate_name_ar
                        : gov.governorate_name_en}
                    </button>
                    <hr className="w-[95%] mx-auto" />
                  </div>
                ))
              ) : (
                <div className="w-full grid place-content-center min-h-[150px]">
                  <p>{language ? "لايوجد نتائج" : "No results"}</p>
                </div>
              )}
            </div>
          )}
        </div>
        <input
          type="text"
          hidden
          {...register("governrate._id", {
            required: {
              value: true,
              message: "please enter property type",
            },
          })}
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">{language ? "المنطقة" : "Region"}</h3>

        <div className="relative">
          <div className="flex items-center">
            <div className="flex items-center w-full">
              <input
                disabled={watch("region._id") || regionStatus === "loading"}
                onChange={onRegionInputChange}
                value={regionInput}
                type="text"
                className={` w-full text-lg font-semibold  focus:outline-none disabled:bg-white focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                  errors?.region?._id && "border-red-500 focus:border-red-500"
                }`}
              />
              {regionStatus === "loading" && (
                <div className="-mx-10">
                  <Ring size={20} />
                </div>
              )}
            </div>
            {watch("region._id") && (
              <div className="absolute mx-4 bg-gray-200 px-3 py-[2px] rounded flex items-center gap-2">
                <p>
                  {" "}
                  {language
                    ? watch("region.city_name_ar")
                    : watch("region.city_name_en")}
                </p>
                <button
                  type="button"
                  className="mt-[2px]"
                  onClick={clearRegion}
                >
                  <FaCircleXmark className="text-xs" />
                </button>
              </div>
            )}
          </div>
          {searchedRegions && ShowRegionSearch && (
            <div
              className={`absolute fade-in border z-10    mt-[1px] w-full  bg-white duration-200 drop-shadow-xl  overflow-y-auto rounded-md max-h-[300px] `}
            >
              {searchedRegions.length > 0 ? (
                searchedRegions.map((region) => (
                  <div key={region._id}>
                    <button
                      onClick={() => onRegionSelect(region)}
                      type="button"
                      className="text-lg w-full text-center font-semibold text-darkGray py-2 px-3 cursor-pointer active:ring-none   duration-200 focus:outline-none focus:bg-slate-100  hover:bg-slate-100 "
                    >
                      {language ? region.city_name_ar : region.city_name_en}
                    </button>
                    <hr className="w-[95%] mx-auto" />
                  </div>
                ))
              ) : (
                <div className="w-full grid place-content-center min-h-[150px]">
                  <p>{language ? "لايوجد نتائج" : "No results"}</p>
                </div>
              )}
            </div>
          )}
        </div>
        <input
          type="text"
          hidden
          {...register("region._id", {
            required: {
              value: true,
              message: "please enter property type",
            },
          })}
        />
      </div>
    </>
  );
};
export default GovRegion;
