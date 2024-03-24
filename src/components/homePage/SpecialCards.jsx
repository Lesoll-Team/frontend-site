import React, { memo, useEffect, useRef, useState } from "react";
import SpecialCard from "../realtyCard/SpecialCard";
// import Link from "next/link";
import { useSelector } from "react-redux";
import { getFeaturesCards } from "./homeAPI";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SpecialCards = ({ isHome }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [specialCardData, setSpecialCardData] = useState(null);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollTo({
      left: scrollContainerRef.current.scrollLeft - 320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollTo({
      left: scrollContainerRef.current.scrollLeft + 320,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFeaturesCards();
      setSpecialCardData(data);
    };
    fetchData();
  }, []);
  return (
    <div
      className={`relative  xl:container xl:mx-auto ${isHome && "mx-[15px]"}`}
    >
      <div className="w-full flex md:mb-[32px] mb-[16px] items-center justify-between">
        <h2 className="font-bold  flex text-grayText2">
          {language
            ? "أفضل المشاريع والكومباوندات الجديدة"
            : "Best new projects and compounds"}
        </h2>
        {/* {isHome && (
          <Link className="  text-[12px] md:text-[20px]" href={"/projects"}>
            {language ? "رؤية المزيد" : "see more"}
          </Link>
        )} */}
      </div>
      {specialCardData?.result && (
        <div
          className={`${isHome && "md:container md:mx-auto lg:px-0 px-[2.8vw] mx-[20px]"} `}
        >
          <div
            ref={scrollContainerRef}
            className={`
             flex 
            ${specialCardData?.result.length > 2 && isHome && "justify-between"}
            ${!isHome && "justify-center md:justify-normal"}
            ${specialCardData?.result.length > 2 && !isHome && "justify-center md:justify-between"}
      ${
        isHome
          ? ` overflow-x-scroll no-scrollbar gap-x-6  md:px-0 px-2 py-1 `
          : " md:flex flex-wrap  grid gap-x-6  gap-y-8 md:gap-y-16 "
      }    
        `}
          >
            {specialCardData?.result.map((cardDetails) => (
              <SpecialCard
                isHome={isHome}
                key={cardDetails._id}
                cardDetails={cardDetails}
              />
            ))}
          </div>
        </div>
      )}
      {isHome && (
        <div className="flex xl:hidden absolute top-[240px] w-full    justify-between ">
          <button
            onClick={scrollLeft}
            className="bg-[#f8f8f8] w-10 h-10 flex items-center shadow-md justify-center cursor-pointer rounded-full"
          >
            <MdKeyboardArrowRight />
          </button>
          <button
            onClick={scrollRight}
            className="bg-[#f8f8f8] w-10 h-10 flex items-center shadow-md justify-center cursor-pointer rounded-full"
          >
            <MdKeyboardArrowLeft />
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(SpecialCards);
