import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import TableVipUser from "@/Shared/Table/TableVipUser";
import { getStatusOperation } from "@/utils/dashboardApi/paymentDetailsAPI";
import { useEffect, useState } from "react";
import { AnalyticsPackage } from "./AnalyticsPackage";
import SearchBar from "./SearchBarVIPUsers";

const VipsUsersLayout = () => {
  const [successOperation, setSuccessOperation] = useState(null);
  const [filterSuccessOptions, setFilterSuccessOptions] = useState("all");
  const [searchByKeywords, setSearchByKeywords] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [clickChange, setClickChange] = useState(false);

  useEffect(() => {
    const fetchSuccessOperation = async () => {
      const formatDate = (inputDateString) => {
        const parsedDate = new Date(inputDateString);
        const year = parsedDate.getFullYear();
        const month = String(parsedDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1 and pad with '0' if needed
        const day = String(parsedDate.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
      };
      try {
        const successData = await getStatusOperation({
          status: filterSuccessOptions,
          keyword: searchByKeywords,
          startDate: startDate && formatDate(startDate),
          endDate: endDate && formatDate(endDate),
        });
        setSuccessOperation(successData);
      } catch (error) {
        throw new Error(error.message);
      }
    };
    fetchSuccessOperation();
  }, [filterSuccessOptions, searchByKeywords, clickChange]);

  const statusCall = [
    { name: "Name", uid: "userFullname" },
    { name: "Phone", uid: "userPhoneNumber" },
    { name: "Created", uid: "createdAt" },
    { name: "Expire Package", uid: "expireDate" },
    { name: "Status", uid: "success", sort: ["All", "Paid", "Failed"] },
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
            totalPackageAvailable: successOperation?.totalContinuousPackages,
            totalEndPackages: successOperation?.totalEndPackages,
            totalUsers: successOperation?.totalUsers,
            totalRevenue: successOperation?.totalRevenue,
            totalReq: successOperation?.users.length,
          }}
        />
        <SearchBar
          setSearchByKeywords={setSearchByKeywords}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          startDate={startDate}
          endDate={endDate}
          setClickChange={setClickChange}
          clickChange={clickChange}
        />
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
