import Skeleton from "@/Shared/ui/Skeleton";

const ProfileCardSkeleton = () => {
  return (
    <div className="w-full md:max-w-[400px] flex flex-col gap-5 border drop-shadow rounded-md bg-white">
      <Skeleton className={"w-full h-[150px]  "} />

      <div className="px-2 mb-4 md:mb-7 md:px-5 flex-col space-y-3 md:space-y-6 ">
        <Skeleton className={"w-32 h-4 rounded "} />
        <div className="space-y-5">
          <Skeleton className={"w-3/4 h-4 rounded "} />

          <div className="flex items-center justify-between flex-wrap gap-2">
            <Skeleton className={"w-20 h-3 rounded "} />
            <div className="flex gap-3 items-center">
              <Skeleton className={"w-10 h-5 rounded "} />|
              <Skeleton className={"w-10 h-5 rounded "} />|
              <Skeleton className={"w-10 h-5 rounded "} />
            </div>
          </div>
        </div>
        <div className="w-full space-y-3">
          <Skeleton className={"w-full h-8 rounded "} />
          <Skeleton className={"w-full h-8 rounded "} />
        </div>
      </div>
    </div>
  );
};
export default ProfileCardSkeleton;
