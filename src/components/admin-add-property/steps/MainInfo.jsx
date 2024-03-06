import Error from "@/Shared/ui/Error";
import RadioBtn from "@/Shared/ui/RadioBtn";
import PropertyImages from "@/components/newAddProperty/imgs/PropertyImages";
// import PropertyImages from "@/components/new-prop-details/PropertyImages";
import GovRegion from "@/components/newAddProperty/mainInfo/location/GovRegion";
import PlaceLatLng from "@/components/newAddProperty/mainInfo/location/PlaceLatLng";
import { useLoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";
const mapLib = ["places"];
const MainInfo = ({
  clearErrors,
  control,
  errors,
  register,
  setValue,
  step,
  watch,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY_MAP,
    libraries: mapLib,
  });
  return (
    <div className="bg-lightNeutral py-8 px-6 md:px-24 rounded-lg h-full flex flex-col  gap-y-6 md:gap-y-10 gap-x-16">
      {" "}
      <h3 className="text-lg  md:text-2xl">
        {language ? "المعلومات الاساسية" : "Main Info"}{" "}
      </h3>{" "}
      <div className="w-full space-y-2">
        <label className="text-xl"> {language ? "العنوان" : "title"}</label>
        <input
          type="text"
          {...register(`title`, {
            required: {
              value: true,
              message: language ? "من فضلك ادخل العنوان" : "please enter title",
            },
          })}
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors?.title &&
            errors?.title &&
            "border-red-500 focus:border-red-500"
          }`}
        />
        {errors?.title && <Error>{errors.title.message}</Error>}
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="w-full space-y-2">
          <label className="text-xl"> {language ? "المساحة" : "Area"}</label>
          <input
            type="text"
            {...register(`area`, {
              required: {
                value: true,
                message: language
                  ? "من فضلك ادخل المساحة"
                  : "please enter Area",
              },
            })}
            className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
              errors?.area &&
              errors?.area &&
              "border-red-500 focus:border-red-500"
            }`}
          />
          {errors?.area && <Error>{errors.area.message}</Error>}
        </div>
        <div className="w-full space-y-2">
          <label className="text-xl"> {language ? "السعر" : "price"}</label>
          <input
            type="text"
            {...register(`price`, {
              required: {
                value: true,
                message: language
                  ? "من فضلك ادخل االسعر"
                  : "please enter price",
              },
            })}
            className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
              errors?.price &&
              errors?.price &&
              "border-red-500 focus:border-red-500"
            }`}
          />
          {errors?.price && <Error>{errors.price.message}</Error>}
        </div>
      </div>
      <hr className="w-full mx-auto" />
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="flex flex-wrap gap-2">
          <h4 className="text-base md:text-xl font-bold text-darkGray">
            {language ? "هل العقار فى كمبوند ؟" : "Is Property in compound?"}
          </h4>

          <RadioBtn
            title={language ? "نعم" : "Yes"}
            active={watch("isCompound")}
            onClick={() => {
              setValue("isCompound", true);
            }}
          />
          <RadioBtn
            title={language ? "لا" : "no"}
            active={!watch("isCompound")}
            onClick={() => {
              setValue("isCompound", false);
            }}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xl"> {language ? "السعر" : "price"}</label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 md:gap-x-10">
        <GovRegion
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
          clearErrors={clearErrors}
        />
      </div>
      {isLoaded && (
        <PlaceLatLng
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
          clearErrors={clearErrors}
        />
      )}
      <PropertyImages
        errors={errors}
        register={register}
        setValue={setValue}
        watch={watch}
        clearErrors={clearErrors}
      />
    </div>
  );
};
export default MainInfo;
