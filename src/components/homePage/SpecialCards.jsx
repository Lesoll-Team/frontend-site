import React, { memo } from "react";
import SpecialCard from "../realtyCard/SpecialCard";
import Link from "next/link";
import { useSelector } from "react-redux";

const SpecialCards = ({ specialCardData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div>
      {specialCardData?.result && (
        <div className="md:container md:mx-auto mx-[20px] ">
          <div className="w-full flex  items-center justify-between">
            <h2>اي حاجة دلوقتي </h2>
            <Link href={""}>اي حاجة دلوقتي </Link>
          </div>

          <div
            className=" 
        flex overflow-auto md:justify-between   
        no-scrollbar gap-x-10  p-1"
          >
            {specialCardData?.result.map((cardDetails) => (
              <SpecialCard key={cardDetails._id} cardDetails={cardDetails} />
            ))}
            {specialCardData?.result.map((cardDetails) => (
              <SpecialCard key={cardDetails._id} cardDetails={cardDetails} />
            ))}
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
