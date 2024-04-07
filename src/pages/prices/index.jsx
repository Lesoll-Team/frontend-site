import OtherOptionPrice from "@/components/pricing/OtherOptionPrice";
import PriceFilter from "@/components/pricing/PriceFilter";
import PriceHeader from "@/components/pricing/PriceHeader";
import PricePageBody from "@/components/pricing/PricePageBody";
import React from "react";

const Prices = ({ payments }) => {
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
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/payment/get-payment`
  );
  const payments = await response.json();

  return {
    props: {
      payments,
    },
  };
}
