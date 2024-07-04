import { getLangBoolean } from "@/utils/getLangBoolean";
import React from "react";

const UnitsTypeProject = ({ cardDetails }) => {
  const language = getLangBoolean();
  const countUnits = cardDetails.units?.length;
  return (
    <div className="flex text-[#666666]  items-center lg-text font-bold min-w-max gap-1 font-cairo ">
      {cardDetails.units[0] ? (
        <span>
          {` ${cardDetails.units[0]?.count} `}
          {language
            ? cardDetails.units[0]?.title.ar
            : cardDetails.units[0]?.title.en}
        </span>
      ) : (
        <span className="p-[10px]"></span>
      )}

      {countUnits > 1 && (
        <>
          <div
            className={`${countUnits > 1 ? "block" : "hidden"} bg-[#CCCCCC] w-[1px] h-[16px]`}
          />

          <span>
            {` ${cardDetails.units[1]?.count} `}
            {language
              ? cardDetails.units[1]?.title.ar
              : cardDetails.units[1]?.title.en}
          </span>
        </>
      )}

      {countUnits > 2 && (
        <>
          <div
            className={`${countUnits > 2 ? "block" : "hidden"} bg-[#CCCCCC] w-[1px] h-[16px]`}
          />
          <span>
            {` ${cardDetails.units[2]?.count} `}
            {language
              ? cardDetails.units[2]?.title.ar
              : cardDetails.units[2]?.title.en}
          </span>
        </>
      )}

      {countUnits > 3 && (
        <>
          <div
            className={`${countUnits > 3 ? "block" : "hidden"}  bg-[#CCCCCC] w-[1px] h-[16px]`}
          />
          <span>
            {` ${countUnits - 3} `}
            {language ? "أخري" : "more"}
          </span>
        </>
      )}
    </div>
  );
};

export default UnitsTypeProject;
