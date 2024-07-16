import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
const LocationCategories = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const locations = [
    {
      titleAr: "القاهرة",
      titleEn: "Cairo",
      totalAr: "( 2487+ وحدة )",
      totalEn: "( +2487 Unit )",
      url: "/properties/sale/residential/cairo/search?page=1",
      id: 8,
    },
    {
      titleAr: "الجيزة",
      titleEn: "Giza",
      totalAr: "( 2505+ وحدة )",
      totalEn: "( +2505 Unit )",
      url: "/properties/sale/residential/giza/search?page=1",
      id: 1,
    },
    {
      titleAr: "الاسكندرية",
      titleEn: "Alexandria",
      totalAr: "( 526+ وحدة )",
      totalEn: "( +526 Unit )",
      url: "/properties/sale/residential/alexandria/search?page=1",
      id: 2,
    },

    {
      titleAr: "القليوبية",
      titleEn: "Qaliubiya",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Unit )",
      url: "/properties/sale/residential/qaliubiya/search?page=1",
      id: 4,
    },
    {
      titleAr: "مطروح",
      titleEn: "Matrouh",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Unit )",
      url: "/properties/sale/residential/matrouh/search?page=1",
      id: 3,
    },
    {
      titleAr: "الشرقية",
      titleEn: "Sharkia",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Unit )",
      url: "/properties/sale/residential/sharkia/search?page=1",
      id: 6,
    },
    {
      titleAr: "الغربية",
      titleEn: "Gharbiya",
      totalAr: "( 180+ وحدة )",
      totalEn: "( +180 Unit )",
      url: "/properties/sale/residential/gharbiya/search?page=1",
      id: 5,
    },

    {
      titleAr: "الدقهلية",
      titleEn: "Dakahlia",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Unit )",
      url: "/properties/sale/residential/dakahlia/search?page=1",
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
    <div className="mb-10">
      <div className="md:container  md:mb-[32px]  md:mx-auto mx-[20px]">
        <h2 className="font-bold  flex  text-grayText2">
          {language ? "المحافظات" : "Governorates"}
        </h2>
        <p className="text-gray2  lg-text">
          {language
            ? "اختر المحافظة لنساعدك في إيجاد افضل العقارات"
            : "Choose the governorate to help you find the best properties"}
        </p>
      </div>
      <div
        className="md:bg-[#EFEFEF] lg:py-[83px] lg:px-[100px] py-[20px] px-[20px]
      "
      >
        <div className="md:container md:mx-auto  md:min-h-[289px] min-h-[208px]  grid grid-cols-3 md:grid-cols-4 md:bg-inherit bg-[#EFEFEF] md:p-[0px] p-[15px] md:gap-x-[30px] md:gap-y-[17px] md:gap-0 gap-[15px]">
          {locations
            .filter((_, i) => i < seeMore)
            .map((location) => (
              <Link
                href={location.url}
                key={location.id}
                className=" cursor-pointer shadow-black  flex flex-col items-center justify-center  md:rounded-[8px]  rounded-[4px]  md:py-10 py-5 gap-y-[5px] bg-white
               "
              >
                <div className=" grid grid-cols-1 text-center md:gap-y-[1.5vh] gap-y-[0.4vh]">
                  <span className=" lg-text font-bold">
                    {language ? location.titleAr : location.titleEn}
                  </span>
                  <span className="text-lightGreen sm-text">
                    {language ? location.totalAr : location.totalEn}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default memo(LocationCategories);
