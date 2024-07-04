import { useCallback, useMemo } from "react";
import FavoriteProperties from "./FavoriteProperties";
import SavedItemsTabs from "./SavedItemsTab";
import SavedSearch from "./SavedSearch";

import MobilePageTitle from "../MobilePageTitle";
import { getLangBoolean } from "@/utils/getLangBoolean";

const SavedItems = ({ params }) => {
  const language = getLangBoolean();

  const currentTab = useMemo(() => {
    switch (params?.tab) {
      case "fav":
        return "fav";
      case "search":
        return "search";
      default:
        return "fav";
    }
  }, [params]);
  const renderTab = useCallback(() => {
    switch (params?.tab) {
      case "fav":
        return <FavoriteProperties />;
      case "search":
        return <SavedSearch />;

      default:
        return <FavoriteProperties />;
    }
  }, [currentTab]);
  return (
    <div className="space-y-6 md:space-y-8">
      <MobilePageTitle title={language ? "العناصر المحفوظة" : "Saved Items"} />
      <SavedItemsTabs currentTab={currentTab} />
      {renderTab()}
    </div>
  );
};
export default SavedItems;
