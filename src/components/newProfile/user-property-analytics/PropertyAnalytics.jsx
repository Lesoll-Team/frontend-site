import { useCallback, useEffect, useState } from "react";
import PotentialUsers from "./potential-users/PotentialUsers";
import PropertyInsights from "./PropertyInsights";
import { getPropertyAnalytics } from "../apis/profileApis";
import LoadingScreen from "./LoadingScreen";
import { useRouter } from "next/router";
import PropertyInfo from "./PropertyInfo";

const PropertyAnalytics = () => {
  const [data, setData] = useState();
  const [apiStatus, setApiStatus] = useState();
  const [serverError, setServerError] = useState();
  const router = useRouter();
  const slug = router.query.slug;
  useEffect(() => {
    if (slug && !data) {
      getPropertyAnalytics({ setApiStatus, setData, setServerError, slug });
    }
  }, [router, slug]);
  const renderElements = useCallback(() => {
    switch (apiStatus) {
      case "loading":
        return <LoadingScreen />;
      case "success":
        return (
          <>
            <PropertyInfo data={data?.display} />
            <PropertyInsights data={data?.display} />
            <PotentialUsers users={data?.display} />
          </>
        );
      case "failed":
        return "";
    }
  }, [apiStatus]);
  return (
    <div className="container mx-auto py-11 space-y-12 min-h-[80dvh]">
      {renderElements()}
    </div>
  );
};

export default PropertyAnalytics;
