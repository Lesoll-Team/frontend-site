import { useCallback, useMemo } from "react";
import PropertiesTabs from "./PropertiesTabs";
import ActiveProperties from "./ActiveProperties";
import PendingProperties from "./PendingProperties";
import SoldProperties from "./SoldProperties";

const UserProperties = ({ params }) => {
  console.log(params);
  const currentTab = useMemo(() => {
    switch (params?.tab) {
      case "active":
        return "active";
      case "pending":
        return "pending";
      case "sold":
        return "sold";
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
      default:
        return <ActiveProperties />;
    }
  }, [currentTab]);
  return (
    <div className="space-y-6 md:space-y-8">
      <PropertiesTabs params={params} currentTab={currentTab} />
      {renderTab()}
    </div>
  );
};
export default UserProperties;
