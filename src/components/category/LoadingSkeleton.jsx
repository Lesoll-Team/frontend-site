import React from "react";
import RealtyCardSkeleton from "../realtyCard/RealtyCardSkeleton";

const LoadingSkeleton = () => {
  return (
    <div
      className={`grid grid-cols-1 md:container md:mx-auto mx-[20px]  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10`}
    >
      <RealtyCardSkeleton />
      <RealtyCardSkeleton />
      <RealtyCardSkeleton />
      <RealtyCardSkeleton />
      <RealtyCardSkeleton />
      <RealtyCardSkeleton />
      <RealtyCardSkeleton />
      <RealtyCardSkeleton />
    </div>
  );
};

export default LoadingSkeleton;
