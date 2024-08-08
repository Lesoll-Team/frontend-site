import React from "react";

const TableSkeleton = () => {
  const arr = ["", "", "", "", "", "", "", "", ""];
  return (
    <div className="border drop-shadow rounded bg-white w-full overflow-y-auto">
      <div className="bg-white py-4 grid gap-1  grid-cols-5 justify-items-center min-w-[600px] px-2 h-11 animate-pulse"></div>
      {arr.map((_, i) => {
        const even = (i + 1) % 2 === 0;
        return <RowSkeleton even={even} />;
      })}
    </div>
  );
};

export default TableSkeleton;

const RowSkeleton = ({ even }) => {
  return (
    <div
      className={` py-4 grid grid-cols-5 justify-items-center animate-pulse gap-1 px-4 min-w-[600px] ${even ? "bg-white" : "bg-gray-200"} h-11`}
    ></div>
  );
};
