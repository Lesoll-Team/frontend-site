import { useSelector } from "react-redux";
import AgentCard from "./AgentCard";

const AgentsBodyCards = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full container mx-auto  ">
      <h2 className="text-2xl font-bold my-8 text-gray-800">
        {language ? "جميع الوكلاء" : "All agents"}
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
        <AgentCard
          logo="https://cloud.lesoll.com/v0/public/Realty/2024/7/668bcfa9c021090332288b1f-668bd3d4c02109033228bb19-62486506.webp"
          company="بالم هيلز للتطوير العقارى"
          compounds="39"
          units="403"
          price="3,145,000"
        />
        <AgentCard
          logo="https://cloud.lesoll.com/v0/public/Realty/2024/7/668bcfa9c021090332288b1f-668bd3d4c02109033228bb19-62486506.webp"
          company="بالم هيلز للتطوير العقارى"
          compounds="39"
          units="403"
          price="3,145,000"
        />
        <AgentCard
          logo="https://cloud.lesoll.com/v0/public/Realty/2024/7/668bcfa9c021090332288b1f-668bd3d4c02109033228bb19-62486506.webp"
          company="بالم هيلز للتطوير العقارى"
          compounds="39"
          units="403"
          price="3,145,000"
        />
        <AgentCard
          logo="https://cloud.lesoll.com/v0/public/Realty/2024/7/668bcfa9c021090332288b1f-668bd3d4c02109033228bb19-62486506.webp"
          company="بالم هيلز للتطوير العقارى"
          compounds="39"
          units="403"
          price="3,145,000"
        />
        <AgentCard
          logo="https://cloud.lesoll.com/v0/public/Realty/2024/7/668bcfa9c021090332288b1f-668bd3d4c02109033228bb19-62486506.webp"
          company="بالم هيلز للتطوير العقارى"
          compounds="39"
          units="403"
          price="3,145,000"
        />
        <AgentCard
          logo="https://cloud.lesoll.com/v0/public/Realty/2024/7/668bcfa9c021090332288b1f-668bd3d4c02109033228bb19-62486506.webp"
          company="بالم هيلز للتطوير العقارى"
          compounds="39"
          units="403"
          price="3,145,000"
        />
      </div>
    </div>
  );
};
export default AgentsBodyCards;
