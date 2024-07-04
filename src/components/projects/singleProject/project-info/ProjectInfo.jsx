import InfoCard from "./InfoCard";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const ProjectInfo = ({ projectData }) => {
  const router = useRouter();
  const slug = router.query.slug;
  const openDirectionsInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${projectData?.address.latitude},${projectData?.address.longitude}`;
    window.open(url, "_blank");
  };
  const openLightbox = (index) => {
    router.push(`${slug}?images=true`);
    //  setLightboxIndex(index);
  };
  const { t } = useTranslation("common");

  return (
    <div className="space-y-[16px]">
      <h2 className="hidden md:block">{t("Project_Properties")}</h2>
      <div className="flex items-center  gap-4 md:gap-8">
        <InfoCard
          onClick={openLightbox}
          src={"/projects-icons/images.svg"}
          title={t("Images")}
          alt={"Images Icon"}
        />
        <InfoCard
          onClick={openDirectionsInGoogleMaps}
          src={"/projects-icons/map.svg"}
          title={t("Show_On_Map")}
          alt={"Map Icon"}
        />
      </div>
    </div>
  );
};
export default ProjectInfo;
