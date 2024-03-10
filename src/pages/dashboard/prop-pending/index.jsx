import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import PropertyDashboard from "@/components/dashboard/router/PropertyDashboard";
import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import Head from "next/head";
function PropPending() {
  const userInfo = useSelector((state) => state.userProfile.userData);
  const router = useRouter();
  useEffect(() => {
    if (userInfo && userInfo.isAdmin === false && userInfo.supAdmin === false) {
      router.push("/404");
    }
  }, [userInfo]);
  return userInfo && (userInfo.isAdmin || userInfo.supAdmin) ? (
    <div className="min-h-[90dvh] flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="bg-gray-100 shadow-md shadow-gray-500  sticky top-0">
        <Sidebar />
      </div>
      <div className="col-span-5 overflow-x-auto">
        <PropertyDashboard />
      </div>
    </div>
  ) : (
    <div className="w-full items-center min-h-[90dvh]  flex justify-center text-center">
      Loading...
    </div>
  );
}

export default PropPending;
