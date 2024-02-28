// import { Image } from "@nextui-org/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
const LocationCategories = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const locations = [
    {
      titleAr: "الجيزة",
      titleEn: "Giza",
      totalAr: "( 200+ وحدة )",
      totalEn: "( +200 Uint )",
      url: "/properties/giza/sale/residential",
      id: 1,
    },
    {
      titleAr: "الاسكندرية",
      titleEn: "alexandria",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
      url: "/properties/alexandria/sale/residential",
      id: 2,
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
      titleAr: "القليوبية",
      titleEn: "Qaliubiya",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
      url: "/properties/qaliubiya/sale/residential",
      id: 4,
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
      titleAr: "الشرقية",
      titleEn: "Sharkia",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
      url: "/properties/sharkia/sale/residential",
      id: 6,
    },
    {
      titleAr: "الدقهليه",
      titleEn: "Dakahlia",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
      url: "/properties/dakahlia/sale/residential",
      id: 7,
    },
    {
      titleAr: "البحر الاحمر",
      titleEn: "Red sea",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
      url: "/properties/red_sea/sale/residential",
      id: 8,
    },
  ];

  return (
    <Fragment>
      <div className="md:container md:mx-auto mx-[20px]">
        <h6 className="font-bold text-grayText2">
          {language ? "المحافظات" : "Governorates"}
        </h6>
        <p className="text-gray2 my-1 mb-8">
          اختر المحافظة اللي تريد لنساعدك في إيجاد افضل عقار
        </p>
      </div>
      <div className=" md:gap-4 gap-10 bg-[#EFEFEF] p-5 md:container md:mx-auto mx-[20px]  grid grid-cols-2 md:grid-cols-4 justify-center ">
        {/* <div className=" md:gap-4 gap-10 bg-[#EFEFEF] py-5 md:container md:mx-auto  flex flex-wrap  justify-center "> */}
        {locations.map((location) => (
          <Link
            href={location.url}
            key={location.id}
            className="bg-white rounded-[1vw] shadow-gray-400 hover:shadow-lg
            flex items-center justify-center 
            sm:h-[150px]
            h-[100px]
            "
          >
            <div className=" grid grid-cols-1 text-center md:gap-y-[1.9vh] gap-y-[0.5vh]">
              <p className=" md:text-[1.563rem] text-[0.9rem] font-semibold">
                {language ? location.titleAr : location.titleEn}
              </p>
              <p className="text-lightGreen">
                {language ? location.totalAr : location.totalEn}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default LocationCategories;
