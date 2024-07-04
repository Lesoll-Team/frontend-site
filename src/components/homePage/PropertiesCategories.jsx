import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import {
  CommercialRent,
  CommercialSale,
  ComponentsIcon,
  FinanceIcon,
  GraveIcon,
  InvestmentIcon,
  LandsIcon,
  ResidentialRent,
  ResidentialSale,
} from "./iconHomeSVG";

import { IoIosArrowBack } from "react-icons/io";
import { getLangBoolean } from "@/utils/getLangBoolean";
const PropertiesCategories = ({
  isHome,
  // , category
}) => {
  // console.log("categories:>:>:>>>", category);
  const language = getLangBoolean();

  const categories = [
    {
      icon: <ResidentialSale />,
      titleAr: "سكني للبيع",
      titleEn: "Properties for sale",
      totalAr: "( 5437+ وحدة )",
      totalEn: "( +5437 Uint )",
      url: "/properties/sale/residential/search?page=1",
      id: 1,
    },
    {
      icon: <ResidentialRent />,
      titleAr: "سكني للإيجار",
      titleEn: "Properties for rent",
      totalAr: "( 1825+ وحدة )",
      totalEn: "( +1825 Uint )",
      url: "/properties/rent/residential/search?page=1",
      id: 2,
    },

    {
      icon: <CommercialSale />,
      titleAr: "تجاري للبيع",
      titleEn: "Commercial for sale",
      totalAr: "( 917+ وحدة )",
      totalEn: "( +917 Uint )",
      url: "/properties/sale/commercial/search?page=1",
      id: 5,
    },
    {
      icon: <CommercialRent />,
      titleAr: "تجاري للإيجار",
      titleEn: "Commercial for rent",
      totalAr: "( 398+ وحدة )",
      totalEn: "( +398 Uint )",
      url: "/properties/rent/commercial/search?page=1",
      id: 4,
    },
    {
      icon: <FinanceIcon />,

      titleAr: "استثمار عقاري",
      titleEn: "Real estate investment",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
      url: "/properties/investment/lands/search?page=1",
      id: 3,
    },
    {
      icon: <LandsIcon />,
      titleAr: "أراضي",
      titleEn: "Lands",
      totalAr: "( 398+ وحدة )",
      totalEn: "( +398 Uint )",
      url: "/properties/sale/lands/search?page=1",
      id: 6,
    },
    {
      icon: <ComponentsIcon />,
      titleAr: "الكمبوندات",
      titleEn: "Compounds",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
      url: "/properties/sale/compounds/search?page=1",
      id: 7,
    },
    {
      icon: <InvestmentIcon />,
      titleAr: "تمويل عقاري",
      titleEn: "Real estate finance",
      totalAr: "( 289+ وحدة )",
      totalEn: "( +289 Uint )",
      url: "/properties/finance/search?page=1",
      id: 8,
    },

    {
      icon: <GraveIcon />,
      titleAr: "مدافن",
      titleEn: "Graves",
      totalAr: "( 154+ وحدة )",
      totalEn: "( +154 Uint )",
      url: "/properties/sale/graves/search?page=1",
      id: 9,
    },
  ];
  const [seeMore, setSeeMore] = useState(8);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 1280 ? setSeeMore(6) : setSeeMore(8);
      window.innerWidth <= 770 && setSeeMore(4);
    };
    handleResize(); // Call the function to set the initial value
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);
  return (
    <div>
      <div className="md:w-full flex items-center justify-between  md:container md:mb-[32px] mb-[16px] md:mx-auto mx-[16px] ">
        {isHome ? (
          <h2 className="font-bold  flex text-grayText2">
            {language ? "نوع العقار" : "Property type"}
          </h2>
        ) : (
          <h1 className="font-bold  flex ">
            {language
              ? "أنواع مختلفة من العقارات والفئات"
              : "Different types of properties and categories"}
          </h1>
        )}
        {isHome ? (
          <Link href={"/categories"} className=" underline lg-text">
            {language ? "رؤية المزيد" : "see more"}
          </Link>
        ) : (
          <Link
            href={"/"}
            className=" underline text-[12px] md:text-[20px] font-semibold flex items-center"
          >
            {language ? "رجوع" : "back"}

            <IoIosArrowBack className={`${!language && "rotate-180"}`} />
          </Link>
        )}
      </div>

      <div className="md:container md:mx-auto mx-[20px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-[30px] md:gap-y-[17px] md:gap-0 gap-[15px] md:min-h-[556.67px] min-h-[358.67px]">
        {categories && isHome
          ? categories
              .filter((_, i) => i < seeMore)
              .map((category) => (
                <Link
                  href={category.url}
                  key={category.id}
                  className=" cursor-pointer shadow-black  border-[#CCCCCC] border-[1px] flex flex-col items-center justify-center  md:rounded-[8px]  rounded-[4px]  md:py-10 py-5 gap-y-[5px] "
                >
                  <div className=" flex items-center justify-center overflow-hidden md:w-[125px] md:h-[130px] h-[75px] w-[75px]">
                    {category.icon}
                  </div>
                  <div className="  text-center flex flex-col gap-y-3 ">
                    <p className="font-bold lg-text text-grayText2">
                      {language ? category.titleAr : category.titleEn}
                    </p>
                    <p className="sm-text text-lightGreen">
                      {language ? category.totalAr : category.totalEn}
                    </p>
                  </div>
                </Link>
              ))
          : categories.map((category) => (
              <Link
                href={category.url}
                key={category.id}
                className=" cursor-pointer shadow-black  border-[#CCCCCC] border-[1px] flex flex-col items-center justify-center  md:rounded-[8px]  rounded-[4px]  md:py-10 py-5 gap-y-[5px] "
              >
                <div className=" flex items-center justify-center overflow-hidden md:w-[125px] md:h-[130px] h-[75px] w-[75px]">
                  {category.icon}
                </div>
                <div className="  text-center flex flex-col gap-y-3 ">
                  <span className="font-bold lg-text  text-grayText2">
                    {language ? category.titleAr : category.titleEn}
                  </span>
                  <span className=" sm-text  text-lightGreen">
                    {language ? category.totalAr : category.totalEn}
                  </span>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default memo(PropertiesCategories);
