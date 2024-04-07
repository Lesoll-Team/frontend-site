import { useEffect, useState } from "react";
import ProfileCard from "../../profile-cards/ProfileCard";
import { useSelector } from "react-redux";
import NoItems from "./NoItems";
import { getPendingProperties } from "../../apis/profileApis";

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
    <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
      {formStatus === "success" ? (
        pendingProperties.pendingRealty.length > 0 ? (
          pendingProperties.pendingRealty.map((item) => {
            return (
              <ProfileCard
                getProperties={getProperties}
                data={item}
                key={item?._id}
                type={type}
              />
            );
          })
        ) : (
          <NoItems
            title={language ? "لا توجد اعلانات قيد الراجعة" : "No Pending Ads"}
          />
        )
      ) : (
        <>
          {" "}
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </>
      )}
    </div>
  );
};
export default PendingProperties;
