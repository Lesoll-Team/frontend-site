import { useSelector } from "react-redux";
import { getUserPerviousPackages } from "../../apis/profileApis";
import { useEffect, useState } from "react";
import NoItems from "../userProperties/NoItems";
import PlanCard from "./PackageCard";
import PackageCardSkeleton from "./PackageCardSkeleton";

const PreviousSubscription = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [perviousPackages, setPerviousPackages] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  console.log(perviousPackages);
  const fetchActivePackage = () => {
    getUserPerviousPackages({
      setPerviousPackages,
      setFormStatus,
      setServerError,
    });
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
        perviousPackages.package.length > 0 ? (
          perviousPackages.package.map((data, index) => {
            return <PlanCard data={data} key={index} />;
          })
        ) : (
          <NoItems title={language ? "لا توجد باقات منتهية" : "no packages"} />
        )
      ) : (
        formStatus === "failed" && ""
      )}
      {/* {perviousPackages ? (
        perviousPackages.package.length > 0 ? (
          perviousPackages.package.map((data, index) => {
            return <PlanCard data={data} key={index} />;
          })
        ) : (
          <NoItems title={language ? "لا توجد باقات منتهية" : "no packages"} />
        )
      ) : (
        ""
      )} */}
    </div>
  );
};
export default PreviousSubscription;
