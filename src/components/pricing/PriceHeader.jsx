import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const PriceHeader = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="relative flex justify-center items-center md:mt-10 mt-0">
      <Image
        src={"/price/header-price.svg"}
        alt="header price "
        width={200}
        height={100}
        className="w-full object-cover min-h-[170px]"
      />
      <h1 className="text-white absolute ">
        {language ? "الباقات" : "payment"}
      </h1>
    </div>
  );
};

export default PriceHeader;
