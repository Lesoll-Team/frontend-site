import { Image } from "@nextui-org/react";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { SearchBarHome } from "@/Shared/search/SearchBarHome";
const HeroSection = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <Fragment>
      {/* <div className="relative "> */}
        {/* Full-width image */}
        <div className="backdrop-grayscale-200 z-20 w-full select-none bg-black/30 absolute h-full "></div>
        <Image
          src="home/home-img-hero-section.png"
          alt="Hero Image"
          width="100%"
          height="100%"
          // objectFit="cover"
          className="object-cover  "
          radius="none"
        />

        <div
          className="absolute inset-0  container mx-auto  z-20 justify-center flex flex-col
             text-white "
        >
          {/* items-center justify-center flex flex-col */}
          <div className=" grid gap-y-3 md:gap-y-16">
            <div className="flex flex-col gap-y-1 md:gap-y-5">
              <h1 className="w-fit font-semibold">
                {language ? "ليسول طريقك لبيتك" : "Lesoll The Way You Home"}
              </h1>
              <p className="hidden md:flex">
                {language
                  ? "ليسول هو سوق مفتوح لعرض العقارات على الإنترنت، نقدم من خلاله خدمة رقمية تسهل عملية البحث عن أفضل الصفقات العقارية في أي مكان في مصر، سواء كنت مالكاً، مشترياً أو مستأجراً ."
                  : "Lesoll is an open marketplace for listing real estate online, through which we provide a digital service that facilitates the process of searching for the best real estate deals anywhere in Egypt, whether you are an owner, a buyer or a renter ."}
              </p>
            </div>
            <div className="w-full ">
              <SearchBarHome />
            </div>
          </div>
        </div>
      {/* </div> */}
    </Fragment>
  );
};

export default HeroSection;
