import { useFormatNewData } from "@/Hooks/useFormatTime";
import Link from "next/link";
import React, { memo, useMemo } from "react";
const RenderTable = ({ row, col }) => {
  const formattedDate = useFormatNewData({
    date: row.expireDate,
    lang: false,
  });

  switch (col) {
    case "userFullname":
      return (
        <Link
          href={`vip-users/one-user/${row._id}`}
          className="font-bold text-medium underline text-blue-900"
        >
          {row.userFullname}
        </Link>
      );
    case "expireDate":
      return (
        <p>{(formattedDate != "Invalid Date" && formattedDate) || "End"}</p>
      );
    case "userPhoneNumber":
      return (
        <p>
          {row.userCode}-{row.userPhoneNumber}
        </p>
      );
    default:
      return <div>{row[col]}</div>;
  }
};

const TableVipUser = ({ data, cols }) => {
  const MemoizedRenderTable = useMemo(() => RenderTable, [data]);

  if (!data || data.length === 0) {
    return (
      <p className="w-full p-10 flex items-center justify-center bg-gray-100">
        No data available.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto  min-h-screen relative">
      <table className="absolute w-full  bg-white border-5 border-gray-200 whitespace-nowrap">
        <thead>
          <tr className="bg-gray-200 sticky -top-1  ">
            {cols.map((col, index) => (
              <th key={index} className="p-3">
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 py-2 ">
              {cols.map((col, colIndex) => (
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

export default memo(TableVipUser);
