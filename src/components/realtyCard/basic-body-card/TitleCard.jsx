import Link from "next/link";
import React, { memo } from "react";

const TitleCard = ({ propertyDetails }) => {
  return (
    <Link
      title={`${propertyDetails?.title}`}
      key={propertyDetails?._id}
      href={`/property-details/${propertyDetails?.slug}`}
      className="md:w-full"
    >
      <h4 className="font-bold text-[#4E4E4E] md:mt-0 mt-1 text-[11px] md:text-[17px] md:line-clamp-1 line-clamp-2  ">
        {propertyDetails?.title}
      </h4>
    </Link>
  );
};

export default memo(TitleCard);