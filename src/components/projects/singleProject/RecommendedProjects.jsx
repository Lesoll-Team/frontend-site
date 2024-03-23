import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRecommendedProjects } from "./api/projectPageApis";
import SpecialCard from "@/components/realtyCard/SpecialCard";

const RecommendedProjects = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getRecommendedProjects({ setProjects });
      setProjects(data.result);
    };
    fetchProjects();
  }, []);
  if (projects && projects?.length > 0) {
    return (
      <div className="space-y-[16px] md:container mx-auto">
        <h2>{language ? "مشاريع مقترحة لك" : ""}</h2>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-5 items-center justify-center  md:justify-start">
          {projects &&
            projects.map((item) => {
              return (
                <SpecialCard isHome={true} key={item._id} cardDetails={item} />
              );
            })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default RecommendedProjects;
