import { formatDate } from "@/utils/FormateData";
import React, { useMemo } from "react";
import { HiDownload } from "react-icons/hi";
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

  return (
    <div className="px-3 py-5 md:px-5 md:py10 border-1 rounded bg-white drop-shadow-sm flex flex-col gap-8 relative">
      <div className="flex gap-2">
        <h3>{language ? data?.packageName?.ar : data?.packageName?.en}</h3>
        <h3 className="text-lightGreen">
          {data.price} {language ? "جنية" : "Egp"} / {packagePer}
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
