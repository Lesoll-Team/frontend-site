import React from "react";
import RealtyCard from "../realtyCard/RealtyCard";
import ResultNotFound from "./shared/ResultNotFound";
import LoadingSkeleton from "./LoadingSkeleton";

const RenderProperties = ({ searchData }) => {
  return searchData ? (
    searchData.length > 0 ? (
      <div
        className={`grid grid-cols-1 md:container md:mx-auto mx-[20px]  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10`}
      >
        {searchData?.map((property) => (
          <RealtyCard cardID={property._id} propertyDetails={property} />
        ))}
      </div>
    ) : (
      <div className="w-full md:container md:mx-auto mx-[10px]">
        <ResultNotFound />
      </div>
    )
  ) : (
    <LoadingSkeleton />
  );
};
export default RenderProperties;
