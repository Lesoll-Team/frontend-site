import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import UserDashboard from "@/components/dashboard/router/UserDashboardt";
import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import Head from "next/head";
import { useUser } from "@/Shared/UserContext";
function Users() {
  const { data } = useUser();

  const router = useRouter();
  useEffect(() => {
    if (data && data.isAdmin === false && data.supAdmin === false) {
      router.push("/404");
    }
  }, [data]);
  return data && (data.isAdmin || data.supAdmin) ? (
    <div className="min-h-[90dvh] flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="  sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full">
        <UserDashboard />
      </div>
    </div>
  ) : (
    <div className="w-full items-center min-h-[90dvh]  flex justify-center text-center">
      Loading...
    </div>
  );
}

export default Users;
