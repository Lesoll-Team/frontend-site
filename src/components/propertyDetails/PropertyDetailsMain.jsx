import React, { memo, useEffect, useState } from "react";
import ConfirmAppointment from "./ConfirmAppointment";
import PropertyTitle from "./PropertyTitle";
import PropertyImgSlider from "./PropertySlider";
import OverviewDetails from "./OverviewDetails";
import AddressLocation from "./AddressLocation";
import SimilarListings from "./SimilarListings";
import DescriptionFeatures from "./DescriptionFeatures";
import { getRecommendRealty } from "@/utils/propertyAPI";
import Head from "next/head";
import { useSelector } from "react-redux";
import PropDetailsSkeleton from "./PropDetailsSkeleton";
import { useRouter } from "next/router";
import PropertyData from "./PropertyData";

// import {ar} from "../../language/ar/common"
// import {en} from "../../language/en/common"
function PropertyDetailsMain({ singleProperty, deleted }) {
  // console.log("main",singleProperty._id);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const data = await getRecommendRealty(singleProperty._id);
        setRecommendations(data);
        // console.log(recommendations);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    }
    fetchRecommendations();
  }, [singleProperty]);
  // console.log(singleProperty);
  const router = useRouter();
  const slug = router.query.id;

  return (
    <>
      <Head>
        <title>{singleProperty?.title}</title>
        <meta
          name="description"
          content={singleProperty?.description.slice(0, 160)}
        />
        <meta
          property="og:title"
          content={singleProperty?.title.slice(0, 50)}
        />
        <meta property="og:description" content={singleProperty?.description} />
        <meta
          property="og:image"
          content={`${
            singleProperty.thumbnail || singleProperty?.album[0]?.image
          }`}
        />
        <link
          rel="canonical"
          href={`https://lesoll.com/property-details/${slug}`}
        />
      </Head>

      <div className="sm:container px-2 sm:px-0 mx-auto mb-16  ">
        {singleProperty ? (
          <>
            <div className="mb-5">
              <PropertyTitle singleTitle={singleProperty} />
            </div>

            <div className="lg:grid grid-cols-7 gap-3 items-start relative space-y-10 lg:space-y-0  mb">
              <div className="col-span-5  space-y-4">
                <PropertyImgSlider images={singleProperty} />
                <hr />
              </div>
              <div className="col-span-2 relative h-full row-span-2 ">
                <AddressLocation singleAddressLocation={singleProperty} />
                <ConfirmAppointment userAppointment={singleProperty} />
              </div>

              <div className="col-span-5 space-y-8">
                <PropertyData propertyData={singleProperty} />
                {singleProperty?.saleOption.includes("Installment") && (
                  <OverviewDetails singleOverviewDetails={singleProperty} />
                )}
                <DescriptionFeatures
                  singleDescriptionFeatures={singleProperty}
                />
                <AddressLocation singleAddressLocation={singleProperty} />
                <div className="mt-4">
                  <SimilarListings recommendationsProperty={recommendations} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <PropDetailsSkeleton />
        )}
      </div>
    </>
  );
}
export default memo(PropertyDetailsMain);
