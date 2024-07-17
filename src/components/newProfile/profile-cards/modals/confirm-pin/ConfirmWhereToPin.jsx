import {
  pinProperty,
  pinPropertyHome,
} from "@/components/newProfile/apis/profileApis";
import { useUser } from "@/Shared/UserContext";
import React, { useEffect, useState } from "react";

const ConfirmWhereToPin = ({ isOpen, setIsOpen, OnSuccess, propId }) => {
  const [pinStatus, setPinStatus] = useState("idle");
  const { data: userData } = useUser();
  const isLoading = pinStatus === "loading";
  const isError = pinStatus === "failed";
  const { havePin, havePinHome } = getPackageFeatures(userData?.Features);
  const pinSearch = async () => {
    await pinProperty({ propId, setFormStatus: setPinStatus });
  };
  const pinPropHome = async () => {
    await pinPropertyHome({ propId, setFormStatus: setPinStatus });
  };
  useEffect(() => {
    if (pinStatus === "success") {
      OnSuccess();
      setIsOpen(false);
    }
  }, [pinStatus]);
  return <div>ConfirmWhereToPin</div>;
};

export default ConfirmWhereToPin;
