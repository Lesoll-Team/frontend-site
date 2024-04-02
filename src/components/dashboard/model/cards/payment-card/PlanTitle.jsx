import React from "react";
import { useSelector } from "react-redux";

const PlanTitle = ({ stylesCss, data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div
      dir={language ? "rtl" : "ltr"}
      className=" flex gap-y-[2.111960170697013vh]  flex-col w-full  p-3"
    >
      <h2 className={`text-[#666666] font-bold ${stylesCss?.titleCss}`}>
        {data?.PaymentAr && data?.PaymentEn && language
          ? data?.PaymentAr
          : data?.PaymentEn}
      </h2>
      <div className="flex flex-wrap gap-x-2 items-end ">
        <div className="font-semibold text-lightGreen items-center flex gap-x-1 space-x-1">
          <h2> {parseInt(data?.price).toLocaleString()} </h2>
          <h2> {language ? " جنية " : " EGP "} </h2>
        </div>
        {data?.offer && (
          <div className=" items-center space-x-1 overflow-hidden flex gap-x-1 text-[#CCCCCC]">
            <s> {parseInt(data?.offerPrice).toLocaleString()} </s>
            <span> {language ? " جنية " : " EGP "} </span>
          </div>
        )}
      </div>
      <p
        // dir={language ? "rtl" : "ltr"}
        className={`text-sm font-medium line-clamp-2  text-[#CCCCCC] lg-text`}
      >
        {language ? data?.descriptionAr : data?.descriptionEn}
      </p>
    </div>
  );
};

export default PlanTitle;
/**
 *        {data?.offer ? (
          <s className="text-red-500  flex-none font-semibold text-lg">
            {language ? "جنية" : "EGP"} {data?.offerPrice}
          </s>
        ) : null}
 */
/* <span className="font-semibold flex-none text-sm ">
          {language ? dateTranslation(data?.expireDate) : data?.expireDate}
        </span> */
// const dateTranslation = (date) => {
//   if (language) {
//     switch (date) {
//       case "one day":
//         return "يوم واحد";
//       case "week":
//         return "اسبوعي";
//       case "month":
//         return "شهري";
//       case "yearly":
//         return "سنوي";
//       default:
//         return null;
//     }
//   }
// };
