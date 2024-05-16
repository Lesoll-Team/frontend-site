import { useSelector } from "react-redux";
import MobilePageTitle from "../MobilePageTitle";
import CurrentSubscriptions from "./CurrentSubscriptions";
import { useRouter } from "next/router";
import PreviousSubscription from "./PreviousSubscription";
import SubscriptionsTabs from "./SubscriptionsTabs";

const MySubscriptionsPage = () => {
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
    </div>
  );
};
export default MySubscriptionsPage;
