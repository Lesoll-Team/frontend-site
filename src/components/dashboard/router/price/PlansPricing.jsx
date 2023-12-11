import React, { useEffect } from "react";
import PlanPricingCard from "../../model/cards/PlanPricingCard";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "../../icon/PlusIcon";
// import Link from 'next/link';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getPricesPlans } from "@/redux-store/features/PricingSlice";

const PlansPricing = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pricesPlans = useSelector((state) => state.Pricing.pricesPlans);

  useEffect(() => {
    dispatch(getPricesPlans());
  }, []);

console.log("prices Plans", pricesPlans);
  return (
    <div className=" min-h-screen">
      <div className=" flex justify-end mx-10">
        <Button
          endContent={<PlusIcon />}
          color="secondary"
          onPress={() => router.push("/dashboard/pricing/add")}
          className="my-10 font-semibold"
        >
          Create New Plan
        </Button>
      </div>
      <div className="gap-10 flex flex-wrap justify-center">
        {pricesPlans?.getPayment.map((plan,index)=>
        <PlanPricingCard key={index} data={plan}/>
        )}
        {/* <PlanPricingCard data={data} />
        <PlanPricingCard data={data2} /> */}
      </div>
    </div>
  );
};

export default PlansPricing;
