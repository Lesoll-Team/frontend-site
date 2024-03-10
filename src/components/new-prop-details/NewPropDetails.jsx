import PropertyImages from "./PropertyImages";
import PriceTitle from "./PriceTitle";
import PropertyOwner from "./PropertyOwner";
import PropertyDetails from "./propertyDetails/PropertyDetails";
import RecommendedProperties from "./RecommendedProperties";
import Head from "next/head";

const NewPropDetails = ({ propertyData, slug, query }) => {
  return (
    <div className="min-h-[50dvh] mt-10 space-y-[30px] md:space-y-10">
      <Head>
        <title>{propertyData?.title}</title>
        <meta
          name="description"
          content={propertyData?.description.slice(0, 160)}
        />
        <meta property="og:title" content={propertyData?.title.slice(0, 50)} />
        <meta property="og:description" content={propertyData?.description} />
        <meta
          property="og:image"
          content={`${propertyData.thumbnail || propertyData?.album[0]?.image}`}
        />
        <link
          rel="canonical"
          href={`https://lesoll.com/property-details/${slug}`}
        />
      </Head>
      <PropertyImages propertyData={propertyData} query={query} slug={slug} />
      <PriceTitle propertData={propertyData} />
      <div className="relative md:grid  grid-cols-3 gap-2">
        <div className=" col-start-3 md:sticky top-24 h-fit flex justify-end py-2">
          <PropertyOwner
            className={"w-full -mt-2 md:-mt-0 md:max-w-[382px]"}
            propertyData={propertyData}
          />
        </div>
        <PropertyDetails
          className={"col-span-2 col-start-1 row-start-1 md:mt-0 mt-4"}
          propertyData={propertyData}
        />
        {/* <div className="bg-red-400  ">
          da
        </div> */}
      </div>
      <RecommendedProperties propertyData={propertyData} slug={slug} />
    </div>
  );
};
export default NewPropDetails;
