import PropertyDetailsMain from "@/components/propertyDetails/PropertyDetailsMain";
import axios from "axios";
import React from "react";

export default function PropertyDetails({ singleProperty }) {
  return (
    <div>
      <PropertyDetailsMain singleProperty={singleProperty} />
    </div>
  );
}
export async function getServerSideProps(context) {
  console.log(context.params);
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/property/get/property/singlepage/${context.query.id}`
  );
  const data = await res.data.find;
  return {
    props: { singleProperty: data },
    // revalidate:10,
  };
}
