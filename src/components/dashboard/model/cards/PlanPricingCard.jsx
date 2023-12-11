import Link from "next/link";
import React, { useEffect, useState } from "react";
import {  BsBoxArrowInDownRight } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import {  FaCircleCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
// import { HiMiniCheckBadge } from 'react-icons/hi2';

const PlanPricingCard = ({
  stylesCss,
  data,
}) => {
  const [bgStyleCard, setStyleCard] = useState("");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dateTranslation = (date) => {
    if (language) {
        switch (date) {
          case "one day":
            return "يوم واحد";
          case "week":
            return "اسبوعي";
          case "month":
            return "شهري";
          case "yearly":
            return "سنوي";
          default:
            return null;
        }
    }
  };
// console.log("Plan Pricing Card", data);
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
      {data?.Popular ? (
        <div className="w-[120px] -ml-[46px] h-[28px] -rotate-45 rounded-tl-full rounded-tr-full text-center bg-red-600 font-semibold text-white absolute">
          {language ? "مـمـيـز" : "popular"}
        </div>
      ) : null}
      <div
        className={`flex ${
          data?.Popular ? "justify-end mt-12" : "justify-center"
        } items-center  `}
      >
        <p className={ ` bg-red-200 flex-none font-semibold text-lg ${stylesCss?.titleCss}`}>
          {language ? data?.PaymentAr : data?.PaymentEn || "empty"}
        </p>
        <div className="flex  items-center space-x-1">
          {/* <div className="flex items-center space-x-1"> */}
          <span className="font-semibold text-xl flex-none bg-red-500">
            {language ? "جنية" : "EGY"} {data?.price || 0}
          </span>
          <span className="font-semibold flex-none text-sm bg-blue-400">
            /{language ? dateTranslation(data?.expireDate) : data?.expireDate}
          </span>
          {data?.offer ? (
            <s className="text-red-500 bg-yellow-300 flex-none font-semibold text-lg">
              {language ? "جنية" : "EGY"} {data?.offerPrice}
            </s>
          ) : null}
        </div>
      </div>
      <div className="pt-1">
        <p
          dir={language ? "rtl" : "ltr"}
          className={`text-sm font-medium line-clamp-2 leading-snug ${
            data?.Popular ? "px-3" : ""
          }`}
        >
          {language ? data?.descriptionAr : data?.descriptionEn}
        </p>
      </div>
      <div
        dir={language ? "rtl" : "ltr"}
        className="flex flex-col min-h-[150px] max-h-[180px]  px-1 my-5 gap-y-3">
        {data?.service?.map((list, index) => (
          <div key={list._id} className="flex space-x-2 items-center ">
            <FaCircleCheck className="text-[15px] w-[20px]" />
            <p className="line-clamp-1">
              {language ? list.nameAr : list.nameEn}
            </p>
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
            {language ? "عرض المزيد من التفاصيل" : "show more details"}
            <BsBoxArrowInDownRight className="mx-2" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default PlanPricingCard;
