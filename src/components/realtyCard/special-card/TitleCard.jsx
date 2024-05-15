import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const TitleCard = ({ cardDetails }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <Link
      title={cardDetails?.slug}
      href={`/projects/${cardDetails?.slug}`}
      className="md:w-full"
    >
      <h3 className=" font-bold  md:mt-0 mt-1 text-black line-clamp-1 ">
        {language ? cardDetails?.titleAr : cardDetails?.titleEn}
      </h3>
      {/* <p className="flex items-center lg-text font-noto min-w-max gap-1  ">
                {cardDetails?.address?.region
                    && ` ${cardDetails?.address?.governrate}, ${cardDetails?.address?.region}`}
            </p> */}
    </Link>
  );
};

export default TitleCard;
