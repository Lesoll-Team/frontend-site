import React, { useMemo } from "react";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import useContactLinks from "@/Hooks/useContactLinks";
import { getLangBoolean } from "@/utils/getLangBoolean";

const SocialAndPriceProject = ({ cardDetails }) => {
  const language = getLangBoolean();
  const phone = useMemo(() => {
    if (cardDetails.connectPhoneNumber) {
      return cardDetails.connectPhoneNumber;
    } else {
      return cardDetails?.owner?.code + cardDetails?.owner?.phone;
    }
  }, [cardDetails]);
  const message = useMemo(
    () =>
      language
        ? `مهتم بمعرفة المزيد عن هذا المشروع https://lesoll.com/projects/${cardDetails?.slug}`
        : `Interested in knowing more about this property https://lesoll.com/projects/${cardDetails?.slug}`,
    [language, cardDetails],
  );
  const { WhatappLinkBtn, CallLinkBtn } = useContactLinks({
    phoneNumber: phone,
    message: message,
  });

  return (
    <div className="flex flex-row  items-center justify-between">
      <div className=" flex  flex-col font-bold font-inter   text-[12px] md:text-[17px]">
        <span className="font-light xs-text font-cairo text-gray2">
          {language ? " الأسعار تبدأ من" : "Starting From"}
        </span>

        <span className="">
          {parseInt(cardDetails?.priceFrom).toLocaleString("en-US")} {" EGP "}
        </span>
      </div>

      <div className="flex   gap-x-[14px]  ">
        <CallLinkBtn>
          <span className="bg-[#E1F9FA] cursor-pointer active:animate-appearance-in w-[40px] h-[40px]  rounded-full flex items-center justify-center">
            <IoCall className="text-[16px] md:text-[23px] text-blue-600" />
          </span>
        </CallLinkBtn>
        <WhatappLinkBtn>
          <span className="bg-green-600 cursor-pointer active:animate-appearance-in w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <FaWhatsapp className="text-[16px]  md:text-[23px] text-white" />
          </span>
        </WhatappLinkBtn>
      </div>
    </div>
  );
};

export default SocialAndPriceProject;
