import RealtyCard from "@/components/realtyCard/RealtyCard";
import { useSelector } from "react-redux";

const ProjectUnits = ({ projectData, title }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="w-full  md:container mx-auto space-y-5">
      <h2>{language ? `وحدات ${title}` : `${title} Units`}</h2>
      <div className="grid grid-cols-1 md:container md:mx-auto  mx-[20px]  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10">
        {projectData?.getProperties?.map((item) => {
          return <RealtyCard propertyDetails={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};
export default ProjectUnits;
