import React from "react";
import DeleteProject from "./modals/DeleteModal";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const ProjectCard = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="flex md:flex-row flex-col border drop-shadow p-2 bg-white">
      <div className="flex items-start gap-3 md:flex-row flex-col w-full ">
        <Link
          href={`/projects/${data?.slug}`}
          className="object-cover w-full md:max-w-[150px] max-h-[150px] border rounded-md"
        >
          <Image
            src={data?.thumbnail}
            width={300}
            height={300}
            className="object-cover w-full md:max-w-[150px] h-[150px] border rounded-md min-h-full"
          />
        </Link>
        <div className="flex flex-col justify-between w-full h-full gap-2">
          <div className="h-full space-y-1">
            <h3 className="text-xl font-bold">
              {language ? data?.titleAr : data?.titleEn}
            </h3>
            <p className="line-clamp-2 text-outLine break-all">
              {data.description}
            </p>
          </div>
          <div className="flex w-full gap-2">
            <Link
              className="w-full bg-gray-300 rounded-md text-center py-1"
              href={`/dashboard/edit-project/${data?.titleAr}`}
            >
              {language ? "تعديل" : "Edit"}
            </Link>
            <DeleteProject id={data._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
