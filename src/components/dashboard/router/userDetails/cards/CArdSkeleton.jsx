import { Skeleton } from "@nextui-org/react";

const CArdSkeleton = () => {
  return (
    <div className="max-w-[700px] flex sm:flex-row flex-col-reverse p-3   md:p-3 gap-3 items-center bg-white drop-shadow-md  sm:min-h-[130px]  border rounded-md">
      <div dir="rtl" className="sm:w-8/12 space-y-3">
        <div className="flex justify-between">
          <Skeleton className="rounded-lg">
            <div className="h-3 w-24"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="w-5 h-3"></div>
          </Skeleton>
        </div>
        <div className="flex">
          <Skeleton className="rounded-lg">
            <div className="w-60 h-3" />
          </Skeleton>
        </div>

        <div className="flex items-center gap-10 ">
          <Skeleton className="rounded-lg">
            <div className="w-16 h-2"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="w-16 h-2"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="w-16 h-2"></div>
          </Skeleton>
        </div>
        <div className="flex">
          <Skeleton className="rounded-lg">
            <div className="w-28 h-2" />
          </Skeleton>
        </div>
        <div className="w-full h-[2px] bg-slate-100 rounded-full"></div>
        <div className="flex justify-between gap-5 text-darkGray">
          <Skeleton className="rounded-lg">
            <div className="w-20 h-2"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="w-20 h-2"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="w-20 h-3"></div>
          </Skeleton>
        </div>
        <div className="flex sm:mt-2 pt-5 items-center justify-between gap-2">
          <Skeleton className="rounded-lg">
            <div className="w-32 sm:w-44 h-4"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="w-32 sm:w-44 h-4"></div>
          </Skeleton>
        </div>
      </div>
      <div className="sm:w-4/12 relative rounded-md overflow-hidden max-h-[250px] sm:max-h-full">
        <Skeleton className="rounded-lg">
          <div className=" w-[280px] md:w-[100%]  h-[175px]   object-cover  "></div>
        </Skeleton>
      </div>
    </div>
  );
};
export default CArdSkeleton;
