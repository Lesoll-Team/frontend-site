import { formatDate } from "@/utils/FormateData";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { HiDownload, HiOutlineDotsVertical } from "react-icons/hi";
import { useSelector } from "react-redux";

const PlanCard = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { formattedDate: startDate } = formatDate(data?.startDate);
  const { formattedDate: expireDate } = formatDate(data?.expireDate);
  const packagePer = useMemo(() => {
    if (data.type === "month") {
      return language ? "شهر" : "month";
    } else if (data.type === "year") {
      return language ? "سنة" : "year";
    }
  }, [data, language]);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setMenuVisible(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="px-3 py-5 md:px-5 md:py10 border-2 rounded bg-white drop-shadow-md flex flex-col gap-8 relative">
      {/* <div
        ref={menuRef}
        className={`absolute w-fit relat ${language ? "left-3" : " right-3"}`}
      >
        <button onClick={() => setMenuVisible(!isMenuVisible)}>
          <HiOutlineDotsVertical />
        </button>
        {isMenuVisible && (
          <div
            className={` absolute bg-white  drop-shadow p-1 ${language ? "left-0" : " right-0"} rounded`}
          >
            <p  className="text-center px-7  w-full py-2 whitespace-nowrap">
              {language ? "تغير الباقة" : "Change package"}
            </p>
            <hr />
            <p  className="text-center px-7  w-full py-2 text-red-500 whitespace-nowrap">
              {language ? " إلغاء الإشتراك" : "unsubscrip"}
            </p>
          </div>
        )}
      </div> */}

      <div className="flex gap-2">
        <h3>{language ? data?.packageName?.ar : data?.packageName?.en}</h3>
        <h3 className="text-lightGreen">
          {data.price} جنية \ {packagePer}
        </h3>
      </div>
      <div>
        <div>
          <div className="py-3 px-4 flex justify-between bg-gray-200">
            <p className="font-bold md:text-[16px] text-xs">
              {language ? "عدد الإعلانات المتبقية للتثبيت" : "Remaining ads "}
            </p>
            <p className=" md:text-[16px] text-xs">
              {data?.numberOfPin} {language ? "إعلان" : "ad"}
            </p>
          </div>
          <div className="py-3 px-4 flex justify-between items-center ">
            <p className="font-bold  max-w-[80%]  md:text-[16px] text-xs">
              {language
                ? "عدد الإعلانات المتبقية لإعادة النشر"
                : "Remaining ads "}
            </p>
            <p className=" md:text-[16px] text-xs">
              {data?.numberOfRepost} {language ? "إعلان" : "ad"}
            </p>
          </div>
          <div className="py-3 px-4 flex justify-between bg-gray-200">
            <p className="font-bold md:text-[16px] text-xs">
              {language ? "تاريخ الإشتراك" : "Subscription date"}
            </p>
            <p className=" md:text-[16px] text-xs">{startDate}</p>
          </div>
          <div className="py-3 px-4 flex justify-between ">
            <p className="font-bold md:text-[16px] text-xs">
              {language ? "تاريخ الإنتهاء" : "End date"}
            </p>
            <p className=" md:text-[16px] text-xs">{expireDate}</p>
          </div>
        </div>
      </div>
      <button className="w-fit flex gap-2 items-center text-[#0863BD]">
        <HiDownload />{" "}
        <p className="text-[#0863BD]">
          {language ? "تحميل الفاتورة" : "Download the invoice "}
        </p>
      </button>
    </div>
  );
};
export default PlanCard;
