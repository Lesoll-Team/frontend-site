import React, { memo } from "react";
import RealtyCard from "../realtyCard/RealtyCard";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
// import { ar } from "../../language/ar/common";
// import { en } from "../../language/en/common";
import { useSelector } from "react-redux";
function SimilarListings({ recommendationsProperty }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 2,
    align: "start",
    loop: true,
  });
  return (
    <div
      className={`${
        recommendationsProperty.length <= 0 ? "hidden" : ""
      } overflow-x-hidden p-4 px-0  mb-5  rounded-xl bg-gray-100 shadow-insideShadow`}
    >
      {/* <div><h1>Similar Listings</h1></div> */}
      {/* <div className="font-bold mb-6 ml-5">
        {" "}
        <b className="sm:text-3xl text-lg p-3">
          {language ? "قوائم مماثلة" : "Similar Listings"}
        </b>
      </div> */}
      {/* <div className="lg:flex overflow-x-auto">
        {recommendationsProperty.map((recommendations) => (
          <div key={recommendations._id} className=" m-5">
        
            <RealtyCard propertyDetails={recommendations} />
          </div>
        ))}
      </div> */}
      <div className="" ref={emblaRef} dir="ltr">
        <div className="flex gap-10">
          {recommendationsProperty.map((recommendations) => (
            <div key={recommendations._id} className=" flex p-2 px-3">
              <RealtyCard propertyDetails={recommendations} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default memo(SimilarListings);
