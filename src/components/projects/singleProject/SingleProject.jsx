import PropertyImages from "@/components/new-prop-details/PropertyImages";
import PropertyOwner from "@/components/new-prop-details/PropertyOwner";
import Head from "next/head";

const SingleProject = ({ propertyData }) => {
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
        {/* <link
          rel="canonical"
          href={`https://lesoll.com/property-details/${slug}`}
        /> */}
      </Head>
      <PropertyImages propertyData={propertyData} />
      {/* <PriceTitle propertData={propertyData} /> */}
      <div className="relative md:grid  grid-cols-3 gap-2">
        <div className=" col-start-3 md:sticky top-24 h-fit flex justify-end py-2">
          <PropertyOwner
            className={"w-full -mt-2 md:-mt-0 md:max-w-[382px]"}
            propertyData={{ user: propertyData.owner }}
          />
        </div>
      </div>
    </div>
  );
};
export default SingleProject;
