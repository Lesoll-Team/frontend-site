import React, { memo } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const BodyDataService = ({ data, dash }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const servicePrice = useSelector((state) => state.Pricing.priceService);
  return (
    <div dir={language ? "rtl" : "ltr"} className="flex flex-col   gap-y-[3vh]">
      {dash
        ? data?.newService?.map((item) => (
            <div key={item._id} className="flex gap-x-1  items-center px-3">
              <IoMdCheckmarkCircleOutline className=" max-w-[40px] min-w-[40px] text-2xl text-[#30D143]" />
              <p className="line-clamp-1 lg-text ">
                {language ? item.ar : item.en}
              </p>
            </div>
          ))
        : data?.newService?.map((item, index) => (
            <div
              key={item._id || index}
              className="flex gap-x-1  items-center px-3"
            >
              <IoMdCheckmarkCircleOutline className=" max-w-[40px] min-w-[40px] text-2xl text-[#30D143]" />
              <p className="line-clamp-1 lg-text ">
                {language ? item.ar : item.en}
              </p>
            </div>
          ))}
      {dash &&
        servicePrice?.map(
          (list) =>
            !data.newService.some((item) => item.serviceID === list._id) && (
              <div key={list._id} className="flex gap-x-1 items-center px-3">
                <IoClose className=" max-w-[40px] min-w-[40px] text-2xl text-[#666666]" />
                <p className="line-clamp-1 lg-text ">
                  {language ? list.nameAr : list.nameEn}
                </p>
              </div>
            ),
        )}
    </div>
  );
};

export default memo(BodyDataService);
