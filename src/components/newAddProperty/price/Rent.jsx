import DropDown from "@/Shared/ui/DropDown";
import { useSelector } from "react-redux";
import { rentalTypes } from "./rentalTypes";
import RadioBtn from "@/Shared/ui/RadioBtn";

const Rent = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <div className=" space-y-2">
        <h3 className="text-xl">{language ? " سعر الوحدة" : " Unit price"}</h3>
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
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">
          {language ? "  نوع الإيجار" : "Rental Type"}
        </h3>

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
              message: "please select rent type",
            },
          })}
        />
      </div>
      <div className=" space-y-2">
        <h3 className="text-xl">{language ? "  التأمين" : "  insurance"}</h3>
        <input
          autoComplete="off"
          type="text"
          {...register("insurance", {
            required: {
              value: true,
              message: "please enter insurance",
            },
            validate: {
              mustBeNumber: (value) => {
                return !isNaN(value) || "must be a number";
              },
            },
          })}
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors.insurance && "border-red-500 focus:border-red-500"
          }`}
        />
        {errors.insurance && <p>{errors.insurance.message}</p>}
      </div>
      <div className="flex gap-4 items-center lg:mt-8">
        <h3 className="text-xl">
          {language ? "هل السعر قابل للتفاوض؟" : "Is price negotiable?"}
        </h3>
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
