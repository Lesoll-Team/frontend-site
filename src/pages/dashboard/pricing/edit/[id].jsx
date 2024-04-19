import EditPlansPricing from "@/components/dashboard/router/price/EditPlansPricing";
import { getSinglePlanPrice } from "@/utils/PricingAPI";
import React from "react";

const Edit = ({ paymentPlan }) => {
  return (
    <div>
      <EditPlansPricing paymentPlan={paymentPlan.getSingle} />
    </div>
  );
};

export default Edit;
export async function getServerSideProps({ params }) {
  const id = params.id;

  const response = await getSinglePlanPrice({ id });
  return {
    props: {
      paymentPlan: response,
    },
  };
}
