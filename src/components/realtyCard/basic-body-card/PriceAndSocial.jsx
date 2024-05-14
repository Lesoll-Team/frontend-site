// import useContact from "@/Hooks/useContact";
import useContactLinks from "@/Hooks/useContactLinks";
// import Link from "next/link";
import React, { memo, useMemo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useSelector } from "react-redux";

const PriceAndSocial = ({ propertyDetails }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
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
      {propertyDetails?.offer !== "For Investment" && (
        <p className=" font-bold font-inter  text-gray2 text-[12px] md:text-[17px]">
          <span>{parseInt(propertyDetails?.price).toLocaleString()}</span>
          {" EGP "}
          <span className="text-gray2 mx-5 md:text-[17px] text-[12px] font-normal"></span>
        </p>
      )}
      <div className="flex   gap-x-[14px]  ">
        <CallLinkBtn>
          <span className="bg-[#E1F9FA] cursor-pointer active:animate-appearance-in w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center">
            <IoCall className="text-[16px] md:text-[23px] text-blue-600" />
          </span>
        </CallLinkBtn>
        <WhatappLinkBtn>
          <span className="bg-green-600 cursor-pointer active:animate-appearance-in w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center">
            <FaWhatsapp className="text-[16px]  md:text-[23px] text-white" />
          </span>
        </WhatappLinkBtn>
      </div>
    </div>
  );
};

export default memo(PriceAndSocial);
// const { callLink, whatsAppLink, showPopup } = useContact({
//   phoneNumber: propertyDetails?.connectPhoneNumber,
//   message: language
//     ? `مهتم بمعرفة المزيد عن هذا العقار
//       https://lesoll.com/property-details/${propertyDetails?.slug}
//     `
//     : `
//     Interested in knowing more about this property
//      https://lesoll.com/property-details/${propertyDetails?.slug}
//     `,
//   user: propertyDetails?.user,
// });
