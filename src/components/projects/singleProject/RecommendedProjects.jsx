import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getRecommendedProjects } from "./api/projectPageApis";
import SpecialCard from "@/components/realtyCard/SpecialCard";
import { useTranslation } from "next-i18next";
import { getLangBoolean } from "@/utils/getLangBoolean";

const RecommendedProjects = ({ projectTitle }) => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getRecommendedProjects({ setProjects });
      setProjects(data.result);
    };
    fetchProjects();
  }, []);
  const projectList = useMemo(() => {
    if (projects) {
      return projects.filter((item) => item.titleAr !== projectTitle);
    } else {
      return [];
    }
  }, [projects, projectTitle]);

  if (projectList && projectList?.length > 0) {
    return (
      <div className="space-y-[16px] md:container mx-auto">
        <h2>{language ? "مشاريع مقترحة لك" : ""}</h2>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-5 items-center justify-center  md:justify-start">
          {projectList &&
            projectList.map((item) => {
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
