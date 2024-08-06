import useGovRegion from "@/components/newAddProperty/hooks/useGovRegion";
import { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Ring } from "@uiball/loaders";
import ComboBox from "@/Shared/ui/ComboBox";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import FormInputContainer from "../../ui/FormInputContainer";
import styles from "../../../styles/addMoto.module.css";

const { addMotorInput, inputError } = styles;
const GovAndRegion = () => {
  const { register, setValue, errors, watch, clearErrors } =
    useAddMotorContext();
  const [govInput, setGovInput] = useState("");
  const [regionInput, setRegionInput] = useState("");
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
    selectedGov: watch("address.governrate"),
    selectedRegion: watch("address.region"),
    watch,
    setValue,
    clearErrors,
  });
  return (
    <>
      {/* Governorate section */}
      <FormInputContainer title={language ? "المحافظة" : "Governorate"}>
        <div className="relative">
          <div className="flex items-center">
            <div className="flex w-full items-center">
              <ComboBox
                setInputValue={(value) => setGovInput(value)}
                disabled={
                  watch("address.governrate._id") || govStatus === "loading"
                }
                inputStyle={`${addMotorInput} ${errors?.address?.governrate?._id && inputError} `}
                filteredOptions={filteredGov}
                onSelect={(gov) => {
                  selectGov(gov);
                  setRegionInput("");
                  clearErrors("governrate._id");
                }}
                renderItem={(option) => {
                  return language
                    ? option.governorate_name_ar
                    : option.governorate_name_en;
                }}
                inputValue={govInput}
                error={errors?.address?.governrate?._id}
                errorMessage={errors?.address?.governrate?._id.message}
              />
              {govStatus === "loading" && (
                <div className="-mx-10">
                  <Ring size={20} />
                </div>
              )}
            </div>
            {watch("address.governrate._id") && (
              <div className="absolute mx-4 bg-gray-200 px-3 py-[2px] rounded flex items-center gap-2">
                <p>
                  {" "}
                  {language
                    ? watch("address.governrate.governorate_name_ar")
                    : watch("address.governrate.governorate_name_en")}
                </p>
                <button type="button" className="mt-[2px]" onClick={clearGov}>
                  <FaCircleXmark className="text-xs" />
                </button>
              </div>
            )}
          </div>
        </div>
        <input
          type="text"
          hidden
          {...register("address.governrate._id", {
            required: {
              value: true,
              message: language
                ? "من فضلك اختر محافظة من القائمة المقترحة"
                : "please choose governorate from the suggestions list",
            },
          })}
        />
      </FormInputContainer>

      {/* Region section */}
      <FormInputContainer title={language ? "المنطقة" : "Region"}>
        <div className="relative">
          <div className="flex items-center">
            <div className="flex items-center w-full">
              <ComboBox
                setInputValue={(value) => setRegionInput(value)}
                disabled={
                  watch("address.region._id") || regionStatus === "loading"
                }
                inputStyle={`${addMotorInput} ${errors?.address?.region?._id && inputError} `}
                filteredOptions={searchedRegions}
                onSelect={(region) => {
                  selectRegion(region);
                  setRegionInput("");
                }}
                renderItem={(option) => {
                  return language ? option.city_name_ar : option.city_name_en;
                }}
                inputValue={regionInput}
                error={errors?.address?.region?._id}
                errorMessage={errors?.address?.region?._id.message}
              />
              {regionStatus === "loading" && (
                <div className="-mx-10">
                  <Ring size={20} />
                </div>
              )}
            </div>
            {watch("address.region._id") && (
              <div className="absolute mx-4 bg-gray-200 px-3 py-[2px] rounded flex items-center gap-2">
                <p>
                  {" "}
                  {language
                    ? watch("address.region.city_name_ar")
                    : watch("address.region.city_name_en")}
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
        </div>
        <input
          type="text"
          hidden
          {...register("address.region._id", {
            required: {
              value: true,
              message: language
                ? "من فضلك اختر منطقة من القائمة المقترحة"
                : "please choose region from the suggestions list",
            },
          })}
        />
      </FormInputContainer>
    </>
  );
};

export default GovAndRegion;
