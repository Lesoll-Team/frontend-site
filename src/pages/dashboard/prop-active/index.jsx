import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import ActiveProperty from "@/components/dashboard/router/ActiveProperty";
import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
function PropActive() {
  const userInfo = useSelector((state) => state.userProfile.userData);
  const router = useRouter();
  useEffect(() => {
    if (userInfo && userInfo.isAdmin === false && userInfo.supAdmin === false) {
      router.push("/404");
    }
  }, [userInfo]);
  return userInfo && (userInfo.isAdmin || userInfo.supAdmin) ? (
    <div className="min-h-[90dvh]  flex" dir="ltr">
      <div className="bg-lightGreenHover  sticky top-0">
        <Sidebar />
      </div>
      <div className="overflow-x-auto w-full overflow-y-hidden">
        <ActiveProperty />
      </div>
    </div>
  ) : (
    <div className="w-full items-center min-h-[90dvh]  flex justify-center text-center">
      Loading...
    </div>
  );
}

export default PropActive;
