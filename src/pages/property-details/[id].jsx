import ContactLinksMobile from "@/components/new-prop-details/ContactLinksMobile";
import DeletedProperty from "@/components/new-prop-details/DeletedProperty";
import NewPropDetails from "@/components/new-prop-details/NewPropDetails";
import axios from "axios";
import React from "react";

export default function PropertyDetails({
  query,
  singleProperty,
  slug,
  RecommendedOther,
}) {
  return (
    <>
      {RecommendedOther ? (
        <DeletedProperty RecommendedOther={RecommendedOther} />
      ) : (
        <main className="  min-h-[80dvh] relative">
          <section className="px-5 md:px-0 md:container mx-auto">
            <NewPropDetails
              propertyData={singleProperty}
              slug={slug}
              query={query}
            />
          </section>

          <ContactLinksMobile propertyData={singleProperty} />
        </main>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/property/get/property/singlepage/${context.query.id}`
    );
    const all = res.data;
    const data = res.data.find;
    return {
      props: {
        singleProperty: data,
        all,
        slug: context.query.id,
        query: context.query,
      },
      // revalidate: 10,
    };
  } catch (error) {
    // const router = useRouter();
    // Check if the error is due to a 400 status code
    if (error.response && error.response.status === 400) {
      // Handle the 400 error by extracting RecommendedOther from the error response
      const recommendedOther = error.response.data.RecommendedOther;

      // Return the recommendedOther as props
      return {
        props: { RecommendedOther: recommendedOther },
        // revalidate: 10,
      };
    } else if (error.response && error.response.status === 500) {
      context.res.writeHead(410);
      context.res.end();
    }
    // If the error is not a 400 status code, re-throw the error
    throw error;
  }
}
