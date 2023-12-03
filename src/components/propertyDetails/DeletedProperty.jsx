import React, { memo } from "react";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";
import { Image } from "@nextui-org/react";
import PropertyCard from "../realtyCard/PropertyCard";
const DeletedProperty = ({ RecommendedOther }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const slug = router.query;

  return (
    <>
      <Head>
        <title>{language ? "عقار محذوف" : "Deleted Property"}</title>
      </Head>
      <div className="sm:container mx-2 sm:mx-auto min-h-[90dvh] py-10">
        <div className="min-h-[20dvh] flex flex-col items-center justify-center gap-2">
          <Image src="/deleted-property.svg" className="md:w-[500px]" />
          <h1 className="font-thin text-center text-gray-500 ">
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
              <PropertyCard
                key={recommendations._id}
                propertyDetails={recommendations}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletedProperty;
