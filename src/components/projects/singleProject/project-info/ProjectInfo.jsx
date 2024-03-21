import { useSelector } from "react-redux";
import InfoCard from "./InfoCard";
import { useRouter } from "next/router";

const ProjectInfo = ({ projectData }) => {
  const router = useRouter();
  const slug = router.query.slug;
  // console.log(routerSlug);
  const openDirectionsInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${projectData?.address.latitude},${projectData?.address.longitude}`;
    window.open(url, "_blank");
  };
  const openLightbox = (index) => {
    router.push(`${slug}?images=true`);
    //  setLightboxIndex(index);
  };
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-[16px]">
      <h2>{language ? "المواصفات" : "Properties"}</h2>
      <div className="flex items-center  gap-4 md:gap-8">
        <InfoCard
          onClick={openLightbox}
          src={"/projects-icons/images.svg"}
          title={language ? "الصور" : "Images"}
          alt={"Images Icon"}
        />
        <InfoCard
          onClick={openDirectionsInGoogleMaps}
          src={"/projects-icons/map.svg"}
          title={language ? " على الخريطة" : "Show on map"}
          alt={"Map Icon"}
        />
      </div>
    </div>
  );
};
export default ProjectInfo;
