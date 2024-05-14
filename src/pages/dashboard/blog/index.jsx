import React, { useEffect } from "react";
import { useRouter } from "next/router";
import BlogDashboard from "@/components/dashboard/router/BlogDashboard";
import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import Head from "next/head";
import { useUser } from "@/Shared/UserContext";
function Blog() {
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
      <div className=" sticky top-0">
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
