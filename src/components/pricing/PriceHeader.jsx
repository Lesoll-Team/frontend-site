import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const PriceHeader = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="relative flex justify-center items-center md:mt-10 mt-0">
      <Image
        src={"/price/header-price.svg"}
        alt="header price "
        width={200}
        height={100}
        className="w-full object-cover min-h-[170px]"
      />
      {/* H1 title is hidden but we use it because of SEO */}
      <h1 className="text-white seo-hidden ">
        {language
          ? "باقات متنوعة للعقارات على ليسول: ابدأ رحلتك العقارية هنا"
          : "Diverse Property Packages on Lesool: Begin Your Real Estate Journey Here"}
      </h1>
      <h2 className="text-white absolute text-[24px] md:text-[28px] font-bold">
        {language ? "الباقات" : "payment"}
      </h2>
    </div>
  );
};

export default PriceHeader;
