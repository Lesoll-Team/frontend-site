import { useEffect, useState } from "react";
import {
  getcustomPackages,
  getUserActivePackages,
} from "../../apis/profileApis";
import NoItems from "../userProperties/NoItems";
import { useSelector } from "react-redux";
import PlanCard from "./PackageCard";
import PackageCardSkeleton from "./PackageCardSkeleton";
import { useUser } from "@/Shared/UserContext";
import CustomPackageCard from "./CustomPackageCard";
import RemaningAds from "../../profile-cards/RemaningAds";

const CurrentSubscriptions = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data } = useUser();
  const [activePackages, setActivePackages] = useState(null);
  const [customPackages, setCustomPackages] = useState(null);
  const [customPackagesStatus, setCustomPackagesStatus] = useState("idle");
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const showNoPackage =
    customPackages?.length === 0 && activePackages?.package?.length === 0;
  const fetchActivePackage = () => {
    getUserActivePackages({ setActivePackages, setFormStatus, setServerError });
  };
  const fetchCustomPackages = () => {
    getcustomPackages({
      setCustomPackages,
      setApiStatus: setCustomPackagesStatus,
      id: data?._id,
    });
  };
  useEffect(() => {
    fetchActivePackage();
  }, []);
  useEffect(() => {
    if (data) {
      fetchCustomPackages();
    }
  }, [data]);

  return (
    <div className="space-y-6 md:space-y-8">
      <RemaningAds />
      {customPackagesStatus === "loading" ? (
        <PackageCardSkeleton />
      ) : (
        customPackagesStatus === "success" &&
        customPackages.length > 0 &&
        customPackages.map((el) => {
          return <CustomPackageCard data={el} key={el._id} />;
        })
      )}
      {formStatus === "loading" ? (
        <>
          <PackageCardSkeleton />
          <PackageCardSkeleton />
          <PackageCardSkeleton />
        </>
      ) : formStatus === "success" ? (
        activePackages.package.length > 0 ? (
          activePackages.package.map((item) => {
            return <PlanCard data={item} />;
          })
        ) : (
          showNoPackage && (
            <NoItems
              title={language ? "لا يوجد باقات نشطة" : "No Active Packages"}
            />
          )
        )
      ) : (
        formStatus === "failed" && ""
      )}
    </div>
  );
};
export default CurrentSubscriptions;
