import { useSelector } from "react-redux";
import AddPropSectionContainer from "../AddPropSectionContainer";
import DropDown from "@/Shared/ui/DropDown";
import { propTypeList } from "./propTypeList";
import { unitTypeList } from "./unitTypeList";
import { useEffect, useMemo } from "react";
import GovRegion from "./location/GovRegion";
import PlaceLatLng from "./location/PlaceLatLng";
import { useLoadScript } from "@react-google-maps/api";
const phoneRegex = /(\d{3}[-\s]?\d{3}[-\s]?\d{4})/g;
const mapLib = ["places"];
const AddPropMainInfo = ({
  errors,
  register,
  setValue,
  watch,
  clearErrors,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_MAP,
    libraries: mapLib,
  });
  useEffect(() => {
    if (watch("propType.value")) {
      clearErrors("propType.value");
    }
  }, [watch("propType.value")]);
  useEffect(() => {
    if (watch("unitType.value")) {
      clearErrors("unitType.value");
    }
  }, [watch("unitType.value")]);
  const determineOptions = useMemo(() => {
    const propType = watch("propType.value");
    switch (propType) {
      case "Residential":
        return unitTypeList.Residential;
      case "Commercial":
        return unitTypeList.Commercial;
      case "Land":
        return unitTypeList.Land;
      default:
        return unitTypeList.Residential;
    }
  }, [watch("propType.value")]);
  return (
    <AddPropSectionContainer>
      <div className="lg:col-span-2 space-y-2">
        <h3 className="text-xl">
          {language ? "عنوان الإعلان" : "Proprty Title"}
        </h3>
        <input
          autoComplete="off"
          type="text"
          multiple
          {...register("title", {
            required: {
              value: true,
              message: "please enter title",
            },
            validate: {
              // mustBeNumber: (value) => {
              //   return !isNaN(value) || "must be a number";
              // },
              max: (value) => {
                return value.length < 100 || "max is 100";
              },
              max: (value) => {
                return (
                  !value.match(phoneRegex) || "title contain a phone number"
                );
              },
            },
          })}
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors.title && "border-red-500 focus:border-red-500"
          }`}
          // className={"border-none"}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div className=" space-y-2">
        <h3 className="text-xl">{language ? "نوع الإعلان" : "Offer Type"}</h3>
        <div className=" flex justify-start gap-10 flex-wrap">
          <button
            type="button"
            className="flex gap-1 items-center"
            onClick={() => setValue("offer", "For Sale")}
          >
            {" "}
            <span className="border-2 w-4 h-4 p-[2px] rounded-full">
              {watch("offer") === "For Sale" && (
                <div className="h-full w-full rounded-full bg-blue-600"></div>
              )}
            </span>
            {language ? "للبيع" : "For Sale"}
          </button>
          <button
            type="button"
            className="flex gap-1 items-center"
            onClick={() => setValue("offer", "For Rent")}
          >
            {" "}
            <span className="border-2 w-4 h-4 p-[2px] rounded-full">
              {watch("offer") === "For Rent" && (
                <div className="h-full w-full rounded-full bg-blue-600"></div>
              )}
            </span>
            {language ? "للإيجار" : "For Rent"}
          </button>
          <button
            type="button"
            className="flex gap-1 items-center"
            onClick={() => setValue("offer", "For Investment")}
          >
            {" "}
            <span className="border-2 w-4 h-4 p-[2px] rounded-full">
              {watch("offer") === "For Investment" && (
                <div className="h-full w-full rounded-full bg-blue-600"></div>
              )}
            </span>
            {language ? "للإستثمار" : "For Investment"}
          </button>
        </div>
      </div>
      <div className=" space-y-2">
        <h3 className="text-xl">
          {language ? "العقار فى كومباوند " : "Property in compound"}
        </h3>
        <div className=" flex justify-start gap-10 flex-wrap">
          <button
            type="button"
            className="flex gap-1 items-center"
            onClick={() => setValue("isCompound", false)}
          >
            {" "}
            <span className="border-2 w-4 h-4 p-[2px] rounded-full">
              {!watch("isCompound") && (
                <div className="h-full w-full rounded-full bg-blue-600"></div>
              )}
            </span>
            {language ? "لا" : "No"}
          </button>
          <button
            type="button"
            className="flex gap-1 items-center"
            onClick={() => setValue("isCompound", true)}
          >
            {" "}
            <span className="border-2 w-4 h-4 p-[2px] rounded-full">
              {watch("isCompound") && (
                <div className="h-full w-full rounded-full bg-blue-600"></div>
              )}
            </span>
            {language ? "نعم" : "Yes"}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">{language ? "نوع العقار" : "Property Type"}</h3>
        <input
          type="text"
          hidden
          {...register("propType.value", {
            required: {
              value: true,
              message: "please enter property type",
            },
          })}
        />

        <DropDown
          error={errors.propType?.value}
          selected={watch("propType")}
          setValue={(value) => {
            setValue("propType", value);
            if (value.value !== watch("propType")) {
              setValue("unitType", { name: "", value: "" });
            }
          }}
          options={propTypeList}
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">{language ? "نوع الوحده" : "Unit Type"}</h3>
        <input
          type="text"
          hidden
          {...register("unitType.value", {
            required: {
              value: true,
              message: "please enter unit type",
            },
          })}
        />
        <DropDown
          error={errors.unitType?.value}
          selected={watch("unitType")}
          setValue={(value) => {
            setValue("unitType", value);
          }}
          disabled={!watch("propType.value")}
          options={determineOptions}
        />
      </div>
      <GovRegion
        errors={errors}
        register={register}
        setValue={setValue}
        watch={watch}
        clearErrors={clearErrors}
      />
      {isLoaded && (
        <PlaceLatLng
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
          clearErrors={clearErrors}
        />
      )}
      {/* <GoogleMapLocation
        errors={errors}
        register={register}
        setValue={setValue}
        watch={watch}
        clearErrors={clearErrors}
      /> */}
      <div className="lg:col-span-2 space-y-2">
        <h3 className="text-xl">
          {language ? "وصف العقار" : "Property description"}
        </h3>
        <textarea
          {...register("description", {
            required: {
              value: true,
              message: "please enter description",
            },
            validate: {
              // mustBeNumber: (value) => {
              //   return !isNaN(value) || "must be a number";
              // },
              min: (value) => {
                return value.length > 20 || "min is 20";
              },
              containPhone: (value) => {
                return (
                  !value.match(phoneRegex) ||
                  "description contain a phone number"
                );
              },
            },
          })}
          id=""
          cols="30"
          rows="10"
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen resize-none placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors.description && "border-red-500 focus:border-red-500"
          }`}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      {/* <div className="h-screen"></div> */}
    </AddPropSectionContainer>
  );
};
export default AddPropMainInfo;
