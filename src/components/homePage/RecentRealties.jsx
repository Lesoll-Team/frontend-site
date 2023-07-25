import React from "react";
import RealtyCard from "../realtyCard/RealtyCard";
import Link from "next/link";
const RecentRealties = () => {
  return (
    <section className=" px-2 my-24 ">
      <div className="container mx-auto">
        <h1 className="text-left font-bold text-4xl md:text-3xl p-3 text-lightGreen  ">
          Explore Recent Properties
        </h1>
      </div>
      <div className="container mx-auto items-center py-5  grid  lg:grid-cols-3 md:grid-cols-2 gap-x-2 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12  ">
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
      </div>
      <div className="flex justify-center mt-7">
        <Link
          className="text-darkGreen text-xl border-darkGreen border-2 py-2 px-4 rounded-lg hover:bg-darkGreen hover:text-white duration-300"
          href={"/"}
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default RecentRealties;
