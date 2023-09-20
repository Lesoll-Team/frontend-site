import React, { memo } from "react";
import RealtyCard from "../realtyCard/RealtyCard";
// import { ar } from "../../language/ar/common";
// import { en } from "../../language/en/common";
import { useSelector } from "react-redux";
function SimilarListings({ recommendationsProperty }) {

  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className={`${recommendationsProperty.length<=0?"hidden":""} overflow-x-hidden p-2 md:p-10 md:px-14 border-2 mb-5 border-gray-200 rounded-3xl`}>
      {/* <div><h1>Similar Listings</h1></div> */}
      <div className="font-bold mb-6 ml-5">
        {" "}
        <b className="sm:text-3xl text-lg p-3">{language?"قوائم مماثلة":"Similar Listings"}</b>
      </div>
      <div className="lg:flex">
        {recommendationsProperty.map((recommendations) => (
          <div key={recommendations._id} className=" m-5">
            {/* {recommendations} */}
            <RealtyCard propertyDetails={recommendations} />
          </div>
        ))}

      </div>
    </div>
  );
}
export default memo(SimilarListings);
