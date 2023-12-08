import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import UserDetails from "@/components/dashboard/router/userDetails/UserDetails";
import { getUserDataDashboard } from "@/utils/userAPI";
import { DotPulse } from "@uiball/loaders";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserDetailsPage = () => {
  const [userData, setUserData] = useState();
  const [favNum, setFavNum] = useState();
  const [deletedNum, setDeletedNum] = useState();
  const [invstNum, setInvestNum] = useState();
  const [rentNum, setRentNum] = useState();
  const [saleNum, setSaletNum] = useState();
  const [totalPropNum, setTotalPropNum] = useState();
  const [visitedPages, setVisitedPages] = useState();
  const router = useRouter();
  const slug = router.query.id;
  console.log(slug);
  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        const data = await getUserDataDashboard(slug);
        console.log(data);
        setUserData(data.getData);

        setVisitedPages(data.linksUserVisit);
        setFavNum(data.numberOfPropertyDeleted);
        setDeletedNum(data.numberOfFavorites);
        setInvestNum(data.numberOfPropertyInvu);
        setRentNum(data.numberOfPropertyRent);
        setSaletNum(data.numberOfPropertySale);
        setTotalPropNum(data.numberOfTotalProperty);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <div className="min-h-[90dvh] w-full flex" dir="ltr">
      <div className=" bg-lightGreenHover sticky top-0 ">
        <Sidebar />
      </div>
      <div className="w-full" dir="rtl">
        {userData ? (
          <UserDetails
            userData={userData}
            favNum={favNum}
            deletedNum={deletedNum}
            invstNum={invstNum}
            rentNum={rentNum}
            saleNum={saleNum}
            totalPropNum={totalPropNum}
            visitedPages={visitedPages}
          />
        ) : (
          <div className="h-[90vh] flex items-center justify-center">
            <DotPulse size={60} speed={1.3} color="#309da0" />
          </div>
        )}
      </div>
    </div>
  );
};
export default UserDetailsPage;
