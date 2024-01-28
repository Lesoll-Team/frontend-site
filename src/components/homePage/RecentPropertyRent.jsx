import React, { memo } from "react";
// import RealtyCardRent from "../realtyCard/RealtyCard";
// import dynamic from "next/dynamic";
// const RealtyCard = dynamic(() => import("../realtyCard/RealtyCard"));
import Link from "next/link";
import { useSelector } from "react-redux";
import { Skeleton } from "@nextui-org/react";
import RealtyCard from "../realtyCard/RealtyCard";
const RecentPropertyRent = ({ propertiesRent }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <section className=" px-2 my-24 ">
      <div className="container mx-auto">
        <h2 className="  text-center font-bold text-3xl sm:text-4xl  p-3 ">
          {language ? "أحدث العقارات للإيجار" : "Recent Properties For Rent"}
        </h2>
      </div>
      <div className="container mx-auto justify-center flex flex-wrap gap-10 md:mt-16 mt-5 ">
        {propertiesRent ? (
          propertiesRent.map((property) => (
            <RealtyCard key={property.slug} propertyDetails={property} />
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
      <div className="flex justify-center mt-7">
        <Link
          title={
            language ? "أحدث العقارات للإيجار" : "Recent Properties For Rent"
          }
          className="text-lightGreen font-semibold text-xl border-lightGreen border-2 py-2 px-4 rounded-lg hover:bg-lightGreen hover:text-white duration-300"
          href={"/rent/1"}
        >
          {language ? "مشاهدة المزيد" : "View More"}
        </Link>
      </div>
    </section>
  );
};

export default memo(RecentPropertyRent);
