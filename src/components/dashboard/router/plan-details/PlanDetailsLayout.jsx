import Sidebar from "@/Shared/SidebarDashboard/Sidebar";

const PlanDetailsLayout = ({ planDetails }) => {
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-white  sticky top-0">
        <Sidebar />
      </div>
      <div>
        <h1>Plan id: {JSON.stringify(planDetails)}</h1>
      </div>
    </div>
  );
};
export default PlanDetailsLayout;
