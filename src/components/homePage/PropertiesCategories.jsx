// import { Image } from "@nextui-org/react";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
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
// import { SearchBarHome } from "@/Shared/search/SearchBarHome";
const PropertiesCategories = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const categories = [
    {
      icon: <ResidentialSale />,
      titleAr: "عقارات للبيع",
      titleEn: "Properties for sell",
      totalAr: "( 200+ وحدة )",
      totalEn: "( +200 Uint )",
      url: "/properties/residential/sale",
      id: 1,
    },
    {
      icon: <ResidentialRent />,
      titleAr: "عقارات للإيجار",
      titleEn: "Properties for rent",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
      url: "/properties/residential/rent",
      id: 2,
    },

    {
      icon: <CommercialRent />,
      titleAr: "تجاري للإيجار",
      titleEn: "commercial rent",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
      url: "/properties/commercial/rent",
      id: 4,
    },
    {
      icon: <CommercialSale />,
      titleAr: "تجاري للإيجار",
      titleEn: "commercial rent",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
      url: "/properties/commercial/sale",
      id: 5,
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
      icon: <FinanceIcon />,
      titleAr: "تمويل عقاري",
      titleEn: "real estate finance",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
      url: "/properties/finance/",
      id: 8,
    },
    {
      icon: <InvestmentIcon />,
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
      // setSeeMore(window.innerWidth <= 1280); // Set to true for screens less than or equal to 640px
    };

    handleResize(); // Call the function to set the initial value
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);
  //onClick={() => setSeeMore(!seeMore)}
  return (
    <Fragment>
      <div className="md:w-full flex items-center justify-between  md:container md:mx-auto mx-[20px] ">
        <h6 className="font-bold md:text-[1.6vw] text-[12px] flex mx-[10px] text-grayText2">
          {language ? "نوع العقار" : "Property type"}
        </h6>
        <Link
          href={"/categories"}
          className=" underline text-[12px] md:text-[1.6vw]"
        >
          {language ? "رؤية المزيد" : "see more"}
        </Link>
      </div>

      <div
        // className="mt-[30px] mb-[32px]  md:container md:mx-auto mx-[10px]  gap-6  lg:justify-normal justify-center bg-red-200
        // grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 line-clamp-2"
        className="mt-[30px] mb-[32px] md:flex grid grid-cols-2  md:flex-wrap md:container md:mx-auto mx-[20px]  gap-6   md:justify-between  "
        // className="mt-[30px] mb-[32px] flex flex-wrap md:container md:mx-auto mx-[10px]  gap-6  lg:justify-normal justify-center "
      >
        {categories
          ?.filter((_, i) => i < seeMore)
          ?.map((category) => (
            <Link
              href={category.url}
              key={category.id}
              className="
          shadow-none md:hover:border-none md:hover:shadow-[4px_4px_21px_0px_#A3A1A1]	 
           cursor-pointer shadow-black
            flex flex-col  justify-center items-center  border-[#CCCCCC] rounded-[8px]  border-2
               md:min-w-[280px] 
               md:max-w-[280px]
                      w-full
               md:h-[300px]
             "
              //w-[50%]  h-[60px]
              // h-[300px]
            >
              <div className=" flex items-center justify-center  m-2 w-[50%] min-w-[50px]   sm:h-[150px] min-h-[100px] ">
                {category.icon}
              </div>
              <div className="  text-center flex flex-col  ">
                <p className="font-bold  text-grayText2">
                  {language ? category.titleAr : category.titleEn}
                </p>
                <p
                  className=" 
               text-[10px] md:text-[13px] lg:text-[16px] xl:text-[20px]
              text-lightGreen"
                >
                  {language ? category.totalAr : category.totalEn}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </Fragment>
  );
};

export default PropertiesCategories;
