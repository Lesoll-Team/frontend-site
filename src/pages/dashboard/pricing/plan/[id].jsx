import PlanDetailsLayout from "@/components/dashboard/router/plan-details/PlanDetailsLayout";

const Plan = ({ planDetails }) => {
  return (
    <div>
      <PlanDetailsLayout planDetails={planDetails} />
    </div>
  );
};
export default Plan;
export async function getServerSideProps({ params }) {
  const id = params.id;
  return {
    props: {
      planDetails: id,
    },
  };
}
