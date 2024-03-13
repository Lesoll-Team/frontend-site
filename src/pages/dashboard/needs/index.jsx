import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import AllNeeds from "@/components/dashboard/router/needs/components/AllNeeds";
import { getPendingNeeds } from "@/components/dashboard/router/needs/redux/pendingNeedsSlice";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userProfile.userData);
  const router = useRouter();
  useEffect(() => {
    if (userInfo && userInfo.isAdmin === false && userInfo.supAdmin === false) {
      router.push("/404");
    }
  }, [userInfo]);
  useEffect(() => {
    dispatch(getPendingNeeds());
  }, []);
  return userInfo && (userInfo.isAdmin || userInfo.supAdmin) ? (
    <div className="min-h-[90dvh]  flex" dir="ltr">
      <Head>
        <title>Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="bg-gray-100 shadow-md shadow-gray-500  sticky top-0">
        <Sidebar />
      </div>
      <div
        dir={language ? "rtl" : "ltr"}
        className="overflow-x-auto w-full overflow-y-hidden"
      >
        <AllNeeds />
      </div>
    </div>
  ) : (
    <div className="w-full items-center min-h-[90dvh]  flex justify-center text-center">
      Loading...
    </div>
  );
};
export default index;
