import { getPackagesInAddProperty } from "@/components/newAddProperty/apis/addEditPropertyApis";
import { useEffect, useState } from "react";
import PlanCard from "./PlanCard";
import PlanCardSkeleton from "./PlanCardSkeleton";
import { useSelector } from "react-redux";

const RenderPackages = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [packages, setPackages] = useState();
  const [apiStatus, setApiStatus] = useState();
  const [serverError, setServerError] = useState();
  useEffect(() => {
    if (!packages) {
      getPackagesInAddProperty({ setPackages, setApiStatus, setServerError });
    }
  }, []);
  return (
    <div className="space-y-4">
      <p className="font-bold">{language ? "الباقات" : "Packages"}</p>
      {packages ? (
        packages?.map((item) => {
          return <PlanCard item={item} key={item._id} />;
        })
      ) : (
        <>
          <PlanCardSkeleton />
          <PlanCardSkeleton />
          <PlanCardSkeleton />
        </>
      )}
    </div>
  );
};

export default RenderPackages;
