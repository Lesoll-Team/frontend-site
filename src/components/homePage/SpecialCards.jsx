import React, { memo } from "react";
import SpecialCard from "../realtyCard/SpecialCard";
import Link from "next/link";
import { useSelector } from "react-redux";

const SpecialCards = ({ specialCardData, isHome }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div>
      {specialCardData?.result && (
        <div className="md:container md:mx-auto mx-[20px] ">
          <div className="w-full flex  items-center justify-between">
            <h2 className="font-bold md:text-[30px] text-[18px] flex text-grayText2">
              {language ? "مشاريع" : "projects"}
            </h2>
            {isHome && (
              <Link className="  text-[12px] md:text-[20px]" href={"/projects"}>
                {language ? "رؤية المزيد" : "see more"}
              </Link>
            )}
          </div>

          <div
            className=" 
        flex overflow-auto    
        no-scrollbar gap-x-10  p-1"
          >
            {specialCardData?.result.map((cardDetails) => (
              <SpecialCard key={cardDetails._id} cardDetails={cardDetails} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(SpecialCards);
