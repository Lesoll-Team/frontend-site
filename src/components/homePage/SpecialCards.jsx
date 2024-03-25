import React, { memo, useEffect, useState } from "react";
import SpecialCard from "../realtyCard/SpecialCard";
import { useSelector } from "react-redux";
import { getFeaturesCards } from "./homeAPI";

const SpecialCards = ({ isHome }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [specialCardData, setSpecialCardData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFeaturesCards();
      setSpecialCardData(data);
    };
    fetchData();
  }, []);
  return (
    <div
      className={` flex flex-wrap gap-[20px] md:container md:mx-auto mx-[20px]  ${specialCardData?.result.length > 2 ? "md:justify-between justify-center " : "md:justify-normal justify-center"}`}
    >
      <div className="w-full flex md:mb-[32px] mb-[16px] items-center justify-between">
        <h2 className="font-bold  flex text-grayText2">
          {language
            ? "أفضل المشاريع والكومباوندات الجديدة"
            : "Best new projects and compounds"}
        </h2>
      </div>
      {specialCardData?.result.map((cardDetails) => (
        <SpecialCard
          isHome={isHome}
          key={cardDetails._id}
          cardDetails={cardDetails}
        />
      ))}
    </div>
  );
};

export default memo(SpecialCards);
// <div
//   className={`${isHome && "md:container md:mx-auto lg:px-0 px-[2.8vw] mx-[20px]"} `}
// >
//
//     <div
// className={`relative  xl:container xl:mx-auto ${isHome && "mx-[15px]"}`}
//       ref={scrollContainerRef}
//       className={`
//        flex
//       ${!isHome && "justify-center md:justify-normal"}
//       ${specialCardData?.result.length > 2 && !isHome && "justify-center md:justify-between"}
// ${
//   isHome
//     ? ` overflow-x-scroll no-scrollbar gap-x-6  md:px-0 px-2 py-1 `
//     : " md:flex flex-wrap  grid gap-x-6  gap-y-8 md:gap-y-16 "
// }
//   `}
//     >
/* {isHome && (
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
            )} */
/* {isHome && (
  <Link className="  text-[12px] md:text-[20px]" href={"/projects"}>
  {language ? "رؤية المزيد" : "see more"}
  </Link>
  )} */

// const scrollContainerRef = useRef(null);

// const scrollLeft = () => {
//   scrollContainerRef.current.scrollTo({
//     left: scrollContainerRef.current.scrollLeft - 320,
//     behavior: "smooth",
//   });
// };

// const scrollRight = () => {
// ref={scrollContainerRef}
//   scrollContainerRef.current.scrollTo({
//     left: scrollContainerRef.current.scrollLeft + 320,
//     behavior: "smooth",
//   });
// };

// import Link from "next/link";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// <div
//   className={`
//   bg-blue-200 p-1
// md:flex flex-wrap
// justify-center md:justify-normal
//     ${specialCardData?.result.length > 2 && "justify-center md:justify-between"}
/* </div> */
//     `}
// >
