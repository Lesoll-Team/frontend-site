import DropDown from "@/Shared/ui/DropDown";
import { installmentTypeOptions } from "@/utils/addAndEditOptions";
import { useSelector } from "react-redux";
import { useFieldArray } from "react-hook-form";

import { FaSquareMinus } from "react-icons/fa6";
import usePeriodType from "@/Hooks/usePeriodType";
import { useCallback } from "react";
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
  discount: "",
};
const CashAndInstallment = ({
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
  console.log(errors);
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
          return language ? "جنية/شهر" : "Egp/Month";
        case "Yearly":
          return language ? "جنية/سنة" : "Egp/Year";
        case "6 Monthly":
          return language ? "جنية/6 شهور" : "Egp/6 Month";
        case "3 Monthly":
          return language ? " جنية/3 شهور" : "Egp/3 Month";
        default:
          return language ? "جنية" : "Egp";
      }
    },
    [watch("installment")]
  );

  console.log(watch(`installment.${0}.type.value`));
  return (
    <>
      <div className="lg:col-span-2 ">
        {/* <h3 className="text-xl lg:col-span-2 font-bold">
          {language ? "خطة التقسيط" : "Installment Plan"}
        </h3> */}

        {/* <h4 className="text-lg font-semibold">
                {language ? `خطة رقم ${index + 1}` : ""}
              </h4> */}
        <div className="space-y-2 w-full mb-4">
          <h3 className="text-xl font-bold">
            {language ? "  الدفع الكاش" : " Cash Payment"}
          </h3>
          <h4 className="text-base text-darkGray">
            {language ? "الخصم" : "Discount"}
          </h4>
          <div className="relative">
            <input
              placeholder={language ? "إختيارى" : "optional"}
              type="text"
              {...register(`installment.${0}.discount`)}
              className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 `}
            />
            <span
              className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${
                language ? "left-14" : "right-14"
              } `}
            >
              %
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">
            {language ? " خطة التقسيط" : " Installment Plan"}
          </h3>
        </div>
        {fields.map((plan, index) => {
          return (
            <div
              className="fade-in lg:col-span-2 flex flex-col gap-y-5 mb-6 "
              key={plan.id}
            >
              <div className="flex justify-end items-center">
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

              {/* gap-y-10 gap-x-16  */}

              <div className="flex lg:flex-row flex-col gap-y-10 gap-x-16  items-start">
                <div className="space-y-2 w-full">
                  <h3 className="text-xl">
                    {language ? " نظام التقسيط" : "Installment System"}
                  </h3>
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
                  {/* {console.log(watch("saleOption.name.ar"))} */}
                  <input
                    type="text"
                    hidden
                    {...register(`installment.${index}.type.value`, {
                      required: {
                        value: true,
                        message: "please choose installment type",
                      },
                    })}
                  />
                </div>

                <div className="space-y-2 w-full">
                  <h3 className="text-xl">
                    {language ? "مدة التقسيط" : "Installment Period"}
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      {...register(`installment.${index}.period`, {
                        required: {
                          value: true,
                          message: "please enter period",
                        },
                        validate: {
                          mustBeNumber: (value) => {
                            return !isNaN(value) || "must be a number";
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
                </div>
              </div>

              <div className="flex lg:flex-row flex-col gap-y-10 gap-x-16  items-start">
                <div className="space-y-2 w-full">
                  <h3 className="text-xl">
                    {language ? " المقدم" : " Down payment"}
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      {...register(`installment.${index}.downPayment`, {
                        required: {
                          value: true,
                          message: "please enter downPayment",
                        },
                        validate: {
                          mustBeNumber: (value) => {
                            return !isNaN(value) || "must be a number";
                          },
                          max: (value) => {
                            return parseInt(value) > 100 || "min is 100";
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
                      {language ? "جنية" : "Egp"}
                    </span>
                  </div>
                </div>
                <div className="space-y-2 w-full">
                  <h3 className="text-xl">
                    {language ? "قيمة التقسيط" : "Installment amount"}
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      {...register(`installment.${index}.amount`, {
                        required: {
                          value: true,
                          message: "please enter amount",
                        },
                        validate: {
                          mustBeNumber: (value) => {
                            return !isNaN(value) || "must be a number";
                          },
                          max: (value) => {
                            return parseInt(value) > 100 || "min is 100";
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
export default CashAndInstallment;
