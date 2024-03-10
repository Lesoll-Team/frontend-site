import PriceTitle from "@/components/new-prop-details/PriceTitle";
import PropertyImages from "@/components/new-prop-details/PropertyImages";
import PropertyOwner from "@/components/new-prop-details/PropertyOwner";
import Head from "next/head";
import ProjectTitlePrice from "./ProjectTitlePrice";
import ProjectDescription from "./ProjectDescription";
import PropertyLocation from "@/components/new-prop-details/propertyDetails/sections/PropertyLocation";
import AboutCompany from "./AboutCompany";
import ProjectUnits from "./ProjectUnits";

const SingleProject = ({ propertyData, allData, query }) => {
  return (
    <div className="min-h-[50dvh] mt-10 space-y-6 mb-10">
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
      <div className="container mx-auto space-y-[30px] md:space-y-10">
        <PropertyImages
          fav={false}
          propertyData={propertyData}
          query={query}
          slug={query.slug}
        />
        <ProjectTitlePrice projectData={propertyData} />

        {/* <PriceTitle propertData={propertyData} /> */}
        <div className="relative md:grid  grid-cols-3 gap-2">
          <div className=" col-start-3 md:sticky top-24 h-fit flex justify-end py-2">
            <PropertyOwner
              className={"w-full -mt-2 md:-mt-0 md:max-w-[382px]"}
              propertyData={{ user: propertyData.owner }}
            />
          </div>
          <div
            className={
              "col-span-2 col-start-1 row-start-1 md:mt-0 mt-4 flex flex-col gap-5 md:gap-10"
            }
          >
            <ProjectDescription projectData={propertyData} />
            <PropertyLocation propertyData={propertyData} />
            <AboutCompany projectData={propertyData} />
          </div>
        </div>
      </div>
      <ProjectUnits projectData={allData} />
    </div>
  );
};
export default SingleProject;
