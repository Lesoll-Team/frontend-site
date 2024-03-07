import RealtyCard from "@/components/realtyCard/RealtyCard";
import { useSelector } from "react-redux";

const ProjectUnits = ({ projectData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  console.log("woo", projectData);
  return (
    <div className="w-full border container mx-auto space-y-8">
      <h3 className="text-sm sm:text-3xl ">
        {language ? "وحدات المشروع" : "Project Units"}
      </h3>
      <div className="flex gap-5 flex-wrap md:justify-start justify-center">
        {projectData?.getProperties?.map((item) => {
          return <RealtyCard propertyDetails={item} />;
        })}
      </div>
    </div>
  );
};
export default ProjectUnits;
