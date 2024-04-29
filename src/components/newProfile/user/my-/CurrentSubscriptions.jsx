import { useEffect, useState } from "react";
import { getUserActivePackages } from "../../apis/profileApis";
import NoItems from "../userProperties/NoItems";
import { useSelector } from "react-redux";
import PlanCard from "./PlanCard";

const CurrentSubscriptions = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [activePackages, setActivePackages] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  console.log(activePackages);
  const fetchActivePackage = () => {
    getUserActivePackages({ setActivePackages, setFormStatus, setServerError });
  };
  useEffect(() => {
    fetchActivePackage();
  }, []);
  return (
    <div className="space-y-6 md:space-y-8">
      {activePackages ? (
        activePackages.package ? (
          <PlanCard data={activePackages.package} />
        ) : (
          <NoItems title={language ? "لايوجد باقات حاليا" : "no packages"} />
        )
      ) : (
        ""
      )}
    </div>
  );
};
export default CurrentSubscriptions;
