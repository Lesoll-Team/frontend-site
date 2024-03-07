import Error from "@/Shared/ui/Error";
import RadioBtn from "@/Shared/ui/RadioBtn";
import PhoneNumber from "@/components/newAddProperty/PhoneNumber";
import PropertyImages from "@/components/newAddProperty/imgs/PropertyImages";
// import PropertyImages from "@/components/new-prop-details/PropertyImages";
import GovRegion from "@/components/newAddProperty/mainInfo/location/GovRegion";
import PlaceLatLng from "@/components/newAddProperty/mainInfo/location/PlaceLatLng";
import { useLoadScript } from "@react-google-maps/api";
import { useSelector } from "react-redux";
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
        <div className="w-full space-y-2">
          <label className="text-xl"> {language ? "العنوان" : "title"}</label>
          <input
            type="text"
            {...register(`title`, {
              required: {
                value: true,
                message: language
                  ? "من فضلك ادخل العنوان"
                  : "please enter title",
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
            <label className="text-xl">
              {" "}
              {language ? "المساحة تبدا من" : "Area starts from"}
            </label>
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
            <label className="text-xl">
              {" "}
              {language ? "السعر يبدأ من" : "price starts from"}
            </label>
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
            {language ? "وصف المشروع" : "Project description"}
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
                  return (
                    value.length > 20 ||
                    (language
                      ? "يجب الا يقل الوصف عن 20 حرف"
                      : "description must be at least 20 characters long")
                  );
                },
                containPhone: (value) => {
                  return (
                    !value.match(phoneRegex) ||
                    (language
                      ? "رقم الهاتف فى الوصف غير  مسموح"
                      : "Phone number in description are not allowed")
                  );
                },
              },
            })}
            id=""
            cols="30"
            rows="8"
            className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen resize-none placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
              errors.description && "border-red-500 focus:border-red-500"
            }`}
          />
          {errors.description && (
            <Error className="">{errors.description.message}</Error>
          )}
        </div>
        <div className="space-y-2">
          <h3 className="text-xl">
            {language ? "عن الشركة " : "about company"}
          </h3>
          <textarea
            {...register("about", {
              required: {
                value: true,
                message: "please enter about",
              },
              validate: {
                // mustBeNumber: (value) => {
                //   return !isNaN(value) || "must be a number";
                // },
                min: (value) => {
                  return (
                    value.length > 20 ||
                    (language
                      ? "يجب الا يقل الوصف عن 20 حرف"
                      : "about must be at least 20 characters long")
                  );
                },
                containPhone: (value) => {
                  return (
                    !value.match(phoneRegex) ||
                    (language
                      ? "رقم الهاتف فى الوصف غير  مسموح"
                      : "Phone number in about are not allowed")
                  );
                },
              },
            })}
            id=""
            cols="30"
            rows="8"
            className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen resize-none placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
              errors.about && "border-red-500 focus:border-red-500"
            }`}
          />
          {errors.about && <Error className="">{errors.about.message}</Error>}
        </div>
      </div>
    </>
  );
};
export default MainInfo;
