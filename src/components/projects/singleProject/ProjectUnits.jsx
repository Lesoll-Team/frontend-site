import RealtyCard from "@/components/realtyCard/RealtyCard";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";

const ProjectUnits = ({ projectData, title }) => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  return (
    <div className="w-full  md:container mx-auto space-y-5">
      <h2>{language ? `${t("Units")} ${title}` : `${title} ${t("Units")}`}</h2>
      <div className="grid grid-cols-1 md:container md:mx-auto  mx-[20px]  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10">
        {projectData?.getProperties?.map((item) => {
          return <RealtyCard propertyDetails={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};
export default ProjectUnits;
