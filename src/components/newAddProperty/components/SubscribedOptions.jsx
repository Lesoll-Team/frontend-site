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
    <AddPropSectionContainer className={"flex flex-col"}>
      <h3>{language ? "نوع الإعلان" : "Ad type"}</h3>
      <div className="space-y-5">
        {" "}
        <button
          onClick={() => {
            setValue("adType", "free");
            setValue("toPin", "");
            clearErrors("adType");
          }}
          disabled={userData.propertyPackageNumber !== 0}
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
            {userData.propertyPackageNumber}{" "}
            {language ? "إعلانات مجانية" : "free ad left"}
          </p>
        </button>
        <button
          type="button"
          onClick={() => {
            setValue("adType", "paid");
            setValue("toPin", "pin");
            clearErrors("adType");
          }}
          className={`w-full bg-white flex p-4 rounded-md border flex-wrap justify-between items-center ${watch("adType") === "paid" && "border-lightGreen border"}`}
        >
          <div className="flex items-center gap-2">
            {watch("adType") === "paid" ? (
              <IoIosRadioButtonOn className="text-lightGreen text-xl" />
            ) : (
              <IoIosRadioButtonOff className="text-outLine text-xl" />
            )}
            <h3>{language ? "مثبت" : "pin"}</h3>
          </div>
          <p className="text-start">
            {language ? "متبقى لديك" : "You have"} {userData.pinPropertyNumber}{" "}
            {language ? "إعلان يمكن تثبيتة" : "pin ad left"}
          </p>
        </button>
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
    </AddPropSectionContainer>
  );
};

export default SubscribedOptions;
