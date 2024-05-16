import { useSelector } from "react-redux";
import MobilePageTitle from "../MobilePageTitle";
import PlanCard from "./PlanCard";
import SubscriptionsTabs from "@/components/newProfile/user/MySubscriptions/SubscriptionsTabs";
const MySubscriptions = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-6 md:space-y-8">
      <MobilePageTitle
        title={language ? "الباقات والفواتير " : "Packages and invoices"}
      />

      <SubscriptionsTabs />
      <PlanCard />
      <PlanCard />
      <PlanCard />
    </div>
  );
};
export default MySubscriptions;
