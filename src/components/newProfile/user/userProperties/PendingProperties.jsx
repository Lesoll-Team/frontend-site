import { useEffect, useState } from "react";
import ProfileCard from "../../profile-cards/ProfileCard";
import { useSelector } from "react-redux";
import NoItems from "./NoItems";
import { getPendingProperties } from "../../apis/profileApis";
import ProfileCardSkeleton from "../../profile-cards/ProfileCardSkeleton";
import RemaningAds from "../../profile-cards/RemaningAds";

const PendingProperties = () => {
  const [pendingProperties, setPendingProperties] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const getProperties = () => {
    getPendingProperties({
      setFormStatus,
      setPendingProperties,
      setServerError,
    });
  };
  useEffect(() => {
    getProperties();
  }, []);
  const type = language ? "تحت المراجعة" : "Pending";

  return (
    <div className="space-y-4">
      <RemaningAds />
      <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
        {formStatus === "success" ? (
          pendingProperties.pendingRealty.length > 0 ? (
            pendingProperties.pendingRealty.map((item) => {
              return (
                <ProfileCard
                  paymentDisabled={true}
                  getProperties={getProperties}
                  data={item}
                  key={item?._id}
                  type={type}
                />
              );
            })
          ) : (
            <NoItems
              title={
                language ? "لا توجد اعلانات قيد الراجعة" : "No Pending Ads"
              }
            />
          )
        ) : (
          <>
            {" "}
            <ProfileCardSkeleton />
            <ProfileCardSkeleton />
            <ProfileCardSkeleton />
          </>
        )}
      </div>
    </div>
  );
};
export default PendingProperties;
