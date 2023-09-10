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

// import {ar} from "../../language/ar/common"
// import {en} from "../../language/en/common"
function PropertyDetailsMain({ singleProperty }) {
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

  return (
    <>
      <Head>
        <title>{singleProperty?.title}</title>
        <meta name="description" content={singleProperty?.description} />
        <meta property="og:title" content={singleProperty?.title} />
        <meta property="og:description" content={singleProperty?.description} />
      </Head>
      <div className="container mx-auto">
        <div>
          <PropertyTitle singleTitle={singleProperty} />
        </div>
        <div className="lg:grid grid-cols-3 items-center">
          <div className="col-span-2 ">
            <PropertyImgSlider images={singleProperty} className="col-span-2" />
          </div>
          <div className="col-span-1 ">
            <ConfirmAppointment userAppointment={singleProperty} className="" />
          </div>
        </div>

        <div>
          <div className="mb-10">
            <OverviewDetails singleOverviewDetails={singleProperty} />
          </div>
          <div className="mb-10">
            <DescriptionFeatures singleDescriptionFeatures={singleProperty} />
          </div>
          <div className="mb-10">
            <AddressLocation singleAddressLocation={singleProperty} />
          </div>
        </div>
        <div>
          <SimilarListings recommendationsProperty={recommendations} />
        </div>
      </div>
    </>
  );
}
export default memo(PropertyDetailsMain);
