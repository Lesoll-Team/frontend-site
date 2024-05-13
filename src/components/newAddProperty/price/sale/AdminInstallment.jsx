import { useSelector } from "react-redux";
import { useFieldArray } from "react-hook-form";

import { FaSquareMinus } from "react-icons/fa6";

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
const AdminInsatllment = ({ control, errors, register }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { fields, append, remove } = useFieldArray({
    name: "installment",
    control,
  });

  return (
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
                {errors?.installment && errors?.installment[index]?.period && (
                  <Error>{errors?.installment[index]?.period?.message}</Error>
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
                    placeholder={
                      language ? "نسبة المقدم" : "Down payment percentage"
                    }
                    type="text"
                    {...register(`installment.${index}.ProjectPercentage`, {
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
                      },
                    })}
                    className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
                      errors?.installment &&
                      errors?.installment[index]?.ProjectPercentage &&
                      "border-red-500 focus:border-red-500"
                    }`}
                  />
                  <span
                    className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${
                      language ? "left-14" : "right-14"
                    } `}
                  >
                    %
                  </span>
                </div>

                {errors?.installment &&
                  errors?.installment[index]?.ProjectPercentage && (
                    <Error>
                      {errors?.installment[index]?.ProjectPercentage?.message}
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
          </div>
        );
      })}
    </div>
  );
};
export default AdminInsatllment;
