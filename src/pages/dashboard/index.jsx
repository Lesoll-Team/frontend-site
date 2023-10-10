import React, { useEffect } from "react";
import DashboardAdmin from "../../components/dashboard/DashboardAdmin";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";

function Dashboard() {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const router = useRouter();

  // Check if userInfo is not null and userInfo.isAdmin is true
  useEffect(() => {
    if (userInfo && userInfo.isAdmin === false) {
      // Redirect to the 404 page if userInfo.isAdmin is not true or userInfo is null
      router.push("/404"); // Assuming '/404' is the path to your 404 page
    }
  }, [userInfo]);
  const language = useSelector((state) => state.GlobalState.languageIs);

  // Render DashboardAdmin only if userInfo is not null and userInfo.isAdmin is true
  return userInfo && userInfo.isAdmin ? (
    <div className="min-h-[90dvh]" dir="ltr">
      <Head>
        <title>{language ? "لوحة القيادة" : "Dashboard"}</title>
      </Head>
      <DashboardAdmin />
    </div>
  ) : (
    <div className="w-full items-center min-h-[90dvh]  flex justify-center text-center">
      Loading...
    </div>
  );
}

export default Dashboard;

// import React, { useEffect, useState } from 'react'
// import DashboardAdmin from "../../components/dashboard/DashboardAdmin"
// import { useSelector } from "react-redux";
// import { useRouter } from "next/router";
// function dashboard() {
//   const userInfo = useSelector((state) => state.GlobalState.userData);
//   const router = useRouter();

//   useEffect(() => {
//     if (!userInfo.isAdmin) {
//       // Redirect to the 404 page if userInfo.isAdmin is not true
//       router.push('/404'); // Assuming '/404' is the path to your 404 page
//     }
//   }, [userInfo.isAdmin]);
//   return (
//     <div>
//     <DashboardAdmin />
//     </div>
//   )
// }

// export default dashboard
