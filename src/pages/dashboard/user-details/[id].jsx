import Sidebar from "@/Shared/SidebarDashboard/Sidebar";
import UserDetails from "@/components/dashboard/router/userDetails/UserDetails";
import { getUserDataDashboard } from "@/utils/userAPI";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserDetailsPage = () => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const [userData, setUserData] = useState({});
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
  console.log(userData);
  return (
    <div className="min-h-[90dvh] w-full flex" dir="ltr">
      <div className=" bg-lightGreenHover sticky top-0 ">
        <Sidebar />
      </div>
      <div className="w-full" dir="rtl">
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
      </div>
    </div>
  );
};
export default UserDetailsPage;
