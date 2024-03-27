import { getRecommendRealty } from "@/utils/propertyAPI";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RealtyCard from "../realtyCard/RealtyCard";

const RecommendedProperties = ({ propertyData, slug }) => {
  const [recommended, setRecommended] = useState();
  const language = useSelector((state) => state.GlobalState.languageIs);

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
      <h2>{language ? "عقارات مشابهة" : "Recommended Properties"}</h2>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 items-center gap-5">
        {recommended &&
          recommended.slice(0, 3).map((item) => {
            return <RealtyCard propertyDetails={item} key={item._id} />;
          })}
      </div>
    </div>
  ) : null;
};
export default RecommendedProperties;
