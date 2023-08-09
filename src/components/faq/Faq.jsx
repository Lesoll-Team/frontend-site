import Image from "next/image";
import heroImg from "../../../public/faq.svg";
import { useState } from "react";
import Question from "./Question";
const Faq = () => {
  const [qType, setQType] = useState("buyer");

  const setGeneral = () => {
    setQType("general");
  };
  const setOwner = () => {
    setQType("owner");
  };
  const setBuyer = () => {
    setQType("buyer");
  };
  return (
    <div className="py-10 min-h-screen">
      {/* <div className="flex flex-col md:flex-row relative justify-between ">
        <h2 className="text-7xl text-darkGreen font-bold order-2 md:order-1">
          Frequently Asked Questions
        </h2>
        <Image
          src={heroImg}
          width={"auto"}
          height={"auto"}
          className="w-[35%] order-1 md:order-2 md:relative md:-top-[100px] right-0"
        />
      </div> */}
      <div className="container mx-auto">
        <div className="w-[%] md:w-[80%] mx-auto flex justify-center bg-white drop-shadow-xl rounded-full">
          <p
            onClick={setGeneral}
            className={`text-center cursor-pointer px-5 border border-r-0 border-lightGreen rounded-l-full text-xs sm:text-xl w-[33.3%] py-2 md:hover:bg-lightGreen md:hover:text-white font-semibold text-darkGreen duration-200 ${
              qType === "general" && "bg-lightGreen text-white"
            }`}
          >
            General
          </p>
          <p
            onClick={setOwner}
            className={`text-center cursor-pointer px-5 border border-lightGreen text-xs sm:text-xl w-[33.3%] py-2 md:hover:bg-lightGreen md:hover:text-white font-semibold text-darkGreen duration-200 ${
              qType === "owner" && "bg-lightGreen text-white"
            }`}
          >
            Owner
          </p>
          {/* <p className="text-center px-5 border border-lightGreen">test</p> */}
          <p
            onClick={setBuyer}
            className={`text-center cursor-pointer px-5 border border-l-0 border-lightGreen rounded-r-full text-xs sm:text-xl w-[33.3%] py-2 md:hover:bg-lightGreen md:hover:text-white font-semibold text-darkGreen duration-200 ${
              qType === "buyer" && "bg-lightGreen text-white"
            }`}
          >
            Buyer
          </p>
        </div>
        <Question />
      </div>
    </div>
  );
};
export default Faq;
