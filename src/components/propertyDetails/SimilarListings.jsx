import React, { memo } from "react";
import RealtyCard from "../realtyCard/RealtyCard";
import useEmblaCarousel from "embla-carousel-react";
// import { ar } from "../../language/ar/common";
// import { en } from "../../language/en/common";
import { useSelector } from "react-redux";

function SimilarListings({ recommendationsProperty }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [emblaThumbsRef] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    align: "start",
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
      <div className="overflow-x-hidden p-4  mb-5  rounded-xl bg border bg-white drop-shadow-lg ">
        <div dir="ltr" className="e" ref={emblaThumbsRef}>
          <div className="flex gap-5 p-2">
            {recommendationsProperty.map((recommendations) => (
              <div
                key={recommendations._id}
                dir={language ? "rtl" : "ltr"}
                className=""
              >
                <RealtyCard propertyDetails={recommendations} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(SimilarListings);
