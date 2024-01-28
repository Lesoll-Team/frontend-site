import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import BlogDashboard from "@/components/dashboard/router/BlogDashboard";
import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import Head from "next/head";
function Blog() {
  const userInfo = useSelector((state) => state.GlobalState.userData);
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
      <div className=" bg-lightGreenHover sticky top-0 ">
        <Sidebar />
      </div>
      <div className="w-full m-10 overflow-x-auto overflow-y-hidden">
        <BlogDashboard />
      </div>
    </div>
  ) : (
    <div className="w-full items-center min-h-[90dvh]  flex justify-center text-center">
      Loading...
    </div>
  );
}

export default Blog;