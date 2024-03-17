import React, { memo, useEffect, useState } from "react";
import SpecialCard from "../realtyCard/SpecialCard";
import Link from "next/link";
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
    <div>
      {specialCardData?.result && (
        <div className="md:container md:mx-auto mx-[20px] ">
          <div className="w-full flex md:mb-[32px] mb-[16px] items-center justify-between">
            <h2 className="font-bold  flex text-grayText2">
              {language ? "مشاريع" : "projects"}
            </h2>
            {isHome && (
              <Link className="  text-[12px] md:text-[20px]" href={"/projects"}>
                {language ? "رؤية المزيد" : "see more"}
              </Link>
            )}
          </div>

          <div
            className={`
            ${specialCardData?.result.length > 2 && "justify-between"}
        flex overflow-auto    
        no-scrollbar gap-x-10  p-1`}
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
