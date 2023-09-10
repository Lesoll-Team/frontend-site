import React, { memo } from "react";
import RealtyCard from "../realtyCard/RealtyCard";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
function SimilarListings({ recommendationsProperty }) {
  return (
    <div className=" overflow-x-hidden p-2 md:p-10 md:px-14 border-2 mb-5 border-gray-200 rounded-3xl">
      {/* <div><h1>Similar Listings</h1></div> */}
      <div className="font-bold mb-6 ml-5">
        {" "}
        <b className="sm:text-3xl text-lg p-3"> Similar Listings</b>
      </div>
      <div className="lg:flex">
        {recommendationsProperty.map((recommendations) => (
          <div key={recommendations._id} className=" m-5">
            {/* {recommendations} */}
            <RealtyCard propertyDetails={recommendations} />
          </div>
        ))}

        {/* <div className=" m-5">
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
        </div> */}
      </div>
    </div>
  );
}
export default memo(SimilarListings);
