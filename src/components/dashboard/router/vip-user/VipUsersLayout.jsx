import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import HeaderUserData from "./HeaderUserData";
import UsersPackageAvailable from "./UsersPackageAvailable";
import UserPackageExpire from "./UserPackageExpire";
import UserPaidProperties from "./UserPaidProperties";
import UserFreeProperties from "./UserFreeProperties";

const VipUserLayout = ({ userData }) => {
  return (
    <div dir="ltr" className="w-full  flex">
      <div className="bg-white  sticky top-0">
        <Sidebar />
      </div>
      <div className="md:container md:mx-auto mx-[1vw] md:my-14 my-2 w-full flex flex-col space-y-10 ">
        <HeaderUserData userData={userData?.userData} />
        <UsersPackageAvailable
          //TablePackageUser
          packageAvailable={userData?.allUsersPackageContinuous}
        />
        <UserPackageExpire
          //TablePackageUser
          packageExpire={userData?.allUsersPackageEnd}
        />
        <UserPaidProperties
          //TablePropertiesUser
          paidProperties={userData?.paidProperties}
        />

        {/* freeProperties */}
        <UserFreeProperties
          //TablePropertiesUser
          freeProperties={userData?.freeProperties}
        />
      </div>
    </div>
  );
};
export default VipUserLayout;
