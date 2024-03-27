import { Skeleton } from "@nextui-org/react";
import React from "react";

const CardSkeleton = () => {
  return (
    <div className="w-[330px] h-[448px] overflow-hidden  bg-white drop-shadow-md rounded-xl relative">
      <Skeleton className="w-[330px] h-[265px]" />
      <div className="p-5 space-y-6">
        <div className=" flex justify-between items-center">
          <Skeleton className="w-[40%] h-3 rounded-lg" />
          <Skeleton className="w-[20%] h-3 rounded-lg" />
        </div>
        <Skeleton className="w-[80%] h-4 rounded-lg" />
        <Skeleton className="w-[60%] h-3 rounded-lg" />
        <hr />
        <div className="flex justify-between items-center">
          <Skeleton className="w-[20%] h-3 rounded-lg" />
          <Skeleton className="w-[20%] h-3 rounded-lg" />
          <Skeleton className="w-[20%] h-3 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
