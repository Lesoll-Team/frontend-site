import DropDown from "@/Shared/ui/DropDown";
import { saleOptions } from "@/utils/addAndEditOptions";
import { useSelector } from "react-redux";
import Installment from "./Installment";
import { useCallback } from "react";
import Cash from "./Cash";
// import Error from "@/Shared/ui/Error";
import AdminInsatllment from "./AdminInstallment";
import MainPrice from "./mainPriceInput/MainPrice";
import { useUser } from "@/Shared/UserContext";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const Sale = ({ errors, register, setValue, watch, clearErrors, control }) => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  const { data } = useUser();

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
        if (data.email === "info@lesoll.com" && data.isAdmin) {
          return (
            <AdminInsatllment
              control={control}
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          );
        } else {
          return (
            <Installment
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
    }
  }, [watch("saleOption.value")]);
  return (
    <>
      <MainPrice
        register={register}
        errors={errors}
        watch={watch}
        setValue={setValue}
      />
      <div className="space-y-2">
        <p className="text-gray-800">{t("Payment_Method")}</p>
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

        <input
          type="text"
          hidden
          {...register("saleOption.name.ar", {
            required: {
              value: true,
              message: language
                ? "من فضلك اختر طريقة الدفع"
                : "please choose payment method",
            },
          })}
        />
      </div>
      {/* {watch("saleOption.value").length === 1 && watch("saleOption")} */}
      {watch("saleOption.value")?.length < 2 && selectedSaleOption()}
    </>
  );
};
export default Sale;
