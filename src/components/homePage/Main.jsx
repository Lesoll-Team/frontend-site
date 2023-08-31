import React from "react";
import Image from "next/image";
import heroImg from "../../../public/hero.png";
import { AiOutlineSearch } from "react-icons/ai";
// import SearchBar from "@/Shared/search/SearchBar";
const Main = () => {
  return (
    <>
      <section className="py-3 ">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4">
          <div className="lg:space-y-2 flex flex-col justify-center items-center mt-5 sm:mt-0 md:items-start md:w-[%]  md:shadow-lg md:min-h-[200px] md:border-2 md:rounded-r-[70px] md:pl-7 pr-2 md:py-10">
            <h1 className="text-5xl relative lg:text-8xl text-lightGreen font-semibold text-center md:text-left">
              Lesoll{" "}
              <span className="text-3xl block lg:text-4xl lg:inline text-lightOrange">
                The Way You Home
              </span>
            </h1>
            <p className="w-[95%] text-center hidden md:block font-light md:text-left lg:text-lg">
              an Egyptian RealEstate marketplace. lesoll offers customers a
              digital experiance for buying sending and renting properties with
              end to end service
            </p>
          </div>
          <Image
            
            src={heroImg}
            loading="lazy" // Use "eager" to prioritize loading
            // priority // Add the "priority" property to the image
            height={"auto"}
            width={"auto"}
            className="w-[100%] md:w-1/2 md:justify-self-end-end"
            alt="heroImg"
          />
        </div>
        {/* <SearchBar/> */}
      </section>
    </>
  );
};

export default Main;
