import { useUser } from "@/Shared/UserContext";
import React from "react";
import { useSelector } from "react-redux";

const usePackageData = (cardData) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  console.log(cardData);
  const { data } = useUser();
  console.log(data?.Features);
  const havePinSearch = data?.Features?.includes("656cc095485cfd01499d1362");
  const havePinHome = data?.Features?.includes("668a8ff18da4baa896aaea64");
  const haveRepost = data?.Features?.includes("656cc0c1485cfd01499d1365");
  const haveDashboard = data?.Features?.includes("656cc135485cfd01499d136b");
  const pinHomeAvilable = data?.pinHomeAdCount > 0;
  const pinText = pinHomeAvilable
    ? cardData?.makePin && cardData?.makePinHome
      ? language
        ? "مثبت"
        : "Pinned"
      : language
        ? "تثبيت"
        : "Pin"
    : cardData?.makePin
      ? language
        ? "مثبت"
        : "Pinned"
      : language
        ? "تثبيت"
        : "Pin";
  const repostText = cardData?.makeRepost
    ? language
      ? "معاد نشره"
      : "Reposted"
    : language
      ? "إعادة نشر"
      : "Repost";
  const disablePin =
    (cardData?.makePin && cardData?.makePinHome) ||
    (cardData?.makePin && !pinHomeAvilable) ||
    cardData?.makeRepost;
  const disableRepost =
    cardData?.makePin || cardData?.makePinHome || cardData?.makeRepost;
  const openWherePinModal = cardData?.makePinHome || pinHomeAvilable;
  return {
    pinHomeAvilable,
    haveDashboard,
    haveRepost,
    havePinHome,
    havePinSearch,
    pinText,
    disablePin,
    disableRepost,
    openWherePinModal,
    repostText,
  };
};

export default usePackageData;
