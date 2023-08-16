import React, { memo } from "react";
import RealtyCard from "../realtyCard/RealtyCard";

function SimilarListings() {
  return (
    <div className="p-10 px-14 border-2 border-gray-200 rounded-3xl">
      {/* <div><h1>Similar Listings</h1></div> */}
      <div className="font-bold mb-6 ml-5">
        {" "}
        <h3>Similar Listings</h3>
      </div>
      <div className="lg:flex">
        <div className=" m-5">
          {" "}
          <RealtyCard />
        </div>
        <div className=" m-5">
          {" "}
          <RealtyCard />
        </div>
        <div className=" m-5">
          {" "}
          <RealtyCard />
        </div>
        <div className=" m-5">
          {" "}
          <RealtyCard />
        </div>
      </div>
    </div>
  );
}
export default memo(SimilarListings);
