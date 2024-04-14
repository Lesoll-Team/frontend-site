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
      className={` flex flex-wrap gap-[20px] md:container md:mx-auto mx-[20px] min-h-[542px] ${specialCardData?.result.length > 2 ? "md:justify-between justify-center " : "md:justify-normal justify-center"}`}
    >
      {isHome ? (
        <div className="w-full flex md:mb-[32px] mb-[16px] items-center justify-between">
          <h2 className="font-bold  flex text-grayText2">
            {language
              ? "أفضل المشاريع والكومباوندات الجديدة"
              : "Best new projects and compounds"}
          </h2>
        </div>
      ) : (
        <div className="w-full flex md:mb-[32px] mb-[16px] items-center justify-between">
          <h1 className="font-bold  flex text-grayText2">
            {language
              ? "أفضل المشاريع والكومباوندات الجديدة"
              : "Best new projects and compounds"}
          </h1>
        </div>
      )}

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
