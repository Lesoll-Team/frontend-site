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
      } space-y-4 mt-16`}
    >
      <h3 className="sm:text-4xl text-lg  font-bold text-lightOrange ">
        {language ? "عقارات مشابهة" : "similar Properties"}
      </h3>
      <div className="overflow-x-hidden p-4 px-0  mb-5  rounded-xl bg border bg-white drop-shadow-lg ">
        <div className="" ref={emblaRef} dir="ltr">
          <div className="flex gap-10 p-3">
            <div className=" flex p-2 px-3 gap-10 ">
              {recommendationsProperty.map((recommendations) => (
                <RealtyCard
                  key={recommendations._id}
                  propertyDetails={recommendations}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(SimilarListings);
