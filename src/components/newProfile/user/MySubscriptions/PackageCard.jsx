import { formatDate } from "@/utils/FormateData";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { HiDownload } from "react-icons/hi";
import { useSelector } from "react-redux";
import { getInvoice } from "../../apis/profileApis";
import { HiOutlineDotsVertical } from "react-icons/hi";
const PlanCard = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { formattedDate: startDate } = formatDate(data?.startDate);
  const { formattedDate: expireDate } = formatDate(data?.expireDate);
  const [getInvoiceStatus, setGetInvoiceStatus] = useState("idle");
  const [getInvoiceError, setGetInvoiceError] = useState("idle");
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
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
      lang: language,
    });
  };
  useEffect(() => {
    if (getInvoiceStatus === "success") {
      setGetInvoiceStatus("idle");
      handleDownloadClick();
    }
  }, [getInvoiceStatus]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  return (
    <div className="px-3 py-5 md:px-5 md:py10 border-1 rounded overflow-hidden bg-white drop-shadow-sm flex flex-col gap-6 relative">
      {data?.gift && <IsGifted />}
      {!data?.gift && (
        <div
          className={`absolute top-4 ${language ? "left-4" : "right-4"} `}
          ref={menuRef}
        >
          <button onClick={toggleMenu}>
            <HiOutlineDotsVertical className="text-xl" />
          </button>
          {showMenu && (
            <div className="absolute fade-in bg-white min-w-[130px] rounded-lg py-2  drop-shadow left-0 top-5 ">
              <button
                disabled={getInvoiceStatus === "loading"}
                className="w-full flex gap-2 items-center justify-center  disabled:opacity-80 text-center"
                onClick={getPackageInvoice}
              >
                {/* <HiDownload />{" "} */}
                <p className="text-center">
                  {language ? "تحميل الفاتورة" : "Download the invoice "}
                </p>
                {getInvoiceStatus === "loading" && (
                  <div className="w-3 h-3 border-t-2  rounded-full border-lightGreen animate-spinner-ease-spin "></div>
                )}
                {/* <div className="w-10 h-1 bg-black animate-indeterminate-bar rounded-lg"></div> */}
              </button>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col gap-5">
        <h2>{language ? data?.packageName?.ar : data?.packageName?.en}</h2>
        {!data?.gift && (
          <h3 className="text-lightGreen">
            {data.price} {language ? "جنية" : "Egp"}
          </h3>
        )}
      </div>
      <div>
        <div className="py-3  flex items-center gap-3">
          <p className="font-bold md:text-[16px] text-xs">
            {language ? "عدد الإعلانات المتبقية : " : "Remaining ads:  "}
          </p>
          <p className=" md:text-[16px] text-xs">
            {data?.propertyNumber_min || 0} {language ? " من" : "out of "}{" "}
            {data?.propertyNumber} {language ? "إعلان" : "ad"}
          </p>
        </div>

        <div className="py-3  flex items-center gap-3">
          <p className="font-bold md:text-[16px] text-xs">
            {language ? "تاريخ الإشتراك: " : "Subscription date:"}
          </p>
          <p className=" md:text-[16px] text-xs">{startDate}</p>
        </div>
        <div className="py-3  flex items-center gap-3 ">
          <p className="font-bold md:text-[16px] text-xs">
            {language ? "تاريخ الإنتهاء: " : "End date: "}
          </p>
          <p className=" md:text-[16px] text-xs">{expireDate}</p>
        </div>
      </div>
    </div>
  );
};
export default PlanCard;

const IsGifted = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div
      className={`absolute  -top-3 bg-gradient-to-l from-darkGreen to-lightGreen font-bold  ${language ? "-left-11 -rotate-45" : "-right-11 rotate-45"} text-white  px-10 pb-2 pt-8`}
    >
      {language ? "هدية" : "Gift"}
    </div>
  );
};
