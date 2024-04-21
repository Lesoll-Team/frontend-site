import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const OtherOptionPrice = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div
      className="bg-[#F2F8F9]  my-10 py-10  w-full flex sm:flex-nowrap flex-wrap   md:justify-around sm:justify-between justify-center gap-y-5"
      //md:px-0 px-[2vh] gap-x-4 sm:h-[18vh] items-center || sm:py-[4vh] bg-red-2200 py-[0.9vh]
    >
      <div className=" flex flex-col sm:items-start items-center">
        <h3 className="text-[#666666]">
          {language ? "تريد باقة مخصصة لك ؟" : "You want a customized package?"}
        </h3>
        <p className="font-normal text-[#666666]">
          {language
            ? "تواصل مع فريق ليسول واختر باقتك"
            : "Contact the Lesoll team and choose your package"}
        </p>
      </div>

      <div className=" text-white font-semibold flex items-end">
        <Link
          href={"/contact-us"}
          className="w-[195px] bg-lightGreen h-[40px] rounded-[6px] lg-text flex items-center justify-center"
        >
          {language ? "تواصل معنا" : "Connect with us"}
        </Link>
      </div>
    </div>
  );
};

export default OtherOptionPrice;
