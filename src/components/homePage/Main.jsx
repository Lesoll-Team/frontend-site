import React from "react";
import Image from "next/image";
import heroImg from "../../../public/hero.webp";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
// import SearchBar from "@/Shared/search/SearchBar";
const Main = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <>
      <section className="py-3 ">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4">
          <div
            className={`lg:space-y-5 flex flex-col justify-center items-center mt-5 sm:mt-0 md:items-start   md:shadow-lg md:min-h-[200px] md:border-2  md:pl-7 pr-2 md:py-10 ${
              language
                ? "md:pl-0 pr-0 md:pr-7 pl-2 md:rounded-l-[70px] text-start  "
                : "md:rounded-r-[70px]"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center md:items-baseline">
              <h1 className="text-4xl  relative lg:text-8xl text-lightGreen font-semibold text-center md:text-start">
                {language ? " ليسول" : "Lesoll"}
                <span className="text-3xl block lg:text-4xl lg:inline font-semibold text-lightOrange ">
                  {language ? " طريقك لبيتك" : "The Way You Home "}
                </span>
              </h1>
            </div>
            <p className="w-[95%] text-center hidden md:block font-light md:text-start lg:text-lg">
              {language
                ? "ليسول هو موقع عقارات مصري متكامل يقدم خدمة التجربة الرقمية سواء لشراء أو بيع أو تأجير العقارات مع خدمة شاملة تقدم تفاصيل عن العقار من خلال خريطة تفاعلية"
                : " an Egyptian RealEstate marketplace. lesoll offers customers a digital experiance for buying sending and renting properties with end to end service"}
            </p>
          </div>
          <Image
            src={heroImg}
            // Use "eager" to prioritize loading
            priority // Add the "priority" property to the image
            height={"auto"}
            width={"auto"}
            className="w-[100%] md:w-1/2 md:justify-self-end-end"
            alt="heroImg"
          />
        </div>
        {/* <div className="  items-center w-[80%] md:w-[50%] border-2 flex gap-1 mx-auto  p-5 rounded-lg shadow-xl">
          <AiOutlineSearch className="text-xl text-lightGreen font-black" />
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none p-1 font-semibold  flex-1"
          />
          <button className="rounded-md bg-lightOrange text-lg text-white py-1 px-3 ">
            Find Your Home
          </button>
        </div> */}

        {/* <div className="max-w-[90%] mx-auto grid  md:grid-cols-4 h-[87dvh] gap-5 ">
          <div className="bg-gray-200  col-span-2 row-span-2 rounded-lg drop-shadow-xl"></div>
          <div className="bg-gray-200  col-span-2 row-span-[1/2] rounded-lg drop-shadow-xl"></div>
          <div className="bg-gray-200 col-span-[3/4] row-span-[2/3] rounded-lg drop-shadow-xl"></div>
          <div className="bg-gray-200 col-span-[4/5] row-span-[2/3] rounded-lg drop-shadow-xl"></div>
        </div> */}
      </section>
    </>
  );
};

export default Main;
