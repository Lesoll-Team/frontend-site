import OtherOptionPrice from "@/components/pricing/OtherOptionPrice";
import PriceFilter from "@/components/pricing/PriceFilter";
import PriceHeader from "@/components/pricing/PriceHeader";
import PricePageBody from "@/components/pricing/PricePageBody";
import React from "react";

const Prices = () => {
  return (
    <div className="min-h-screen">
      <PriceHeader />
      <div className=" md:container md:mx-auto mx-[20px] ">
        <PriceFilter />
        <PricePageBody />
      <OtherOptionPrice />
      </div>
    </div>
  );
};
export default Prices;
