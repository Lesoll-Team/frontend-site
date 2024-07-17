import React from "react";
import { useSelector } from "react-redux";
import AddPropSectionContainer from "./AddPropSectionContainer";
import { useUser } from "@/Shared/UserContext";
import Error from "@/Shared/ui/Error";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";
const SubscribedOptions = ({
  errors,
  register,
  setValue,
  watch,
  clearErrors,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data: userData } = useUser();

  return (
    <div className="space-y-5">
      <h3>{language ? "نوع الإعلان" : "Ad type"}</h3>
      <div className="space-y-5">
        {" "}
        <button
          onClick={() => {
            setValue("adType", "free");
            setValue("toPin", "");
            clearErrors("adType");
            setValue("packId", "");
          }}
          disabled={userData.propertyDefaultNumber == 0}
          type="button"
          className={`w-full bg-white flex p-4 rounded-md border disabled:opacity-60  flex-wrap justify-between items-center ${watch("adType") === "free" && "border-lightGreen "}`}
        >
          <div className="flex items-center gap-2">
            {watch("adType") === "free" ? (
              <IoIosRadioButtonOn className="text-lightGreen text-xl" />
            ) : (
              <IoIosRadioButtonOff className="text-outLine text-xl" />
            )}
            <h3>{language ? "مجانى" : "Free"}</h3>
          </div>
          <p>
            {language ? "متبقى لديك" : "You have"}{" "}
            {userData.propertyDefaultNumber}{" "}
            {language ? "إعلانات مجانية" : "free ad left"}
          </p>
        </button>
        {!!userData.packagePropertyNumber && (
          <button
            type="button"
            onClick={() => {
              setValue("adType", "paid");
              setValue("toPin", "pinSearch");
              setValue("packId", "");
              clearErrors("adType");
            }}
            className={`w-full bg-white flex p-4 rounded-md border flex-wrap justify-between items-center ${watch("toPin") === "pinSearch" && !watch("packId") && "border-lightGreen border"}`}
          >
            <div className="flex items-center gap-2">
              {watch("toPin") === "pinSearch" && !watch("packId") ? (
                <IoIosRadioButtonOn className="text-lightGreen text-xl" />
              ) : (
                <IoIosRadioButtonOff className="text-outLine text-xl" />
              )}
              <h3>{language ? "تثبيت فى صفحة البحث" : "Pin At Search"}</h3>
            </div>
            <p className="text-start">
              {language ? "متبقى لديك" : "You have"}{" "}
              {userData.packagePropertyNumber} {language ? "إعلان" : "ad"}
            </p>
          </button>
        )}
        {!!userData.pinHomeAdCount && (
          <button
            type="button"
            onClick={() => {
              setValue("adType", "paid");
              setValue("toPin", "pinHome");
              setValue("packId", "");
              clearErrors("adType");
            }}
            className={`w-full bg-white flex p-4 rounded-md border flex-wrap justify-between items-center ${watch("toPin") === "pinHome" && !watch("packId") && "border-lightGreen border"}`}
          >
            <div className="flex items-center gap-2">
              {watch("toPin") === "pinHome" && !watch("packId") ? (
                <IoIosRadioButtonOn className="text-lightGreen text-xl" />
              ) : (
                <IoIosRadioButtonOff className="text-outLine text-xl" />
              )}
              <h3>{language ? "تثبيت فى الصفحة الرئيسية" : "Pin At Home"}</h3>
            </div>
            <p className="text-start ">
              {language ? "متبقى لديك" : "You have"} {userData.pinHomeAdCount}{" "}
              {language ? "إعلان" : "ad"}
            </p>
          </button>
        )}
        <input
          hidden
          {...register("adType", {
            required: {
              value: true,
              message: language
                ? "أختر نوع الإعلان"
                : " Please select the ad type",
            },
          })}
        />
        {errors?.adType && <Error>{errors?.adType.message}</Error>}
      </div>
    </div>
  );
};

export default SubscribedOptions;
