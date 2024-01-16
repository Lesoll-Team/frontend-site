import { Image } from "@nextui-org/react";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
// import { SearchBarHome } from "@/Shared/search/SearchBarHome";
const LocationCategories = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

    const locations = [
      {
        imgPath: "home/locations/الجيزة.webp",
        titleAr: "الجيزة",
        titleEn: "Giza",
        totalAr: "( 200+ وحدة )",
        totalEn: "( +200 Uint )",
      },
      {
        imgPath: "home/locations/الاسكندرية.webp",
        titleAr: "الاسكندرية",
        titleEn: "Alex",
        totalAr: "( 290+ وحدة )",
        totalEn: "( +290 Uint )",
      },
      {
        imgPath: "home/locations/مطروح.webp",
        titleAr: "استثمار عقاري",
        titleEn: "real estate investment",
        totalAr: "( 300+ وحدة )",
        totalEn: "( +300 Uint )",
      },
      {
        imgPath: "home/locations/القليوبية.webp",
        titleAr: "عقارات تجارية",
        titleEn: "commercial real estate",
        totalAr: "( 255+ وحدة )",
        totalEn: "( +255 Uint )",
      },
      {
        imgPath: "home/locations/الغربية.webp",
        titleAr: "أراضي",
        titleEn: "lands",
        totalAr: "( 180+ وحدة )",
        totalEn: "( +180 Uint )",
      },
      {
        imgPath: "home/locations/الشرقية.webp",
        titleAr: "الكمبوندات",
        titleEn: "compounds",
        totalAr: "( 290+ وحدة )",
        totalEn: "( +290 Uint )",
      },
      {
        imgPath: "home/locations/الدقهليه.webp",
        titleAr: "تمويل عقاري",
        titleEn: "real estate investment",
        totalAr: "( 300+ وحدة )",
        totalEn: "( +300 Uint )",
      },
      {
        imgPath: "home/locations/البحر الاحمر.webp",
        titleAr: "مدافن",
        titleEn: "graves",
        totalAr: "( 255+ وحدة )",
        totalEn: "( +255 Uint )",
      },
    ];
//     const [isActive, setIsActive] = useState(false);
// <style jsx>{`
//   #gg {
//     height: 0; /* Initially set height to 0 */
//     overflow: hidden;
//     transition: height 1s ease-in-out; /* Adjust the duration as needed */

//     /* Your existing styles */
//     /* ... */
//   }

//   #gg.active {
//     height: 100%; /* Set the final height when the class is active */
//   }
// `}</style>;
  return (
    <Fragment>
      {/* <div className="container mx-auto mt-[50px]"> */}
      <h6 className="font-bold text-grayText2">
        {language ? "المحافظات" : "Governorates"}
      </h6>
      <p className="text-gray2 my-1 mb-8">
        اختر المحافظة اللي تريد لنساعدك في إيجاد افضل عقار
      </p>
      {/* <style jsx global>{`
        #gg {
          height: 0;
          overflow: hidden;
          transition: height 1s ease-in-out;
        }

        #gg.active {
          height: 100%;
        }
      `}</style> */}
      <div
        className="md:flex block w-full"
        // onMouseEnter={() => setIsActive(true)}
        // onMouseLeave={() => setIsActive(false)}
      >
        <div className="flex flex-wrap md:max-w-[80%] gap-[10px] justify-center ">
          {locations.map((category, index) => (
            <div
              key={index}
              className=" cursor-pointer relative w-[24%] min-w-[228px]   group"
            >
              <Image
                src={category.imgPath}
                alt={`icon ${category.titleEn}`}
                width="100%"
                height="100%"
                radius="sm"
                className="object-cover min-h-[300px] h-[300px]  "
              />
              <div
                id="gg"
                className={`transition-all duration-500 ease-in-out  group-hover:h-full
                  flex flex-col justify-center backdrop-blur backdrop-brightness-50 
                  rounded-b-md w-full text-center absolute z-30 bottom-0`}
              >
                {/* ${
                  isActive ? "active" : ""
                } */}
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

        <div
          className=" relative   md:mt-0 mt-3  md:block flex   group justify-center
      "
        >
          {/**md:w-[35%] lg:w-[30%] 2xl:w-[20%] w-[80%]  */}
          <div
            className="
          cursor-pointer 
          md:sticky md:top-0
          w-full 
          relative
          min-w-[228px] 
          max-w-[230px] 
          md:max-w-[280px] 
   
          "
          >
            <Image
              src={"home/locations/القاهره.webp"}
              alt={`icon location`}
              width="100%"
              height="100%"
              radius="sm"
              className="object-cover  h-[300px]   md:min-h-[617px] "
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
      {/* </div> */}
    </Fragment>
  );
};

export default LocationCategories;
