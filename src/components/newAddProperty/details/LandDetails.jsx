import { useSelector } from "react-redux";
import AddPropSectionContainer from "../AddPropSectionContainer";

import "react-datepicker/dist/react-datepicker.css";

import RadioBtn from "@/Shared/ui/RadioBtn";
import Error from "@/Shared/ui/Error";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const LandDetails = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");

  return (
    <AddPropSectionContainer>
      <div className="lg:col-span-2 space-y-2">
        <p className="text-gray-800">{t("Space")}</p>
        <input
          type="text"
          inputMode="numeric"
          {...register("area", {
            required: {
              value: true,
              message: language
                ? "من فضلك ادخل مساحة العقار"
                : "please enter area",
            },
            validate: {
              mustBeNumber: (value) => {
                return (
                  !isNaN(value) ||
                  (language
                    ? "يجب ان تكون مساحة العقار رقم"
                    : "Propert area must be a number")
                );
              },
            },
          })}
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors.area && "border-red-500 focus:border-red-500"
          }`}
          // className={"border-none"}
        />
        {errors.area && (
          <Error className="text-red-500">{errors.area.message}</Error>
        )}{" "}
      </div>

      <div className="flex gap-4">
        <p className="text-gray-800">{t("Real__Estate_Certificate")}</p>
        <div className="flex items-center gap-3">
          <RadioBtn
            active={watch("isRegisterd")}
            onClick={() => {
              setValue("isRegisterd", true);
            }}
            title={t("Yes")}
          />
          <RadioBtn
            active={!watch("isRegisterd")}
            onClick={() => {
              setValue("isRegisterd", false);
            }}
            title={t("No")}
          />
        </div>
      </div>
    </AddPropSectionContainer>
  );
};
export default LandDetails;
