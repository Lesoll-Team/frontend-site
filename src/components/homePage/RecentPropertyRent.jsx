import React from "react";
import RealtyCardRent from "../realtyCard/RealtyCardRent";
import Link from "next/link";
const RecentPropertyRent = ({properties}) => {
  // console.log(property);
  return (
    <section className=" px-2 my-24 ">
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-3xl sm:text-4xl  p-3 text-lightGreen">
          Recent Properties For Rent
        </h1>
      </div>
      <div className="container mx-auto items-center py-5  grid  lg:grid-cols-3 md:grid-cols-2 gap-x-2 justify-center justify-items-center gap-y-12 md:gap-y-16 mt-5 md:mt-12  ">
       
       {properties.map((property)=>
       <Link key={property._id} href={`/propertyDetails/${property._id}`}>
        <RealtyCardRent key={property._id} propertyDetails={property}/>
        </Link>
       )} 
      </div>
      <div className="flex justify-center mt-7">
        <Link
          className="text-lightGreen text-xl border-lightGreen border-2 py-2 px-4 rounded-lg hover:bg-lightGreen hover:text-white duration-300"
          href={"/rent/2"}>
          View More
        </Link>
      </div>
    </section>
  );
};

export default RecentPropertyRent;
