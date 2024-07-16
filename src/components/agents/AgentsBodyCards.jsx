import { useSelector } from "react-redux";
import CardGrid from "./CardGrid";
// import AgentCard from "./AgentCard";

const AgentsBodyCards = ({ profile }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full container mx-auto mt-10 ">
      <h2 className="text-2xl font-bold  text-gray-800">
        {language ? "جميع الوكلاء" : "All agents"}
      </h2>
      <p className="mt-2 text-[#666666]">
        {language ? "افضل وكلاء العقارات" : "Best real estate agents"}
      </p>
      <CardGrid cardsData={profile} />
    </div>
  );
};
export default AgentsBodyCards;
// import { useSelector } from "react-redux";
// import AgentCard from "./AgentCard";
// import AgentBanner from "./AgentBanner ";

// const AgentsBodyCards = ({ profile }) => {
//   const language = useSelector((state) => state.GlobalState.languageIs);
//   return (
//     <div className="w-full container mx-auto mt-10 ">
//       <h2 className="text-2xl font-bold  text-gray-800">
//         {language ? "جميع الوكلاء" : "All agents"}
//       </h2>
//       <p className="mt-2 text-[#666666]">
//         {language ? "افضل وكلاء العقارات" : "Best real estate agents"}
//       </p>
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
//         {profile.map((user, index) => (
//           <>
//             <AgentCard
//               logo={user.avatarUrl}
//               company={user.fullname}
//               compounds={user.count}
//               username={user.username}
//             />
//             {index === 2 && <AgentBanner />}
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default AgentsBodyCards;
