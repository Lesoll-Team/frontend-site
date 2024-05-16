import { useSelector } from "react-redux";
import MobilePageTitle from "../MobilePageTitle";
// import PlanCard from "./PackageCard";
import SubscriptionsTabs from "./subscriptionsTabs";
import CurrentSubscriptions from "./CurrentSubscriptions";
import { useRouter } from "next/router";
import PreviousSubscription from "./PreviousSubscription";

const MySubscriptions = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const currentTab = router.query?.tab || "active";

  return (
    <div className="space-y-6 md:space-y-8">
      <MobilePageTitle
        title={language ? "الباقات والفواتير " : "Packages and invoices"}
      />
      <SubscriptionsTabs />
      {currentTab === "active" ? (
        <CurrentSubscriptions />
      ) : (
        <PreviousSubscription />
      )}

      {/* <PlanCard />
      <PlanCard />
      <PlanCard /> */}
    </div>
  );
};
export default MySubscriptions;
