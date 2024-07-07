import CreatePlansPricing from "@/components/dashboard/router/price/CreatePlansPricing";

const SendBundle = ({ userId }) => {
  return <CreatePlansPricing userId={userId} />;
};
export default SendBundle;
export async function getServerSideProps({ query }) {
  console.log("query", query);
  return {
    props: {
      userId: query.id,
    },
  };
}
