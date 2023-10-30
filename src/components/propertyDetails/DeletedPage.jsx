import React, { memo } from "react";
import RealtyCard from "../realtyCard/RealtyCard";

// import { ar } from "../../language/ar/common";
// import { en } from "../../language/en/common";
import { useSelector } from "react-redux";
import Head from "next/head";
const DeletedPage = ({ RecommendedOther }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
        <title>{language ? "عقار محذوف" : "Deleted Property"}</title>
      </Head>
      <div className="sm:container mx-2 sm:mx-auto min-h-[90dvh] py-10">
        <div className="min-h-[20dvh] flex flex-col items-center justify-center">
          <h1 className="font-thin text-center   ">
            {language ? "تم حذف هذا العقار" : "This property has been deleted"}
          </h1>
        </div>
        <div
          className={` text-center ${
            RecommendedOther.length <= 0 ? "hidden" : ""
          } space-y-4 mt-16`}
        >
          <h3 className="sm:text-4xl text-2xl  font-bold text-lightOrange ">
            {language ? " تصفح عقارات مشابهة" : "similar Properties"}
          </h3>
          <div className=" p-4  mb-5 gap-4 rounded-xl flex-col justify-center items-center md:flex-row flex flex-wrap md:gap-10 ">
            {RecommendedOther.map((recommendations) => (
              <RealtyCard propertyDetails={recommendations} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletedPage;
