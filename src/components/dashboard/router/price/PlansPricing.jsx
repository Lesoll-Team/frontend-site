import React, { useEffect } from "react";
import PlanPricingCard from "../../model/cards/PlanPricingCard";
// import { Button } from "@nextui-org/react";
import { PlusIcon } from "../../icon/PlusIcon";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  getPricesPlans,
  getServicePrice,
} from "@/redux-store/features/PricingSlice";

const PlansPricing = () => {
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);

  const dispatch = useDispatch();
  const pricesPlans = useSelector((state) => state.Pricing.pricesPlans);
  useEffect(() => {
    dispatch(getServicePrice());
    dispatch(getPricesPlans());
  }, []);
  // console.log("prices Plans", pricesPlans);
  return (
    <div
      dir={language ? "rtl" : "ltr"}
      className=" min-h-screen my-20 md:container md:mx-auto mx-[20px] flex flex-col gap-y-10"
    >
      <div className=" flex ">
        <button
          // endContent={<PlusIcon />}
          // color="secondary"
          onClick={() => router.push("/dashboard/pricing/add")}
          className=" font-semibold flex border-1 border-gray-600 rounded-[6px]  p-2"
        >
          {language ? "اضافة باقة جديدة" : "Create New Plan"}
          <PlusIcon />
        </button>
      </div>
      <div className="gap-10 flex flex-wrap justify-between">
        {pricesPlans?.getPayment.map((plan, index) => (
          <PlanPricingCard key={index} data={plan} />
        ))}
      </div>
    </div>
  );
};

export default PlansPricing;
