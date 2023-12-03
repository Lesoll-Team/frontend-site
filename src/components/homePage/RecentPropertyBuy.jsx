import React, { useMemo, memo } from "react";
import dynamic from "next/dynamic";
const RealtyCard = dynamic(() => import("../realtyCard/RealtyCard"));
import Link from "next/link";
import { useSelector } from "react-redux";
import { Skeleton } from "@nextui-org/react";

import PropertyCard from "../realtyCard/PropertyCard";

const RecentPropertyBuy = ({ propertiesBuy }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return useMemo(
    () => (
      <section className="px-2 my-24">
        <h2 className=" text-center font-bold text-3xl sm:text-4xl p-3 ">
          {language ? "أحدث العقارات للبيع" : "Recent Properties For Buy"}
        </h2>
        <div className="container mx-auto justify-center flex flex-wrap gap-10 md:mt-16 mt-5">
          {propertiesBuy ? (
            propertiesBuy.map((property) => (
              <PropertyCard key={property._id} propertyDetails={property} />
            ))
          ) : (
            <>
              <Skeleton className="rounded-[25px]">
                <div className="w-[310px] h-[420px] "></div>
              </Skeleton>
              <Skeleton className="rounded-[25px]">
                <div className="w-[310px] h-[420px] "></div>
              </Skeleton>
              <Skeleton className="rounded-[25px]">
                <div className="w-[310px] h-[420px] "></div>
              </Skeleton>
              <Skeleton className="rounded-[25px]">
                <div className="w-[310px] h-[420px] "></div>
              </Skeleton>
              <Skeleton className="rounded-[25px]">
                <div className="w-[310px] h-[420px] "></div>
              </Skeleton>
              <Skeleton className="rounded-[25px]">
                <div className="w-[310px] h-[420px] "></div>
              </Skeleton>
            </>
          )}
        </div>
        <div className="flex justify-center mt-5">
          <Link
            title={
              language ? "أحدث العقارات للبيع" : "Recent Properties For Buy"
            }
            className="text-lightGreen font-semibold text-xl border-lightGreen border-2 py-2 px-4 rounded-lg hover:bg-lightGreen hover:text-white duration-300"
            href={"/buy/1"}
          >
            {language ? "مشاهدة المزيد" : "View More"}
          </Link>
        </div>
      </section>
    ),
    [propertiesBuy, language]
  );
};

export default memo(RecentPropertyBuy);
