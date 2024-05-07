import { formatDate } from "@/utils/FormateData";
import React, { useEffect, useMemo, useState } from "react";
import { HiDownload } from "react-icons/hi";
import { useSelector } from "react-redux";
import { getInvoice } from "../../apis/profileApis";

const PlanCard = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { formattedDate: startDate } = formatDate(data?.startDate);
  const { formattedDate: expireDate } = formatDate(data?.expireDate);
  const [getInvoiceStatus, setGetInvoiceStatus] = useState("idle");
  const [getInvoiceError, setGetInvoiceError] = useState("idle");
  const [downloadLink, setDownloadLink] = useState(null);
  const packagePer = useMemo(() => {
    if (data.type === "month") {
      return language ? "شهر" : "month";
    } else if (data.type === "year") {
      return language ? "سنة" : "year";
    }
  }, [data, language]);
  const handleDownloadClick = () => {
    if (getInvoiceStatus === "success" && downloadLink) {
      const link = document.createElement("a");
      link.href = downloadLink;
      link.target = "_blank";
      // Set the download filename if necessary
      console.log();
      link.setAttribute("download", "Invoice.pdf"); // You can dynamically set the file name based on the response if needed
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  const getPackageInvoice = () => {
    getInvoice({
      id: data.id,
      setFormStatus: setGetInvoiceStatus,
      setServerError: setGetInvoiceError,
      setDownloadLink,
    });
  };
  useEffect(() => {
    handleDownloadClick();
  }, [getInvoiceStatus]);
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
      <button
        disabled={getInvoiceStatus === "loading"}
        className="w-fit flex gap-2 items-center text-[#0863BD] disabled:opacity-80"
        onClick={getPackageInvoice}
      >
        <HiDownload />{" "}
        <p className="text-[#0863BD]">
          {language ? "تحميل الفاتورة" : "Download the invoice "}
        </p>
        {getInvoiceStatus === "loading" && (
          <div className="w-3 h-3 border-t-2  rounded-full border-lightGreen animate-spinner-ease-spin "></div>
        )}
        {/* <div className="w-10 h-1 bg-black animate-indeterminate-bar rounded-lg"></div> */}
      </button>
    </div>
  );
};
export default PlanCard;
