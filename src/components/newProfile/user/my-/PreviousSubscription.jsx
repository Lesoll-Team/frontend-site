import { useSelector } from "react-redux";
import { getUserPerviousPackages } from "../../apis/profileApis";
import { useEffect, useState } from "react";
import NoItems from "../userProperties/NoItems";
import PlanCard from "./PlanCard";

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
      {perviousPackages ? (
        perviousPackages.package.length > 0 ? (
          <PlanCard data={perviousPackages.package} />
        ) : (
          <NoItems title={language ? "لا توجد باقات منتهية" : "no packages"} />
        )
      ) : (
        ""
      )}
    </div>
  );
};
export default PreviousSubscription;
