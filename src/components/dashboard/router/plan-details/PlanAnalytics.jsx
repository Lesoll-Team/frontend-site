import { StatCard } from "../users-vips/AnalyticsPackage";

const PlanAnalytics = ({ planDetails }) => {
  const money = planDetails?.packageData?.price;
  const totalMony =
    planDetails?.totalContinuousCount + planDetails?.totalEndCount * money;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3   md:gap-10 gap-3">
      <StatCard
        title={"Available Bundle"}
        value={planDetails.totalContinuousCount}
      />
      <StatCard title={"Price Bundle"} value={totalMony} />
      <StatCard title={"Expire Bundle"} value={planDetails.totalEndCount} />
    </div>
  );
};
export default PlanAnalytics;
