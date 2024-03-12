import DropDown from "@/Shared/ui/DropDown";
import { useSelector } from "react-redux";
import { rentalTypes } from "./rentalTypes";
import RadioBtn from "@/Shared/ui/RadioBtn";
import Error from "@/Shared/ui/Error";

const Rent = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <div className=" space-y-2">
        <p className="text-gray-800">
          {language ? " سعر الوحدة" : " Unit price"}
        </p>
        <input
          autoComplete="off"
          type="text"
          {...register("price", {
            required: {
              value: true,
              message: language ? "من فضلك ادخل السعر" : "please enter price",
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
              max: (value) => {
                return (
                  parseInt(value) >= 100 ||
                  (language
                    ? "لا يجب ان يقل السعر عن 100 جنية"
                    : "price must be at least 100 egp")
                );
              },
            },
          })}
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors.price && "border-red-500 focus:border-red-500"
          }`}
        />
        {errors.price && <Error>{errors.price.message}</Error>}
      </div>
      <div className="space-y-2">
        <p className="text-gray-800">
          {language ? "  نوع الإيجار" : "Rental Type"}
        </p>

        <DropDown
          options={rentalTypes}
          selected={watch("rentalPeriod")}
          setValue={(value) => {
            setValue("rentalPeriod", value);
            clearErrors("rentalPeriod.value");
          }}
          error={errors?.rentalPeriod?.value}
          errorMessage={errors?.rentalPeriod?.value?.message}
        />
        <input
          type="text"
          hidden
          {...register("rentalPeriod.value", {
            required: {
              value: true,
              message: language
                ? "من فضلك اختر نوع الايجار"
                : "please select rent type",
            },
          })}
        />
      </div>
      <div className=" space-y-2">
        <p className="text-gray-800">
          {language ? "  التأمين" : "  insurance"}
        </p>
        <input
          autoComplete="off"
          type="text"
          {...register("insurance", {
            required: {
              value: true,
              message: language
                ? "من فضلك ادخل سعر التأمين"
                : "please enter insurance",
            },
            validate: {
              mustBeNumber: (value) => {
                return (
                  !isNaN(value) ||
                  (language
                    ? "التأمين يجب ان يكون رقم"
                    : "the insurance must be a number")
                );
              },
            },
          })}
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors.insurance && "border-red-500 focus:border-red-500"
          }`}
        />
        {errors.insurance && <Error>{errors.insurance.message}</Error>}
      </div>
      <div className="flex gap-4 items-center lg:mt-8">
        <p className="text-gray-800">
          {language ? "هل السعر قابل للتفاوض؟" : "Is price negotiable?"}
        </p>
        <div className="flex items-center gap-3">
          <RadioBtn
            active={watch("negotiable")}
            onClick={() => {
              setValue("negotiable", true);
            }}
            title={language ? "نعم" : "Yes"}
          />
          <RadioBtn
            active={!watch("negotiable")}
            onClick={() => {
              setValue("negotiable", false);
            }}
            title={language ? "لا" : "No"}
          />
        </div>
      </div>
    </>
  );
};
export default Rent;
