import { useSelector } from "react-redux";
import { useFieldArray } from "react-hook-form";
import { FaSquareMinus } from "react-icons/fa6";

const INSTALLMENT = {
  period: "",
  amount: "",
  downPayment: "",
  ProjectPercentage: "",
  discount: "",
};
const AdminCashAndInstallment = ({
  control,
  errors,
  register,
  // setValue,
  // watch,
  // clearErrors,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { fields, append, remove } = useFieldArray({
    name: "installment",
    control,
  });

  return (
    <>
      <div className="lg:col-span-2 ">
        <div className="space-y-2 w-full mb-4 md:col-span-2">
          <h4 className="text-base text-darkGray">
            {language ? "نسبة الكاش" : "cash percentage"}
          </h4>
          <div className="relative">
            <input
              inputMode="numeric"
              type="text"
              {...register(`cashPercentage`)}
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

              <div className="flex lg:flex-row flex-col gap-y-10 gap-x-16  items-start">
                <div className="space-y-2 w-full mb-4">
                  <h4 className="text-base text-darkGray">
                    {language ? "الخصم" : "Discount"}
                  </h4>
                  <div className="relative">
                    <input
                      inputMode="numeric"
                      placeholder={language ? "إختيارى" : "optional"}
                      type="text"
                      {...register(`installment.${index}.discount`)}
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
                  <p className="text-gray-800">
                    {language ? " المقدم" : " Down payment"}
                  </p>
                  <div className="relative">
                    <input
                      inputMode="numeric"
                      type="text"
                      {...register(`installment.${index}.ProjectPercentage`, {
                        required: {
                          value: true,
                          message: "please enter downPayment",
                        },
                        validate: {
                          mustBeNumber: (value) => {
                            return !isNaN(value) || "must be a number";
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
                </div>
              </div>
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
export default AdminCashAndInstallment;
