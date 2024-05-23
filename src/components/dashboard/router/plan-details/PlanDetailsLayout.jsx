import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import PlanDataAndAnalytics from "./PlanDataAndAnalytics";
import PlanUsersTable from "./PlanUsersTable";

const PlanDetailsLayout = ({ planDetails }) => {
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-white  sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full from-slate-300 bg-gradient-to-b to-white">
        <PlanDataAndAnalytics
          allDataPlan={planDetails}
          planDetails={planDetails?.packageData}
        />
        <PlanUsersTable planDetails={planDetails} />
      </div>
    </div>
  );
};
export default PlanDetailsLayout;
