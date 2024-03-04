import { SearchBarHome } from "@/Shared/search/SearchHome";
import React from "react";
import { useSelector } from "react-redux";
// import dynamic from "next/dynamic";
// const { SearchBarHome } = dynamic(() =>
//   import("../../Shared/search/SearchHome")
// );

// import HeroSection from "./HeroSection";

const SearchModule = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  //sticky top-0 inset-0   mx-auto h-auto z-[20] md:justify-center flex flex-col text-white
  // <div className="  bg-red-200 w-full  z-50 h-auto  md:justify-center flex flex-col text-white "> h-screen

  return (
    <div
      className="w-full   flex"
      // className="w-full md:h-full  h-[313px]   flex"
    >
      {/*md:h-[500px] lg:h-[770px]  */}
      <div
        className="w-full  flex flex-col md:gap-y-[60px] items-center
       md:pt-[3.492vh]  lg:pt-[14.492vh] pt-[5.492vh] 
        md:h-screen p-1 z-10
        
        "
      >
        <div className="md:flex md:flex-col  gap-y-[20px]   text-white ">
          {/**md:mb-[42px] md:mt-[50px] mb-[22px] mt-[56px] */}
          <h1 className="w-full text-[24px] md:pb-0 pb-[32px] md:text-[48px] font-bold">
            {language ? "ليسول طريقك لبيتك" : "Lesoll The Way You Home"}
          </h1>
          <p
            className="hidden md:flex 
              text-[16px] md:text-[20px] text-justify 
              font-light
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

export default SearchModule;
/* <HeroSection /> */
// </div>
//md:gap-y-14 xl:gap-y-7
