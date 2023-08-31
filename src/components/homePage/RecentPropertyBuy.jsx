import React from "react";
import RealtyCardBuy from "../realtyCard/RealtyCardBuy";
import Link from "next/link";

const RecentPropertyBuy = ({propertiesBuy}) => {
  return (
    <section className=" px-2 my-24 ">
        <h1 className="text-center font-bold text-3xl sm:text-4xl  p-3 text-lightGreen">
          Recent Properties For Buy
        </h1>
      <div className="container mx-auto items-center py-5  grid  lg:grid-cols-3 md:grid-col-2 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12  ">
        {propertiesBuy.map((property)=>
        <Link key={property._id} href={`/propertyDetails/${property._id}`}>
        <RealtyCardBuy  propertyDetails={property}/>
        </Link>
        )}
      </div>
      <div className="flex justify-center mt-5">
        <Link
          className="text-lightGreen text-xl border-lightGreen border-2 py-2 px-4 rounded-lg hover:bg-lightGreen hover:text-white duration-300"
          href={"/buy/1"}
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default RecentPropertyBuy;
