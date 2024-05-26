import { formatDate } from "@/utils/FormateData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const DraftCard = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { formattedDate } = formatDate(data.createdAt);
  return (
    <div className="flex items-center justify-between w-full border rounded overflow-hidden h-[140px] md:h-[154px]">
      <Image
        width={"169"}
        height={"154"}
        src={data?.thumbnail}
        className="object-cover h-full w-[30%] md:w-[18%]"
      />
      <div className="w-full h-full px-6 py-5 flex flex-col justify-between">
        <div className="w-full flex items-start justify-between">
          <div>
            <h3 className="line-clamp-1">{data.title}</h3>
            <p>{formattedDate}</p>
          </div>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
        <div className="flex items-end h-full justify-end ">
          <Link
            href={`/add-property/${data._id}`}
            className="text-sm md:text-base  px-3 py-1.5 rounded-md bg-lightGreen text-white"
          >
            {language ? "استكمال الإعلان" : "resume draft"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DraftCard;
