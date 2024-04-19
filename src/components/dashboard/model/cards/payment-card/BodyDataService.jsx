import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const BodyDataService = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const servicePrice = useSelector((state) => state.Pricing.priceService);

  return (
    <div dir={language ? "rtl" : "ltr"} className="flex flex-col  gap-y-[3vh]">
      {data?.service?.map((item) => (
        <div key={item._id} className="flex gap-x-1  items-center px-3">
          <IoMdCheckmarkCircleOutline className=" max-w-[40px] min-w-[40px] text-2xl text-[#30D143]" />
          <p className="line-clamp-1 ">
            {language ? item.nameAr : item.nameEn}
          </p>
        </div>
      ))}
      {servicePrice?.map(
        (list) =>
          !data.service.some(
            (item) =>
              item._id === list._id &&
              item._id !== null &&
              item._id !== undefined
          ) && (
            <div key={list._id} className="flex gap-x-1 items-center px-3">
              <IoClose className=" max-w-[40px] min-w-[40px] text-2xl text-[#666666]" />
              <p className="line-clamp-1 ">
                {language ? list.nameAr : list.nameEn}
              </p>
            </div>
          )
      )}
    </div>
  );
};

export default BodyDataService;
