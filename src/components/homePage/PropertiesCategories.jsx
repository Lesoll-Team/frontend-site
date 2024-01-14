import { Image } from "@nextui-org/react";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// import { SearchBarHome } from "@/Shared/search/SearchBarHome";
const PropertiesCategories = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
const categories = [
  {
    imgPath: "home/properties-for-sell.svg",
    titleAr: "عقارات للبيع",
    titleEn: "Properties for sell",
    totalAr: "( 200+ وحدة )",
    totalEn: "( +200 Uint )",
  },
  {
    imgPath: "home/properties-for-rent.svg",
    titleAr: "عقارات للإيجار",
    titleEn: "Properties for rent",
    totalAr: "( 290+ وحدة )",
    totalEn: "( +290 Uint )",
  },
  {
    imgPath: "home/real-estate-investment.svg",
    titleAr: "استثمار عقاري",
    titleEn: "real estate investment",
    totalAr: "( 300+ وحدة )",
    totalEn: "( +300 Uint )",
  },
  {
    imgPath: "home/commercial-real-estate.svg",
    titleAr: "عقارات تجارية",
    titleEn: "commercial real estate",
    totalAr: "( 255+ وحدة )",
    totalEn: "( +255 Uint )",
  },
  {
    imgPath: "home/lands-icon.svg",
    titleAr: "أراضي",
    titleEn: "lands",
    totalAr: "( 180+ وحدة )",
    totalEn: "( +180 Uint )",
  },
  {
    imgPath: "home/compounds-icon.svg",
    titleAr: "الكمبوندات",
    titleEn: "compounds",
    totalAr: "( 290+ وحدة )",
    totalEn: "( +290 Uint )",
  },
  {
    imgPath: "home/real-estate-finance.svg",
    titleAr: "تمويل عقاري",
    titleEn: "real estate investment",
    totalAr: "( 300+ وحدة )",
    totalEn: "( +300 Uint )",
  },
  {
    imgPath: "home/graves-icon.svg",
    titleAr: "مدافن",
    titleEn: "graves",
    totalAr: "( 255+ وحدة )",
    totalEn: "( +255 Uint )",
  },
];
  return (
    <Fragment>
      <h6 className="font-bold text-grayText2">
        {language ? "نوع العقار" : "Property type"}
      </h6>
      <div className="mt-[30px] mb-[32px] flex flex-wrap  gap-6  lg:justify-normal justify-center ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="
          shadow-none md:hover:border-none md:hover:shadow-[4px_4px_21px_0px_#A3A1A1]	  cursor-pointer shadow-black
            flex flex-col flex-wrap  justify-around items-center  min-w-[150px] md:min-w-[280px] w-[23%] border-2  border-gray1 rounded-[8px]  md:h-[300px]"
          >
            <div className=" flex items-end justify-center md:w-[141px] m-2 w-[80%]    md:h-[141px]">
              <Image
                src={category.imgPath}
                alt={`icon ${category.titleEn}`}
                width="100%"
                height="100%"
                radius="none"
              />
            </div>
            <div className="  text-center flex flex-col ">
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
          </div>
        ))}
      </div>
   </Fragment>
  );
};

export default PropertiesCategories;
