import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import PlansPricing from "@/components/dashboard/router/price/PlansPricing";
import React from "react";

const Pricing = () => {
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-white  sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full ">
        <PlansPricing />
      </div>
    </div>
  );
};

export default Pricing;
