import { useSelector } from "react-redux";
import CardGrid from "./CardGrid";

const AgentsBodyCards = ({ profile }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full container mx-auto mt-10 ">
      <h2 className="text-2xl font-bold  text-gray-800">
        {language ? "الحسابات المميزة " : "premium accounts"}
      </h2>

      <CardGrid cardsData={profile} />
    </div>
  );
};
export default AgentsBodyCards;
