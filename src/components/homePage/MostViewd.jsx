import React from "react";
import RealtyCard from "../realtyCard/RealtyCard";
import Link from "next/link";

const MostViewd = () => {
  return (
    <section className="p7-7 px-2 mt-24 mb-24">
      <h1 className="text-center font-bold text-4xl md:text-5xl  p-3 text-lightGreen">
        Most Viewd Realties
      </h1>
      <div className="container mx-auto items-center py-5  grid  lg:grid-cols-3 md:grid-col-2 justify-center justify-items-center gap-y-10 mt-5 md:mt-12  ">
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
        <RealtyCard />
      </div>
      <div className="flex justify-center mt-5">
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

export default MostViewd;
