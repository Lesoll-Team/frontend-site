import { Skeleton } from "@nextui-org/react";
const PropDetailsSkeleton = () => {
  return (
    <div className="min-h-screen sm:container mt-10 space-y-10">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div>
          <Skeleton className="rounded-xl">
            <div className="w-72 h-3 bg-gray-100 rounded-xl "></div>
          </Skeleton>
          {/* <div className="w-20 h-20 bg-red-400"></div> */}
        </div>
        <div className="flex gap-3">
          <Skeleton className="rounded-xl">
            <div className="w-20 h-10 bg-red-400"></div>
          </Skeleton>
          <Skeleton className="rounded-xl">
            <div className="w-10 h-10 bg-red-400"></div>
          </Skeleton>
          <Skeleton className="rounded-xl">
            <div className="w-10 h-10 bg-red-400"></div>
          </Skeleton>
          {/* <div className="w-20 h-20 bg-red-400"></div> */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <Skeleton className="rounded-xl">
          <div className="w-96 h-5 bg-gray-100 rounded-xl "></div>
        </Skeleton>
        <Skeleton className="rounded-xl">
          <div className="w-60 h-3 bg-gray-100 rounded-xl "></div>
        </Skeleton>
      </div>
      <div className="lg:grid grid-cols-7 gap-3 items-start relative space-y-10 lg:space-y-0  mb">
        <Skeleton className="rounded-xl col-span-5">
          <div className="w-full h-[400px] md:min-h-[650px] cols-span-5"></div>
        </Skeleton>
        <Skeleton className="rounded-xl col-span-2">
          <div className="w-full h-[400px] md:min-h-[650px] cols-span-5"></div>
        </Skeleton>
        <Skeleton className="rounded-xl col-span-5">
          <div className="w-full h-[250px] md:min-h-[200px] cols-span-5"></div>
        </Skeleton>
        <Skeleton className="rounded-xl col-span-5">
          <div className="w-full h-[250px] md:min-h-[200px] cols-span-5"></div>
        </Skeleton>
        <Skeleton className="rounded-xl col-span-5">
          <div className="w-full h-[250px] md:min-h-[200px] cols-span-5"></div>
        </Skeleton>
      </div>
    </div>
  );
};
export default PropDetailsSkeleton;
