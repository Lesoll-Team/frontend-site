import { useEffect, useState } from "react";
import ProfileCard from "../../profile-cards/ProfileCard";
import { useSelector } from "react-redux";

import NoItems from "./NoItems";
import { getSoldProperties } from "../../apis/profileApis";
const SoldProperties = () => {
  const [soldProperties, setSoldProperties] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const getProperties = () => {
    getSoldProperties({ setFormStatus, setSoldProperties, setServerError });
  };
  useEffect(() => {
    getProperties();
  }, []);
  const type = language ? "تم البيع" : "Sold";

  return (
    <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
      {formStatus === "success" ? (
        soldProperties.propertySoldProfile.length > 0 ? (
          soldProperties.propertySoldProfile.map((item) => {
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
          <NoItems title={language ? "لا توجد اعلانات مباعة" : "No sold Ads"} />
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
export default SoldProperties;
