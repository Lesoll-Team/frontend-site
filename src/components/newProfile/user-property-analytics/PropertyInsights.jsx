import React from "react";
import DataWidget from "./DataWidget";
import { useSelector } from "react-redux";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

const PropertyInsights = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-10">
      <h1>{language ? "إحصائيات العقار" : "Property Insights"}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
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
          className={"md:col-span-1 col-span-2"}
        />
      </div>
    </div>
  );
};

export default PropertyInsights;
