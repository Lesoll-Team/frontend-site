import { formatDate } from "@/utils/FormateData";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const PropertyInfo = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { formattedDate } = formatDate(data?.publishAt);
  const adType = useMemo(() => {
    if (data?.adType === "Free") {
      return language ? "مجانى" : "Free";
    } else if (data?.adType === "Paid") {
      return language ? "مدفوع" : "Paid";
    }
  }, [data, language]);
  return (
    <div className="space-y-6">
      <h1>{data?.title}</h1>
      <div className="flex gap-8 md:gap-10 items-center">
        <p>
          {language ? "نوع الإعلان: " : "Ad type: "} {adType}
        </p>
        <p>
          {language ? " تاريخ النشر: " : "Date of publish: "}
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default PropertyInfo;
