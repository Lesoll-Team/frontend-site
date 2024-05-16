import Skeleton from "@/Shared/ui/Skeleton";
import React from "react";

const PackageCardSkeleton = () => {
  return (
    <div className="px-3 py-5 md:px-5 md:py10 border-1 rounded bg-white drop-shadow-sm flex flex-col gap-8 relative">
      <div className="flex gap-2">
        <Skeleton className={"w-40 md:w-[30%] h-8 "} />
      </div>
      <div>
        <div>
          <div className="py-3 px-4 flex justify-between bg-gray-200">
            <Skeleton className={"w-40 md:w-[30%] h-4 bg-gray-400 "} />
            <Skeleton className={"w-10 md:w-10 h-4 bg-gray-400 "} />
          </div>
          <div className="py-3 px-4 flex justify-between items-center ">
            <Skeleton className={"w-40 md:w-[30%] h-4  "} />
            <Skeleton className={"w-10 md:w-10 h-4  "} />
          </div>
          <div className="py-3 px-4 flex justify-between bg-gray-200">
            <Skeleton className={"w-40 md:w-[30%] h-4 bg-gray-400 "} />
            <Skeleton className={"w-10 md:w-10 h-4 bg-gray-400 "} />
          </div>
          <div className="py-3 px-4 flex justify-between ">
            <Skeleton className={"w-40 md:w-[30%] h-4  "} />
            <Skeleton className={"w-10 md:w-10 h-4  "} />
          </div>
        </div>
      </div>
      <Skeleton className={"w-20 h-5  "} />
    </div>
  );
};

export default PackageCardSkeleton;
