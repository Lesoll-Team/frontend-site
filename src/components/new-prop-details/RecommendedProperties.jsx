import { getRecommendRealty } from "@/utils/propertyAPI";
import { memo, useEffect, useState } from "react";
import RealtyCard from "../realtyCard/RealtyCard";
import { useTranslation } from "next-i18next";

const RecommendedProperties = ({ propertyData }) => {
  const [recommended, setRecommended] = useState();

  const { t } = useTranslation("common");

  const isRecommended = recommended && recommended.length > 0;
  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const data = await getRecommendRealty(propertyData._id);
        setRecommended(data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    }
    fetchRecommendations();
  }, []);
  return isRecommended ? (
    <div className="w-full md:space-y-[30px] space-y-[16px] pb-5">
      <h2>{t("Recommended_Properties")}</h2>
      <div className="grid grid-cols-1 md:container md:mx-auto  mx-[20px]  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10">
        {recommended &&
          recommended.slice(0, 3).map((item) => {
            return <RealtyCard propertyDetails={item} key={item._id} />;
          })}
      </div>
    </div>
  ) : null;
};
export default memo(RecommendedProperties);
