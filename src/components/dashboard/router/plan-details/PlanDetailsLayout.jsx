import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import PlanDetailsFilters from "./PlanDetailsFilters";
import PlanAnalytics from "./PlanAnalytics";
import PlanUsersTable from "./PlanUsersTable";

const PlanDetailsLayout = ({ planDetails }) => {
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-white  sticky top-0">
        <Sidebar />
      </div>
      <div>
        <h1>Plan id: {JSON.stringify(planDetails)}</h1>
        <PlanDetailsFilters planDetails={planDetails} />
        <PlanAnalytics planDetails={planDetails} />
        <PlanUsersTable planDetails={planDetails} />
      </div>
    </div>
  );
};
export default PlanDetailsLayout;
