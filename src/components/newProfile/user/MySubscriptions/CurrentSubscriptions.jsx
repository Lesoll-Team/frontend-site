import { useEffect, useState } from "react";
import { getUserActivePackages } from "../../apis/profileApis";
import NoItems from "../userProperties/NoItems";
import { useSelector } from "react-redux";
import PlanCard from "./PackageCard";
import PackageCardSkeleton from "./PackageCardSkeleton";

const CurrentSubscriptions = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [activePackages, setActivePackages] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);

  const fetchActivePackage = () => {
    getUserActivePackages({ setActivePackages, setFormStatus, setServerError });
  };
  useEffect(() => {
    fetchActivePackage();
  }, []);
  return (
    <div className="space-y-6 md:space-y-8">
      {formStatus === "loading" ? (
        <>
          <PackageCardSkeleton />
          <PackageCardSkeleton />
          <PackageCardSkeleton />
        </>
      ) : formStatus === "success" ? (
        <PlanCard data={activePackages.package} />
      ) : (
        formStatus === "failed" && ""
      )}
    </div>
  );
};
export default CurrentSubscriptions;