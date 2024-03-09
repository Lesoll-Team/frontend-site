// import { Image } from "@nextui-org/react";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
// import { SearchBarHome } from "@/Shared/search/SearchBarHome";
const PropertiesCategories = ({ isHome }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const categories = [
    {
      icon: <ResidentialSale />,
      titleAr: "سكني للبيع",
      titleEn: "Properties for sale",
      totalAr: "( 200+ وحدة )",
      totalEn: "( +200 Uint )",
      url: "/properties/residential/sale",
      id: 1,
    },
    {
      icon: <ResidentialRent />,
      titleAr: "سكني للإيجار",
      titleEn: "Properties for rent",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
      url: "/properties/residential/rent",
      id: 2,
    },

    {
      icon: <CommercialSale />,
      titleAr: "تجاري للبيع",
      titleEn: "commercial for sale",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
      url: "/properties/commercial/sale",
      id: 5,
    },
    {
      icon: <CommercialRent />,
      titleAr: "تجاري للإيجار",
      titleEn: "commercial for rent",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
      url: "/properties/commercial/rent",
      id: 4,
    },
    {
      icon: <FinanceIcon />,

      titleAr: "استثمار عقاري",
      titleEn: "real estate investment",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
      url: "/properties/investment/lands",
      id: 3,
    },
    {
      icon: <LandsIcon />,
      titleAr: "أراضي",
      titleEn: "lands",
      totalAr: "( 180+ وحدة )",
      totalEn: "( +180 Uint )",
      url: "/properties/lands/sale",
      id: 6,
    },
    {
      icon: <ComponentsIcon />,
      titleAr: "الكمبوندات",
      titleEn: "compounds",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
      url: "/properties/compounds",
      id: 7,
    },
    {
      icon: <InvestmentIcon />,

      titleAr: "تمويل عقاري",
      titleEn: "real estate finance",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
      url: "/properties/finance/",
      id: 8,
    },

    {
      icon: <GraveIcon />,
      titleAr: "مدافن",
      titleEn: "graves",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
      url: "/properties/graves/sale",
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
        <h6 className="font-bold md:text-[30px] text-[18px] flex text-grayText2">
          {language ? "نوع العقار" : "Property type"}
        </h6>
        {isHome ? (
          <Link href={"/categories"} className="  text-[12px] md:text-[20px]">
            {language ? "رؤية المزيد" : "see more"}
          </Link>
        ) : (
          <Link
            href={"/"}
            className="  text-[12px] md:text-[20px] font-semibold flex items-center"
          >
            {language ? "رجوع" : "back"}

            <IoIosArrowBack className={`${!language && "rotate-180"}`} />
          </Link>
        )}
      </div>

      <div
        className=" md:container md:mx-auto mx-[20px] 
        grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                      md:gap-x-[30px] md:gap-y-[17px]
                      md:gap-0 gap-[15px]
         "
      >
        {categories && isHome
          ? categories
              .filter((_, i) => i < seeMore)
              .map((category) => (
                <Link
                  href={category.url}
                  key={category.id}
                  className="
               cursor-pointer shadow-black  border-[#CCCCCC] border-[1px]
               flex flex-col items-center justify-center 
               md:rounded-[8px]  rounded-[4px]  md:py-10 py-5
               gap-y-[5px]
              "
                >
                  <div className="  flex items-center justify-center overflow-hidden md:w-[125px] md:h-[130px] h-[75px] w-[75px]">
                    {category.icon}
                  </div>
                  <div className="  text-center flex flex-col gap-y-3 ">
                    <p className="font-bold md:text-[20px] text-[11px] text-grayText2">
                      {language ? category.titleAr : category.titleEn}
                    </p>
                    <p className="text-[11px] md:text-[16px] text-lightGreen">
                      {language ? category.totalAr : category.totalEn}
                    </p>
                  </div>
                </Link>
              ))
          : categories.map((category) => (
              <Link
                href={category.url}
                key={category.id}
                className="
               cursor-pointer shadow-black  border-[#CCCCCC] border-[1px]
               flex flex-col items-center justify-center 
               md:rounded-[8px]  rounded-[4px]  md:py-10 py-5
               gap-y-[5px]
              "
              >
                <div className="  flex items-center justify-center overflow-hidden md:w-[125px] md:h-[130px] h-[75px] w-[75px]">
                  {category.icon}
                </div>
                <div className="  text-center flex flex-col gap-y-3 ">
                  <p className="font-bold md:text-[20px] text-[11px] text-grayText2">
                    {language ? category.titleAr : category.titleEn}
                  </p>
                  <p className="text-[11px] md:text-[20px] text-lightGreen">
                    {language ? category.totalAr : category.totalEn}
                  </p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default memo(PropertiesCategories);
