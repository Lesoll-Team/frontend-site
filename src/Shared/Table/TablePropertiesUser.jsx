import { useFormatNewData } from "@/Hooks/useFormatTime";
import Link from "next/link";
import React, { memo, useMemo } from "react";

const TablePropertiesUser = ({ data, cols }) => {
  const MemoizedRenderTable = useMemo(() => RenderTable, [data]);

  if (!data || data.length === 0) {
    return (
      <p className="w-full p-10 flex items-center justify-center bg-gray-100">
        No data available.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto h-[300px]  relative">
      <table className="absolute w-full   bg-white border-5 border-gray-200 whitespace-nowrap">
        <thead>
          <tr className="bg-gray-200 sticky -top-1  ">
            {cols?.map((col, index) => (
              <th key={index} className="p-3">
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 py-2 ">
              {cols?.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="text-center border-b py-2 border-r-3 border-l-3 border-black"
                >
                  <MemoizedRenderTable row={row} col={col.uid} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(TablePropertiesUser);
const RenderTable = ({ row, col }) => {
  const formattedDate = useFormatNewData({
    date: row.publishAt,
    lang: false,
  });

  switch (col) {
    case "title":
      return (
        <Link
          className="text-blue-500 md:whitespace-normal "
          href={`/property-details/${row?.slug}`}
        >
          {row?.title.slice(0, 60)}
        </Link>
      );
    case "seen":
      return (
        <>
          <div className="flex  w-full justify-between bg-gray-100">
            <div className=" flex w-full justify-center space-x-1">
              <p className="sm-text">seen : </p>
              <p className="sm-text">
                <strong> {row.seen} </strong>
              </p>
            </div>
            <div className="flex w-full justify-center space-x-1 ">
              <p className="sm-text">Visits : </p>
              <p className="sm-text">
                <strong> {row.visitNumber} </strong>
              </p>
            </div>
          </div>
          <div className="flex  w-full justify-between ">
            <div className=" flex w-full justify-center space-x-1">
              <p className="sm-text">Phone : </p>
              <p className="sm-text">
                <strong> {row.callClickTotal} </strong>
              </p>
            </div>
            <div className="flex w-full justify-center space-x-1 ">
              <p className="sm-text">whatsapp : </p>
              <p className="sm-text">
                <strong> {row.whatsappClickTotal} </strong>
              </p>
            </div>
          </div>
        </>
      );
    case "price":
      return (
        <div className="flex flex-col ">
          <div className="flex  w-full justify-around bg-gray-100">
            <p className="sm-text">offer : </p>
            <p className="sm-text">
              <strong> {row.offer} </strong>
            </p>
          </div>
          <div className="flex  w-full justify-around ">
            <p className="sm-text">price : </p>
            <p className="sm-text">
              <strong> {row.price} </strong>
            </p>
          </div>
        </div>
      );
    case "location":
      return (
        <div className="flex flex-col ">
          <div className="flex  w-full justify-around bg-gray-100">
            <p className="sm-text">governrate : </p>
            <p className="sm-text">
              <strong> {row.address.governrate} </strong>
            </p>
          </div>
          <div className="flex  w-full justify-around ">
            <p className="sm-text">region : </p>
            <p className="sm-text">
              <strong> {row.address.region} </strong>
            </p>
          </div>
        </div>
      );
    case "status":
      return (
        <div className="flex flex-col ">
          <div className="flex  w-full justify-around bg-gray-100">
            <p className="sm-text">publishAt : </p>
            <p className="sm-text">
              <strong> {formattedDate} </strong>
            </p>
          </div>
          <div className="flex  w-full justify-around ">
            <p className="sm-text">Status : </p>
            <p className="sm-text">
              {row.isSold ? (
                <strong className="text-green-400">Sold</strong>
              ) : (
                <strong className="text-red-500">unsold</strong>
              )}
            </p>
          </div>
        </div>
      );
    case "package":
      return (
        <div className="flex flex-col ">
          <div className="flex  w-full justify-around bg-gray-100">
            <p className="sm-text">bundle :</p>
            <p className="sm-text">
              <strong> {row.property_badge} </strong>
            </p>
          </div>
          <div className="flex  w-full justify-around ">
            <p className="sm-text">Type :</p>
            <p className="sm-text">
              {row.makePin && "Pin"}
              {row.makePin && row.makeRepost && " & "}
              {row.makeRepost && "Repost"}
            </p>
          </div>
        </div>
      );

    default:
      return <div>{row[col]}</div>;
  }
};
