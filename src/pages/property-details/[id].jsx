import DeletedProperty from "@/components/propertyDetails/DeletedProperty";
import PropertyDetailsMain from "@/components/propertyDetails/PropertyDetailsMain";
import axios from "axios";
import React from "react";

export default function PropertyDetails({ singleProperty, RecommendedOther }) {
  return (
    <>
      {RecommendedOther ? (
        <DeletedProperty RecommendedOther={RecommendedOther} />
      ) : (
        <PropertyDetailsMain singleProperty={singleProperty} />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/property/get/property/singlepage/${context.query.id}`
    );

    const data = res.data.find;
    return {
      props: { singleProperty: data },
      // revalidate: 10,
    };
  } catch (error) {
    // Check if the error is due to a 400 status code
    if (error.response && error.response.status === 400) {
      // Handle the 400 error by extracting RecommendedOther from the error response
      const recommendedOther = error.response.data.RecommendedOther;

      // Return the recommendedOther as props
      return {
        props: { RecommendedOther: recommendedOther },
        // revalidate: 10,
      };
    }

    // If the error is not a 400 status code, re-throw the error
    throw error;
  }
}
