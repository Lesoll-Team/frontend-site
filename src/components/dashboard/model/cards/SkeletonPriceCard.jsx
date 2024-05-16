const SkeletonPriceCard = () => {
  return (
    <div
      className={`bg-white overflow-hidden  gap-y-[3vh] md:w-[25.390625vw] w-full
      shadow-md rounded-[6px] h-[550px] drop-shadow p-10 items-center grid grid-cols-2 justify-around`}
      //bg-white drop-shadow overflow-hidden flex flex-col gap-y-[16px] w-full  rounded-[6px] relative h-[450px] max-w-[390px] min-w-[390px]   md:w-[25.390625vw]
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
