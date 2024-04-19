const SkeletonPriceCard = () => {
   return (
      <div
         className={`bg-white overflow-hidden  gap-y-[3vh] w-full max-w-[390px] min-w-[390px]   md:w-[25.390625vw]
      shadow-md rounded-[6px] h-[73.96870554765292vh] max-h-[520px] drop-shadow p-10 shadow-gray-50 items-center grid grid-cols-2 justify-around`}
      >
         <div className="w-11/12 h-5 animate-pulse  col-span-2 bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse   bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse   col-span-2 bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse   bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse   bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse   col-span-2 bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse   bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse   bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse  col-span-2  bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse   bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse   bg-gray-50 " />
         <div className="w-11/12 h-5 animate-pulse  col-span-2  bg-gray-50 " />
         <div className="w-11/12 h-8 animate-pulse   col-span-2 bg-gray-50 " />
      </div>
   );
};
export default SkeletonPriceCard;
