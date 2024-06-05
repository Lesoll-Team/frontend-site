import Skeleton from "@/Shared/ui/Skeleton";
import React from "react";

const RealtyCardSkeleton = () => {
  return (
    <div className="flex sm:flex-col flex-row gap-2 sm:gap-6 bg-white drop-shadow-md sm:bg-transparent sm:drop-shadow-none">
      <Skeleton
        className={
          "sm:w-full w-6/12  min-h-[100px] sm:h-[40vh] sm:max-h-[250px] sm:min-h-[250px] rounded-md"
        }
      />
      <div className="w-full space-y-4 p-1 sm:p-0">
        <div className="flex flex-col gap-3 w-full ">
          <Skeleton className={"w-8/12 h-4"} />
          <Skeleton className={"w-4/12 h-3"} />
          <div className="flex gap-2 w-full">
            <Skeleton className={"w-2/12 h-3"} />
            <Skeleton className={"w-2/12 h-3"} />
            <Skeleton className={"w-2/12 h-3"} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className={"w-3/12 h-3"} />
          <div className="flex gap-1 items-center">
            <Skeleton className={"w-6 h-6 sm:w-10  sm:h-10 rounded-full"} />
            <Skeleton className={"w-6 h-6 sm:w-10  sm:h-10 rounded-full"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtyCardSkeleton;
