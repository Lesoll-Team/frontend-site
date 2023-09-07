import React from "react";
// import RealtyCard from "../realtyCard/RealtyCard";
import dynamic from "next/dynamic";
const RealtyCard = dynamic(() => import("../realtyCard/RealtyCard"));
import Link from "next/link";
import { useSelector } from "react-redux";

const RecentPropertyBuy = ({ propertiesBuy }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  // console.log(propertiesBuy);
  return (
    <section className=" px-2 my-24 ">
      <h1 className="text-center font-bold text-3xl sm:text-4xl  p-3 text-lightGreen">
        {language ? "أحدث العقارات للبيع" : "Recent Properties For Buy"}
      </h1>
      <div className="container mx-auto items-center py-5  grid gap-x-5 lg:grid-cols-3 md:grid-cols-2 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12 ">
      {propertiesBuy
          ? propertiesBuy.map((property) => (
              <RealtyCard key={property._id} propertyDetails={property} />
            ))
          : "No properties found"}
        {/**{propertiesBuy
          ? propertiesBuy.map((property) => (
              <RealtyCard key={property._id} propertyDetails={property} />
            ))
          : "No properties found"} */}
      </div>
      <div className="flex justify-center mt-5">
        <Link
          className="text-lightGreen font-semibold text-xl border-lightGreen border-2 py-2 px-4 rounded-lg hover:bg-lightGreen hover:text-white duration-300"
          href={"/buy/1"}
        >
          {language ? "مشاهدة المزيد" : "View More"}
        </Link>
      </div>
    </section>
  );
};

export default RecentPropertyBuy;
