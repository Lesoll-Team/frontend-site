import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ViewUser } from "@/utils/userAPI";
import { DotPulse } from "@uiball/loaders";
import ViewProfile from "@/components/viewProfile/ViewProfile";
import { data } from "autoprefixer";

const ViewProfilePage = () => {
  const [userData, setUserData] = useState();
  const [propertiesData, setPropertiesData] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState();
  const [totalProperties, setTotalProperties] = useState(0);
  const [propertiesNums, setPropertiesNums] = useState({});
  const router = useRouter();
  const slug = router.query.id;

  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        const data = await ViewUser(slug, page);

        console.log(data);
        setUserData(data.getUser);
        setPropertiesData(data.getConfirmedRealty);
        setTotalProperties(data.resultConfirmed);
        setTotalPage(data.totalPages);
        setPropertiesNums({
          forRent: data.RealtyRentNumber,
          forSale: data.RealtySaleNumber,
          forInvest: data.RealtyInvestmentNumber,
        });
      }
    };
    fetchData();

    // If you need a cleanup function, return it here
    // Example: return () => cleanupLogic();
  }, [slug, page]);
  const handlePageChange = (selectedPage) => {
    setPage(selectedPage + 1);
  };

  return (
    <div className="min-h-[90dvh] bg-gray-100 py-5">
      {userData ? (
        <ViewProfile
          propertiesNums={propertiesNums}
          setPage={handlePageChange}
          totalPages={totalPages}
          userData={userData}
          propertiesData={propertiesData}
          totalProperties={totalProperties}
        />
      ) : (
        <div className="h-[90vh] flex items-center justify-center">
          <DotPulse size={60} speed={1.3} color="#309da0" />
        </div>
      )}
    </div>
  );
};

export default ViewProfilePage;
