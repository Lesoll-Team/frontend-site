import React from "react";
import DataWidget from "./DataWidget";
import { useSelector } from "react-redux";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
const PropertyInsights = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-10">
      <h1>{language ? "إحصائيات العقار" : "Property Insights"}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <DataWidget
          icon={<AiOutlineGlobal />}
          title={language ? "عدد مرات الظهور" : "Number of impressions"}
          data={0}
        />
        <DataWidget
          icon={<IoEyeOutline />}
          title={language ? "المشاهدات" : "Views"}
          data={data?.getViewPage}
        />
        <DataWidget
          icon={<IoShareSocialOutline />}
          title={language ? "عدد المشاركات" : "Number of shares"}
          data={data?.otherShareTotal}
        />
        <DataWidget
          icon={<IoIosCall />}
          title={language ? "محاولات التواصل" : "attempts to communicate"}
          data={data?.totalCallAndWhatsapp}
        />
      </div>
    </div>
  );
};

export default PropertyInsights;
