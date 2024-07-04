import DropDown from "@/Shared/ui/DropDown";
import { installmentTypeOptions } from "@/utils/addAndEditOptions";
import { useSelector } from "react-redux";
import { useFieldArray } from "react-hook-form";
import { FaSquareMinus } from "react-icons/fa6";
import { useCallback } from "react";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";
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
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  const { fields, append, remove } = useFieldArray({
    name: "installment",
    control,
  });

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
    [watch("installment"), watch("currencies")],
  );
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
          <p className="text-gray-800">
            {language ? "  الدفع الكاش" : " Cash Payment"}
          </p>
          <h4 className="text-base text-darkGray">{t("Discount")}</h4>
          <div className="relative">
            <input
              inputMode="numeric"
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
          <h3 className="text-xl font-bold">{t("Installment_Plan")}</h3>
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
                  <p className="text-gray-800">{t("Installment_System")}</p>
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
                        message: "please choose installment type",
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
                  <p className="text-gray-800">{t("Down_Payment")}</p>
                  <div className="relative">
                    <input
                      inputMode="numeric"
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
                      {watch("currencies.ISO_code")}
                    </span>
                  </div>
                </div>
                <div className="space-y-2 w-full">
                  <p className="text-gray-800">{t("Installment_Amount")}</p>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
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
                    {t("Add_New_Installment")}
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
