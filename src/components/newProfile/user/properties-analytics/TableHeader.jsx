import React from "react";
import { useSelector } from "react-redux";

const TableHeader = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="bg-white py-4 grid gap-1  grid-cols-5 justify-items-center min-w-[600px] px-2 border-b">
      <p className="font-bold text-black">{language ? "الإعلان" : "Ad"}</p>
      <p className="font-bold text-black">
        {language ? "نوع الإعلان" : "Ad type"}
      </p>
      <p className="font-bold text-black">
        {language ? "تاريخ النشر" : "Published at"}
      </p>
      <p className="font-bold text-black">
        {language ? "المشاهدات" : "Impressions"}
      </p>
      <p className="font-bold text-black">
        {language ? "مرات الظهور" : "Views"}
      </p>
    </div>
  );
};

export default TableHeader;
