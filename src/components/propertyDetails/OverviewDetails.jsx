import React, { memo } from "react";
import { MdOutlineBathtub } from "react-icons/md";
import { RiHotelBedFill, RiPencilRuler2Line } from "react-icons/ri";
import { MdCheckCircleOutline } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { BsCalendar3 } from "react-icons/bs";
import { BsSlashCircle } from "react-icons/bs";

import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import { useSelector } from "react-redux";
import { FaLevelUpAlt } from "react-icons/fa";
function formatDate(dateString) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(dateString).toLocaleString("en-US", options);
}
function OverviewDetails({ singleOverviewDetails }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  // console.log(singleOverviewDetails);
  const formattedDate = formatDate(singleOverviewDetails?.createdAt);
  return (
    <div className="   rounded-lg">
      <div className="">
        <p className="sm:text-4xl text-lg font-bold text-lightOrange">
          {language ? "نظام التقسيط" : "Installment System"}
        </p>
        <div className="flex md:justify-normal justify-center items-center "></div>
        <div className="mt-5">
          <div className="md:flex  w-full shadow-md border px-5 py-10 md:p-12  bg-white rounded-xl md:min-h-[200px] min-h-[auto] items-center grid md:grid-cols-4 justify-center grid-cols-2 md:justify-between gap-5">
            <div className="text-center flex justify-center items-center gap-2 flex-col">
              <h3 className="font-bold text-darkGreen text-2xl">
                {language ? "الدفعة الأولى" : "Down Payment"}
              </h3>
              <p className="font-semibold text-xl">
                {" "}
                {language
                  ? parseInt(singleOverviewDetails?.downPayment).toLocaleString(
                      "ar-Eg"
                    )
                  : parseInt(
                      singleOverviewDetails?.downPayment
                    ).toLocaleString()}{" "}
                {language ? "جنية" : "Egp"}
              </p>
            </div>
            <div className="text-center flex justify-center items-center gap-2 flex-col">
              <h3 className="font-bold text-darkGreen text-2xl">
                {language ? "نوع التقسيط" : "Installment Type"}
              </h3>
              <p className="font-semibold text-xl">
                {singleOverviewDetails?.installmentOption.type === "Monthly"
                  ? language
                    ? "شهرى"
                    : "Monthly"
                  : singleOverviewDetails?.installmentOption.type === "Yearly"
                  ? language
                    ? "سنوى"
                    : "yearly"
                  : "سنوى"}
              </p>
            </div>
            <div className="text-center flex justify-center items-center gap-2 flex-col">
              <h3 className="font-bold text-darkGreen text-2xl">
                {language ? "فترة التقسيط" : "Installment Period"}
              </h3>
              <p className="font-semibold text-xl">
                {singleOverviewDetails?.installmentOption.period}{" "}
                {singleOverviewDetails?.installmentOption.type === "Monthly"
                  ? language
                    ? "شهر"
                    : "Month"
                  : singleOverviewDetails?.installmentOption.type === "Yearly"
                  ? language
                    ? "سنة"
                    : "year"
                  : "سنة"}
              </p>
            </div>
            <div className="text-center flex justify-center items-center gap-2 flex-col">
              <h3 className="font-bold text-darkGreen text-2xl">
                {language ? "مبلغ التقسيط" : "Installment Amount"}
              </h3>
              <p className="font-semibold text-xl">
                {language
                  ? parseInt(
                      singleOverviewDetails?.installmentOption.amount
                    ).toLocaleString("ar-Eg")
                  : parseInt(
                      singleOverviewDetails?.installmentOption.amount
                    ).toLocaleString()}{" "}
                {language ? "جنية" : "Egp"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(OverviewDetails);
