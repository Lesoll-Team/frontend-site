import React from "react";
import { FaCircleXmark, FaCircleCheck } from "react-icons/fa6";
// import { HiMiniCheckBadge } from 'react-icons/hi2';

const PlanPricingCard = ({
  stylesCss,
  data,
  categoryName,
  rank,
  description,
  price,
  Offer,
  lastPrice,
  targetType,
  isPopular,

}) => {
  // const { bodyCss, buttonCss, textCss, titleCss, headerCss, footerCss } =
  //   stylesCss;
  const ranks = {
    bronze: "bg-gradient-to-br from-yellow-600 to-yellow-900 text-white",
    selver: "bg-gradient-to-br from-gray-300 to-gray-400",
    gold: "bg-gradient-to-tr from-orange-400 via-yellow-500 to-orange-500",
    water: "bg-gradient-to-b from-blue-200 to-blue-400",
    galaxy: "bg-gradient-to-b from-indigo-600 to-gray-950 text-white",
  };

  return (
    <div
      className={`w-[350px] h-[350px] p-5 rounded-xl
     ${ranks.galaxy}
     `}
    >
      <div className="w-[120px] -ml-[46px] h-[28px] -rotate-45 rounded-tl-full rounded-tr-full text-center bg-red-600 font-semibold text-white absolute">
        popular
      </div>
      <div className="flex justify-center space-x-3 ">
        <p className="font-semibold text-lg">Enterprise</p>
        <div className="flex items-center space-x-1 ">
          <span className="font-semibold">EGY 39</span>
          <span className="text-sm">/Month</span>
        </div>
      </div>
      <p className="text-sm leading-3 mt-2 indent-5">
        this plan is those who have a team alredy and running a large business
      </p>
      <div className="flex flex-col  px-1 mt-5 gap-y-3">
        <div className="flex space-x-2 items-center ">
          <FaCircleCheck className="text-[15px] w-[20px]" />
          <p className="line-clamp-1"> 2D Canvas</p>
        </div>
        <div className="flex space-x-2 items-center ">
          <FaCircleCheck className="text-[15px] w-[20px]" />
          <p className="line-clamp-1"> 3D Canvas</p>
        </div>
        <div className="flex space-x-2 items-center ">
          <FaCircleCheck className="text-[15px] w-[20px]" />
          <p className="line-clamp-1"> mport Media Files</p>
        </div>
        <div className="flex space-x-2 items-center ">
          {" "}
          <FaCircleCheck className="text-[15px] w-[20px]" />
          <p className="line-clamp-1"> Import 3D Assets </p>
        </div>
        <div className="flex space-x-2 items-center ">
          {" "}
          <FaCircleXmark className="text-[15px] w-[20px]" />
          <p className="line-clamp-1"> Multi Media Assets Support</p>
        </div>
        <div className="flex space-x-2 items-center ">
          <FaCircleXmark className="text-[15px] w-[20px]" />
          <p className="line-clamp-1"> Test & Publish AR content</p>
        </div>
      </div>
      <div className="justify-center w-full flex">
        <button className="py-1 px-5 border-2 border-black rounded-xl">
          Edit Plan
        </button>
      </div>
    </div>
  );
};

export default PlanPricingCard;
