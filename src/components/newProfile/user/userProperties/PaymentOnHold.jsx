import { useEffect, useState } from "react";
import ProfileCard from "../../profile-cards/ProfileCard";
import { useSelector } from "react-redux";

import NoItems from "./NoItems";
import { getPaymentOnHold } from "../../apis/profileApis";
import ProfileCardSkeleton from "../../profile-cards/ProfileCardSkeleton";

import { useUser } from "@/Shared/UserContext";

import RemaningAds from "../../profile-cards/RemaningAds";
const PaymentOnHold = () => {
  const [onHoldProperties, setOnHoldProperties] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data } = useUser();
  // make as a function like that so i can pass as a prop to the card so when the user delete or change the state of a peoperty it call it again
  const getProperties = () => {
    getPaymentOnHold({
      setFormStatus,
      setOnHoldProperties,
      setServerError,
    });
  };
  useEffect(() => {
    getProperties();
  }, []);

  const type = language ? "معلقة" : "onhold";

  return (
    <div className="space-y-4">
      {data && <RemaningAds />}
      <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
        {formStatus === "success" ? (
          onHoldProperties.paidRealty.length > 0 ? (
            onHoldProperties.paidRealty.map((item) => {
              return (
                <ProfileCard
                  paymentDisabled
                  getProperties={getProperties}
                  data={item}
                  key={item?._id}
                  type={type}
                />
              );
            })
          ) : (
            <NoItems
              title={language ? "لا توجد اعلانات معلقة" : "No on hold Ads"}
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
export default PaymentOnHold;
