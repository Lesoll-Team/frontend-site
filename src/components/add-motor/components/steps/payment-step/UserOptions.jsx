import React from "react";
import { useSelector } from "react-redux";
import { useUser } from "@/Shared/UserContext";
import Error from "@/Shared/ui/Error";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
const UserOptions = () => {
  const { errors, register, setValue, watch, clearErrors, loading } =
    useAddMotorContext();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data: userData } = useUser();
  const setAdToFree = () => {
    if (loading) return;
    setValue("adType", "free");
    setValue("toPin", "");
    setValue("packId", "");
    setValue("paymentMethod", "");
    clearErrors("adType");
  };
  const setAdPinSearch = () => {
    if (loading) return;
    setValue("adType", "paid");
    setValue("toPin", "pinSearch");
    setValue("packId", "");
    setValue("paymentMethod", "");

    clearErrors("adType");
  };
  const setAdPinHome = () => {
    if (loading) return;
    setValue("adType", "paid");
    setValue("toPin", "pinHome");
    setValue("packId", "");
    setValue("paymentMethod", "");

    clearErrors("adType");
  };
  // console.log(userData.propertyDefaultNumber);

  return (
    <div className="space-y-5">
      <p className="font-bold">{language ? "نوع الإعلان" : "Ad type"}</p>
      <div className="space-y-5">
        <AdTypeBtn
          active={watch("adType") === "free"}
          onClick={setAdToFree}
          disabled={userData.propertyDefaultNumber == 0 || loading}
          remaining={userData.propertyDefaultNumber}
          title={language ? "مجانى" : "Free"}
        />
        {!!userData.packagePropertyNumber && (
          <AdTypeBtn
            disabled={loading}
            active={watch("toPin") === "pinSearch" && !watch("packId")}
            onClick={setAdPinSearch}
            remaining={userData.packagePropertyNumber}
            title={language ? "تثبيت فى صفحة البحث" : "Pin At Search"}
          />
        )}
        {!!userData.pinHomeAdCount && !userData?.isPinnedHome && (
          <AdTypeBtn
            disabled={loading}
            active={watch("toPin") === "pinHome" && !watch("packId")}
            onClick={setAdPinHome}
            remaining={userData.pinHomeAdCount}
            title={language ? "تثبيت فى الصفحة الرئيسية" : "Pin At Home"}
          />
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

export default UserOptions;

const AdTypeBtn = ({ onClick, active, remaining, title, disabled }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-white flex p-4 rounded-md border flex-wrap justify-between items-center ${active && "border-lightGreen border"} ${disabled && "opacity-70"}`}
    >
      <div className="flex items-center gap-2">
        <div className="w-5">
          {active ? (
            <IoIosRadioButtonOn className="text-lightGreen text-xl" />
          ) : (
            <IoIosRadioButtonOff className="text-outLine text-xl" />
          )}
        </div>
        <p>{title}</p>
      </div>
      <p className={`text-start  ${language ? "mr-7" : "ml-7"}`}>
        {language ? "متبقى لديك" : "You have"} {remaining}{" "}
        {language ? "إعلان" : "ad"}
      </p>
    </button>
  );
};