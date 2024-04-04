import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const OtherOptionPrice = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div
      className="md:container md:mx-auto sm:mx-[20px] mx-[10px] 
       w-full"
    >
      <div className="bg-[#F2F8F9] md:px-0 px-[2vh]  sm:h-[18vh] w-full flex sm:flex-nowrap flex-wrap  items-center md:justify-around sm:justify-between justify-center gap-x-4">
        <div className="sm:py-[4vh] py-[0.9vh] flex flex-col sm:items-start items-center">
          <h2 className="text-[#666666]">
            {language
              ? "تريد باقة مخصصة لك ؟"
              : "You want a customized package?"}
          </h2>
          <h2 className="font-normal text-[#666666]">
            {language
              ? "تواصل مع فريق ليسول واختر باقتك"
              : "Contact the Lesoll team and choose your package"}
          </h2>
        </div>
        <div className="h-full sm:py-[2vh] py-[0.9vh] text-white font-semibold flex items-end">
          <Link
            href={"/contact-us"}
            className="w-[195px] bg-lightGreen rounded-[6px] lg-text py-[1.7069701280227596vh] flex items-center justify-center"
          >
            {language ? "تواصل معنا" : "Connect with us"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherOptionPrice;
