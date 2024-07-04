import useContactLinks from "@/Hooks/useContactLinks";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";
import React, { memo, useMemo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const PriceAndSocial = ({ propertyDetails }) => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");

  const phone = useMemo(() => {
    if (propertyDetails.connectPhoneNumber) {
      return propertyDetails.connectPhoneNumber;
    } else {
      return propertyDetails?.user?.code + propertyDetails?.user?.phone;
    }
  }, [propertyDetails]);
  const message = language
    ? `مهتم بمعرفة المزيد عن هذا العقار
        https://lesoll.com/property-details/${propertyDetails?.slug}
      `
    : `
      Interested in knowing more about this property
       https://lesoll.com/property-details/${propertyDetails?.slug}
      `;
  const { WhatappLinkBtn, CallLinkBtn } = useContactLinks({
    phoneNumber: phone,
    message: message,
    type: "property",
    id: propertyDetails?._id,
  });
  return (
    <div className="flex flex-row items-center  justify-between">
      {propertyDetails?.offer !== "For Investment" ? (
        <p className=" font-bold gap-x-1 text-gray2 text-[10px] md:text-[16px] flex">
          <span> EGP </span>
          <span>
            {parseInt(propertyDetails?.price).toLocaleString("en-US")}
          </span>
        </p>
      ) : (
        <p className=" font-bold gap-x-1 text-gray2 text-[12px] md:text-[17px] flex">
          <span> {t("Investment")} </span>
        </p>
      )}
      <div className="flex   gap-x-[14px]  ">
        <CallLinkBtn>
          <span className="bg-[#F2F8F9] cursor-pointer active:animate-appearance-in w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center">
            <IoCall className="text-[16px] md:text-[23px] text-[#5F98D1]" />
          </span>
        </CallLinkBtn>
        <WhatappLinkBtn>
          <span className="bg-[#39AE41] cursor-pointer active:animate-appearance-in w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center">
            <FaWhatsapp className="text-[16px]  md:text-[23px] text-white" />
          </span>
        </WhatappLinkBtn>
      </div>
    </div>
  );
};

export default memo(PriceAndSocial);
