import OtherOptionPrice from "@/components/pricing/OtherOptionPrice";
import PriceFilter from "@/components/pricing/PriceFilter";
import PriceHeader from "@/components/pricing/PriceHeader";
import PricePageBody from "@/components/pricing/PricePageBody";
import { getPlanPayments } from "@/utils/PricingAPI";
import React from "react";

const Prices = ({ payments }) => {
   console.log(payments);
   return (
      <div className="min-h-screen">
         <PriceHeader />
         <PriceFilter />
         <PricePageBody payments={payments.getPayment} />
         <OtherOptionPrice />
      </div>
   );
};

export default Prices;
export async function getServerSideProps() {
   const response = await getPlanPayments();
   return {
      props: {
         payments: response,
      },
   };
}
