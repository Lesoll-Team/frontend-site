import { useFormatNewData } from "@/Hooks/useFormatTime";
import { downloadUserInvoice } from "@/utils/dashboardApi/paymentDetailsAPI";
import React, { memo, useMemo } from "react";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { useSelector } from "react-redux";

const TablePackageUser = ({ data, cols }) => {
  const MemoizedRenderTable = useMemo(() => RenderTable, [data]);

  if (!data || data.length === 0) {
    return (
      <p className="w-full p-10 flex items-center justify-center bg-gray-100">
        No data available.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto h-[200px]  relative">
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

export default memo(TablePackageUser);
const RenderTable = ({ row, col }) => {
  const formattedDate = useFormatNewData({
    date: row.expireDate,
    lang: false,
  });
  const language = useSelector((state) => state.GlobalState.languageIs);

  switch (col) {
    case "expireDate":
      return (
        <p>{(formattedDate != "Invalid Date" && formattedDate) || "End"}</p>
      );
    case "invoice":
      return (
        <button
          onClick={() =>
            downloadUserInvoice({
              bundleId: row._id,
              userName: "user",
              lang: language,
            })
          }
          className="flex items-center justify-center w-full gap-x-1"
        >
          <LiaFileInvoiceDollarSolid className="text-linkColor" />
          <span className="underline">Download</span>
        </button>
      );
    default:
      return <div>{row[col]}</div>;
  }
};
