import RealtyCard from "@/components/realtyCard/RealtyCard";
import { useSelector } from "react-redux";

const ProjectUnits = ({ projectData, title }) => {
  // console.log(projectData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="w-full  md:container mx-auto space-y-5">
      <h2>{language ? `وحدات ${title}` : `${title} Units`}</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5  md:justify-start ">
        {projectData?.getProperties?.map((item) => {
          return <RealtyCard propertyDetails={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};
export default ProjectUnits;
