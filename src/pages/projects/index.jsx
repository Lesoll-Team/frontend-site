import SpecialCards from "@/components/homePage/SpecialCards";
import HeadPage from "@/components/projects/all-projects/HeadPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const ProjectsPage = ({ specialCardData }) => {
  return (
    <div className="min-h-[90vh] md:container md:mx-auto mx-[20px] md:py-20 py-6">
      <HeadPage />
      <SpecialCards specialCardData={specialCardData} />
    </div>
  );
};
export default ProjectsPage;
export async function getServerSideProps({ locale }) {
  const specialData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/property/get-home-projects?limit=3&page=1`,
  );

  const specialCardData = await specialData.json();

  return {
    props: {
      specialCardData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
