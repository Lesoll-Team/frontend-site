import Skeleton from "@/Shared/ui/Skeleton";
import React from "react";

const ProfileHeaderSkeleton = ({ hideHeader }) => {
  return (
    <header
      className={` w-full flex flex-col lg:flex-row justify-center items-center  md:mb-20   gap-[14px] lg:gap-[24px] ${
        hideHeader && "md:flex hidden"
      } `}
    >
      <Skeleton className="rounded-full  w-[84px] h-[84px] lg:w-[100px]  lg:h-[100px]" />
      <div className="flex w-full flex-col items-center lg:items-end lg:flex-row justify-center md:justify-between flex-wrap">
        <div className="lg:space-y-[24px]">
          <Skeleton className="w-32 h-3 " />

          <div className="hidden lg:flex  items-center gap-14">
            <Skeleton className="w-44  h-[10px]" />

            <Skeleton className="w-44 rounded h-[10px]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeaderSkeleton;
