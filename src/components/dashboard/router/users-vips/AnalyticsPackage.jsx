import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { MdOutlineTimerOff } from "react-icons/md";

export const AnalyticsPackage = ({ dataAnalytics }) => {
  return (
    <div className="md:container md:mx-auto mx-[1vw] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-3 ">
        <StatCard title="Total Users" value={dataAnalytics?.totalUsers} />
        <StatCard
          title="Total Packages Available"
          value={dataAnalytics?.totalPackageAvailable}
        />
        <StatCard
          title="Total End Packages"
          value={dataAnalytics?.totalEndPackages}
        />
      </div>
    </div>
  );
};

export function StatCard({ title, value }) {
  const iconMap = {
    "Total Packages Available": (
      <FaBoxOpen className="text-2xl md:text-4xl text-blue-500" />
    ),
    "Total End Packages": (
      <MdOutlineTimerOff className="text-2xl md:text-4xl text-red-500" />
    ),
    "Total Users": <FaUsers className="text-2xl md:text-4xl text-green-500" />,
    "Available Bundle": (
      <LuPackageCheck className="text-2xl md:text-4xl text-blue-500" />
    ),
    "Expire Bundle": (
      <MdOutlineTimerOff className="text-2xl md:text-4xl text-red-500" />
    ),
    "Price Bundle": (
      <FaMoneyBillTransfer className="text-2xl md:text-4xl rotate-90 text-green-500" />
    ),
  };
  return (
    <div className="flex items-center bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg rounded-lg  w-full  transform hover:scale-105 transition-transform duration-300">
      <div className="p-2 md:p-4">{iconMap[title]}</div>
      <div className="ml-2 md:ml-4">
        <b className="text-lg font-semibold text-gray-700">{title}</b>
        <p className="mt-1 md:mt-2 text-xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}