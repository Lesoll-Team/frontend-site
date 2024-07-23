import DropDown from "@/Shared/ui/DropDown";
import { installmentTypeOptions } from "@/utils/addAndEditOptions";
import { useSelector } from "react-redux";
import { useFieldArray } from "react-hook-form";
import { FaSquareMinus } from "react-icons/fa6";
import { useCallback } from "react";
import Error from "@/Shared/ui/Error";
import {
  handleMonyInputChange,
  mustBeGreaterValidation,
  validateIsNumber,
} from "../../utils/handleNumberInput";
import styles from "@/components/newAddProperty/styles/addProperrty.module.css";
import { requiredInput } from "../../utils/inputValidations";

const { addPropInput, addPropInputError } = styles;

const INSTALLMENT = {
  type: { value: "", name: { ar: "", en: "" } },
  period: "",
  amount: "",
  downPayment: "",
  discount: "",
};

const InstallmentPlan = ({
  control,
  errors,
  register,
  setValue,
  watch,
  clearErrors,
  showCashPayment,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { fields, append, remove } = useFieldArray({
    name: "installment",
    control,
  });

  const egpPer = useCallback(
    (period) => {
      const isoCode = watch("currencies.ISO_code");
      switch (period) {
        case "Monthly":
          return language ? `${isoCode}/شهر` : `${isoCode}/Month`;
        case "Yearly":
          return language ? `${isoCode}/سنة` : `${isoCode}/Year`;
        case "6 Monthly":
          return language ? `${isoCode}/شهور 6` : `${isoCode}/6 Month`;
        case "3 Monthly":
          return language ? `${isoCode}/شهور 3` : `${isoCode}/3 Month`;
        default:
          return `${isoCode}`;
      }
    },
    [language, watch],
  );

  const handleCustomChange = (e, name, onChange) => {
    onChange(e);
    handleMonyInputChange(e, name, setValue);
  };

  const renderInstallmentField = (
    label,
    name,
    registerOptions,
    index,
    onChangeHandler,
  ) => (
    <div className="space-y-2 w-full">
      <p className="text-gray-800">{label}</p>
      <div className="relative">
        <input
          inputMode="numeric"
          type="text"
          {...registerOptions}
          onChange={(e) => handleCustomChange(e, name, onChangeHandler)}
          className={`${addPropInput} ${errors?.installment?.[index]?.[name] && addPropInputError}`}
        />
        <span
          className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${language ? "left-14" : "right-14"}`}
        >
          {name === "amount"
            ? egpPer(watch(`installment.${index}.type.value`))
            : watch("currencies.ISO_code")}
        </span>
      </div>
      {errors?.installment?.[index]?.[name] && (
        <Error>{errors.installment[index][name].message}</Error>
      )}
    </div>
  );

  return (
    <div className="lg:col-span-2">
      {showCashPayment && (
        <div className="space-y-2 w-full mb-4">
          <p className="text-gray-800">
            {language ? "الدفع الكاش" : "Cash Payment"}
          </p>
          <h4 className="text-base text-darkGray">
            {language ? "الخصم" : "Discount"}
          </h4>
          <div className="relative">
            <input
              inputMode="numeric"
              placeholder={language ? "إختيارى" : "optional"}
              type="text"
              {...register(`installment.${0}.discount`)}
              className="w-full text-lg font-semibold focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60 border-2 rounded-md p-3 py-2"
            />
            <span
              className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${language ? "left-14" : "right-14"}`}
            >
              %
            </span>
          </div>
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold">
          {language ? "خطة التقسيط" : "Installment Plan"}
        </h3>
      </div>
      {fields.map((plan, index) => {
        const periodRegister = register(`installment.${index}.period`, {
          required: { value: true, message: language ? "مطلوب" : "required" },
          validate: {
            mustBeNumber: (value) => validateIsNumber(value, language),
          },
        });
        const downPaymentRegister = register(
          `installment.${index}.downPayment`,
          {
            required: { value: true, message: language ? "مطلوب" : "required" },
            validate: {
              mustBeNumber: (value) => validateIsNumber(value, language),
              max: (value) => mustBeGreaterValidation(value, language),
            },
          },
        );
        const amountRegister = register(`installment.${index}.amount`, {
          required: { value: true, message: language ? "مطلوب" : "required" },
          validate: {
            mustBeNumber: (value) => validateIsNumber(value, language),
            max: (value) => mustBeGreaterValidation(value, language),
          },
        });

        return (
          <div
            className="fade-in lg:col-span-2 flex flex-col gap-y-5 mb-6"
            key={plan.id}
          >
            <div className="flex justify-end items-center">
              {index > 0 && (
                <button type="button" onClick={() => remove(index)}>
                  <FaSquareMinus className="text-r text-2xl md:text-3xl" />
                </button>
              )}
            </div>
            <div className="flex lg:flex-row flex-col gap-y-10 gap-x-16 items-start">
              <div className="space-y-2 w-full">
                <p className="text-gray-800">
                  {language ? "نظام التقسيط" : "Installment System"}
                </p>
                <DropDown
                  options={installmentTypeOptions}
                  selected={watch(`installment.${index}.type`)}
                  setValue={(value) => {
                    setValue(`installment.${index}.type`, value);
                    clearErrors(`installment.${index}.type.value`);
                  }}
                  error={errors?.installment?.[index]?.type?.value}
                  errorMessage={
                    errors?.installment?.[index]?.type?.value?.message
                  }
                />
                <input
                  type="text"
                  hidden
                  {...register(`installment.${index}.type.value`, {
                    required: {
                      value: true,
                      message: language
                        ? "أختر نظام التقسيط"
                        : "please choose installment type",
                    },
                  })}
                />
              </div>
              {renderInstallmentField(
                language ? "مدة التقسيط" : "Installment Period",
                `period`,
                periodRegister,
                index,
                periodRegister.onChange,
              )}
            </div>
            <div className="flex lg:flex-row flex-col gap-y-10 gap-x-16 items-start">
              {renderInstallmentField(
                language ? "المقدم" : "Down payment",
                `downPayment`,
                downPaymentRegister,
                index,
                downPaymentRegister.onChange,
              )}
              {renderInstallmentField(
                language ? "قيمة التقسيط" : "Installment amount",
                `amount`,
                amountRegister,
                index,
                amountRegister.onChange,
              )}
            </div>
            {fields.length === index + 1 && index < 3 && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="w-fit text-blue-500 underline font-bold"
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

export default InstallmentPlan;
