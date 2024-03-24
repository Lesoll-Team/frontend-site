import Sidebar from "@/Shared/SidebarDashboard/Sidebar";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useSelector } from "react-redux";

const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const userInfo = useSelector((state) => state.userProfile.userData);
  const router = useRouter();
  useEffect(() => {
    if (userInfo && userInfo.isAdmin === false && userInfo.supAdmin === false) {
      router.push("/404");
    }
  }, [userInfo]);
  return userInfo && (userInfo.isAdmin || userInfo.supAdmin) ? (
    <div className="min-h-[90dvh]  flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="  sticky top-0">
        <Sidebar />
      </div>
      <div
        dir={language ? "rtl" : "ltr"}
        className="overflow-x-auto w-full overflow-y-hidden"
      >
        <div className="flex items-center px-5 justify-center flex-wrap gap-5 mt-5 md:mt-0 md:min-h-[90dvh]">
          <Link
            href={"/dashboard/projects/add-project"}
            className="flex flex-col gap-4 md:gap-6 py-8 px-5 min-w-[200px] min-h-[230px] md:min-h-[300px] border rounded-lg bg-white drop-shadow-lg items-center justify-center w-full max-w-[400px]"
          >
            <MdOutlineAddCircleOutline className="md:text-7xl text-5xl" />

            <span className="bg-white text-2xl md:text-3xl">
              {language ? "أضف مشروع" : "Add Project"}
            </span>
          </Link>
          <Link
            href={"/dashboard/projects/all-projects"}
            className="flex flex-col gap-4 md:gap-6 py-8 px-5 min-w-[200px] min-h-[230px] md:min-h-[300px] border rounded-lg bg-white drop-shadow-lg items-center justify-center w-full max-w-[400px]"
          >
            <FaRegBuilding className="md:text-7xl text-5xl" />

            <span className="bg-white text-2xl md:text-3xl">
              {language ? " المشاريع" : "Projects"}
            </span>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full items-center min-h-[90dvh]  flex justify-center text-center">
      Loading...
    </div>
  );
};
export default index;
