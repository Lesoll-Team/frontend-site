import AgentMetaTags from "@/components/agents/AgentMetaTags";
import AgentsBodyCards from "@/components/agents/AgentsBodyCards";
import AgentsSearchBar from "@/components/agents/AgentsSearchBar";

const Agents = ({ profile }) => {
  return (
    <div className="min-h-[90dvh] mb-6">
      <AgentMetaTags />

      <AgentsSearchBar />
      <AgentsBodyCards profile={profile} />
    </div>
  );
};
export default Agents;
export async function getServerSideProps({ query }) {
  const keyword = query?.query ? query?.query.split("-").join(" ") : "";
  const pinProfile = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payment-user/pin-profile-home?page=1&limit=10&keywords=${keyword}`,
  );

  const profile = await pinProfile.json();
  return {
    props: {
      profile: profile.getProfiles,
    },
  };
}
