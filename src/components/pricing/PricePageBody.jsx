import React, { useEffect } from "react";
import PlanPricingCard from "../dashboard/model/cards/PlanPricingCard";
import { getServicePrice } from "@/redux-store/features/PricingSlice";
import { useDispatch } from "react-redux";
const PricePageBody = ({ payments }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServicePrice());
  }, []);
  return (
    <div className="md:container md:mx-auto mx-[20px] flex justify-center gap-x-[2.1875vw] items-center flex-wrap gap-y-[2vh] mb-10">
      {payments.map((plan) => (
        <div key={plan._id}>
          <PlanPricingCard data={plan} />
        </div>
      ))}
    </div>
  );
};

export default PricePageBody;
