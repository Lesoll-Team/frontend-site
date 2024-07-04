import Error from "@/Shared/ui/Error";
import { useSelector } from "react-redux";
import CurrenciesDropDown from "./CurrenciesDropDown";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const MainPrice = ({ register, errors, watch, setValue }) => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  return (
    <div className=" space-y-2">
      <p className="text-gray-800">{t("Unit_Price")}</p>
      <div className="relative flex rounded-md ">
        <input
          inputMode="numeric"
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

        <CurrenciesDropDown
          setValue={setValue}
          watch={watch}
          className={`  absolute h-full  ${language ? "left-0" : "right-0"}`}
        />
      </div>
      {errors.price && <Error>{errors.price.message}</Error>}
    </div>
  );
};
export default MainPrice;
