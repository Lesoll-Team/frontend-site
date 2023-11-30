import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import UserDetails from "@/components/dashboard/router/userDetails/UserDetails";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const UserDetailsPage = () => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const router = useRouter();
  //   useEffect(() => {
  //     if (!userInfo || (!userInfo.isAdmin && !userInfo.supAdmin)) {
  //       router.push("/404");
  //     }
  //   }, [userInfo, router]);
  console.log(userInfo);
  return (
    <div className="min-h-[90dvh] flex" dir="ltr">
      <div className=" bg-lightGreenHover sticky top-0 ">
        <Sidebar />
      </div>
      <div>
        <UserDetails />
      </div>
    </div>
  );
};
export default UserDetailsPage;
