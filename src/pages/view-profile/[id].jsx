import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import { ViewUser } from "@/utils/userAPI";
import { DotPulse } from "@uiball/loaders";
import ViewProfile from "@/components/viewProfile/ViewProfile";
import axios from "axios";
import ViewUser from "@/components/viewProfile/ViewUser";

const ViewProfilePage = ({ query, user, properties }) => {
  console.log(query);
  console.log(user);
  console.log(properties);

  // const [userData, setUserData] = useState();
  // const [propertiesData, setPropertiesData] = useState();
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPage] = useState();
  // const [totalProperties, setTotalProperties] = useState(0);
  // const [propertiesNums, setPropertiesNums] = useState({});
  // const router = useRouter();
  // const slug = router.query.id;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (slug) {
  //       const data = await ViewUser(slug, page);

  //       setUserData(data.getUser);

  //       setPropertiesNums({
  //         forRent: data.RealtyRentNumber,
  //         forSale: data.RealtySaleNumber,
  //         forInvest: data.RealtyInvestmentNumber,
  //       });
  //     }
  //   };
  //   fetchData();
  // }, [slug, page]);
  // const handlePageChange = (selectedPage) => {
  //   setPage(selectedPage + 1);
  // };

  return (
    <div className="min-h-[90dvh] ">
      <ViewUser user={user} params={query} properties={properties} />
    </div>
  );
};

export default ViewProfilePage;
export async function getServerSideProps({ query, res }) {
  const param = query;

  try {
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/uservisit/${query.id}`
    );
    // const user = res.data.find;
    const properties = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/uservisit-property/${
        query.id
      }?limit=10&page=${query?.page || 1}&of=${query?.type || "000"}`
    );
    return {
      props: { query: param, user: user.data, properties: properties.data },
      // revalidate: 10,
    };
  } catch (error) {
    if (error.response && error.response.status === 500) {
      res.writeHead(410);
      res.end();
    }
    // If the error is not a 400 status code, re-throw the error
    throw error;
  }
}
