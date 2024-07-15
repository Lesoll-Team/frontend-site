const SkeletonCard = () => {
  return (
    <div className="    h-auto   block  bg-none rounded-none animate-pulse">
      <div className="relative">
        <div className="w-[280px] h-48 bg-gray-300"></div>
        <div className="absolute top-2 left-2 bg-gray-300 w-16 h-5 rounded"></div>
      </div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="flex items-center space-x-2 text-gray-300 text-sm mt-2">
          <div className="h-4 bg-gray-300 rounded w-6"></div>
          <div className="h-4 bg-gray-300 rounded w-6"></div>
          <div className="h-4 bg-gray-300 rounded w-6"></div>
          <div className="h-4 bg-gray-300 rounded w-6"></div>
        </div>
        <div className="h-6 bg-gray-300 rounded w-1/3 mt-2"></div>
        <div className="flex mt-2 space-x-2">
          <div className="bg-gray-300 p-2 rounded-full w-8 h-8"></div>
          <div className="bg-gray-300 p-2 rounded-full w-8 h-8"></div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonCard;
