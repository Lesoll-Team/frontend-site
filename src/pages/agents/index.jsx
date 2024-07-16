import AgentMetaTags from "@/components/agents/AgentMetaTags";
import AgentsBodyCards from "@/components/agents/AgentsBodyCards";
import AgentsHeroSection from "@/components/agents/HeroSection";

const Agents = ({ profile }) => {
  return (
    <div>
      <AgentMetaTags />
      {/* <AgentsHeroSection /> */}
      <AgentsBodyCards profile={profile} />
    </div>
  );
};
export default Agents;
export async function getServerSideProps() {
  const pinProfile = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payment-user/pin-profile-home?page=1&limit=10`,
  );

  const profile = await pinProfile.json();
  return {
    props: {
      profile: profile.getProfiles,
    },
  };
}
