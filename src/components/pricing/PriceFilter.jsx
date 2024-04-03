import React, { useState } from "react";
import { useSelector } from "react-redux";

const PriceFilter = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [timeFilter, setTimeFilter] = useState("");
  return (
    <div className="w-full flex justify-center ">
      <div className="flex gap-x-2">
        <button>{language ? "سنوية" : "Yearly"}</button>
        <button>{language ? "شهرية" : "Monthly"}</button>
        <button>{language ? "يومية" : "Daily"}</button>
        <button>{language ? "تحت إدارة ليسول" : "Managed by Lesoll"}</button>
      </div>
    </div>
  );
};

export default PriceFilter;
