import DropDown from "@/Shared/ui/DropDown";
import { installmentTypeOptions } from "@/utils/addAndEditOptions";
import { useSelector } from "react-redux";
import { useFieldArray } from "react-hook-form";

import { FaSquareMinus } from "react-icons/fa6";

import { useCallback } from "react";
import Error from "@/Shared/ui/Error";
const INSTALLMENT = {
  type: {
    value: "",
    name: {
      ar: "",
      en: "",
    },
  },
  period: "",
  amount: "",
  downPayment: "",
  ProjectPercentage: "",
  discount: "",
};
const Installment = ({
  control,
  errors,
  register,
  setValue,
  watch,
  clearErrors,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { fields, append, remove } = useFieldArray({
    name: "installment",
    control,
  });

  // const lll = (number) => {
  //   let arr = [];
  //   for (let i = 0; i < watch("installment").length; i++) {
  //     const { egpPer } = usePeriodType(watch(`installment.${i}.type.value`));
  //     arr.push(egpPer);
  //   }
  //   return arr[number];
  // };

  const egpPer = useCallback(
    (period) => {
      switch (period) {
        case "Monthly":
          return language
            ? `${watch("currencies.ISO_code")}/شهر`
            : `${watch("currencies.ISO_code")}/Month`;
        case "Yearly":
          return language
            ? `${watch("currencies.ISO_code")}/سنة`
            : `${watch("currencies.ISO_code")}/Year`;
        case "6 Monthly":
          return language
            ? `${watch("currencies.ISO_code")}/ شهور 6`
            : `${watch("currencies.ISO_code")} /6 Month`;
        case "3 Monthly":
          return language
            ? `${watch("currencies.ISO_code")}/ شهور 3`
            : `${watch("currencies.ISO_code")} /3 Month`;
        default:
          return language
            ? `${watch("currencies.ISO_code")}`
            : `${watch("currencies.ISO_code")}`;
      }
    },
    [watch("installment"), watch("currencies")]
  );

  return (
    <>
      <div className="lg:col-span-2 ">
        <h3 className="text-xl lg:col-span-2 font-bold">
          {language ? "خطة التقسيط" : "Installment Plan"}
        </h3>
        {fields.map((plan, index) => {
          return (
            <div
              className="fade-in lg:col-span-2 flex flex-col gap-y-5 mb-6 "
              key={plan.id}
            >
              {/* gap-y-10 gap-x-16  */}

              <div className="flex justify-end items-center">
                {/* <h4 className="text-lg font-semibold">
                {language ? `خطة رقم ${index + 1}` : ""}
              </h4> */}
                {index > 0 && (
                  <button
                    type="button"
                    className=""
                    onClick={() => remove(index)}
                  >
                    <FaSquareMinus className="text-r text-2xl md:text-3xl" />
                  </button>
                )}
              </div>
              <div className="flex lg:flex-row flex-col gap-y-10 gap-x-16  items-start">
                <div className="space-y-2 w-full">
                  <p className="text-gray-800">
                    {language ? " نظام التقسيط" : "Installment System"}
                  </p>
                  <DropDown
                    options={installmentTypeOptions}
                    selected={watch(`installment.${index}.type`)}
                    setValue={(value) => {
                      setValue(`installment.${index}.type`, value);
                      clearErrors(`installment.${index}.type.value`);
                    }}
                    error={
                      errors?.installment &&
                      errors?.installment[index]?.type?.value
                    }
                    errorMessage={
                      errors?.installment &&
                      errors?.installment[index]?.type?.value?.message
                    }
                  />

                  <input
                    type="text"
                    hidden
                    {...register(`installment.${index}.type.value`, {
                      required: {
                        value: true,
                        message: language
                          ? "من فضلك اختر نوع التقسيط"
                          : "please choose installment type",
                      },
                    })}
                  />
                </div>

                <div className="space-y-2 w-full">
                  <p className="text-gray-800">
                    {language ? "مدة التقسيط" : "Installment Period"}
                  </p>
                  <div className="relative">
                    <input
                      inputMode="numeric"
                      type="text"
                      {...register(`installment.${index}.period`, {
                        required: {
                          value: true,
                          message: language
                            ? "من فضلك ادخل مدة التقسيط"
                            : "please enter installment period",
                        },
                        validate: {
                          mustBeNumber: (value) => {
                            return (
                              !isNaN(value) ||
                              (language
                                ? "يجب ان تكون مدة التقسيط رقم"
                                : "installment period must be a number")
                            );
                          },
                          // max: (value) => {
                          //   return parseInt(value) > 100 || "min is 100";
                          // },
                        },
                      })}
                      className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                        errors?.installment &&
                        errors?.installment[index]?.period &&
                        "border-red-500 focus:border-red-500"
                      }`}
                    />
                    <span
                      className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${
                        language ? "left-14" : "right-14"
                      } `}
                    >
                      {language ? "سنين" : "years"}
                    </span>
                  </div>
                  {errors?.installment &&
                    errors?.installment[index]?.period && (
                      <Error>
                        {errors?.installment[index]?.period?.message}
                      </Error>
                    )}
                </div>
              </div>

              <div className="flex lg:flex-row flex-col gap-y-10 gap-x-16  items-start">
                <div className="space-y-2 w-full">
                  <p className="text-gray-800">
                    {language ? " المقدم" : " Down payment"}
                  </p>
                  <div className="relative">
                    <input
                      inputMode="numeric"
                      type="text"
                      {...register(`installment.${index}.downPayment`, {
                        required: {
                          value: true,
                          message: language
                            ? "من فضلك ادخل المقدم"
                            : "please enter Down Payment",
                        },
                        validate: {
                          mustBeNumber: (value) => {
                            return (
                              !isNaN(value) ||
                              (language
                                ? "يجب ان يكون المقدم رقم"
                                : "Down Payment must be a number")
                            );
                          },
                          max: (value) => {
                            return (
                              parseInt(value) >= 1000 ||
                              (language
                                ? "يجب ان لا يقل المقدم عن 1000 جنية "
                                : "Down Payment must be at least 1000 Egp")
                            );
                          },
                        },
                      })}
                      className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                        errors?.installment &&
                        errors?.installment[index]?.downPayment &&
                        "border-red-500 focus:border-red-500"
                      }`}
                    />
                    <span
                      className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${
                        language ? "left-14" : "right-14"
                      } `}
                    >
                      {watch("currencies.ISO_code")}
                    </span>
                  </div>
                  {/* {errors?.installment[index]?.downPayment && (
                    <Error>
                      {errors?.installment[index]?.downPayment.message}
                    </Error>
                  )} */}
                  {errors?.installment &&
                    errors?.installment[index]?.downPayment && (
                      <Error>
                        {errors?.installment[index]?.downPayment?.message}
                      </Error>
                    )}
                </div>

                <div className="space-y-2 w-full">
                  <p className="text-gray-800">
                    {language ? "قيمة التقسيط" : "Installment amount"}
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      {...register(`installment.${index}.amount`, {
                        required: {
                          value: true,
                          message: language
                            ? "من فضلك ادخل قيمة التقسيط"
                            : "please enter installment amount",
                        },
                        validate: {
                          mustBeNumber: (value) => {
                            return (
                              !isNaN(value) ||
                              (language
                                ? "يجب ان تكون قيمة التقسيط رقم"
                                : "Installment amount must be a number")
                            );
                          },
                          max: (value) => {
                            return (
                              parseInt(value) >= 1000 ||
                              (language
                                ? " يجب ان لا تقل قيمة التقسيط عن 1000 جنية"
                                : "Installment amount must be at least 1000 Egp")
                            );
                          },
                        },
                      })}
                      className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                        errors?.installment &&
                        errors?.installment[index]?.amount &&
                        "border-red-500 focus:border-red-500"
                      }`}
                    />
                    <span
                      className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${
                        language ? "left-14" : "right-14"
                      } `}
                    >
                      {egpPer(watch(`installment.${index}.type.value`))}
                    </span>
                  </div>
                  {errors?.installment &&
                    errors?.installment[index]?.amount && (
                      <Error>
                        {errors?.installment[index]?.amount.message}
                      </Error>
                    )}
                </div>
              </div>
              {fields.length === index + 1 && index < 3 && (
                <div className="flex justify-end">
                  {" "}
                  <button
                    type="button"
                    className=" w-fit text-blue-500 underline font-bold"
                    onClick={() => append(INSTALLMENT)}
                  >
                    {language ? "إضافة خطة تقسيط اخرى" : "add new installment"}
                  </button>
                </div>
              )}
              {/* {index > 0 && (
              <button className="mx-3" onClick={() => remove(index)}>
                remove
              </button>
            )} */}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Installment;
