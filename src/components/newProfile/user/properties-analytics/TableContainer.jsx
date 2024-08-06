import React from "react";
import TableHeader from "./TableHeader";
import TableRaw from "./TableRaw";
import NoItems from "../userProperties/NoItems";
import { useSelector } from "react-redux";

const TableContainer = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="border drop-shadow rounded bg-white w-full overflow-y-auto">
      <TableHeader />
      {data?.length > 0 ? (
        data?.map((property, i) => {
          const even = (i + 1) % 2 === 0;
          return <TableRaw even={even} key={property?.slug} data={property} />;
        })
      ) : (
        <div className="h-[38dvh]">
          {" "}
          <NoItems title={language ? "لا يوجد عقارات" : "no Properties"} />
        </div>
      )}
    </div>
  );
};

export default TableContainer;
