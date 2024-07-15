import { useSelector } from "react-redux";
import AgentCard from "./AgentCard";

const AgentsBodyCards = ({ profile }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full container mx-auto  ">
      <h2 className="text-2xl font-bold my-8 text-gray-800">
        {language ? "جميع الوكلاء" : "All agents"}
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {profile.map((user) => (
          <AgentCard
            logo={user.avatarUrl}
            company={user.fullname}
            compounds={user.count}
            username={user.username}
          />
        ))}
      </div>
    </div>
  );
};
export default AgentsBodyCards;
