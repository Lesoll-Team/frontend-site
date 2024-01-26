import Link from "next/link";
import React, { memo } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { useSelector } from "react-redux";

function PropertyTitle({ singleTitle }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div>
      <div className="grid pt-5 sm:grid-cols-2 grid-cols-1 ">
        {/**sm:flex  sm:justify-between p-5 */}
        <div className="flex sm:justify-start  justify-center py-5 sm:mx-5 mx-0">
          <span className="text-[#636363] md:text-sm text-xs  flex items-center	">
            <Link
              title={language ? "الرئيسية" : "home"}
              href="/"
              className="text-blue-400 "
            >
              {language ? "الرئيسية" : "home"}
            </Link>
            <MdKeyboardArrowRight />
            <Link
              title={
                singleTitle.offer === "For Sale"
                  ? language
                    ? "للبيع"
                    : "Sale"
                  : language
                  ? "للإيجار"
                  : "Rent"
              }
              href={singleTitle.offer === "For Sale" ? "/buy/1" : "/rent/1"}
              className="text-blue-400"
            >
              {singleTitle.offer === "For Sale"
                ? language
                  ? "للبيع"
                  : "Sale"
                : language
                ? "للإيجار"
                : "Rent"}
            </Link>
            <MdKeyboardArrowRight />
            {singleTitle?.address.governrate}
          </span>
        </div>
      </div>

      <div className="">
        <div className="sm:flex text-2xl justify-between py-5 sm:text-4xl items-center font-bold gap-4 space-y-4 md:space-y-0">
          <div className="flex flex-col sm:justify-start justify-center sm:w-6/12 w-full space-y-2 ">
            <h1 className="sm:text-start text-center text-xl lg:text-4xl text-lightOrange  leading-tight     ">
              {singleTitle?.title}
            </h1>
            {singleTitle?.supTitleOfProperty && (
              <h2 className=" md:text-start text-center font-normal text-sm text-darkGray">
                {singleTitle?.supTitleOfProperty}
              </h2>
            )}
          </div>
          <div className="flex justify-center">
            {!singleTitle?.isSold ? (
              <div className="flex flex-col md:flex-row md:items-end items-center   gap-1 text-darkGreen">
                {singleTitle?.offer !== "For Investment" ? (
                  <p>
                    {language
                      ? parseInt(singleTitle?.price).toLocaleString("ar-EG")
                      : parseInt(singleTitle?.price).toLocaleString()}{" "}
                    <span className="">{language ? "جنية" : "EGP"}</span>
                  </p>
                ) : (
                  <p>{language ? "للإستثمار" : "For Investment"}</p>
                )}
                {!singleTitle?.saleOption.includes("Installment") && (
                  <p className="text-sm text-lightOrange">
                    {singleTitle?.negotiable &&
                      (language ? "قابل للتفاوض" : "Negotiable")}
                  </p>
                )}
              </div>
            ) : (
              <div className="">
                <span>السعر قبل البيع </span>

                <s>
                  {language
                    ? parseInt(singleTitle?.price).toLocaleString("ar-EG")
                    : parseInt(singleTitle?.price).toLocaleString()}{" "}
                  <span className="">{language ? "جنية" : "EGP"}</span>
                </s>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(PropertyTitle);
