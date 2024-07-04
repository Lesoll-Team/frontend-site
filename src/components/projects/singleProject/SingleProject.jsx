import Head from "next/head";
import ProjectTitlePrice from "./ProjectTitlePrice";
import ProjectUnits from "./ProjectUnits";
import { useSelector } from "react-redux";
import ProjectContactForm from "./contactForm/ProjectContactForm";
import Description from "./Description";
import ProjectInfo from "./project-info/ProjectInfo";
import InstallmentPlans from "./installment-plans/InstallmentPlans";
import ProjectImages from "./ProjectImages";
import RecommendedProjects from "./RecommendedProjects";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const SingleProject = ({ propertyData, allData, query }) => {
  const language = getLangBoolean();

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
      <div className="px-4 sm:container mx-auto space-y-px] md:space-y-10 ">
        <ProjectImages
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
              "md:col-span-2 col-start-1 row-start-1 md:mt-0 mt-4 flex flex-col gap-8 md:gap-10"
            }
          >
            <ProjectInfo projectData={propertyData} />
            {propertyData?.installment?.length > 0 && (
              <div className="md:hidden ">
                <InstallmentPlans projectData={propertyData} />
              </div>
            )}
            {allData?.getProperties?.length > 0 && (
              <div className="md:hidden">
                <ProjectUnits
                  projectData={allData}
                  title={language ? propertyData.titleAr : propertyData.titleEn}
                />
              </div>
            )}
            <div className="block md:hidden">
              <RecommendedProjects projectTitle={propertyData.titleAr} />
            </div>
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
            {propertyData?.installment?.length > 0 && (
              <div className="md:block hidden">
                <InstallmentPlans projectData={propertyData} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" md:block hidden ">
        {allData?.getProperties?.length > 0 && (
          <ProjectUnits
            projectData={allData}
            title={language ? propertyData.titleAr : propertyData.titleEn}
          />
        )}
      </div>
      <div className="hidden md:block">
        <RecommendedProjects projectTitle={propertyData.titleAr} />
      </div>
    </div>
  );
};
export default SingleProject;
