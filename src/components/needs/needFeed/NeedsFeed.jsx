import { useSelector } from "react-redux";
import NeedsCard from "./needCard/NeedsCard";

const NeedsFeed = () => {
  const needs = useSelector((state) => state.needsPosts.needsPosts);
  return (
    <div className="container mx-auto py-10">
      {needs?.map((need, index) => (
        <NeedsCard need={need} key={index} />
      ))}
    </div>
  );
};
export default NeedsFeed;
