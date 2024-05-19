import { useCallback, useEffect, useState } from "react";
import PotentialUsers from "./PotentialUsers";
import PropertyInsights from "./PropertyInsights";
import { getPropertyAnalytics } from "../apis/profileApis";
import LoadingScreen from "./LoadingScreen";
import { useRouter } from "next/router";

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
  console.log(apiStatus);
  const renderElements = useCallback(() => {
    switch (apiStatus) {
      case "loading":
        return <LoadingScreen />;
      case "success":
        return (
          <>
            <PropertyInsights data={data?.display} />
            <PotentialUsers users={data?.display?.usersActive} />
          </>
        );
      case "failed":
        return "";
    }
  }, [apiStatus]);
  console.log(data);
  return (
    <div className="container mx-auto py-11 space-y-12 min-h-[80dvh]">
      {renderElements()}
    </div>
  );
};

export default PropertyAnalytics;
