import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import TableVipUser from "@/Shared/Table/TableVipUser";
import { getUsersVIP } from "@/utils/dashboardApi/paymentDetailsAPI";
import { useEffect, useState } from "react";
import AnalyticsPackage from "./AnalyticsPackage";

const VipsUsersLayout = () => {
  const [usersVIPData, setUsersVIPData] = useState();
  useEffect(() => {
    const fetchUsersVIP = async () => {
      try {
        const resData = await getUsersVIP();
        setUsersVIPData(resData);
      } catch (error) {
        console.error("Error fetching VIP users data:", error);
      }
    };

    fetchUsersVIP();
  }, []);
  const cols = [
    { name: "Name", uid: "userFullname" },
    { name: "Phone", uid: "userPhoneNumber" },
    { name: "Total Package", uid: "totalItems" },
    { name: "Expire Package", uid: "expireDate" },
  ];
  // console.log("usersVIPData:>>", usersVIPData);
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-white  sticky top-0">
        <Sidebar />
      </div>
      <div className="md:container md:mx-auto mx-[1vw] md:my-14 my-2 w-full felx flex-col space-y-10 ">
        <AnalyticsPackage
          dataAnalytics={{
            totalPackageAvailable: usersVIPData?.totalContinuousPackages,
            totalEndPackages: usersVIPData?.totalEndPackages,
            totalUsers: usersVIPData?.totalUsers,
          }}
        />
        <TableVipUser data={usersVIPData?.users} cols={cols} />
      </div>
    </div>
  );
};
export default VipsUsersLayout;
