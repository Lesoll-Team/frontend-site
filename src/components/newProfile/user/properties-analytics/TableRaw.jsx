import { formatDate } from "@/utils/FormateData";
import Link from "next/link";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const TableRaw = ({ data, even }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const addType = useMemo(() => {
    switch (data.offer) {
      case "For Sale":
        return language ? "للبيع" : data.offer;
      case "For Rent":
        return language ? "للإيجار" : data.offer;
      case "For Investment":
        return language ? "للإستثمار" : data.offer;
      default:
        return data.offer;
    }
  }, [language, data]);
  const { formattedDate } = formatDate(data.publishAt);
  return (
    <div
      className={` py-4 grid grid-cols-5 justify-items-center gap-1 px-4 min-w-[600px] ${even ? "bg-white" : "bg-gray-100"}`}
    >
      <Link
        href={`/profile/property-analytics/${data.slug}`}
        className="underline text-linkColor overflow-hidden max-w-fit break-all line-clamp-1 text-start px-2"
      >
        {data?.title}
      </Link>
      <p className="">{addType}</p>
      <p className="">{formattedDate}</p>
      <p className="">{data?.view}</p>
      <p className="">{data?.impressions}</p>
    </div>
  );
};

export default TableRaw;
