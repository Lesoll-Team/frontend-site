import React from "react";
import Image from "next/image";
import heroImg from "../../../public/hero.png";
import { AiOutlineSearch } from "react-icons/ai";
const Main = () => {
  return (
    <>
      <section className="py-3 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="lg:space-y-2 flex flex-col justify-center items-center md:items-start md:w-[%]  md:shadow-lg md:min-h-[200px] md:border-2 md:rounded-r-[70px] md:pl-7 pr-2 md:py-10">
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
            priority
            src={heroImg}
            height={"auto"}
            width={"auto"}
            className="w-[100%] md:w-1/2 md:justify-self-end-end"
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
      </section>
    </>
  );
};

export default Main;
