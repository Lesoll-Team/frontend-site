import Image from "next/image";
import SearchByAgents from "./SearchByAgents";

const AgentsHeroSection = () => {
  return (
    <div className="w-full relative h-fit overflow-hidden">
      <SearchByAgents />
      <Image
        width={500}
        height={500}
        className="w-full h-[60dvh]  object-cover brightness-50"
        src="/agents/agents-hero-section.jpg"
        alt=" agents hero section "
      />
    </div>
  );
};
export default AgentsHeroSection;
