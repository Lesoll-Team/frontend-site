import React from "react";
import { useSelector } from "react-redux";
import SubscriptionCard from "./Cards/SubscriptionCard";

const Subscriptions = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div>
      <h2 className="text-center font-bold text-lightGreen text-4xl mb-5">
        {language ? "الإشتراكات" : "Subscriptions"}
      </h2>
      <h4>الإشتراكات الحالية</h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10 sm:gap-y-20 py-10 mx-auto justify-items-center">
        <SubscriptionCard active={true} />
      </div>
      <h4>الإشتراكات السابقة</h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10 py-10 mx-auto justify-items-center">
        <SubscriptionCard />
        <SubscriptionCard />
        <SubscriptionCard />
      </div>
    </div>
  );
};

export default Subscriptions;
