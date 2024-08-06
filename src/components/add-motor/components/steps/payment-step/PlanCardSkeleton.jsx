import Skeleton from "@/Shared/ui/Skeleton";
import React from "react";

const PlanCardSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-md space-y-4 border">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Skeleton className={"w-6 h-6 rounded-full"} />
          <Skeleton className={"w-40 h-3"} />
        </div>
        <Skeleton className={"w-20 h-3"} />
      </div>
      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          {" "}
          <Skeleton className={"w-5 h-5 rounded-full"} />
          <Skeleton className={"w-8/12 md:w-3/12 h-3"} />
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <Skeleton className={"w-5 h-5 rounded-full"} />
          <Skeleton className={"w-8/12 md:w-3/12 h-3"} />
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <Skeleton className={"w-5 h-5 rounded-full"} />
          <Skeleton className={"w-8/12 md:w-3/12 h-3"} />
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <Skeleton className={"w-5 h-5 rounded-full"} />
          <Skeleton className={"w-8/12 md:w-3/12 h-3"} />
        </div>
      </div>
    </div>
  );
};

export default PlanCardSkeleton;
