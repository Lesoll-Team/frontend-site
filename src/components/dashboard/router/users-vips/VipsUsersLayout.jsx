import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import TableVipUser from "@/Shared/Table/TableVipUser";
import {
  getStatusOperation,
  getUsersVIP,
} from "@/utils/dashboardApi/paymentDetailsAPI";
import { useEffect, useState } from "react";
import { AnalyticsPackage } from "./AnalyticsPackage";
import SearchBar from "./SearchBarVIPUsers";

const VipsUsersLayout = () => {
  const [usersVIPData, setUsersVIPData] = useState(null);
  const [successOperation, setSuccessOperation] = useState(null);
  const [filterSuccessOptions, setFilterSuccessOptions] = useState("all");
  const [searchByKeywords, setSearchByKeywords] = useState("");

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
  useEffect(() => {
    const fetchSuccessOperation = async () => {
      try {
        const successData = await getStatusOperation({
          status: filterSuccessOptions,
          keyword: searchByKeywords,
        });
        setSuccessOperation(successData);
      } catch (error) {
        console.error("Error fetching VIP users data:", error);
      }
    };
    fetchSuccessOperation();
  }, [filterSuccessOptions, searchByKeywords]);


  const statusCall = [
    { name: "Name", uid: "userFullname" },
    { name: "Phone", uid: "userPhoneNumber" },
    { name: "Created", uid: "createdAt" },
    { name: "Expire Package", uid: "expireDate" },
    { name: "Status", uid: "success", sort: ["All", "Success", "Field"] },
    { name: "Order ID", uid: "order_id" },
  ];
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-white  sticky top-0">
        <Sidebar />
      </div>
      <div className="md:container md:mx-auto mx-[1vw] md:my-14 my-2 w-full flex flex-col space-y-10 ">
        <AnalyticsPackage
          dataAnalytics={{
            totalPackageAvailable: usersVIPData?.totalContinuousPackages,
            totalEndPackages: usersVIPData?.totalEndPackages,
            totalUsers: usersVIPData?.totalUsers,
          }}
        />
        <SearchBar setSearchByKeywords={setSearchByKeywords} />
        <TableVipUser
          data={successOperation?.users}
          cols={statusCall}
          setFilterSuccessOptions={setFilterSuccessOptions}
          filterSuccessOptions={filterSuccessOptions}
        />
      </div>
    </div>
  );
};
export default VipsUsersLayout;
// getSuccessOperation()
// getFailedOperation();
// const cols = [
//   { name: "Name", uid: "userFullname" },
//   { name: "Phone", uid: "userPhoneNumber" },
//   { name: "Total Package", uid: "totalItems" },
//   { name: "Expire Package", uid: "expireDate" },
//   { name: "Order ID", uid: "order_id" },
//   //order_id
// ];
