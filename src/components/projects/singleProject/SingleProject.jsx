import PriceTitle from "@/components/new-prop-details/PriceTitle";
import PropertyImages from "@/components/new-prop-details/PropertyImages";
import PropertyOwner from "@/components/new-prop-details/PropertyOwner";
import Head from "next/head";
import ProjectTitlePrice from "./ProjectTitlePrice";
import ProjectDescription from "./ProjectDescription";
import PropertyLocation from "@/components/new-prop-details/propertyDetails/sections/PropertyLocation";
import AboutCompany from "./AboutCompany";
import ProjectUnits from "./ProjectUnits";
import { useSelector } from "react-redux";
import ProjectContactForm from "./contactForm/ProjectContactForm";
import Description from "./Description";
import ProjectInfo from "./project-info/ProjectInfo";
import InstallmentPlans from "./installment-plans/InstallmentPlans";

const SingleProject = ({ propertyData, allData, query }) => {
  console.log(propertyData);
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="min-h-[50dvh] mt-10 space-y-6 mb-10">
      <Head>
        <title>
          {language ? propertyData?.titleAr : propertyData?.titleEn}
        </title>
        <meta
          name="description"
          content={
            language
              ? propertyData?.descriptionAr.slice(0, 160)
              : propertyData?.descriptionEn.slice(0, 160)
          }
        />
        <meta
          property="og:title"
          content={propertyData?.titleAr.slice(0, 50)}
        />
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
      <div className="px-4 sm:container mx-auto space-y-[30px] md:space-y-10">
        <PropertyImages
          fav={false}
          propertyData={propertyData}
          query={query}
          slug={query.slug}
        />
        <ProjectTitlePrice projectData={propertyData} />
        {/* <PriceTitle propertData={propertyData} /> */}
        <div className="relative grid  md:grid-cols-3 gap-5 md:gap-2">
          <div className=" md:col-start-3 md:sticky top-24 h-fit flex justify-end ">
            <ProjectContactForm
              className={"w-full   md:max-w-[90%]"}
              projectData={propertyData}
            />
          </div>
          <div
            className={
              "md:col-span-2 col-start-1 row-start-1 md:mt-0 mt-4 flex flex-col gap-5 md:gap-10"
            }
          >
            <ProjectInfo projectData={propertyData} />
            <div className="md:hidden ">
              {propertyData?.installment?.length > 0 && (
                <InstallmentPlans projectData={propertyData} />
              )}
            </div>
            {allData?.getProperties?.length > 0 && (
              <div className="md:hidden">
                <ProjectUnits
                  projectData={allData}
                  title={language ? propertyData.titleAr : propertyData.titleEn}
                />
              </div>
            )}
            <Description
              title={
                language ? (
                  <span>عن {propertyData.titleAr}</span>
                ) : (
                  <span>About {propertyData.titleEn}</span>
                )
              }
              description={
                language
                  ? propertyData.descriptionAr
                  : propertyData.descriptionEn
              }
            />
            {/* <PropertyLocation propertyData={propertyData} /> */}
            <Description
              description={
                language ? propertyData.aboutAr : propertyData.aboutEn
              }
            />
            <div className="md:block hidden">
              {propertyData?.installment?.length > 0 && (
                <InstallmentPlans projectData={propertyData} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <ProjectUnits
          projectData={allData}
          title={language ? propertyData.titleAr : propertyData.titleEn}
        />
      </div>
    </div>
  );
};
export default SingleProject;
