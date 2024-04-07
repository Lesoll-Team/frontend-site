import { SearchBarHome } from "@/Shared/search/SearchHome";
import React, { memo } from "react";
import { useSelector } from "react-redux";
const SearchModule = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="w-full   flex">
      <div
        className="w-full  flex flex-col  md:gap-y-[60px] items-center
      justify-center
        md:h-screen p-1 z-10
       lg:h-[600px]  
        "
      >
        <div className="md:flex md:flex-col  gap-y-[3.27vh]   text-white ">
          <h1 className=" seo-hidden">
            {language
              ? "ليسول طريقك إلى بيتك المثالي في مصر"
              : "Lesoll Your Pathway to Your Ideal Home in Egypt"}
          </h1>
          <h2 className="w-full text-[24px] md:pb-0 pb-[32px] md:text-[48px] py-10 md:py-0 font-bold">
            {language ? "ليسول طريقك لبيتك" : "Lesoll The Way You Home"}
          </h2>
          <p
            className="hidden md:flex 
              text-[16px] md:text-[20px] text-justify 
              font-light text-white
              "
          >
            {language
              ? "ليسول هو سوق مفتوح لعرض العقارات على الإنترنت، نقدم من خلاله خدمة رقمية تسهل عملية البحث عن أفضل الصفقات العقارية في أي مكان في مصر، سواء كنت مالكاً، مشترياً أو مستأجراً."
              : "Lesoll is an open marketplace for listing real estate online, through which we provide a digital service that facilitates the process of searching for the best real estate deals anywhere in Egypt, whether you are an owner, a buyer or a renter ."}
          </p>
        </div>
        <SearchBarHome />
      </div>
    </div>
  );
};

export default memo(SearchModule);
