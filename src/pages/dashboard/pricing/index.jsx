import Sidebar from '@/Shared/SidebarDashboard/Sidebar';
import PlansPricing from '@/components/dashboard/router/PlansPricing';
import React from 'react'

const Pricing = () => {
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-lightGreenHover  sticky top-0">
        <Sidebar />
      </div>
      <div>
        <PlansPricing />
      </div>
    </div>
  );
}

export default Pricing;
