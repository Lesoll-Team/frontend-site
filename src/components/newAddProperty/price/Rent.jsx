import DropDown from "@/Shared/ui/DropDown";
import { useSelector } from "react-redux";
import { rentalTypes } from "./rentalTypes";
import RadioBtn from "@/Shared/ui/RadioBtn";
import Error from "@/Shared/ui/Error";
import MainPrice from "./sale/mainPriceInput/MainPrice";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const Rent = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");

  return (
    <>
      <MainPrice
        errors={errors}
        register={register}
        setValue={setValue}
        watch={watch}
      />
      <div className="space-y-2">
        <p className="text-gray-800">{t("Rental_Type")}</p>

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
        <p className="text-gray-800">{t("Insurance")}</p>
        <div className="relative flex items-center">
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
          <span
            className={`-mx-9 text-sm text-[#A3A1A1] absolute z-10 top-3 ${
              language ? "left-14" : "right-14"
            } `}
          >
            {watch("currencies.ISO_code")}
          </span>
        </div>
        {errors.insurance && <Error>{errors.insurance.message}</Error>}
      </div>
      <div className="flex gap-4 items-center lg:mt-8">
        <p className="text-gray-800">{t("Is_Price_Negotiable")}</p>
        <div className="flex items-center gap-3">
          <RadioBtn
            active={watch("negotiable")}
            onClick={() => {
              setValue("negotiable", true);
            }}
            title={t("Yes")}
          />
          <RadioBtn
            active={!watch("negotiable")}
            onClick={() => {
              setValue("negotiable", false);
            }}
            title={t("No")}
          />
        </div>
      </div>
    </>
  );
};
export default Rent;
