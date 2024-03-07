// import { Image } from "@nextui-org/react";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
const LocationCategories = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const locations = [
    {
      titleAr: "القاهرة",
      titleEn: "Cairo",
      totalAr: "( 2961+ وحدة )",
      totalEn: "( +2961 Uint )",
      url: "/properties/cairo/sale/residential",
      id: 8,
    },
    {
      titleAr: "الجيزة",
      titleEn: "Giza",
      totalAr: "( 2505+ وحدة )",
      totalEn: "( +2505 Uint )",
      url: "/properties/giza/sale/residential",
      id: 1,
    },
    {
      titleAr: "الاسكندرية",
      titleEn: "alexandria",
      totalAr: "( 526+ وحدة )",
      totalEn: "( +526 Uint )",
      url: "/properties/alexandria/sale/residential",
      id: 2,
    },

    {
      titleAr: "القليوبية",
      titleEn: "Qaliubiya",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
      url: "/properties/qaliubiya/sale/residential",
      id: 4,
    },
    {
      titleAr: "مطروح",
      titleEn: "Matrouh",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
      url: "/properties/matrouh/sale/residential",
      id: 3,
    },
    {
      titleAr: "الشرقية",
      titleEn: "Sharkia",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
      url: "/properties/sharkia/sale/residential",
      id: 6,
    },
    {
      titleAr: "الغربية",
      titleEn: "Gharbiya",
      totalAr: "( 180+ وحدة )",
      totalEn: "( +180 Uint )",
      url: "/properties/gharbiya/sale/residential",
      id: 5,
    },

    {
      titleAr: "الدقهلية",
      titleEn: "Dakahlia",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
      url: "/properties/dakahlia/sale/residential",
      id: 7,
    },
  ];
  const [seeMore, setSeeMore] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 750 ? setSeeMore(6) : setSeeMore(8);
      // window.innerWidth <= 770 && setSeeMore(4);
    };

    handleResize(); // Call the function to set the initial value
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);
  return (
    <div>
      <div className="md:container  mb-[17px] md:mx-auto mx-[20px]">
        <h6 className="font-bold md:text-[31px] text-[14px] flex  text-grayText2">
          {language ? "المحافظات" : "Governorates"}
        </h6>
        <p className="text-gray2 md:text-[25px] text-[12px] my-1 mb-8">
          {language
            ? "اختر المحافظة لنساعدك في إيجاد افضل العقارات"
            : "Choose the governorate to help you find the best properties"}
        </p>
      </div>
      <div
        className="
  md:bg-[#EFEFEF]
  lg:py-[83px]
  lg:px-[100px]
   py-[20px]
  px-[20px]
      "
      >
        <div
          className="md:container md:mx-auto  
        grid grid-cols-3 md:grid-cols-4
                      md:bg-inherit
                      bg-[#EFEFEF]
md:p-[0px] p-[30px]
                      md:gap-x-[30px] md:gap-y-[17px]
                      md:gap-0 gap-[15px]"
        >
          {locations
            .filter((_, i) => i < seeMore)
            .map((location) => (
              <Link
                href={location.url}
                key={location.id}
                className="
                  
               cursor-pointer shadow-black 
               flex flex-col items-center justify-center 
               md:rounded-[8px]  rounded-[4px]  md:py-10 py-5
               gap-y-[5px]
               bg-white
               "
              >
                <div className=" grid grid-cols-1 text-center md:gap-y-[1.5vh] gap-y-[0.4vh]">
                  <p className=" md:text-[20px] text-[12px] font-bold">
                    {language ? location.titleAr : location.titleEn}
                  </p>
                  <p className="text-lightGreen md:text-[20px] text-[11px]">
                    {language ? location.totalAr : location.totalEn}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(LocationCategories);
