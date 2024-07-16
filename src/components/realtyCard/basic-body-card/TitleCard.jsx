import { filterSlugURL } from "@/Shared/generateRedirectDestination";
import Link from "next/link";
import React, { memo } from "react";

const TitleCard = ({ propertyDetails, withVertical }) => {
  const new_slug = filterSlugURL(propertyDetails?.slug);
  return (
    <Link
      title={`${propertyDetails?.title}`}
      key={propertyDetails?._id}
      href={`/property-details/${new_slug}`}
      className=" "
    >
      <h3
        className={`  font-bold text-[#4E4E4E] text-start ${withVertical ? "text-[17px] line-clamp-1 " : " text-[12px] md:text-[17px] md:line-clamp-1 line-clamp-2"}`}
      >
        {propertyDetails?.title}
      </h3>
    </Link>
  );
};

export default memo(TitleCard);
