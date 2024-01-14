import { Image } from "@nextui-org/react";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// import { SearchBarHome } from "@/Shared/search/SearchBarHome";
const LocationCategories = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const categories = [
    {
      imgPath: "home/location.jpg",
      titleAr: "عقارات للبيع",
      titleEn: "Properties for sell",
      totalAr: "( 200+ وحدة )",
      totalEn: "( +200 Uint )",
    },
    {
      imgPath: "home/location.jpg",
      titleAr: "عقارات للإيجار",
      titleEn: "Properties for rent",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
    },
    {
      imgPath: "home/location.jpg",
      titleAr: "استثمار عقاري",
      titleEn: "real estate investment",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
    },
    {
      imgPath: "home/location.jpg",
      titleAr: "عقارات تجارية",
      titleEn: "commercial real estate",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
    },
    {
      imgPath: "home/location.jpg",
      titleAr: "أراضي",
      titleEn: "lands",
      totalAr: "( 180+ وحدة )",
      totalEn: "( +180 Uint )",
    },
    {
      imgPath: "home/location.jpg",
      titleAr: "الكمبوندات",
      titleEn: "compounds",
      totalAr: "( 290+ وحدة )",
      totalEn: "( +290 Uint )",
    },
    {
      imgPath: "home/location.jpg",
      titleAr: "تمويل عقاري",
      titleEn: "real estate investment",
      totalAr: "( 300+ وحدة )",
      totalEn: "( +300 Uint )",
    },
    {
      imgPath: "home/location.jpg",
      titleAr: "مدافن",
      titleEn: "graves",
      totalAr: "( 255+ وحدة )",
      totalEn: "( +255 Uint )",
    },
  ];
  return (
    // <Fragment>
    <div className="container mx-auto mt-[50px]">
      <h6 className="font-bold text-grayText2">
        {language ? "المحافظات" : "Governorates"}
      </h6>
      <p className="text-gray2">
        اختر المحافظة اللي تريد لنساعدك في إيجاد افضل عقار
      </p>
      <div className="md:flex justify-center block w-full">
        <div
          className="  flex flex-wrap 
md:max-w-[80%]
       justify-center
        gap-[10px]"
        >
          {/**        w-[80%] 
        md:w-[65%] lg:w-[70%] 2xl:w-[80%]  */}
          {categories.map((category, index) => (
            <div
              key={index}
              className="
             cursor-pointer 
             relative   
             border-2  border-gray1 rounded-[8px] 
             w-[24%] min-w-[228px]
             
          "
            >
              <Image
                src={category.imgPath}
                alt={`icon ${category.titleEn}`}
                width="100%"
                height="100%"
                radius="none"
                className="object-cover min-h-[300px] h-[300px]  "
              />
              <div className="backdrop-blur backdrop-brightness-50 w-full text-center absolute z-30 bottom-0">
                <p className="font-bold  text-white">
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

        <div
          className=" relative     md:block flex    justify-center
      "
        >
          {/**md:w-[35%] lg:w-[30%] 2xl:w-[20%] w-[80%]  */}
          <div
            className="
          cursor-pointer 
          sticky top-0
          w-full 
          min-w-[228px] 
          max-w-[230px] 
          
          "
          >
            <Image
              src={"home/location.jpg"}
              alt={`icon location`}
              width="100%"
              height="100%"
              radius="sm"
              className="object-cover  h-[300px]   md:min-h-[617px] "
            />
            <div className="backdrop-blur backdrop-brightness-50 w-full text-center absolute z-30 bottom-0">
              <p className="font-bold  text-white">
                {language ? "مدافن" : "graves"}
              </p>
              <p
                className=" 
               text-[10px] md:text-[13px] lg:text-[16px] xl:text-[20px]
              text-lightGreen"
              >
                {language ? "مدافن" : "graves"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Fragment>
  );
};

export default LocationCategories;
          /*  shadow-none md:hover:border-none md:hover:shadow-[4px_4px_21px_0px_#A3A1A1] 
            justify-around items-center  min-w-[150px] md:min-w-[280px] w-[23%]  md:h-[300px]"
            */