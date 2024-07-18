import { useSelector } from "react-redux";
import CardGrid from "./CardGrid";

const AgentsBodyCards = ({ profile }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full container mx-auto mt-10 ">
      {/* <SearchByAgents /> */}

      <h2 className="text-2xl font-bold  text-gray-800">
        {language ? "الحسابات الموثقة " : "Verified Accounts "}
      </h2>
      {/* <p className="mt-2 text-[#666666]">
        {language ? "افضل الحسابات الموثقة " : "Best Verified Accounts"}
      </p> */}
      <CardGrid cardsData={profile} />
    </div>
  );
};
export default AgentsBodyCards;
