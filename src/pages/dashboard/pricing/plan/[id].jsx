import PlanDetailsLayout from "@/components/dashboard/router/plan-details/PlanDetailsLayout";
import { getUsersVIPPackage } from "@/utils/dashboardApi/paymentDetailsAPI";

const Plan = ({ planDetails }) => {
  return (
    <div>
      <PlanDetailsLayout planDetails={planDetails} />
    </div>
  );
};
export default Plan;
export async function getServerSideProps({ query }) {
  try {
    const usersData = await getUsersVIPPackage({ packageId: query?.id });

    return {
      props: {
        planDetails: usersData,
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        error: "Failed to fetch data",
      },
    };
  }
}
