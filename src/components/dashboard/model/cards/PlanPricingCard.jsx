import Link from "next/link";
import React, { useEffect, useState } from "react";
import {  BsBoxArrowInDownRight } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import {  FaCircleCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
// import { HiMiniCheckBadge } from 'react-icons/hi2';

const PlanPricingCard = ({
  stylesCss,
  data,
}) => {
  const [bgStyleCard, setStyleCard] = useState("");
  // const ranks = {

  //   bronze: "bg-gradient-to-br from-yellow-600 to-yellow-900 text-white",
  //   silver: "bg-gradient-to-br from-gray-300 to-gray-400",
  //   gold: "bg-gradient-to-tr from-orange-400 via-yellow-500 to-orange-500",
  //   water: "bg-gradient-to-b from-blue-200 to-blue-400",
  //   galaxy: "bg-gradient-to-b from-indigo-600 to-gray-950 text-white",
  // };
  useEffect(() => {
    // Use useEffect to set the style once when the component mounts
    switch (data?.rank) {
      case "bronze":
        setStyleCard(
          "bg-gradient-to-br from-yellow-600 to-yellow-900 text-white"
        );
        break;
      case "silver":
        setStyleCard("bg-gradient-to-br from-gray-300 to-gray-400");
        break;
      case "gold":
        setStyleCard(
          "bg-gradient-to-tr from-orange-400 via-yellow-500 to-orange-500");
        break;
      case "water":
        setStyleCard("bg-gradient-to-b from-blue-200 to-blue-400");
        break;
      case "galaxy":
        setStyleCard("bg-gradient-to-b from-indigo-600 to-gray-950 text-white");
        break;
      default:
        setStyleCard("bg-gradient-to-br from-gray-300 to-gray-400");
        break;
    }
  }, [data.rank]);

  return (
    <div
      className={`w-[350px] h-[380px] p-5 rounded-xl
     ${bgStyleCard}
     ${stylesCss?.bodyCss}
     `}
    >
      {data?.isPopular ? (
        <div className="w-[120px] -ml-[46px] h-[28px] -rotate-45 rounded-tl-full rounded-tr-full text-center bg-red-600 font-semibold text-white absolute">
          popular
        </div>
      ) : null}

      <div
        className={`flex ${
          data?.isPopular ? "justify-end" : "justify-center"
        } items-center space-x-3 `}
      >
        <p className={`font-semibold text-lg ${stylesCss?.titleCss}`}>
          {data?.categoryName || "empty"}
        </p>
        <div className="flex  items-center space-x-1">
          {/* <div className="flex items-center space-x-1"> */}
          <span className="font-semibold text-xl">
            EG {data?.price || "Nun"}
          </span>
          <span className="text-sm">/{data?.date || "empty"}</span>
          {data?.Offer ? (
            <s className="text-red-500 text-lg">EG {data?.lastPrice}</s>
          ) : null}
        </div>
      </div>
      <p
        className={`text-sm line-clamp-2 leading-3 mt-2 ${
          data?.isPopular ? "indent-5" : ""
        }`}
      >
        {data?.description}
      </p>
      <div className="flex flex-col  px-1 my-5 gap-y-3">
        {data.dateListInCard.map((list, index) => (
          <div key={index} className="flex space-x-2 items-center ">
            <FaCircleCheck className="text-[15px] w-[20px]" />
            <p className="line-clamp-1">{list.text}</p>
          </div>
        ))}
      </div>
      {data?.isAdmin ? (
        <div className="justify-center items-center space-x-2 w-full flex">
          <button>
            <FaEye className="text-2xl" />
          </button>
          <button
            className={`py-1 px-5 border-2 ${
              data.rank === "silver" ||
              data.rank === "gold" ||
              data.rank === "water"
                ? " border-black "
                : " border-white "
            }  rounded-xl ${stylesCss?.buttonCss}`}
          >
            Edit Plan
          </button>
          <button>
            <MdDeleteForever className="text-2xl" />
          </button>
        </div>
      ) : (
        <div className="justify-center items-center space-x-2 w-full flex">
          <Link
            href={"/dashboard/pricing"}
            className={`py-1 px-3 items-center ${
              data.rank === "silver" ||
              data.rank === "gold" ||
              data.rank === "water"
                ? "border-b-2 border-black"
                : "border-b-2 border-white"
            } flex`}
          >
            show more details
            <BsBoxArrowInDownRight className="mx-2" />
          </Link>
        </div>
      )}

      {/* <div className="justify-center items-center  space-x-2 w-full flex">
        <Link
          href={"/dashboard/pricing"}
          className={`py-1 px-3 border-b-2 items-center border-white flex  ${stylesCss?.buttonCss}`}>
          show more details
          <BsBoxArrowInDownRight className="mx-2" />
        </Link>
      </div> */}
    </div>
  );
};

export default PlanPricingCard;
