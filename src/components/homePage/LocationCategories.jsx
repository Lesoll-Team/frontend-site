import { Image } from "@nextui-org/react";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
const LocationCategories = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const locations = [
    {
      imgPath: "home/locations/الجيزة.webp",
      titleAr: "الجيزة",
      titleEn: "Giza",
      totalAr: "( 200+ وحدة )",
      totalEn: "( +200 Uint )",
      id: 1,
    },
    {
      imgPath: "home/locations/الاسكندرية.webp",
      titleAr: "الاسكندرية",
      titleEn: "Alex",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
      id: 2,
    },
    {
      imgPath: "home/locations/مطروح.webp",
      titleAr: "استثمار عقاري",
      titleEn: "real estate investment",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
      id: 3,
    },
    {
      imgPath: "home/locations/القليوبية.webp",
      titleAr: "عقارات تجارية",
      titleEn: "commercial real estate",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
      id: 4,
    },
    {
      imgPath: "home/locations/الغربية.webp",
      titleAr: "أراضي",
      titleEn: "lands",
      totalAr: "( 180+ وحدة )",
      totalEn: "( +180 Uint )",
      id: 5,
    },
    {
      imgPath: "home/locations/الشرقية.webp",
      titleAr: "الكمبوندات",
      titleEn: "compounds",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
      id: 6,
    },
    {
      imgPath: "home/locations/الدقهليه.webp",
      titleAr: "تمويل عقاري",
      titleEn: "real estate investment",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
      id: 7,
    },
    {
      imgPath: "home/locations/البحر الاحمر.webp",
      titleAr: "مدافن",
      titleEn: "graves",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
      id: 8,
    },
  ];

  return (
    <Fragment>
      <h6 className="font-bold text-grayText2">
        {language ? "المحافظات" : "Governorates"}
      </h6>
      <p className="text-gray2 my-1 mb-8">
        اختر المحافظة اللي تريد لنساعدك في إيجاد افضل عقار
      </p>

      <div className="md:flex justify-between gap-x-3  block  ">
        <div
          className=" relative   md:mb-0 mb-3  md:hidden flex     group justify-center
      "
        >
          <div
            className="
          cursor-pointer 
          md:sticky md:top-0
          w-full 
          relative
          min-w-[228px] 
          max-w-[100%] 
          md:max-w-[280px] 
  h-36
   overflow-hidden
          "
          >
            <Image
              src={"home/locations/القاهره.webp"}
              alt={`icon location`}
              width="100%"
              height="100%"
              radius="sm"
              className="object-cover   h-[300px]   md:min-h-[617px] "
            />
            <div
              className="
            transition-all duration-500 ease-in-out  group-hover:h-full flex flex-col justify-center
            backdrop-blur  backdrop-brightness-50 rounded-b-md w-full text-center absolute z-30 bottom-0"
            >
              <p className="font-bold  text-white">
                {language ? "القاهرة" : "Cairo"}
              </p>
              <p
                className=" font-semibold 
               text-[10px] md:text-[13px] lg:text-[16px] xl:text-[20px]
              text-lightGreen"
              >
                {language ? "200 وحدة" : "200 Uint"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4     gap-[10px] md:justify-normal justify-between ">
          {locations.map((category) => (
            <div key={category.id} className=" cursor-pointer relative  group">
              <Image
                src={category.imgPath}
                alt={`icon ${category.titleEn}`}
                width="100%"
                height="100%"
                radius="sm"
                className="object-cover md:h-[377px]  w-[300px] "
              />
              <div
                id="gg"
                className={`  group-hover:h-full
                  flex flex-col justify-center backdrop-blur backdrop-brightness-50 
                  rounded-b-md w-full text-center absolute z-30 bottom-0`}
              >
                <p className="font-bold  text-white">
                  {language ? category.titleAr : category.titleEn}
                </p>
                <p
                  className=" font-semibold
               text-[10px] md:text-[13px] lg:text-[16px] xl:text-[20px]
              text-lightGreen"
                >
                  {language ? category.totalAr : category.totalEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className=" relative    md:mt-0 mt-3  md:block hidden    group justify-center">
          <div
            className="
          cursor-pointer 
          md:sticky md:top-0
          relative
          "
          >
            <Image
              src={"home/locations/القاهره.webp"}
              alt={`icon location`}
              width="100%"
              height="100%"
              radius="sm"
              className="object-cover  min-h-[760px]"
            />
            <div
              className="
            transition-all duration-500 ease-in-out  group-hover:h-full flex flex-col justify-center
            backdrop-blur  backdrop-brightness-50 rounded-b-md w-full text-center absolute z-30 bottom-0"
            >
              <p className="font-bold  text-white">
                {language ? "القاهرة" : "Cairo"}
              </p>
              <p
                className=" font-semibold 
               text-[10px] md:text-[13px] lg:text-[16px] xl:text-[20px]
              text-lightGreen"
              >
                {language ? "200 وحدة" : "200 Uint"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LocationCategories;
