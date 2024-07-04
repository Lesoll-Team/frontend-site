import { getLangBoolean } from "@/utils/getLangBoolean";
import Link from "next/link";
import React from "react";

const TitleCard = ({ cardDetails }) => {
  const language = getLangBoolean();

  return (
    <Link
      title={cardDetails?.slug}
      href={`/projects/${cardDetails?.slug}`}
      className="md:w-full"
    >
      <h3 className=" font-bold  md:mt-0 mt-1 text-black line-clamp-1 ">
        {language ? cardDetails?.titleAr : cardDetails?.titleEn}
      </h3>
    </Link>
  );
};

export default TitleCard;
