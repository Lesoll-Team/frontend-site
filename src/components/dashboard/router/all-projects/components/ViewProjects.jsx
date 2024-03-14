import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../redux/allProjectsSlice";
import SpecialCard from "@/components/realtyCard/SpecialCard";
import Image from "next/image";
import Link from "next/link";
import Button from "@/Shared/ui/Button";
import DeleteProject from "./modals/DeleteModal";
import ProjectCard from "./ProjectCard";

const ViewProjects = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.getProjects.projects.data);
  useEffect(() => {
    dispatch(getAllProjects());
  }, []);
  return (
    <div
      dir={language ? "rtl" : "ltr"}
      className="sm:container mx-auto px-3 py-10 space-y-5"
    >
      <h1 className="text-xl md:text-3xl">
        {language ? "المشاريع" : "Projects"}
      </h1>
      <div className="grid lg:grid-cols-2 gap-4">
        {projects && projects?.Property.length > 0
          ? projects?.Property.map((item) => {
              return <ProjectCard data={item} />;
            })
          : ""}
      </div>
    </div>
  );
};
export default ViewProjects;
