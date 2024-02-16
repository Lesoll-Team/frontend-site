import DropDown from "@/Shared/ui/DropDown";
import { saleOptions } from "@/utils/addAndEditOptions";
import { useSelector } from "react-redux";
import Installment from "./Installment";
import { useCallback } from "react";
import Cash from "./Cash";

const Sale = ({
  errors,
  register,
  setValue,
  watch,
  clearErrors,
  control,
  fields,
  append,
  remove,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const selectedSaleOption = useCallback(() => {
    const selectedOption = watch("saleOption.value");
    if (selectedOption.length > 0) {
      if (selectedOption[0] === "Cash") {
        return (
          <Cash
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
      } else if (selectedOption[0] === "Installment") {
        return (
          <Installment
            fields={fields}
            append={append}
            remove={remove}
            control={control}
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
      }
    }
  }, [watch("saleOption.value")]);
  return (
    <>
      <div className=" space-y-2">
        <h3 className="text-xl">{language ? " سعر الوحدة" : " Unit price"}</h3>
        <div className="relative">
          <input
            autoComplete="off"
            type="text"
            {...register("price", {
              required: {
                value: true,
                message: "please enter price",
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
              errors.price && "border-red-500 focus:border-red-500"
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
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">
          {language ? "طريقة الدفع" : "Payment Method"}
        </h3>
        <DropDown
          options={saleOptions}
          selected={watch("saleOption")}
          setValue={(value) => {
            setValue("saleOption", value);
            clearErrors("saleOption.name.ar");
          }}
          error={errors?.saleOption?.name.ar}
          errorMessage={errors?.saleOption?.name?.ar?.message}
        />
        {/* {console.log(watch("saleOption.name.ar"))} */}
        <input
          type="text"
          hidden
          {...register("saleOption.name.ar", {
            required: {
              value: true,
              message: "please choose price",
            },
          })}
        />
      </div>
      {/* {watch("saleOption.value").length === 1 && watch("saleOption")} */}
      {watch("saleOption.value").length < 2 && selectedSaleOption()}
    </>
  );
};
export default Sale;
