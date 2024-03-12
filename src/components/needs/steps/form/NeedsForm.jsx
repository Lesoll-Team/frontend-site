import { useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import DropDown from "@/Shared/ui/DropDown";
import { propTypeList } from "@/utils/addAndEditOptions";
import Error from "@/Shared/ui/Error";
import { useMemo } from "react";
import { unitTypeList } from "@/components/newAddProperty/mainInfo/unitTypeList";
import GovRegion from "@/components/newAddProperty/mainInfo/location/GovRegion";
import Button from "@/Shared/ui/Button";
const phoneRegex = /(\d{3}[-\s]?\d{3}[-\s]?\d{4})/g;
const NeedsForm = ({
  register,
  watch,
  setValue,
  setStep,
  errors,
  clearErrors,
  onSubmit,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
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
    <div className="space-y-6 fade-in-right px-2 md:px-0 md:container mx-auto">
      <div className="flex items-center gap-2 ">
        <button
          onClick={() => {
            setStep(2);
          }}
          className="flex items-center gap-1"
        >
          <IoMdArrowRoundBack
            className={`text-xl md:text-3xl mt-1 ${
              language ? "rotate-180" : ""
            }`}
          />
          {/* {language ? "رجوع" : "Back"} */}
        </button>
        <h1 className=" font-bold ">
          {language
            ? "ادخل بيانات العقار المطلوب"
            : "Enter the required property information"}
        </h1>
      </div>
      <div
        onSubmit={onSubmit}
        className="bg-lightNeutral py-8 px-6 md:px-24 rounded-lg h-full flex flex-col gap-y-10 gap-x-16"
      >
        <div className="flex md:flex-row flex-col gap-10 w-full">
          <div className="space-y-2 w-full">
            <p className="text-gray-800">
              {language ? "نوع العقار" : "Property Type"}
            </p>
            <input
              type="text"
              hidden
              {...register("propType.value", {
                required: {
                  value: true,
                  message: language
                    ? "من فضلك اختر نوع العقار"
                    : "please choose property type",
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
            {errors?.propType?.value && (
              <Error>{errors.propType.value.message}</Error>
            )}
          </div>
          <div className="space-y-2 w-full">
            <p className="text-gray-800">
              {language ? "نوع الوحده" : "Unit Type"}
            </p>
            <input
              type="text"
              hidden
              {...register("unitType.value", {
                required: {
                  value: true,
                  message: language
                    ? "من فضلك اختر نوع الوحدة"
                    : "please enter unit type",
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
            {errors?.unitType?.value && (
              <Error>{errors.unitType.value.message}</Error>
            )}
          </div>
        </div>
        <div className="space-y-6 w-full">
          <p className="text-gray-800">{language ? " السعر" : "Price"}</p>
          <div className="flex md:flex-row flex-col items-center gap-8 w-full">
            <div className=" space-y-2 w-full">
              <div className="relative">
                <input
                  autoComplete="off"
                  type="text"
                  placeholder={language ? "من" : "from"}
                  {...register("priceFrom", {
                    required: {
                      value: true,
                      message: language
                        ? "من فضلك ادخل السعر"
                        : "please enter price",
                    },
                    validate: {
                      mustBeNumber: (value) => {
                        return (
                          !isNaN(value) ||
                          (language
                            ? "السعر يجب ان يكون رقم"
                            : "the price must be a number")
                        );
                      },
                    },
                  })}
                  className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                    errors.priceFrom && "border-red-500 focus:border-red-500"
                  }`}
                />
                <span
                  className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${
                    language ? "left-14" : "right-14"
                  } `}
                >
                  {language ? "جنية" : "Egp"}
                </span>
              </div>
              {errors.priceFrom && <Error>{errors.priceFrom.message}</Error>}
            </div>
            <div className=" space-y-2  w-full">
              <div className="relative">
                <input
                  autoComplete="off"
                  type="text"
                  placeholder={language ? "الى" : "to"}
                  {...register("priceTo", {
                    required: {
                      value: true,
                      message: language
                        ? "من فضلك ادخل السعر"
                        : "please enter price",
                    },
                    validate: {
                      mustBeNumber: (value) => {
                        return (
                          !isNaN(value) ||
                          (language
                            ? "السعر يجب ان يكون رقم"
                            : "the price must be a number")
                        );
                      },
                    },
                  })}
                  className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                    errors.priceTo && "border-red-500 focus:border-red-500"
                  }`}
                />
                <span
                  className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${
                    language ? "left-14" : "right-14"
                  } `}
                >
                  {language ? "جنية" : "Egp"}
                </span>
              </div>
              {errors.priceTo && <Error>{errors.priceTo.message}</Error>}
            </div>
          </div>
        </div>
        <div className="space-y-6 w-full">
          <p className="text-gray-800">{language ? " المساحة" : "Area"}</p>
          <div className="flex  md:flex-row flex-col items-center gap-8">
            <div className=" space-y-2 w-full">
              <div className="relative">
                <input
                  autoComplete="off"
                  type="text"
                  placeholder={language ? "من" : "from"}
                  {...register("areaFrom", {
                    required: {
                      value: true,
                      message: language
                        ? "من فضلك المساحة "
                        : "please enter price",
                    },
                    validate: {
                      mustBeNumber: (value) => {
                        return (
                          !isNaN(value) ||
                          (language
                            ? "المساحة يجب ان تكون رقم"
                            : "the area must be a number")
                        );
                      },
                    },
                  })}
                  className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                    errors.areaFrom && "border-red-500 focus:border-red-500"
                  }`}
                />
                <span
                  className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${
                    language ? "left-14" : "right-14"
                  } `}
                >
                  {language ? "م2" : "m2"}
                </span>
              </div>
              {errors.areaFrom && <Error>{errors.areaFrom.message}</Error>}
            </div>
            <div className=" space-y-2 w-full">
              <div className="relative">
                <input
                  autoComplete="off"
                  type="text"
                  placeholder={language ? "الى" : "to"}
                  {...register("areaTo", {
                    required: {
                      value: true,
                      message: language
                        ? "من فضلك ادخل المساحة"
                        : "please enter area",
                    },
                    validate: {
                      mustBeNumber: (value) => {
                        return (
                          !isNaN(value) ||
                          (language
                            ? "المساحة يجب ان يكون رقم"
                            : "the area must be a number")
                        );
                      },
                    },
                  })}
                  className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                    errors.areaTo && "border-red-500 focus:border-red-500"
                  }`}
                />
                <span
                  className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${
                    language ? "left-14" : "right-14"
                  } `}
                >
                  {language ? "م2" : "m2"}
                </span>
              </div>
              {errors.areaTo && <Error>{errors.areaTo.message}</Error>}
            </div>
          </div>
        </div>
        {watch("saleOption") === "Installment" &&
          watch("offer") === "For Sale" && (
            <div className=" flex md:flex-row flex-col gap-10">
              <div className="space-y-2 w-full  ">
                <p className="text-gray-800">
                  {language ? "المقدم" : "Down payment"}
                </p>
                <input
                  type="text"
                  {...register("installment.0.downPayment", {
                    required: {
                      value: true,
                      message: language
                        ? "من فضلك المقدم "
                        : "please enter the Down payment",
                    },
                    validate: {
                      mustBeNumber: (value) => {
                        return (
                          !isNaN(value) ||
                          (language
                            ? "المقدم  يجب ان يكون رقما"
                            : "Rooms must be a number")
                        );
                      },
                    },
                  })}
                  className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                    errors.installment &&
                    errors.installment[0].downPayment &&
                    "border-red-500 focus:border-red-500"
                  }`}
                  // className={"border-none"}
                />
                {errors.installment && errors.installment[0].downPayment && (
                  <p className="text-red-500">
                    {errors.installment[0].downPayment.message}
                  </p>
                )}{" "}
              </div>
              <div className="space-y-2 w-full">
                <p className="text-gray-800">
                  {language ? "مدة التقسيط" : "installment period"}
                </p>
                <input
                  type="text"
                  {...register("installment.0.period", {
                    required: {
                      value: true,
                      message: language
                        ? "من فضلك ادخل مدة التقسيط"
                        : "please enter the installation period",
                    },
                    validate: {
                      mustBeNumber: (value) => {
                        return (
                          !isNaN(value) ||
                          (language
                            ? "مدة التقسيط  يجب ان تكون رقما"
                            : "Installment period must be a number")
                        );
                      },
                    },
                  })}
                  className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                    errors?.installment &&
                    errors?.installment[0]?.period &&
                    "border-red-500 focus:border-red-500"
                  }`}
                  // className={"border-none"}
                />
                {errors?.installment && errors?.installment[0]?.period && (
                  <p className="text-red-500">
                    {errors?.installment &&
                      errors?.installment[0]?.period?.message}
                  </p>
                )}{" "}
              </div>
            </div>
          )}
        <div className=" flex items-center md:flex-row flex-col gap-10">
          <div className="space-y-2 w-full">
            <p className="text-gray-800">{language ? "عدد الغرف" : "Rooms"}</p>
            <input
              type="text"
              {...register("rooms", {
                required: {
                  value: true,
                  message: language
                    ? "من فضلك ادخل عددالغرف"
                    : "please enter the number of rooms",
                },
                validate: {
                  mustBeNumber: (value) => {
                    return (
                      !isNaN(value) ||
                      (language
                        ? "عدد الغرف يجب ان يكون رقما"
                        : "Rooms must be a number")
                    );
                  },
                },
              })}
              className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                errors.rooms && "border-red-500 focus:border-red-500"
              }`}
              // className={"border-none"}
            />
            {errors.rooms && (
              <p className="text-red-500">{errors.rooms.message}</p>
            )}{" "}
          </div>
          <div className="space-y-2  w-full">
            <p className="text-gray-800">
              {language ? "عدد الحمامات" : "Bathrooms"}
            </p>
            <input
              type="text"
              {...register("bathRooms", {
                required: {
                  value: true,
                  message: language
                    ? "من فضلك ادخل الحمامات"
                    : "please enter the number of bathrooms",
                },
                validate: {
                  mustBeNumber: (value) => {
                    return (
                      !isNaN(value) ||
                      (language
                        ? "عدد الحمامات يجب ان يكون رقما"
                        : "bathrooms must be a number")
                    );
                  },
                },
              })}
              className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                errors.bathRooms && "border-red-500 focus:border-red-500"
              }`}
              // className={"border-none"}
            />
            {errors.bathRooms && (
              <p className="text-red-500">{errors.bathRooms.message}</p>
            )}{" "}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 w-full">
          <GovRegion
            watch={watch}
            setValue={setValue}
            clearErrors={clearErrors}
            register={register}
            errors={errors}
          />
        </div>
        <div className="lg:col-span-2 space-y-2">
          <p className="text-gray-800">
            {language ? "هل تريد إضافة اي تفاصيل أخرى؟  " : "More information"}
          </p>
          <textarea
            {...register("description", {
              validate: {
                min: (value) => {
                  return (
                    value.length <= 300 ||
                    (language
                      ? "يجب الا يزيد الوصف عن 300 حرف"
                      : "description must less than 300 characters long")
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
            rows="10"
            className={` w-full text-lg font-semibold max-h-[200px]  focus:outline-none focus:border-lightGreen resize-none placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
              errors.description && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-outLine">
            {watch("description")?.length || 0}/300
          </p>
          {errors.description && (
            <Error className="">{errors.description.message}</Error>
          )}
        </div>
        {/* <NeedsDescription /> */}
      </div>
      <div className="flex flex-start">
        <Button type="submit" className={"md:max-w-[300px]"}>
          {status === "loading"
            ? "loading ..."
            : language
              ? "أضف طلبك"
              : "Add your need"}
        </Button>
      </div>
    </div>
  );
};
export default NeedsForm;
