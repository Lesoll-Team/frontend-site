import { useCallback, useMemo } from "react";
import PropertiesTabs from "./PropertiesTabs";
import ActiveProperties from "./ActiveProperties";
import PendingProperties from "./PendingProperties";
import SoldProperties from "./SoldProperties";
import MobilePageTitle from "../MobilePageTitle";
import { useSelector } from "react-redux";
import DraftProperties from "./DraftProperties";
import PaymentOnHold from "./PaymentOnHold";

const UserProperties = ({ params }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const currentTab = useMemo(() => {
    switch (params?.tab) {
      case "active":
        return "active";
      case "pending":
        return "pending";
      case "sold":
        return "sold";
      case "draft":
        return "draft";
      case "onhold":
        return "onhold";
      default:
        return "active";
    }
  }, [params]);
  const renderTab = useCallback(() => {
    switch (params?.tab) {
      case "active":
        return <ActiveProperties />;
      case "pending":
        return <PendingProperties />;
      case "sold":
        return <SoldProperties />;
      case "draft":
        return <DraftProperties />;
      case "onhold":
        return <PaymentOnHold />;
      default:
        return <ActiveProperties />;
    }
  }, [currentTab]);
  return (
    <div className="space-y-6 md:space-y-8">
      <MobilePageTitle title={language ? "الاعلانات" : "Properties"} />
      <PropertiesTabs params={params} currentTab={currentTab} />
      {renderTab()}
    </div>
  );
};
export default UserProperties;
