import ViewUser from "@/components/viewProfile/ViewUser";
// import axiosInstance from "@/Shared/axiosInterceptorInstance";
import axios from "axios";
import Head from "next/head";

const ViewProfilePage = ({ query, user, properties }) => {
  return (
    <div className="min-h-[90dvh] ">
      <Head>
        <title>{user?.getUser?.fullname}</title>
        <meta name="description" content={user?.getUser?.fullname} />
        <link
          rel="canonical"
          href={`/view-profile/${user?.getUser?.fullname}`}
        />
      </Head>
      <ViewUser user={user} params={query} properties={properties} />
    </div>
  );
};

export default ViewProfilePage;
export async function getServerSideProps({ query }) {
  const param = query;
  let userdata;
  const user = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/uservisit/${query.id}`,
  );
  userdata = user.data;
  const properties = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/uservisit-property/${
        query.id
      }?limit=10&page=${query?.page || 1}&of=${query?.type || "000"}`,
    )
    .catch(() => console.log("Error"));
  return {
    props: {
      query: param,
      user: user.data,
      properties: properties?.data || {},
    },
  };
}
