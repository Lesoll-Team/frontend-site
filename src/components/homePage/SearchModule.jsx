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
  // <div className="  bg-red-200 w-full  z-50 h-auto  md:justify-center flex flex-col text-white ">

  return (
    <div className="w-full md:h-[500px] lg:h-screen z-50 flex">
      <div className="w-full  flex flex-col md:gap-y-14 xl:gap-y-7  md:justify-normal xl:justify-center  justify-center p-1 z-40">
        <div className="md:flex md:flex-col  p-1 text-white">
          <h1 className="w-full font-semibold">
            {language ? "ليسول طريقك لبيتك" : "Lesoll The Way You Home"}
          </h1>
          <p
            className="hidden md:flex
              text-[12px] md:text-[16px] lg:text-[20px] xl:text-[25px] 2xl:text-[31px]
              "
          >
            {language
              ? "ليسول هو سوق مفتوح لعرض العقارات على الإنترنت، نقدم من خلاله خدمة رقمية تسهل عملية البحث عن أفضل الصفقات العقارية في أي مكان في مصر، سواء كنت مالكاً، مشترياً أو مستأجراً ."
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
