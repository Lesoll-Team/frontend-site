import React, { useEffect, useState } from "react";
import PlanPricingCard from "../../model/cards/PlanPricingCard";
import { PlusIcon } from "../../icon/PlusIcon";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
// import { getServicePrice } from "@/redux-store/features/PricingSlice";
import { getPlanPaymentsAdmin } from "@/utils/PricingAPI";

const PlansPricing = () => {
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);
  // const dispatch = useDispatch();
  const [payments, setPayments] = useState([]);
  const isUpdated = useSelector((state) => state.Pricing.isUpdated);
  useEffect(() => {
    const fetchData = async () => {
      // dispatch(getServicePrice());
      const response = await getPlanPaymentsAdmin();
      setPayments(response.getPayment);
    };
    fetchData();
  }, [isUpdated]);
  return (
    <div
      dir={language ? "rtl" : "ltr"}
      className=" min-h-screen my-20 md:container md:mx-auto mx-[20px] flex flex-col gap-y-10"
    >
      <div className=" flex ">
        <button
          onClick={() => router.push("/dashboard/pricing/add")}
          className=" font-semibold flex border-1 border-gray-600 rounded-[6px]  p-2"
        >
          {language ? "اضافة باقة جديدة" : "Create New Plan"}
          <PlusIcon />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center  justify-center md:container md:mx-auto mx-[10px] ">
        {payments?.map((plan, index) => (
          <PlanPricingCard key={index} data={plan} />
        ))}
      </div>
    </div>
  );
};

export default PlansPricing;
