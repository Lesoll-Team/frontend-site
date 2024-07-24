import {
  pinProperty,
  pinPropertyHome,
} from "@/components/newProfile/apis/profileApis";
import { getPackageFeatures } from "@/components/newProfile/utils/getPackageFeatures";
import usePackageData from "@/components/newProfile/utils/usePackageData";
import Button from "@/Shared/ui/Button";
import ReactModal from "@/Shared/ui/ReactModal";
import { useUser } from "@/Shared/UserContext";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ConfirmWhereToPin = ({
  isOpen,
  setIsOpen,
  OnSuccess,
  propId,
  isPinHome,
  isPinSearch,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { setUserData } = useUser();
  const [pinStatus, setPinStatus] = useState("idle");
  const isLoading = pinStatus === "loading";
  const isError = pinStatus === "failed";
  const { disablePinHome } = usePackageData();
  const pinSearch = async () => {
    await pinProperty({ propId, setFormStatus: setPinStatus });
  };
  const pinHome = async () => {
    await pinPropertyHome({ propId, setFormStatus: setPinStatus });
  };
  useEffect(() => {
    if (pinStatus === "success") {
      OnSuccess();
      setUserData();
      setIsOpen(false);
    }
  }, [pinStatus]);

  const pinHomeText = isPinHome
    ? language
      ? "مثبت فى الصفحة الرئيسية"
      : "Pinned At Home"
    : language
      ? "تثبيت فى الصفحة الرئيسية"
      : "Pin at home page";
  const pinSearchText = isPinSearch
    ? language
      ? "مثبت فى صفحة البحث"
      : "Pinned At Search"
    : language
      ? "تثبيت فى صفحة البحث"
      : "Pin at search page";
  return (
    <ReactModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}>
      <div className="md:w-[650px] sm:w-[500px] w-[90vw] pt-7 pb-5  space-y-6">
        <div className="space-y-4 ">
          <h1 className="text-center text-darkGray">
            {language ? "اختر مكان إعلانك" : "Choose your ad location"}
          </h1>
          <p className="text-center">
            {language
              ? "يرجى اختيار مكان تثبيت إعلانك للمتابعة"
              : "Please choose where to pin your ad!"}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[80%] mx-auto gap-5">
          <Button
            disabled={isLoading || isPinHome || disablePinHome}
            onClick={pinHome}
          >
            {disablePinHome
              ? language
                ? "لديك عقار مثبت فى الرئيسية"
                : "You already have a prperty pinned at home"
              : pinHomeText}
          </Button>
          <Button
            variant="bordered"
            disabled={isLoading || isPinSearch}
            onClick={pinSearch}
          >
            {pinSearchText}
          </Button>
        </div>
        {isError && (
          <p className="text-center text-red-500">
            {language
              ? "حدث خطأ يرجى المحاولة مرة اخرى بعد قليل"
              : "Error happend please try again later"}
          </p>
        )}
      </div>
    </ReactModal>
  );
};

export default ConfirmWhereToPin;
