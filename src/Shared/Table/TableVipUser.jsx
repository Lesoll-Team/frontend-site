import { useFormatNewData } from "@/Hooks/useFormatTime";
import Link from "next/link";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { TiFilter } from "react-icons/ti";
import DropdownTableModel from "./DropdownTableModel";
const RenderTable = ({ row, col }) => {
  const formattedDate = useFormatNewData({
    date: row.expireDate,
    lang: false,
  });

  const createdDate = useFormatNewData({
    date: row.createdAt,
    lang: false,
  });
  // createdDate;
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
    case "createdAt":
      return <p>{createdDate}</p>;
    case "userPhoneNumber":
      return (
        <p>
          {row.userCode}-{row.userPhoneNumber}
        </p>
      );
    case "success":
      return (
        <div className="flex items-center justify-center">
          {row.success == "true" ? (
            <p className="text-green-700 bg-green-100 font-semibold  w-8/12 rounded-xl  ">
              Paid
            </p>
          ) : (
            <p className="text-red-700 bg-red-100 w-8/12 font-semibold rounded-xl">
              Field
            </p>
          )}
        </div>
      );
    default:
      return <div>{row[col]}</div>;
  }
};

const TableVipUser = ({
  data,
  cols,
  setFilterSuccessOptions,
  filterSuccessOptions,
}) => {
  const MemoizedRenderTable = useMemo(() => RenderTable, [data]);
  const MemoizedRenderHeadTable = useMemo(() => RenderHeadTable, [data]);

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
              <th key={index} className="py-3">
                {/* {col.name} */}
                <MemoizedRenderHeadTable
                  name={col.uid}
                  value={col.name}
                  sort={col?.sort}
                  setFilterSuccessOptions={setFilterSuccessOptions}
                  filterSuccessOptions={filterSuccessOptions}
                />
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
                  className="text-center border-b py-2 px-1 border-r-3 border-l-3 border-black"
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
const RenderHeadTable = ({
  name,
  value,
  sort,
  setFilterSuccessOptions,
  filterSuccessOptions,
}) => {
  const dropdownButtonRef = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target)
      ) {
        setTrigger(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [trigger]);
  switch (name) {
    case "success":
      return (
        <div className="flex items-center justify-center relative">
          <button
            ref={dropdownButtonRef}
            onClick={() => setTrigger(!trigger)}
            className="flex items-center  justify-center gap-x-1"
          >
            {value}
            {sort && <TiFilter className="text-xl" />}
          </button>
          {trigger && sort && (
            <DropdownTableModel
              list={sort}
              setFilterSuccessOptions={setFilterSuccessOptions}
              filterSuccessOptions={filterSuccessOptions}
              setTrigger={setTrigger}
              trigger={trigger}
            />
          )}
        </div>
      );

    default:
      return <div>{value}</div>;
  }
};
