import Error from "@/Shared/ui/Error";
import RadioBtn from "@/Shared/ui/RadioBtn";
import PhoneNumber from "@/components/newAddProperty/PhoneNumber";
import PropertyImages from "@/components/newAddProperty/imgs/PropertyImages";
// import PropertyImages from "@/components/new-prop-details/PropertyImages";
import GovRegion from "@/components/newAddProperty/mainInfo/location/GovRegion";
import PlaceLatLng from "@/components/newAddProperty/mainInfo/location/PlaceLatLng";
import { useLoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import AdminCashAndInstallment from "./Installment";
const phoneRegex = /(\d{3}[-\s]?\d{3}[-\s]?\d{4})/g;

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
    <>
      <h1>
        {" "}
        <h3 className="text-lg  md:text-2xl">
          {language ? "المعلومات الأساسية للمشروع" : "Main Info For Project"}{" "}
        </h3>
      </h1>
      <div className="bg-lightNeutral py-8 px-6 md:px-24 rounded-lg h-full flex flex-col  gap-y-6 md:gap-y-10 gap-x-16">
        {" "}
        <div className="flex md:flex-row flex-col items-center gap-5">
          <div className="w-full space-y-2">
            <label className="text-xl">
              {" "}
              {language ? " العنوان عربى" : "title Ar"}
            </label>
            <input
              type="text"
              {...register(`titleAr`, {
                required: {
                  value: true,
                  message: language
                    ? "من فضلك ادخل العنوان"
                    : "please enter title",
                },
              })}
              className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                errors?.titleAr &&
                errors?.titleAr &&
                "border-red-500 focus:border-red-500"
              }`}
            />
            {errors?.titleAr && <Error>{errors.titleAr.message}</Error>}
          </div>
          <div className="w-full space-y-2">
            <label className="text-xl">
              {" "}
              {language ? " العنوان english" : "title En"}
            </label>
            <input
              type="text"
              {...register(`titleEn`, {
                required: {
                  value: true,
                  message: language
                    ? "من فضلك ادخل العنوان"
                    : "please enter title",
                },
              })}
              className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                errors?.titleEn &&
                errors?.titleEn &&
                "border-red-500 focus:border-red-500"
              }`}
            />
            {errors?.titleEn && <Error>{errors.titleEn.message}</Error>}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="w-full space-y-2">
            <label className="text-xl">
              {" "}
              {language ? "المساحة تبدا من" : "Area starts from"}
            </label>
            <input
              type="text"
              {...register(`areaFrom`)}
              className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                errors?.areaFrom && "border-red-500 focus:border-red-500"
              }`}
            />
            {errors?.areaFrom && <Error>{errors.areaFrom.message}</Error>}
          </div>
          <div className="w-full space-y-2">
            <label className="text-xl">
              {" "}
              {language ? "المساحة  الى" : "Area to"}
            </label>
            <input
              type="text"
              {...register(`areaTo`)}
              className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                errors?.areaTo && "border-red-500 focus:border-red-500"
              }`}
            />
            {errors?.areaTo && <Error>{errors.areaTo.message}</Error>}
          </div>
        </div>
        <AdminCashAndInstallment
          clearErrors={clearErrors}
          register={register}
          errors={errors}
          control={control}
          setValue={setValue}
          watch={watch}
        />
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="w-full space-y-2">
            <label className="text-xl">
              {" "}
              {language ? "السعر يبدأ من" : "price starts from"}
            </label>
            <input
              type="text"
              {...register(`priceFrom`, {
                required: {
                  value: true,
                  message: language
                    ? "من فضلك ادخل االسعر"
                    : "please enter priceFrom",
                },
              })}
              className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                errors?.priceFrom &&
                errors?.priceFrom &&
                "border-red-500 focus:border-red-500"
              }`}
            />
            {errors?.priceFrom && <Error>{errors.priceFrom.message}</Error>}
          </div>
          <div className="w-full space-y-2">
            <label className="text-xl">
              {" "}
              {language ? "السعر يبدأ من" : "price starts from"}
            </label>
            <input
              type="text"
              {...register(`priceTo`, {})}
              className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                errors?.priceTo &&
                errors?.priceTo &&
                "border-red-500 focus:border-red-500"
              }`}
            />
            {errors?.priceTo && <Error>{errors.priceTo.message}</Error>}
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
        </div>
        <div className="grid md:grid-cols-2 gap-5 md:gap-x-10">
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
        <hr className="w-full mx-auto" />
        <PropertyImages
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
          clearErrors={clearErrors}
        />
        <PhoneNumber
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
        />
        <hr className="w-full mx-auto" />
        <div className="space-y-2">
          <h3 className="text-xl">
            {language ? " arوصف المشروع" : "Project description ar"}
          </h3>
          <textarea
            {...register("descriptionAr", {})}
            id=""
            cols="30"
            rows="8"
            className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen resize-none placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
              errors.descriptionAr && "border-red-500 focus:border-red-500"
            }`}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl">
            {language ? "enوصف المشروع" : "Project description endw"}
          </h3>
          <textarea
            {...register("descriptionEn", {})}
            id=""
            cols="30"
            rows="8"
            className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen resize-none placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
              errors.descriptionEn && "border-red-500 focus:border-red-500"
            }`}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl">
            {language ? "ar عن الشركة " : "about company ar"}
          </h3>
          <textarea
            {...register("aboutAr", {})}
            id=""
            cols="30"
            rows="8"
            className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen resize-none placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
              errors.aboutAr && "border-red-500 focus:border-red-500"
            }`}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl">
            {language ? " enعن الشركة " : "about company en"}
          </h3>
          <textarea
            {...register("aboutEn", {})}
            id=""
            cols="30"
            rows="8"
            className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen resize-none placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
              errors.aboutEn && "border-red-500 focus:border-red-500"
            }`}
          />
        </div>
      </div>
    </>
  );
};
export default MainInfo;
