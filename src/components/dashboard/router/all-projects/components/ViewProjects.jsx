import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../redux/allProjectsSlice";
import SpecialCard from "@/components/realtyCard/SpecialCard";
import Image from "next/image";
import Link from "next/link";
import Button from "@/Shared/ui/Button";
import DeleteProject from "./modals/DeleteModal";

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
              return (
                <div
                  key={item?._id}
                  className="flex md:flex-row flex-col border drop-shadow p-2 bg-white"
                >
                  <div className="flex items-start gap-3 md:flex-row flex-col w-full ">
                    <Link
                      href={"/"}
                      className="object-cover w-full md:max-w-[150px] max-h-[150px] border rounded-md"
                    >
                      <Image
                        src={item?.thumbnail}
                        width={300}
                        height={300}
                        className="object-cover w-full md:max-w-[150px] max-h-[150px] border rounded-md"
                      />
                    </Link>
                    <div className="flex flex-col justify-between w-full h-full gap-2">
                      <div className="h-full space-y-1">
                        <h3 className="text-xl font-bold">
                          {language ? item?.titleAr : item?.titleEn}
                        </h3>
                        <p className="line-clamp-2 text-outLine break-all">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex w-full">
                        {/* <Link href={} */}
                        <DeleteProject id={item._id} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default ViewProjects;
